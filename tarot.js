import meanings from './tarot-meanings.json' with { type: 'json' };
export const SPREADS={
 mirrors:{title:'Through Your Eyes',subtitle:'Understanding each other',steps:[{question:'How does {other} see me?',rater:'next'},{question:'How do I see {other}?',rater:'self'},{question:'What do I want for my relationship with {other}?',rater:'self'}]},
 unsaid:{title:'What We Never Say',subtitle:'Honest conversations',steps:[{question:'What is really bothering me?',rater:'self'},{question:'What do I wish others understood about my feelings?',rater:'self'},{question:'What am I willing to try to repair this relationship?',rater:'self'}]},
 teamwork:{title:'Team Chemistry',subtitle:'Working better together',steps:[{question:'What role do I naturally take in the team?',rater:'self'},{question:'What support do I need from my teammates?',rater:'self'},{question:'What can I bring to this team?',rater:'self'}]},
 family:{title:'Family Ties',subtitle:'Care and connection',steps:[{question:'How do I usually feel around my family?',rater:'self'},{question:'What do I wish my family understood about me?',rater:'self'},{question:'What kind of home atmosphere do I want?',rater:'self'}]},
 friendship:{title:'Friendship Compass',subtitle:'Trust and appreciation',steps:[{question:'What might my friends value in me?',rater:'self'},{question:'What side of me do I want my friends to see?',rater:'self'},{question:'What memories do I want us to make?',rater:'self'}]},
 differences:{title:'Finding Common Ground',subtitle:'Working through differences',steps:[{question:'What matters most to me in this disagreement?',rater:'self'},{question:'What perspective might I be missing?',rater:'self'},{question:'What compromise could I accept?',rater:'self'}]},
};
export const SOLO_SPREADS={
 career:{title:'Career & Studies',subtitle:'Where you stand, what holds you back, and what to do next',steps:[
  {question:'Where am I in my career or studies right now?'},{question:'What strength can I rely on?'},{question:'What is my biggest obstacle?'},{question:'What opportunity deserves my attention?'},{question:'What practical next step should I take?'}]},
 choice:{title:'Two Paths',subtitle:'Compare two options without giving away your power to choose',steps:[
  {question:'What do I really need from this decision?'},{question:'What could I gain from Option A?'},{question:'What might Option A cost me?'},{question:'What could I gain from Option B?'},{question:'What might Option B cost me?'},{question:'What should guide my final choice?'}]},
 perception:{title:'How They May See Me',subtitle:'Reflect on a connection without claiming to read minds',steps:[
  {question:'What impression might I give this person?'},{question:'What could be misunderstood between us?'},{question:'What can I do to understand this connection better?'}]},
 yesno:{title:'Yes or No?',subtitle:'One card, one question, and a nuanced reflection',steps:[{question:'What does this card suggest I consider before deciding?'}]}
};
export const DECK=[
 {'id': 'M0', 'name': 'The Fool', 'cn': '愚者', 'meaning': 'You may be ready to try something new, even if you are nervous.', 'image': '/cards/M0.svg'},
 {'id': 'M1', 'name': 'The Magician', 'cn': '魔术师', 'meaning': 'You have more influence over this situation than you think.', 'image': '/cards/M1.svg'},
 {'id': 'M2', 'name': 'The High Priestess', 'cn': '女祭司', 'meaning': 'You might be keeping important feelings to yourself.', 'image': '/cards/M2.svg'},
 {'id': 'M3', 'name': 'The Empress', 'cn': '皇后', 'meaning': 'You may want more care, affection, or attention.', 'image': '/cards/M3.svg'},
 {'id': 'M4', 'name': 'The Emperor', 'cn': '皇帝', 'meaning': 'You may feel safer when expectations and boundaries are clear.', 'image': '/cards/M4.svg'},
 {'id': 'M5', 'name': 'The Hierophant', 'cn': '教皇', 'meaning': 'You might be following old rules that no longer fit you.', 'image': '/cards/M5.svg'},
 {'id': 'M6', 'name': 'The Lovers', 'cn': '恋人', 'meaning': 'You may be facing a choice between what you want and what others expect.', 'image': '/cards/M6.svg'},
 {'id': 'M7', 'name': 'The Chariot', 'cn': '战车', 'meaning': 'You want to move forward, but you may be pushing too hard.', 'image': '/cards/M7.svg'},
 {'id': 'M8', 'name': 'Strength', 'cn': '力量', 'meaning': 'You may need patience instead of trying to win an argument.', 'image': '/cards/M8.svg'},
 {'id': 'M9', 'name': 'The Hermit', 'cn': '隐者', 'meaning': 'You might need some space to understand what you really feel.', 'image': '/cards/M9.svg'},
 {'id': 'M10', 'name': 'Wheel of Fortune', 'cn': '命运之轮', 'meaning': 'Something in this relationship is changing, and you cannot control all of it.', 'image': '/cards/M10.svg'},
 {'id': 'M11', 'name': 'Justice', 'cn': '正义', 'meaning': 'You may want things to feel more fair and balanced.', 'image': '/cards/M11.svg'},
 {'id': 'M12', 'name': 'The Hanged Man', 'cn': '倒吊人', 'meaning': 'You may need to look at this from the other person’s point of view.', 'image': '/cards/M12.svg'},
 {'id': 'M13', 'name': 'Death', 'cn': '死神', 'meaning': 'You might be ready to leave an old pattern behind.', 'image': '/cards/M13.svg'},
 {'id': 'M14', 'name': 'Temperance', 'cn': '节制', 'meaning': 'You may need to find a middle ground instead of going to extremes.', 'image': '/cards/M14.svg'},
 {'id': 'M15', 'name': 'The Devil', 'cn': '恶魔', 'meaning': 'You may be holding on even when the relationship feels unhealthy or exhausting.', 'image': '/cards/M15.svg'},
 {'id': 'M16', 'name': 'The Tower', 'cn': '高塔', 'meaning': 'A sudden argument or realization may have shaken your trust.', 'image': '/cards/M16.svg'},
 {'id': 'M17', 'name': 'The Star', 'cn': '星星', 'meaning': 'You still have hope that things can get better.', 'image': '/cards/M17.svg'},
 {'id': 'M18', 'name': 'The Moon', 'cn': '月亮', 'meaning': 'You may be unsure what the other person really means.', 'image': '/cards/M18.svg'},
 {'id': 'M19', 'name': 'The Sun', 'cn': '太阳', 'meaning': 'You want more honesty, warmth, and simple good moments together.', 'image': '/cards/M19.svg'},
 {'id': 'M20', 'name': 'Judgement', 'cn': '审判', 'meaning': 'You may be ready to own your part and have an honest conversation.', 'image': '/cards/M20.svg'},
 {'id': 'M21', 'name': 'The World', 'cn': '世界', 'meaning': 'You may be reaching a point where things finally make more sense.', 'image': '/cards/M21.svg'},
 {'id': 'Wands0', 'name': 'Ace of Wands', 'cn': '权杖王牌', 'meaning': 'You want action and progress, but may be getting impatient. A fresh start is possible.', 'image': '/cards/Wands0.svg'},
 {'id': 'Wands1', 'name': 'Two of Wands', 'cn': '权杖二', 'meaning': 'You want action and progress, but may be getting impatient. Two needs or perspectives may be pulling you in different directions.', 'image': '/cards/Wands1.svg'},
 {'id': 'Wands2', 'name': 'Three of Wands', 'cn': '权杖三', 'meaning': 'You want action and progress, but may be getting impatient. Cooperation could make a real difference.', 'image': '/cards/Wands2.svg'},
 {'id': 'Wands3', 'name': 'Four of Wands', 'cn': '权杖四', 'meaning': 'You want action and progress, but may be getting impatient. You may be holding tightly to what feels safe.', 'image': '/cards/Wands3.svg'},
 {'id': 'Wands4', 'name': 'Five of Wands', 'cn': '权杖五', 'meaning': 'You want action and progress, but may be getting impatient. There may be tension you need to address.', 'image': '/cards/Wands4.svg'},
 {'id': 'Wands5', 'name': 'Six of Wands', 'cn': '权杖六', 'meaning': 'You want action and progress, but may be getting impatient. Notice whether effort is balanced.', 'image': '/cards/Wands5.svg'},
 {'id': 'Wands6', 'name': 'Seven of Wands', 'cn': '权杖七', 'meaning': 'You want action and progress, but may be getting impatient. You may need to stand up for what matters.', 'image': '/cards/Wands6.svg'},
 {'id': 'Wands7', 'name': 'Eight of Wands', 'cn': '权杖八', 'meaning': 'You want action and progress, but may be getting impatient. Things could move faster than expected.', 'image': '/cards/Wands7.svg'},
 {'id': 'Wands8', 'name': 'Nine of Wands', 'cn': '权杖九', 'meaning': 'You want action and progress, but may be getting impatient. You might be tired of carrying this alone.', 'image': '/cards/Wands8.svg'},
 {'id': 'Wands9', 'name': 'Ten of Wands', 'cn': '权杖十', 'meaning': 'You want action and progress, but may be getting impatient. A cycle may be reaching its limit.', 'image': '/cards/Wands9.svg'},
 {'id': 'Wands10', 'name': 'Page of Wands', 'cn': '权杖侍从', 'meaning': 'You want action and progress, but may be getting impatient. Try asking questions before assuming you know.', 'image': '/cards/Wands10.svg'},
 {'id': 'Wands11', 'name': 'Knight of Wands', 'cn': '权杖骑士', 'meaning': 'You want action and progress, but may be getting impatient. You may be tempted to act before thinking it through.', 'image': '/cards/Wands11.svg'},
 {'id': 'Wands12', 'name': 'Queen of Wands', 'cn': '权杖皇后', 'meaning': 'You want action and progress, but may be getting impatient. You may already know what kind of care is needed.', 'image': '/cards/Wands12.svg'},
 {'id': 'Wands13', 'name': 'King of Wands', 'cn': '权杖国王', 'meaning': 'You want action and progress, but may be getting impatient. You might need to lead by example.', 'image': '/cards/Wands13.svg'},
 {'id': 'Cups0', 'name': 'Ace of Cups', 'cn': '圣杯王牌', 'meaning': 'Your feelings matter, and you may want more emotional support. A fresh start is possible.', 'image': '/cards/Cups0.svg'},
 {'id': 'Cups1', 'name': 'Two of Cups', 'cn': '圣杯二', 'meaning': 'Your feelings matter, and you may want more emotional support. Two needs or perspectives may be pulling you in different directions.', 'image': '/cards/Cups1.svg'},
 {'id': 'Cups2', 'name': 'Three of Cups', 'cn': '圣杯三', 'meaning': 'Your feelings matter, and you may want more emotional support. Cooperation could make a real difference.', 'image': '/cards/Cups2.svg'},
 {'id': 'Cups3', 'name': 'Four of Cups', 'cn': '圣杯四', 'meaning': 'Your feelings matter, and you may want more emotional support. You may be holding tightly to what feels safe.', 'image': '/cards/Cups3.svg'},
 {'id': 'Cups4', 'name': 'Five of Cups', 'cn': '圣杯五', 'meaning': 'Your feelings matter, and you may want more emotional support. There may be tension you need to address.', 'image': '/cards/Cups4.svg'},
 {'id': 'Cups5', 'name': 'Six of Cups', 'cn': '圣杯六', 'meaning': 'Your feelings matter, and you may want more emotional support. Notice whether effort is balanced.', 'image': '/cards/Cups5.svg'},
 {'id': 'Cups6', 'name': 'Seven of Cups', 'cn': '圣杯七', 'meaning': 'Your feelings matter, and you may want more emotional support. You may need to stand up for what matters.', 'image': '/cards/Cups6.svg'},
 {'id': 'Cups7', 'name': 'Eight of Cups', 'cn': '圣杯八', 'meaning': 'Your feelings matter, and you may want more emotional support. Things could move faster than expected.', 'image': '/cards/Cups7.svg'},
 {'id': 'Cups8', 'name': 'Nine of Cups', 'cn': '圣杯九', 'meaning': 'Your feelings matter, and you may want more emotional support. You might be tired of carrying this alone.', 'image': '/cards/Cups8.svg'},
 {'id': 'Cups9', 'name': 'Ten of Cups', 'cn': '圣杯十', 'meaning': 'Your feelings matter, and you may want more emotional support. A cycle may be reaching its limit.', 'image': '/cards/Cups9.svg'},
 {'id': 'Cups10', 'name': 'Page of Cups', 'cn': '圣杯侍从', 'meaning': 'Your feelings matter, and you may want more emotional support. Try asking questions before assuming you know.', 'image': '/cards/Cups10.svg'},
 {'id': 'Cups11', 'name': 'Knight of Cups', 'cn': '圣杯骑士', 'meaning': 'Your feelings matter, and you may want more emotional support. You may be tempted to act before thinking it through.', 'image': '/cards/Cups11.svg'},
 {'id': 'Cups12', 'name': 'Queen of Cups', 'cn': '圣杯皇后', 'meaning': 'Your feelings matter, and you may want more emotional support. You may already know what kind of care is needed.', 'image': '/cards/Cups12.svg'},
 {'id': 'Cups13', 'name': 'King of Cups', 'cn': '圣杯国王', 'meaning': 'Your feelings matter, and you may want more emotional support. You might need to lead by example.', 'image': '/cards/Cups13.svg'},
 {'id': 'Swords0', 'name': 'Ace of Swords', 'cn': '宝剑王牌', 'meaning': 'A direct conversation or clearer boundary may be needed. A fresh start is possible.', 'image': '/cards/Swords0.svg'},
 {'id': 'Swords1', 'name': 'Two of Swords', 'cn': '宝剑二', 'meaning': 'A direct conversation or clearer boundary may be needed. Two needs or perspectives may be pulling you in different directions.', 'image': '/cards/Swords1.svg'},
 {'id': 'Swords2', 'name': 'Three of Swords', 'cn': '宝剑三', 'meaning': 'A direct conversation or clearer boundary may be needed. Cooperation could make a real difference.', 'image': '/cards/Swords2.svg'},
 {'id': 'Swords3', 'name': 'Four of Swords', 'cn': '宝剑四', 'meaning': 'A direct conversation or clearer boundary may be needed. You may be holding tightly to what feels safe.', 'image': '/cards/Swords3.svg'},
 {'id': 'Swords4', 'name': 'Five of Swords', 'cn': '宝剑五', 'meaning': 'A direct conversation or clearer boundary may be needed. There may be tension you need to address.', 'image': '/cards/Swords4.svg'},
 {'id': 'Swords5', 'name': 'Six of Swords', 'cn': '宝剑六', 'meaning': 'A direct conversation or clearer boundary may be needed. Notice whether effort is balanced.', 'image': '/cards/Swords5.svg'},
 {'id': 'Swords6', 'name': 'Seven of Swords', 'cn': '宝剑七', 'meaning': 'A direct conversation or clearer boundary may be needed. You may need to stand up for what matters.', 'image': '/cards/Swords6.svg'},
 {'id': 'Swords7', 'name': 'Eight of Swords', 'cn': '宝剑八', 'meaning': 'A direct conversation or clearer boundary may be needed. Things could move faster than expected.', 'image': '/cards/Swords7.svg'},
 {'id': 'Swords8', 'name': 'Nine of Swords', 'cn': '宝剑九', 'meaning': 'A direct conversation or clearer boundary may be needed. You might be tired of carrying this alone.', 'image': '/cards/Swords8.svg'},
 {'id': 'Swords9', 'name': 'Ten of Swords', 'cn': '宝剑十', 'meaning': 'A direct conversation or clearer boundary may be needed. A cycle may be reaching its limit.', 'image': '/cards/Swords9.svg'},
 {'id': 'Swords10', 'name': 'Page of Swords', 'cn': '宝剑侍从', 'meaning': 'A direct conversation or clearer boundary may be needed. Try asking questions before assuming you know.', 'image': '/cards/Swords10.svg'},
 {'id': 'Swords11', 'name': 'Knight of Swords', 'cn': '宝剑骑士', 'meaning': 'A direct conversation or clearer boundary may be needed. You may be tempted to act before thinking it through.', 'image': '/cards/Swords11.svg'},
 {'id': 'Swords12', 'name': 'Queen of Swords', 'cn': '宝剑皇后', 'meaning': 'A direct conversation or clearer boundary may be needed. You may already know what kind of care is needed.', 'image': '/cards/Swords12.svg'},
 {'id': 'Swords13', 'name': 'King of Swords', 'cn': '宝剑国王', 'meaning': 'A direct conversation or clearer boundary may be needed. You might need to lead by example.', 'image': '/cards/Swords13.svg'},
 {'id': 'Pentacles0', 'name': 'Ace of Pentacles', 'cn': '星币王牌', 'meaning': 'You may be looking for consistency and practical effort, not just promises. A fresh start is possible.', 'image': '/cards/Pentacles0.svg'},
 {'id': 'Pentacles1', 'name': 'Two of Pentacles', 'cn': '星币二', 'meaning': 'You may be looking for consistency and practical effort, not just promises. Two needs or perspectives may be pulling you in different directions.', 'image': '/cards/Pentacles1.svg'},
 {'id': 'Pentacles2', 'name': 'Three of Pentacles', 'cn': '星币三', 'meaning': 'You may be looking for consistency and practical effort, not just promises. Cooperation could make a real difference.', 'image': '/cards/Pentacles2.svg'},
 {'id': 'Pentacles3', 'name': 'Four of Pentacles', 'cn': '星币四', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You may be holding tightly to what feels safe.', 'image': '/cards/Pentacles3.svg'},
 {'id': 'Pentacles4', 'name': 'Five of Pentacles', 'cn': '星币五', 'meaning': 'You may be looking for consistency and practical effort, not just promises. There may be tension you need to address.', 'image': '/cards/Pentacles4.svg'},
 {'id': 'Pentacles5', 'name': 'Six of Pentacles', 'cn': '星币六', 'meaning': 'You may be looking for consistency and practical effort, not just promises. Notice whether effort is balanced.', 'image': '/cards/Pentacles5.svg'},
 {'id': 'Pentacles6', 'name': 'Seven of Pentacles', 'cn': '星币七', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You may need to stand up for what matters.', 'image': '/cards/Pentacles6.svg'},
 {'id': 'Pentacles7', 'name': 'Eight of Pentacles', 'cn': '星币八', 'meaning': 'You may be looking for consistency and practical effort, not just promises. Things could move faster than expected.', 'image': '/cards/Pentacles7.svg'},
 {'id': 'Pentacles8', 'name': 'Nine of Pentacles', 'cn': '星币九', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You might be tired of carrying this alone.', 'image': '/cards/Pentacles8.svg'},
 {'id': 'Pentacles9', 'name': 'Ten of Pentacles', 'cn': '星币十', 'meaning': 'You may be looking for consistency and practical effort, not just promises. A cycle may be reaching its limit.', 'image': '/cards/Pentacles9.svg'},
 {'id': 'Pentacles10', 'name': 'Page of Pentacles', 'cn': '星币侍从', 'meaning': 'You may be looking for consistency and practical effort, not just promises. Try asking questions before assuming you know.', 'image': '/cards/Pentacles10.svg'},
 {'id': 'Pentacles11', 'name': 'Knight of Pentacles', 'cn': '星币骑士', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You may be tempted to act before thinking it through.', 'image': '/cards/Pentacles11.svg'},
 {'id': 'Pentacles12', 'name': 'Queen of Pentacles', 'cn': '星币皇后', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You may already know what kind of care is needed.', 'image': '/cards/Pentacles12.svg'},
 {'id': 'Pentacles13', 'name': 'King of Pentacles', 'cn': '星币国王', 'meaning': 'You may be looking for consistency and practical effort, not just promises. You might need to lead by example.', 'image': '/cards/Pentacles13.svg'},
];
const majorNames=['Fool','Magician','High Priestess','Empress','Emperor','Hierophant','Lovers','Chariot','Strength','Hermit','Wheel of Fortune','Justice','Hanged Man','Death','Temperance','Devil','Tower','Star','Moon','Sun','Judgement','World'];
const commons=(name)=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent('RWS1909 - '+name+'.jpeg')+'?width=480';
for(const c of DECK){
  let file;
  if(c.id.startsWith('M'))file=String(Number(c.id.slice(1))).padStart(2,'0')+' '+majorNames[Number(c.id.slice(1))];
  else {const m=c.id.match(/^(Wands|Cups|Swords|Pentacles)(\d+)$/);file=m[1]+' '+String(Number(m[2])+1).padStart(2,'0');}
  c.image=commons(file); delete c.cn;
}
const themes={
 Wands:['the courage to say what you want','the risk of rushing past someone’s feelings'],
 Cups:['the tenderness you may be hiding','the emotions that are hard to name'],
 Swords:['the truth that needs room to breathe','the stories you tell yourself when you are hurt'],
 Pentacles:['the quiet effort that builds trust','the fear of losing something familiar']
};
const reverseNotes=['What happens when this energy turns inward?','A pattern may be asking for attention rather than another promise.','Perhaps the obstacle is not a lack of love, but the way it is expressed.','You can protect your boundaries without building a wall.'];
const openings=[
  'There is a choice here that deserves more than a quick answer.',
  'Something you have been carrying may finally need a name.',
  'The quiet part of this story matters as much as the visible one.',
  'This card points to a pattern worth noticing, not a verdict.',
  'A relationship can be meaningful and still ask something difficult of you.',
  'Sometimes the turning point is less dramatic than we imagine.'
];
const endings=[
  'Notice where your actions and your wishes begin to disagree.',
  'You may not need certainty before you ask for clarity.',
  'What you protect can reveal what you fear losing.',
  'A boundary can be an invitation to honesty, not a punishment.',
  'The next step might be to listen without preparing a defense.',
  'Ask yourself what you would choose if you did not have to prove anything.',
  'Not every distance means rejection; sometimes it is a request for space.',
  'Let the answer be specific: what would care look like this week?'
];
const contexts=[
  (a,b)=>`In a relationship, ${a} can become a question of ${b}.`,
  (a,b)=>`Sometimes ${a} looks like ${b} when two people want different things.`,
  (a,b)=>`Between two people, ${a} often shows up in the small choices around ${b}.`,
  (a,b)=>`You may notice ${a} most clearly when ${b} feels difficult.`,
  (a,b)=>`The heart of this card is ${a}; the everyday test is ${b}.`
];
const insights=[
  'A quiet truth can matter more than a dramatic promise.',
  'You can care deeply and still need a different way forward.',
  'Closeness grows when both people can be honest without performing certainty.',
  'A difficult conversation is not the same as a broken connection.',
  'What matters is not who wins the story, but what changes after it is told.',
  'Sometimes the kindest next step is also the clearest one.',
  'Trust is built in the ordinary moments nobody applauds.',
  'There is room for affection and a boundary in the same sentence.',
  'A little more clarity may be worth more than another grand gesture.',
  'Being understood begins with saying something specific.'
];
export function interpret(card,step,first,other,reversed=false){
 const meaningsForCard=meanings[card.name]||{upright:'reflection, choices',reversed:'resistance, uncertainty'};
 const [a,b]=(reversed?meaningsForCard.reversed:meaningsForCard.upright).split(',').map(x=>x.trim());
 const n=[...card.id+step.question+(reversed?'R':'U')].reduce((x,c)=>(x*33+c.charCodeAt(0))>>>0,5381);
 const image=reversed?'The image is upside down: this may be a tension to notice, not a flaw to hide.':'The image is upright: consider where this quality is already present.';
 return `${contexts[n%contexts.length](a,b)} ${image} ${insights[(n>>>3)%insights.length]}`;
}
const labels=['Strongly disagree','Disagree','Neutral','Agree','Strongly agree'];
export const ANGELS=[
 {name:'Archangel Michael — Courage',message:'You do not have to win every battle to be brave. Sometimes courage is simply telling the truth gently.',symbol:'✧'},
 {name:'Archangel Raphael — Healing',message:'Healing is not forgetting what hurt. It is learning to hold the memory without letting it steer every conversation.',symbol:'❦'},
 {name:'Archangel Gabriel — Expression',message:'The words you are afraid to say may be the bridge you have been waiting for. Begin with one honest sentence.',symbol:'✦'},
 {name:'Archangel Uriel — Clarity',message:'You cannot make every answer arrive today. Give the truth space to become visible.',symbol:'☼'},
 {name:'Angel of Boundaries',message:'Love grows best where a yes can be wholehearted and a no can be respected.',symbol:'◇'},
 {name:'Angel of Renewal',message:'A new chapter does not demand a perfect past. It asks for a different next step.',symbol:'✳'},
 {name:'Angel of Patience',message:'Not every silence is rejection. Ask what the silence holds before filling it with fear.',symbol:'☾'},
 {name:'Angel of Trust',message:'Trust is not a leap into darkness. It is a series of small promises kept in daylight.',symbol:'✴'},
 {name:'Angel of Compassion',message:'You can understand someone’s pain without agreeing to carry it all.',symbol:'♡'},
 {name:'Angel of New Beginnings',message:'The door does not open because you are fearless. It opens when you are willing to try.',symbol:'✺'}
];
export function report(room,viewer){
 const mine=room.draws.filter(d=>d.rater===viewer),visible=room.draws.filter(d=>d.rating?.visibility==='public'||d.rater===viewer);
 const avg=mine.length?mine.reduce((a,d)=>a+(d.rating?.value||3),0)/mine.length:3;
 const high=mine.filter(d=>d.rating?.value>=4),low=mine.filter(d=>d.rating?.value<=2);
 const focus=high[0]||mine[0],challenge=low[0]||mine[mine.length-1];
 const focusIdea=focus?focus.card.meaning.replace(/^(You |Your )/,'').replace(/[.!?]$/,'').toLowerCase():'I am still learning how to say what I need';
 const challengeIdea=challenge?challenge.card.name.toLowerCase():'uncertainty';
 const opening=high.length?'I know there is something real between us, even when we struggle to explain it.':'I know we do not always see the same story in the same way.';
 const middle=low.length?'I have also noticed where our feelings do not match, and I do not want to pretend they do.':'I am learning to say what I need without expecting you to guess.';
 const reflection=`${opening} ${middle} I think about ${challengeIdea} and what it reveals about the way we protect ourselves. The truth is, I want us to listen without turning every difference into a verdict. I hope we can choose one small, honest step toward each other.`;
 return {name:avg>=4?'A Moment of Resonance':avg<=2?'A Different Perspective':'Between Questions and Answers',model:'Inspired by the interpersonal circumplex: connection and personal agency. This is a conversation prompt, not a psychological assessment.',personal:`Your average agreement: ${avg.toFixed(1)}/5. ${high.length} statements resonated strongly; ${low.length} felt unlike your experience.`,shared:visible.map(d=>({name:room.players.find(p=>p.id===d.owner)?.name,card:d.card.name,image:d.card.image,reversed:d.reversed,question:d.question,score:d.rating?.value,label:labels[(d.rating?.value||3)-1],private:d.rating?.visibility==='private'})),totalCards:room.draws.length,suggestions:['Share one thing you wish the other person understood. Let them finish before responding.','Ask what support looks like in practice, not just in theory.','Choose one small action you can both revisit next week.'],reflection,reflectionNote:'A fictional first-person reflection inspired by your responses. It does not claim to reveal anyone else’s private thoughts.',angel:room.angel,messages:room.draws.filter(d=>d.note&&(d.note.from===viewer||d.note.to===viewer)).map(d=>({from:room.players.find(p=>p.id===d.note.from)?.name,to:room.players.find(p=>p.id===d.note.to)?.name,text:d.note.text,question:d.question}))};
}

export function soloReport(room){
 const draws=room.draws;
 const themes=draws.map(d=>({card:d.card.name,image:d.card.image,reversed:d.reversed,question:d.question,meaning:d.meaning}));
 const p=room.spread;const positive=['The Sun','The Star','The World','The Magician','Ace of Wands','Ace of Cups','Ace of Pentacles','Six of Wands','Nine of Cups'];
 const challenging=['The Tower','The Devil','The Moon','Five of Cups','Ten of Swords','Eight of Swords','Five of Pentacles'];
 const d=draws[0];let answer=null;
 if(p==='yesno'&&d){answer=positive.includes(d.card.name)&&!d.reversed?'Leaning YES':challenging.includes(d.card.name)&&!d.reversed?'Leaning NO':'UNCLEAR / CONDITIONAL';}
 const action=p==='choice'?'Compare the benefits and costs of both options against your priorities. Use the cards as prompts, not proof.':p==='career'?'Choose one concrete step you can complete in the next seven days.':p==='perception'?'If it feels appropriate, ask the person directly instead of assuming what they think.':'Look for evidence and practical consequences before making a decision.';
 return {solo:true,title:SOLO_SPREADS[p].title,question:room.soloQuestion||'',optionA:room.optionA||'',optionB:room.optionB||'',answer,cards:themes,action,angel:room.angel};
}
