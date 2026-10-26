import express from 'express';
import http from 'node:http';
import crypto from 'node:crypto';
import { Server } from 'socket.io';
import { SPREADS, DECK, interpret, report } from './tarot.js';

const app=express();app.use(express.static('public'));app.get('/health',(_q,r)=>r.json({ok:true}));
const server=http.createServer(app);const io=new Server(server,{cors:{origin:false}});
const rooms=new Map();const MAX=8;const ttl=1000*60*60*6;
const uid=()=>crypto.randomUUID();
const clean=s=>String(s||'').trim().slice(0,32).replace(/[<>]/g,'');
const code=()=>{let x;do{x=crypto.randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(x));return x};
function safe(room,viewer){const me=room.players.find(p=>p.id===viewer);return {code:room.code,host:room.host,stage:room.stage,spread:room.spread,round:room.round,players:room.players.map(p=>({id:p.id,name:p.name,online:p.online})),draws:room.draws.map(d=>({id:d.id,owner:d.owner,subject:d.subject,question:d.question,card:d.card,meaning:d.meaning,rater:d.rater,rating:d.rating?.visibility==='public'||d.rater===viewer?d.rating?.value:null,rated:!!d.rating,visibility:d.rating?.visibility||null})),results:room.stage==='finished'?report(room,viewer):null,canHost:room.host===viewer,token:me?.token};}
function broadcast(room){room.updated=Date.now();for(const p of room.players){if(p.socket)io.to(p.socket).emit('state',safe(room,p.id));}}
function fail(socket,message){socket.emit('notice',message)}
function roomFor(socket){const r=rooms.get(socket.data.code);return r?.players.some(p=>p.id===socket.data.id)?r:null}
function attach(socket,room,p){p.socket=socket.id;p.online=true;socket.data={code:room.code,id:p.id};socket.join(room.code);broadcast(room)}
function createDraw(room){const spread=SPREADS[room.spread],n=room.players.length,round=room.round;const draws=[];for(let i=0;i<n;i++){const p=room.players[i],next=room.players[(i+1)%n];const step=spread.steps[round];const rater=step.rater==='next'?next:p;const subject=step.rater==='next'?next:p;const card=DECK[crypto.randomInt(DECK.length)];draws.push({id:uid(),owner:p.id,subject:subject.id,question:step.question.replaceAll('{other}',next.name),card,meaning:interpret(card,step,p.name,next.name),rater:rater.id,rating:null});}room.draws.push(...draws);}
io.on('connection',socket=>{
 socket.on('create',({name,spread},ack)=>{name=clean(name);if(!name||!SPREADS[spread])return ack?.({error:'请输入名字并选择牌阵'});const id=uid(),token=uid(),r={code:code(),host:id,stage:'lobby',spread,round:-1,players:[{id,token,name,online:true,socket:socket.id}],draws:[],updated:Date.now()};rooms.set(r.code,r);socket.data={code:r.code,id};socket.join(r.code);ack?.({code:r.code,id,token});broadcast(r)});
 socket.on('join',({code:roomCode,name,token},ack)=>{const room=rooms.get(String(roomCode||'').toUpperCase());if(!room)return ack?.({error:'房间不存在或已过期'});let p=room.players.find(x=>x.token===token);if(!p){name=clean(name);if(!name)return ack?.({error:'请输入名字'});if(room.stage!=='lobby')return ack?.({error:'游戏已开始，仅原玩家可重新加入'});if(room.players.length>=MAX)return ack?.({error:'房间已满'});p={id:uid(),token:uid(),name,online:true,socket:null};room.players.push(p);}ack?.({code:room.code,id:p.id,token:p.token});attach(socket,room,p);});
 socket.on('start',(_,ack)=>{const r=roomFor(socket);if(!r||r.host!==socket.data.id)return ack?.({error:'只有房主可以开始'});if(r.players.length<2)return ack?.({error:'至少需要两名玩家'});if(r.stage!=='lobby')return; r.stage='playing';r.round=0;createDraw(r);broadcast(r);ack?.({ok:true})});
 socket.on('rate',({drawId,value,visibility},ack)=>{const r=roomFor(socket);if(!r||r.stage!=='playing')return;const d=r.draws.find(x=>x.id===drawId);if(!d||d.rater!==socket.data.id||d.rating)return ack?.({error:'无法评价这张牌'});if(!Number.isInteger(value)||value<1||value>5||!['public','private'].includes(visibility))return ack?.({error:'评分不合法'});d.rating={value,visibility};broadcast(r);ack?.({ok:true})});
 socket.on('next',(_,ack)=>{const r=roomFor(socket);if(!r||r.host!==socket.data.id||r.stage!=='playing')return;const current=r.draws.slice(r.round*r.players.length,(r.round+1)*r.players.length);if(current.length!==r.players.length||current.some(d=>!d.rating))return ack?.({error:'等待本轮全部评分'});if(r.round===2){r.stage='finished'}else{r.round++;createDraw(r)}broadcast(r);ack?.({ok:true})});
 socket.on('disconnect',()=>{const r=roomFor(socket);if(!r)return;const p=r.players.find(x=>x.id===socket.data.id);if(p?.socket===socket.id){p.online=false;p.socket=null;broadcast(r)}});
});
setInterval(()=>{for(const [c,r] of rooms)if(Date.now()-r.updated>ttl)rooms.delete(c)},60000).unref();
server.listen(process.env.PORT||3000,()=>console.log('Soul Resonance ready'));
