export const SPREADS={
 mirrors:{title:'你眼中的我',subtitle:'双向理解与关系期待',steps:[{question:'{other} 心中如何看待我？',rater:'next'},{question:'我眼中的 {other} 是什么样的？',rater:'self'},{question:'我希望与 {other} 的关系如何发展？',rater:'self'}]},
 unsaid:{title:'未说出口的话',subtitle:'安全表达与冲突缓和',steps:[{question:'我真正介意的是什么？',rater:'self'},{question:'我希望大家理解我的什么感受？',rater:'self'},{question:'为了修复关系，我愿意尝试什么？',rater:'self'}]},
 teamwork:{title:'我们的默契密码',subtitle:'团队角色与相互支持',steps:[{question:'我在团队中自然承担什么角色？',rater:'self'},{question:'我最希望团队给予怎样的支持？',rater:'self'},{question:'我能为团队贡献什么？',rater:'self'}]},
 family:{title:'家的温度',subtitle:'家庭理解与情感联结',steps:[{question:'我在家庭里通常有什么感受？',rater:'self'},{question:'我最希望家人理解什么？',rater:'self'},{question:'我希望共同创造怎样的家庭氛围？',rater:'self'}]},
 friendship:{title:'友谊的星图',subtitle:'赞赏、信任与共同记忆',steps:[{question:'朋友可能欣赏我的什么？',rater:'self'},{question:'我希望朋友看到怎样的我？',rater:'self'},{question:'我想和朋友们创造怎样的回忆？',rater:'self'}]},
 differences:{title:'分歧之间',subtitle:'价值观与建设性协商',steps:[{question:'在分歧中我最坚持什么价值？',rater:'self'},{question:'我可能忽略了什么视角？',rater:'self'},{question:'我愿意接受怎样的折中？',rater:'self'}]}
};
const majors=['愚者','魔术师','女祭司','皇后','皇帝','教皇','恋人','战车','力量','隐者','命运之轮','正义','倒吊人','死神','节制','恶魔','高塔','星星','月亮','太阳','审判','世界'];
const suits=[['权杖','行动、热情与创造力','急躁或冲动'],['圣杯','情感、共鸣与关怀','过度期待或敏感'],['宝剑','理性、清晰与边界','沟通锋利或情感距离'],['星币','稳定、现实与长期投入','固守习惯或缺少弹性']];
const ranks=['王牌','二','三','四','五','六','七','八','九','十','侍从','骑士','皇后','国王'];
const majorThemes=['新的开始与开放','主动创造与表达','直觉与倾听','滋养与照料','秩序与责任','共同信念','选择与联结','前进与自律','温柔的勇气','独处与反思','变化与适应','公平与平衡','换位思考','结束与转型','调和与耐心','依附与限制','冲突后的重建','希望与疗愈','不确定与想象','坦诚与喜悦','觉察与复盘','整合与圆满'];
export const DECK=[...majors.map((name,i)=>({id:'M'+i,name,theme:majorThemes[i],shadow:'也许仍有尚未说出的顾虑'})),...suits.flatMap(([suit,theme,shadow])=>ranks.map((rank,i)=>({id:suit+i,name:suit+rank,theme,shadow})))];
export function interpret(card,step,owner,other){const question=step.question.replaceAll('{other}',other);return `「${card.name}」象征${card.theme}。在“${question}”这个话题下，这或许提示你们可以留意${card.theme}带来的力量；与此同时，也要觉察${card.shadow}。这是一种开放的对话邀请，不是对任何人内心的事实判断。请由最了解这一想法的人判断是否符合。`;}
const labels=['非常不符合','不太符合','中立','很符合','非常符合'];
export function report(room,viewer){const mine=room.draws.filter(d=>d.rater===viewer);const all=room.draws;const share=all.filter(d=>d.rating?.visibility==='public'||d.rater===viewer);const avg=mine.length?mine.reduce((a,d)=>a+(d.rating?.value||3),0)/mine.length:3;const name=avg>=4?'共鸣探索型':avg<=2?'重新认识型':'成长对话型';return {name,model:'人际环形模型（IPC）的主导性与亲和性可用于组织讨论，但本游戏不构成经过验证的心理测评。',personal:`你对本次描述的平均认可度为 ${avg.toFixed(1)}/5。${avg>=4?'不少象征描述与你的体验产生了共鸣。':avg<=2?'不少描述与你的体验不符；这也是重要的发现。':'你的回应显示出多样和不确定的感受。'} 不要将随机牌面视作他人真实心理的证据。`,shared:share.map(d=>({name:room.players.find(p=>p.id===d.owner)?.name,card:d.card.name,question:d.question,score:d.rating?.value,label:labels[(d.rating?.value||3)-1],private:d.rating?.visibility==='private'})),suggestions:['每个人轮流分享一件最近希望被理解的小事，不打断对方。','遇到分歧时，先用自己的话复述对方观点，再表达不同意见。','每周安排一次十分钟的主动倾听，并尊重不愿分享的边界。']};}
