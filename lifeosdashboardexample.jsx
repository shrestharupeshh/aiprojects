import { useState, useEffect } from "react";

// ── Storage ──
const SK = "life-os-v2";
async function ld() { try { const r = await window.storage.get(SK); return r ? JSON.parse(r.value) : null; } catch { return null; } }
async function sv(s) { try { await window.storage.set(SK, JSON.stringify(s)); } catch {} }

// ── Colors ──
const DC = { Work:"#3B82F6",Content:"#8B5CF6",PhD:"#EC4899",Fitness:"#10B981",AI:"#F59E0B",Finance:"#06B6D4",Admin:"#6B7280",Products:"#F97316",Personal:"#84CC16",Travel:"#14B8A6" };
const PC = { P1:"#EF4444",P2:"#F59E0B",P3:"#6B7280" };
const SC = {"Not Started":"#6B7280","In Progress":"#3B82F6",Waiting:"#F59E0B",Done:"#10B981",Idea:"#6B7280",Researching:"#8B5CF6",Scripting:"#3B82F6",Shooting:"#F59E0B",Editing:"#EC4899",Scheduled:"#06B6D4",Published:"#10B981",Validating:"#8B5CF6",Outlining:"#3B82F6",Building:"#F59E0B",Beta:"#EC4899",Launched:"#10B981",Iterating:"#06B6D4","To Read":"#6B7280",Reading:"#3B82F6",Read:"#10B981",Summarized:"#8B5CF6","To Explore":"#6B7280",Exploring:"#3B82F6",Tested:"#F59E0B",Integrated:"#10B981",Active:"#10B981",Achieved:"#3B82F6",Deferred:"#F59E0B",Contacted:"#3B82F6",Strong:"#10B981",Medium:"#F59E0B",Weak:"#EF4444",Planning:"#F59E0B",Dreaming:"#8B5CF6",Booked:"#3B82F6",Completed:"#10B981",Cancelled:"#EF4444"};

// ── Default State ──
const DEF = {
  northStar:"Complete FEA thermal simulation report",
  tasks:[
    {id:1,text:"Review HTC boundary conditions",status:"In Progress",priority:"P1",domain:"Work",due:"Today",effort:"2 hr"},
    {id:2,text:"Draft LinkedIn post on AI+FEA",status:"Not Started",priority:"P1",domain:"Content",due:"Today",effort:"1 hr"},
    {id:3,text:"Read CEA lighting paper (Section 3)",status:"Not Started",priority:"P2",domain:"PhD",due:"Tomorrow",effort:"1 hr"},
    {id:4,text:"Log gym session",status:"Not Started",priority:"P2",domain:"Fitness",due:"Today",effort:"15 min"},
    {id:5,text:"Test n8n Notion API connection",status:"Not Started",priority:"P3",domain:"AI",due:"This Week",effort:"1 hr"},
    {id:6,text:"Update Excel Finance OS",status:"Not Started",priority:"P3",domain:"Finance",due:"This Week",effort:"30 min"},
    {id:7,text:"Write weekly review",status:"Not Started",priority:"P2",domain:"Personal",due:"Sunday",effort:"30 min"},
    {id:8,text:"Meal prep for the week",status:"Not Started",priority:"P2",domain:"Fitness",due:"Saturday",effort:"2 hr"},
  ],
  inbox:[],
  goals:[
    {id:1,text:"Ship AI Prompt Pack",progress:30,domain:"Products",kr:"Published, 50+ downloads",tf:"Q2 2026",status:"Active"},
    {id:2,text:"8 LinkedIn posts this quarter",progress:25,domain:"Content",kr:"2/week for 4 weeks",tf:"Q2 2026",status:"Active"},
    {id:3,text:"3 clean muscle-ups",progress:15,domain:"Fitness",kr:"Film and verify form",tf:"Q3 2026",status:"Active"},
    {id:4,text:"LED research outline",progress:10,domain:"PhD",kr:"Full outline + 15 papers",tf:"Q3 2026",status:"Active"},
    {id:5,text:"Use Life OS daily 30 days",progress:5,domain:"Personal",kr:"30-day streak",tf:"Q2 2026",status:"Active"},
  ],
  fitness:{
    log:[
      {id:1,session:"Upper Push + Muscle-Up Drills",date:"Mar 10",type:"Gym",focus:["Push","Skill"],dur:75,rpe:"8",notes:"Good explosive pull-ups. False grip improving."},
      {id:2,session:"5K Recovery Run",date:"Mar 9",type:"Run",focus:["Cardio"],dur:32,rpe:"6",notes:"Easy pace."},
      {id:3,session:"Pull + Core",date:"Mar 8",type:"Gym",focus:["Pull","Core"],dur:65,rpe:"7",notes:"15 pull-ups clean. Dragon flags progressing."},
    ],
    skills:[
      {name:"Muscle-Up",level:"15 pull-ups, explosive to chest",next:"Band-assisted x3",pct:35},
      {name:"Handstand",level:"Wall hold 45s",next:"Freestanding 10s",pct:25},
      {name:"Front Lever",level:"Tuck hold 12s",next:"Adv tuck 10s",pct:20},
      {name:"Back Lever",level:"German hang",next:"Tuck back lever 8s",pct:15},
      {name:"Planche",level:"Planche lean 20s",next:"Tuck planche 3s",pct:10},
      {name:"Human Flag",level:"Not started",next:"Clutch flag 3s",pct:0},
    ],
    habits:{exercise:5,water:6,sleep:4,stretch:3},
  },
  content:[
    {id:1,title:"5 AI Prompts for FEA Reports",status:"Scripting",platform:["LinkedIn"],format:"Post",theme:"Engineering",hook:"Stop writing FEA reports from scratch."},
    {id:2,title:"My Morning Routine as an Engineer",status:"Idea",platform:["Instagram","YouTube"],format:"Reel",theme:"Self-Improvement",hook:""},
    {id:3,title:"Why MechE Should Learn AI",status:"Idea",platform:["LinkedIn"],format:"Article",theme:"AI & Future",hook:""},
    {id:4,title:"Calisthenics Progress — Month 3",status:"Idea",platform:["Instagram"],format:"Reel",theme:"Fitness",hook:""},
    {id:5,title:"How I Use Claude at Work",status:"Researching",platform:["LinkedIn","X"],format:"Thread",theme:"AI & Future",hook:"I've used AI daily for 6 months."},
  ],
  phd:{
    programs:[
      {id:1,uni:"Cornell",faculty:"Dr. Manoj Karkee",focus:"Ag Robotics + AI",fit:"Strong",status:"Contacted",dl:"Dec 2026",notes:"Outreach sent July 2025."},
      {id:2,uni:"UC Davis",faculty:"TBD",focus:"CEA",fit:"Strong",status:"Researching",dl:"Dec 2026",notes:""},
      {id:3,uni:"U of Arizona",faculty:"TBD",focus:"CEA + Sensing",fit:"Medium",status:"Researching",dl:"Dec 2026",notes:""},
      {id:4,uni:"Purdue",faculty:"TBD",focus:"Ag Eng + AI",fit:"Medium",status:"Researching",dl:"Dec 2026",notes:""},
      {id:5,uni:"Penn State",faculty:"TBD",focus:"CEA Systems",fit:"Medium",status:"Researching",dl:"Jan 2027",notes:""},
    ],
    papers:[
      {id:1,title:"Deep Learning for Plant Phenotyping",status:"To Read",topic:["AI-Ag","Sensing"],rel:"High"},
      {id:2,title:"Thermal Mgmt of LED Grow Lights",status:"Reading",topic:["Thermal","CEA"],rel:"High"},
      {id:3,title:"Optimization of Vertical Farm Energy",status:"To Read",topic:["Vertical Farming"],rel:"High"},
    ],
    research:{name:"LED Thermal Efficiency in Vertical Farming",status:"Planning",target:"arXiv + MDPI Energies",milestones:["Lit review","Model setup","Sims","Draft","Submit"]},
  },
  aiLab:[
    {id:1,name:"Claude for FEA reports",cat:"Workflow",domain:["Engineering"],status:"Integrated",verdict:"Game-Changer",notes:"Saves 1-2 hrs/report."},
    {id:2,name:"n8n weekly review automation",cat:"Experiment",domain:["Personal"],status:"To Explore",verdict:"",notes:"After 4 weeks manual."},
    {id:3,name:"LangGraph multi-agent",cat:"Concept",domain:["Products"],status:"Exploring",verdict:"",notes:"For product dev agents."},
    {id:4,name:"Cursor AI",cat:"Tool",domain:["Engineering","Products"],status:"To Explore",verdict:"",notes:""},
    {id:5,name:"Content hook generator prompt",cat:"Prompt",domain:["Content"],status:"Tested",verdict:"Useful",notes:"Works well with Claude."},
  ],
  products:[
    {id:1,name:"AI Prompt Pack for MechE",cat:"Prompt Pack",tier:"Free",status:"Building",imp:4,ease:5,sig:4,aud:"Early-career MEs",prob:"Don't know how to use AI at work"},
    {id:2,name:"Engineering Career Guide",cat:"Guide",tier:"Free",status:"Idea",imp:4,ease:4,sig:4,aud:"ME students & grads",prob:"No practical career guidance"},
    {id:3,name:"Notion Life OS Template",cat:"Template",tier:"$15-25",status:"Idea",imp:4,ease:3,sig:3,aud:"Engineers & creators",prob:"No unified life system"},
    {id:4,name:"Beginner's Guide to FEA",cat:"Guide",tier:"$15-25",status:"Validating",imp:5,ease:2,sig:4,aud:"ME students",prob:"University FEA too theoretical"},
    {id:5,name:"AI Workflow Templates",cat:"Prompt Pack",tier:"$10-20",status:"Idea",imp:4,ease:4,sig:3,aud:"Engineers adopting AI",prob:"Don't know where to start"},
  ],
  people:[
    {id:1,name:"Manisha Thapa",cat:"Close Friend",bday:"",notes:"Public health, Nepal."},
    {id:2,name:"Mom",cat:"Family",bday:"Apr 15",notes:""},
    {id:3,name:"Anil",cat:"Close Friend",bday:"",notes:"Meet this weekend."},
    {id:4,name:"Eric",cat:"Professional",bday:"",notes:"Mentorship startup co-founder."},
    {id:5,name:"Kathy",cat:"Professional",bday:"",notes:"Mentorship startup co-founder."},
  ],
  journal:[{id:1,entry:"Building my Life OS",date:"Mar 12, 2026",type:"Daily",mood:"Great",wins:"Created the full system.",insight:"Consistency > perfection."}],
  travel:{
    trips:[
      {id:1,name:"Nepal — Home Visit",dest:"Kathmandu, Nepal",status:"Dreaming",type:"Home",dates:"TBD — late 2026",budget:"$2,500",priority:"High",notes:"Visit family, explore Newari heritage sites, reconnect with friends. Possible Pokhara side trip.",packing:[],tasks:[]},
      {id:2,name:"Pacific Coast Road Trip",dest:"CA Coast — SF to Big Sur",status:"Dreaming",type:"Road Trip",dates:"TBD — summer 2026",budget:"$600",priority:"Medium",notes:"Weekend trip. Camp or cheap motel. Photography content opportunities.",packing:[],tasks:[]},
      {id:3,name:"National Park Trip",dest:"Yosemite / Sequoia",status:"Dreaming",type:"Nature",dates:"TBD",budget:"$400",priority:"Medium",notes:"Camping + hiking. Good for fitness + content.",packing:[],tasks:[]},
      {id:4,name:"PhD Campus Visits",dest:"Cornell / UC Davis",status:"Planning",type:"Academic",dates:"TBD — if invited",budget:"$1,200",priority:"High",notes:"Depends on PhD application cycle. Budget for 2 campus visits.",packing:[],tasks:[]},
    ],
    wishlist:[
      {id:1,place:"Japan",why:"Culture, food, engineering marvels, trains",season:"Spring (cherry blossom)",est:"$3,000"},
      {id:2,place:"Iceland",why:"Landscape photography, Northern Lights, geology",season:"Winter",est:"$2,500"},
      {id:3,place:"Bhutan",why:"Close to Nepal, unique culture, sustainable tourism",season:"Oct–Nov",est:"$1,500"},
      {id:4,place:"New York City",why:"Engineering landmarks, content, food scene",season:"Anytime",est:"$800"},
      {id:5,place:"Pacific Northwest",why:"Seattle + Portland, tech scene, hiking, nature",season:"Summer",est:"$700"},
    ],
    savings:{current:0,goal:3000,monthly:200},
  },
};

// ── Icons (tiny inline SVG) ──
const Ico = {
  back:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>,
  target:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  check:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11.5 14.5 16 9"/></svg>,
  inbox:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>,
  flag:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  dumbbell:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5h11M6 12h12M4 8v8M20 8v8M2 10v4M22 10v4"/></svg>,
  video:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  grad:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  cpu:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>,
  pkg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  heart:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  book:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  chart:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  dollar:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  plus:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  spark:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>,
  link:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  cal:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  plane:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1L11 12l-2 3H6l-1 1 3 2 2 3 1-1v-3l3-2 3.5 7.3c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>,
};

// ── Shared UI ──
const Badge = ({t,c}) => <span style={{fontSize:10,fontWeight:600,padding:"2px 7px",borderRadius:4,background:`${c||"#6B7280"}20`,color:c||"#6B7280",whiteSpace:"nowrap"}}>{t}</span>;
const PBar = ({v,mx=100,c="#10B981",h=6}) => <div style={{height:h,borderRadius:h/2,background:"rgba(255,255,255,0.06)",overflow:"hidden",flex:1}}><div style={{height:"100%",borderRadius:h/2,width:`${Math.min(v/mx*100,100)}%`,background:`linear-gradient(90deg,${c},${c}88)`,transition:"width 0.4s"}}/></div>;
const Stat = ({label,value,color="#94A3B8"}) => <div style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.03)",borderRadius:10,border:"1px solid rgba(255,255,255,0.06)"}}><div style={{fontSize:20,fontWeight:700,color}}>{value}</div><div style={{fontSize:10,color:"#64748B",marginTop:2}}>{label}</div></div>;
const SH = ({t,n}) => <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,marginTop:18}}><h3 style={{fontSize:13,fontWeight:700,color:"#94A3B8",margin:0,letterSpacing:"0.04em",textTransform:"uppercase"}}>{t}</h3>{n!==undefined&&<span style={{fontSize:11,color:"#475569"}}>({n})</span>}</div>;
const DR = ({children,onClick}) => <div onClick={onClick} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",marginBottom:4,background:"rgba(255,255,255,0.02)",borderRadius:8,border:"1px solid rgba(255,255,255,0.04)",cursor:onClick?"pointer":"default",transition:"background 0.15s"}} onMouseEnter={e=>{if(onClick)e.currentTarget.style.background="rgba(255,255,255,0.05)"}} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}>{children}</div>;

function Shell({title,icon,color,onBack,stats,children}) {
  return <div>
    <div style={{padding:"14px 18px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",gap:10,background:`linear-gradient(135deg,${color}10,transparent)`}}>
      <button onClick={onBack} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"6px 8px",cursor:"pointer",color:"#94A3B8",display:"flex"}}>{Ico.back}</button>
      <span style={{color,display:"flex"}}>{icon}</span>
      <h2 style={{fontSize:18,fontWeight:700,color:"#E2E8F0",margin:0}}>{title}</h2>
    </div>
    {stats&&<div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(stats.length,4)},1fr)`,gap:8,padding:"14px 18px"}}>{stats.map((s,i)=><Stat key={i} {...s}/>)}</div>}
    <div style={{padding:"0 18px 28px"}}>{children}</div>
  </div>;
}

// ═══ SUB-PAGES ═══
function TasksP({s,set,back}) {
  const tog=id=>set(st=>({...st,tasks:st.tasks.map(t=>t.id===id?{...t,status:t.status==="Done"?"Not Started":"Done"}:t)}));
  const byD={};s.tasks.forEach(t=>{(byD[t.domain]=byD[t.domain]||[]).push(t)});
  return <Shell title="Tasks" icon={Ico.check} color="#3B82F6" onBack={back} stats={[{label:"Total",value:s.tasks.length,color:"#3B82F6"},{label:"Done",value:s.tasks.filter(t=>t.status==="Done").length,color:"#10B981"},{label:"P1 Open",value:s.tasks.filter(t=>t.priority==="P1"&&t.status!=="Done").length,color:"#EF4444"}]}>
    {Object.entries(byD).map(([d,ts])=><div key={d}><SH t={d} n={ts.filter(t=>t.status!=="Done").length}/>{ts.map(t=><DR key={t.id} onClick={()=>tog(t.id)}><div style={{width:16,height:16,borderRadius:4,flexShrink:0,border:t.status==="Done"?"none":`2px solid ${PC[t.priority]}`,background:t.status==="Done"?"#10B981":"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{t.status==="Done"&&<span style={{color:"#fff",fontSize:9}}>✓</span>}</div><span style={{flex:1,fontSize:13,color:"#E2E8F0",textDecoration:t.status==="Done"?"line-through":"none",opacity:t.status==="Done"?.4:1}}>{t.text}</span><Badge t={t.priority} c={PC[t.priority]}/><Badge t={t.due} c="#475569"/><span style={{fontSize:10,color:"#475569"}}>{t.effort}</span></DR>)}</div>)}
  </Shell>;
}

function GoalsP({s,set,back}) {
  const upd=(id,d)=>set(st=>({...st,goals:st.goals.map(g=>g.id===id?{...g,progress:Math.max(0,Math.min(100,g.progress+d))}:g)}));
  return <Shell title="Goals & Vision" icon={Ico.flag} color="#F97316" onBack={back} stats={[{label:"Active",value:s.goals.filter(g=>g.status==="Active").length,color:"#F97316"},{label:"Avg Progress",value:Math.round(s.goals.reduce((a,g)=>a+g.progress,0)/s.goals.length)+"%",color:"#10B981"}]}>
    {s.goals.map(g=><div key={g.id} style={{padding:"14px",marginBottom:8,background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:14,fontWeight:600,color:"#E2E8F0"}}>{g.text}</span><div style={{display:"flex",gap:5}}><Badge t={g.domain} c={DC[g.domain]}/><Badge t={g.tf} c="#475569"/></div></div>
      <div style={{fontSize:11,color:"#64748B",marginBottom:8}}>KR: {g.kr}</div>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <button onClick={()=>upd(g.id,-5)} style={{background:"rgba(255,255,255,0.06)",border:"none",borderRadius:4,padding:"2px 8px",color:"#94A3B8",cursor:"pointer",fontSize:12}}>−</button>
        <PBar v={g.progress} c={DC[g.domain]} h={8}/><span style={{fontSize:12,fontWeight:700,color:DC[g.domain],width:36,textAlign:"right"}}>{g.progress}%</span>
        <button onClick={()=>upd(g.id,5)} style={{background:"rgba(255,255,255,0.06)",border:"none",borderRadius:4,padding:"2px 8px",color:"#94A3B8",cursor:"pointer",fontSize:12}}>+</button>
      </div>
    </div>)}
  </Shell>;
}

function FitP({s,back}) {
  const f=s.fitness;
  return <Shell title="Fitness & Health" icon={Ico.dumbbell} color="#10B981" onBack={back} stats={[{label:"Sessions",value:f.log.length,color:"#10B981"},{label:"Gym",value:"3x/wk",color:"#3B82F6"},{label:"Run",value:"1x/wk",color:"#F59E0B"}]}>
    <SH t="Training Log" n={f.log.length}/>
    {f.log.map(l=><DR key={l.id}><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{l.session}</div><div style={{fontSize:11,color:"#64748B",marginTop:2}}>{l.notes}</div></div><Badge t={l.type} c={l.type==="Gym"?"#3B82F6":"#F59E0B"}/><span style={{fontSize:11,color:"#64748B"}}>{l.dur}m</span><Badge t={"RPE "+l.rpe} c="#8B5CF6"/><span style={{fontSize:11,color:"#475569"}}>{l.date}</span></DR>)}
    <SH t="Calisthenics Progression"/>
    {f.skills.map((sk,i)=><div key={i} style={{padding:"10px 12px",marginBottom:5,background:"rgba(255,255,255,0.02)",borderRadius:8,border:"1px solid rgba(255,255,255,0.05)"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{sk.name}</span><span style={{fontSize:11,color:"#10B981",fontWeight:600}}>{sk.pct}%</span></div><div style={{fontSize:11,color:"#64748B"}}>Now: {sk.level}</div><div style={{fontSize:11,color:"#94A3B8"}}>Next: {sk.next}</div><div style={{marginTop:5}}><PBar v={sk.pct} c="#10B981" h={5}/></div></div>)}
  </Shell>;
}

function ContentP({s,back}) {
  const order=["Idea","Researching","Scripting","Shooting","Editing","Scheduled","Published"];
  const byS={};s.content.forEach(c=>{(byS[c.status]=byS[c.status]||[]).push(c)});
  return <Shell title="Content Engine" icon={Ico.video} color="#8B5CF6" onBack={back} stats={[{label:"Total",value:s.content.length,color:"#8B5CF6"},{label:"In Progress",value:s.content.filter(c=>!["Idea","Published"].includes(c.status)).length,color:"#3B82F6"},{label:"Published",value:s.content.filter(c=>c.status==="Published").length,color:"#10B981"}]}>
    {order.filter(st=>byS[st]).map(st=><div key={st}><SH t={st} n={byS[st].length}/>{byS[st].map(c=><DR key={c.id}><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{c.title}</div>{c.hook&&<div style={{fontSize:11,color:"#64748B",fontStyle:"italic",marginTop:2}}>"{c.hook}"</div>}</div><Badge t={c.format} c="#475569"/>{c.platform.map(p=><Badge key={p} t={p} c="#6B7280"/>)}</DR>)}</div>)}
  </Shell>;
}

function PhdP({s,back}) {
  const p=s.phd;
  return <Shell title="Research & PhD" icon={Ico.grad} color="#EC4899" onBack={back} stats={[{label:"Programs",value:p.programs.length,color:"#EC4899"},{label:"Papers",value:p.papers.length,color:"#3B82F6"},{label:"Research",value:p.research.status,color:"#F59E0B"}]}>
    <SH t="Target Programs"/>
    {p.programs.map(pr=><DR key={pr.id}><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{pr.uni}</div><div style={{fontSize:11,color:"#64748B"}}>{pr.faculty} — {pr.focus}</div>{pr.notes&&<div style={{fontSize:10,color:"#475569",marginTop:2}}>{pr.notes}</div>}</div><Badge t={pr.fit} c={SC[pr.fit]}/><Badge t={pr.status} c={SC[pr.status]}/></DR>)}
    <SH t="Reading List" n={p.papers.length}/>
    {p.papers.map(pp=><DR key={pp.id}><div style={{flex:1}}><div style={{fontSize:13,color:"#E2E8F0"}}>{pp.title}</div><div style={{display:"flex",gap:3,marginTop:3}}>{pp.topic.map(t=><Badge key={t} t={t} c="#475569"/>)}</div></div><Badge t={pp.status} c={SC[pp.status]}/><Badge t={pp.rel} c={pp.rel==="High"?"#EF4444":"#F59E0B"}/></DR>)}
    <SH t="Research Project"/>
    <div style={{padding:"12px 14px",background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)"}}><div style={{fontSize:14,fontWeight:600,color:"#E2E8F0"}}>{p.research.name}</div><div style={{fontSize:12,color:"#64748B",margin:"5px 0"}}>Target: {p.research.target}</div><div style={{display:"flex",gap:5,flexWrap:"wrap"}}>{p.research.milestones.map((m,i)=><Badge key={i} t={m} c="#475569"/>)}</div></div>
  </Shell>;
}

function AiP({s,back}) {
  return <Shell title="AI Lab" icon={Ico.cpu} color="#F59E0B" onBack={back} stats={[{label:"Items",value:s.aiLab.length,color:"#F59E0B"},{label:"Integrated",value:s.aiLab.filter(a=>a.status==="Integrated").length,color:"#10B981"},{label:"To Explore",value:s.aiLab.filter(a=>a.status==="To Explore").length,color:"#6B7280"}]}>
    {s.aiLab.map(a=><DR key={a.id}><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{a.name}</div>{a.notes&&<div style={{fontSize:11,color:"#64748B",marginTop:2}}>{a.notes}</div>}<div style={{display:"flex",gap:3,marginTop:3}}>{a.domain.map(d=><Badge key={d} t={d} c={DC[d]}/>)}</div></div><Badge t={a.cat} c="#475569"/><Badge t={a.status} c={SC[a.status]}/>{a.verdict&&<Badge t={a.verdict} c={a.verdict==="Game-Changer"?"#10B981":"#3B82F6"}/>}</DR>)}
  </Shell>;
}

function ProdsP({s,back}) {
  const sorted=[...s.products].sort((a,b)=>(b.imp+b.ease+b.sig)-(a.imp+a.ease+a.sig));
  return <Shell title="Digital Products" icon={Ico.pkg} color="#F97316" onBack={back} stats={[{label:"Products",value:s.products.length,color:"#F97316"},{label:"Building",value:s.products.filter(p=>p.status==="Building").length,color:"#F59E0B"},{label:"Launched",value:s.products.filter(p=>p.status==="Launched").length,color:"#10B981"}]}>
    {sorted.map(p=>{const sc=p.imp+p.ease+p.sig;return <div key={p.id} style={{padding:"14px",marginBottom:8,background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,fontWeight:600,color:"#E2E8F0"}}>{p.name}</span><div style={{display:"flex",gap:5,alignItems:"center"}}><Badge t={p.status} c={SC[p.status]}/><span style={{fontSize:14,fontWeight:800,color:sc>=12?"#10B981":sc>=10?"#F59E0B":"#6B7280"}}>{sc}</span></div></div>
      <div style={{fontSize:12,color:"#64748B",margin:"5px 0"}}>{p.aud}</div><div style={{fontSize:11,color:"#475569"}}>{p.prob}</div>
      <div style={{display:"flex",gap:5,marginTop:6}}><Badge t={p.cat} c="#475569"/><Badge t={p.tier} c={p.tier==="Free"?"#10B981":"#F59E0B"}/></div>
      <div style={{display:"flex",gap:12,marginTop:6,fontSize:11,color:"#64748B"}}>Impact:<b style={{color:"#E2E8F0"}}>{p.imp}</b> Ease:<b style={{color:"#E2E8F0"}}>{p.ease}</b> Signal:<b style={{color:"#E2E8F0"}}>{p.sig}</b></div>
    </div>})}
  </Shell>;
}

function PeopleP({s,back}) {
  return <Shell title="People" icon={Ico.heart} color="#EF4444" onBack={back}>
    {s.people.map(p=><DR key={p.id}><div style={{width:30,height:30,borderRadius:"50%",background:"rgba(239,68,68,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"#EF4444",fontWeight:600}}>{p.name[0]}</div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{p.name}</div>{p.notes&&<div style={{fontSize:11,color:"#64748B"}}>{p.notes}</div>}</div><Badge t={p.cat} c="#475569"/>{p.bday&&<Badge t={"🎂 "+p.bday} c="#EF4444"/>}</DR>)}
  </Shell>;
}

function JournalP({s,back}) {
  return <Shell title="Journal" icon={Ico.book} color="#8B5CF6" onBack={back}>
    {s.journal.map(j=><div key={j.id} style={{padding:"14px",marginBottom:8,background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:14,fontWeight:600,color:"#E2E8F0"}}>{j.entry}</span><div style={{display:"flex",gap:5}}><Badge t={j.type} c="#8B5CF6"/><Badge t={j.mood} c={j.mood==="Great"?"#10B981":"#F59E0B"}/></div></div>
      <div style={{fontSize:11,color:"#475569",marginBottom:4}}>{j.date}</div>
      {j.wins&&<div style={{fontSize:12,color:"#94A3B8"}}><b style={{color:"#10B981"}}>Wins:</b> {j.wins}</div>}
      {j.insight&&<div style={{fontSize:12,color:"#94A3B8",marginTop:3}}><b style={{color:"#F59E0B"}}>Insight:</b> {j.insight}</div>}
    </div>)}
  </Shell>;
}

function TravelP({s,set,back}) {
  const tv=s.travel;
  const updateSavings=(d)=>set(st=>({...st,travel:{...st.travel,savings:{...st.travel.savings,current:Math.max(0,st.travel.savings.current+d)}}}));
  return <Shell title="Travel Planning" icon={Ico.plane} color="#14B8A6" onBack={back} stats={[{label:"Trips Planned",value:tv.trips.length,color:"#14B8A6"},{label:"Wishlist",value:tv.wishlist.length,color:"#8B5CF6"},{label:"Travel Fund",value:`$${tv.savings.current.toLocaleString()}`,color:tv.savings.current>=tv.savings.goal?"#10B981":"#F59E0B"},{label:"Goal",value:`$${tv.savings.goal.toLocaleString()}`,color:"#06B6D4"}]}>
    <SH t="Travel Fund"/>
    <div style={{padding:"14px",background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)",marginBottom:4}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,color:"#94A3B8"}}>Saving ${tv.savings.monthly}/month</span><span style={{fontSize:12,fontWeight:600,color:"#14B8A6"}}>{Math.round(tv.savings.current/tv.savings.goal*100)}%</span></div>
      <PBar v={tv.savings.current} mx={tv.savings.goal} c="#14B8A6" h={10}/>
      <div style={{display:"flex",gap:8,marginTop:10,justifyContent:"center"}}>
        <button onClick={()=>updateSavings(-100)} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,padding:"4px 12px",color:"#94A3B8",cursor:"pointer",fontSize:12}}>−$100</button>
        <button onClick={()=>updateSavings(100)} style={{background:"#14B8A622",border:"1px solid #14B8A644",borderRadius:6,padding:"4px 12px",color:"#14B8A6",cursor:"pointer",fontSize:12,fontWeight:600}}>+$100</button>
        <button onClick={()=>updateSavings(200)} style={{background:"#14B8A633",border:"1px solid #14B8A655",borderRadius:6,padding:"4px 12px",color:"#14B8A6",cursor:"pointer",fontSize:12,fontWeight:600}}>+$200</button>
      </div>
    </div>
    <SH t="Trips" n={tv.trips.length}/>
    {tv.trips.map(tr=><div key={tr.id} style={{padding:"14px",marginBottom:8,background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <span style={{fontSize:14,fontWeight:600,color:"#E2E8F0"}}>{tr.name}</span>
        <div style={{display:"flex",gap:5}}><Badge t={tr.status} c={SC[tr.status]}/><Badge t={tr.priority} c={tr.priority==="High"?"#EF4444":"#F59E0B"}/></div>
      </div>
      <div style={{display:"flex",gap:12,fontSize:12,color:"#64748B",marginBottom:4}}>
        <span>📍 {tr.dest}</span><span>📅 {tr.dates}</span><span>💰 {tr.budget}</span>
      </div>
      <div style={{fontSize:11,color:"#94A3B8"}}>{tr.notes}</div>
      <div style={{marginTop:6}}><Badge t={tr.type} c="#475569"/></div>
    </div>)}
    <SH t="Wishlist" n={tv.wishlist.length}/>
    {tv.wishlist.map(w=><DR key={w.id}>
      <div style={{flex:1}}>
        <div style={{fontSize:13,fontWeight:600,color:"#E2E8F0"}}>{w.place}</div>
        <div style={{fontSize:11,color:"#64748B",marginTop:2}}>{w.why}</div>
      </div>
      <Badge t={w.season} c="#475569"/>
      <span style={{fontSize:11,color:"#14B8A6",fontWeight:600}}>{w.est}</span>
    </DR>)}
  </Shell>;
}

// ═══ DASHBOARD CARD ═══
function Card({title,icon,color="#3B82F6",onClick,children,span=1}) {
  return <div onClick={onClick} style={{background:"rgba(15,23,42,0.65)",backdropFilter:"blur(20px)",borderRadius:14,border:"1px solid rgba(255,255,255,0.08)",overflow:"hidden",cursor:onClick?"pointer":"default",gridColumn:span>1?`span ${span}`:undefined,transition:"border-color 0.2s,transform 0.15s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=`${color}44`;e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.08)";e.currentTarget.style.transform="none";}}>
    <div style={{padding:"10px 14px",display:"flex",alignItems:"center",gap:7,borderBottom:"1px solid rgba(255,255,255,0.06)",background:`linear-gradient(135deg,${color}15,transparent)`}}>
      <span style={{color,display:"flex"}}>{icon}</span>
      <span style={{fontWeight:700,fontSize:12,color:"#E2E8F0",letterSpacing:"0.03em",textTransform:"uppercase",flex:1}}>{title}</span>
      {onClick&&<span style={{color:"#475569",fontSize:12}}>→</span>}
    </div>
    <div style={{padding:"10px 14px"}} onClick={e=>e.stopPropagation()}>{children}</div>
  </div>;
}

const ML = ({items}) => items.map((it,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 0",borderBottom:i<items.length-1?"1px solid rgba(255,255,255,0.04)":"none",fontSize:12,color:"#CBD5E1"}}>{it.dot&&<div style={{width:5,height:5,borderRadius:"50%",background:it.dot,flexShrink:0}}/>}{it.em&&<span style={{fontSize:13}}>{it.em}</span>}<span style={{flex:1}}>{it.t}</span>{it.r&&<span style={{fontSize:10,color:"#475569"}}>{it.r}</span>}{it.b&&<Badge t={it.b} c={it.bc}/>}</div>);

// ═══ APP ═══
export default function App() {
  const [s,setS]=useState(DEF);
  const [ok,setOk]=useState(false);
  const [pg,setPg]=useState("home");
  const [ii,setII]=useState("");
  const [ne,setNE]=useState(false);
  const [nd,setND]=useState("");
  const [tm,setTm]=useState(new Date());

  useEffect(()=>{ld().then(d=>{if(d)setS(p=>({...p,...d}));setOk(true)});const t=setInterval(()=>setTm(new Date()),60000);return()=>clearInterval(t)},[]);
  useEffect(()=>{if(ok)sv(s)},[s,ok]);

  const addI=()=>{if(!ii.trim())return;setS(st=>({...st,inbox:[...st.inbox,{id:Date.now(),text:ii.trim(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]}));setII("")};
  const rmI=id=>setS(st=>({...st,inbox:st.inbox.filter(i=>i.id!==id)}));
  const togT=id=>setS(st=>({...st,tasks:st.tasks.map(t=>t.id===id?{...t,status:t.status==="Done"?"Not Started":"Done"}:t)}));
  const svN=()=>{if(nd.trim())setS(st=>({...st,northStar:nd.trim()}));setNE(false)};

  const gr=tm.getHours()<12?"Good morning":tm.getHours()<17?"Good afternoon":"Good evening";
  const ds=tm.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});
  const op=s.tasks.filter(t=>t.status!=="Done");
  const p1=op.filter(t=>t.priority==="P1").length;
  const bk=()=>setPg("home");

  const pages={tasks:<TasksP s={s} set={setS} back={bk}/>,goals:<GoalsP s={s} set={setS} back={bk}/>,fitness:<FitP s={s} back={bk}/>,content:<ContentP s={s} back={bk}/>,phd:<PhdP s={s} back={bk}/>,ailab:<AiP s={s} back={bk}/>,products:<ProdsP s={s} back={bk}/>,people:<PeopleP s={s} back={bk}/>,journal:<JournalP s={s} back={bk}/>,travel:<TravelP s={s} set={setS} back={bk}/>};

  const wrap = ch => <div style={{minHeight:"100vh",background:"#0B1121",fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif",color:"#E2E8F0"}}>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <style>{`input::placeholder{color:rgba(148,163,184,0.5)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:3px}@keyframes f0{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes f1{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}@keyframes f2{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
    {ch}
  </div>;

  if(pg!=="home"&&pages[pg]) return wrap(pages[pg]);

  return wrap(<>
    {/* Header */}
    <div style={{position:"relative",overflow:"hidden",background:"linear-gradient(135deg,#0F172A 0%,#1E293B 40%,#134E4A 70%,#0F172A 100%)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"26px 18px 22px"}}>
      <div style={{position:"absolute",inset:0,overflow:"hidden",opacity:0.12}}>{[0,1,2].map(i=><div key={i} style={{position:"absolute",width:6+i*3,height:6+i*3,borderRadius:"50%",background:["#10B981","#3B82F6","#F59E0B"][i],left:`${20+i*25}%`,top:`${25+(i%2)*30}%`,animation:`f${i} ${3+i}s ease-in-out infinite`}}/>)}</div>
      <div style={{position:"relative",maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:14}}>
        <div><h1 style={{fontSize:24,fontWeight:700,margin:0,background:"linear-gradient(135deg,#E2E8F0,#94A3B8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Rupesh's Life OS</h1><p style={{margin:"2px 0 0",fontSize:12,color:"#64748B"}}>Engineer · Creator · PhD Aspirant</p></div>
        <div style={{textAlign:"right"}}><div style={{fontSize:12,color:"#64748B"}}>{gr}, Rupesh</div><div style={{fontSize:13,fontWeight:600,color:"#94A3B8"}}>{ds}</div><div style={{fontSize:11,color:"#475569",marginTop:2}}>{p1} P1 · {s.inbox.length} inbox · {op.length} open</div></div>
      </div>
    </div>

    {/* Grid */}
    <div style={{maxWidth:1200,margin:"0 auto",padding:"14px 12px 32px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:11}}>

        {/* North Star */}
        <Card title="Today's North Star" icon={Ico.target} color="#EF4444" span={2}>
          {ne?<div style={{display:"flex",gap:6}}><input value={nd} onChange={e=>setND(e.target.value)} onKeyDown={e=>e.key==="Enter"&&svN()} autoFocus style={{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"7px 10px",color:"#E2E8F0",fontSize:13,outline:"none"}} placeholder="The ONE thing..."/><button onClick={svN} style={{background:"#EF4444",border:"none",borderRadius:8,padding:"7px 14px",color:"#fff",fontWeight:600,fontSize:12,cursor:"pointer"}}>Set</button></div>
          :<div onClick={()=>{setNE(true);setND(s.northStar)}} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}}><span style={{color:"#EF4444",fontSize:18}}>◆</span><span style={{fontSize:15,fontWeight:600,color:"#F1F5F9",flex:1}}>{s.northStar}</span><span style={{fontSize:10,color:"#475569"}}>edit</span></div>}
        </Card>

        {/* Inbox */}
        <Card title="Quick Capture" icon={Ico.inbox} color="#F59E0B">
          <div style={{display:"flex",gap:5}}><input value={ii} onChange={e=>setII(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addI()} placeholder="Add idea / note..." style={{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"7px 10px",color:"#E2E8F0",fontSize:12,outline:"none"}}/><button onClick={addI} style={{background:"#F59E0B",border:"none",borderRadius:8,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#0B1121"}}>{Ico.plus}</button></div>
          {s.inbox.length>0?<div style={{marginTop:6,maxHeight:80,overflowY:"auto"}}>{s.inbox.map(it=><div key={it.id} style={{display:"flex",alignItems:"center",gap:5,padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11,color:"#94A3B8"}}><span style={{flex:1}}>{it.text}</span><button onClick={()=>rmI(it.id)} style={{background:"none",border:"none",color:"#EF4444",cursor:"pointer",fontSize:13,padding:1}}>×</button></div>)}</div>:<p style={{fontSize:11,color:"#475569",margin:"6px 0 0"}}>Inbox clear ✓</p>}
        </Card>

        {/* Tasks */}
        <Card title={`Tasks (${op.length} open)`} icon={Ico.check} color="#3B82F6" onClick={()=>setPg("tasks")} span={2}>
          {s.tasks.slice(0,5).map(t=><div key={t.id} onClick={e=>{e.stopPropagation();togT(t.id)}} style={{display:"flex",alignItems:"center",gap:7,padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.04)",opacity:t.status==="Done"?.4:1,cursor:"pointer"}}><div style={{width:15,height:15,borderRadius:4,flexShrink:0,border:t.status==="Done"?"none":`2px solid ${PC[t.priority]}`,background:t.status==="Done"?"#10B981":"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{t.status==="Done"&&<span style={{color:"#fff",fontSize:8}}>✓</span>}</div><span style={{flex:1,fontSize:12,color:"#E2E8F0",textDecoration:t.status==="Done"?"line-through":"none"}}>{t.text}</span><Badge t={t.priority} c={PC[t.priority]}/></div>)}
          {s.tasks.length>5&&<div style={{fontSize:10,color:"#475569",marginTop:4}}>+{s.tasks.length-5} more →</div>}
        </Card>

        {/* Agenda */}
        <Card title="Daily Agenda" icon={Ico.cal} color="#8B5CF6">
          <ML items={[{em:"💼",t:"Work at VPE Thermal",r:"7:30 AM"},{em:"🏋️",t:"Gym — Upper Push",r:"5:30 PM"},{em:"✏️",t:"Content scripting",r:"8:00 PM"}]}/>
        </Card>

        {/* Goals */}
        <Card title="Active Goals" icon={Ico.flag} color="#F97316" onClick={()=>setPg("goals")}>
          {s.goals.slice(0,3).map(g=><div key={g.id} style={{marginBottom:7}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontSize:11,color:"#CBD5E1"}}>{g.text}</span><span style={{fontSize:10,color:DC[g.domain],fontWeight:600}}>{g.progress}%</span></div><PBar v={g.progress} c={DC[g.domain]} h={5}/></div>)}
        </Card>

        {/* Fitness */}
        <Card title="Fitness & Health" icon={Ico.dumbbell} color="#10B981" onClick={()=>setPg("fitness")}>
          <ML items={[{em:"🏋️",t:"Gym: 3x / Week"},{em:"🏃",t:"Run: 1x / Week"},{em:"🤸",t:`Muscle-Up: ${s.fitness.skills[0].pct}%`}]}/>
        </Card>

        {/* Finance */}
        <Card title="Finance" icon={Ico.dollar} color="#06B6D4">
          <ML items={[{em:"🎯",t:"Savings: $12,000"},{em:"📈",t:"Investments: On Track"},{em:"💳",t:"Expenses: Under Budget"}]}/>
        </Card>

        {/* Content */}
        <Card title={`Content (${s.content.length})`} icon={Ico.video} color="#8B5CF6" onClick={()=>setPg("content")}>
          {s.content.slice(0,3).map(c=><div key={c.id} style={{display:"flex",alignItems:"center",gap:5,padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}><span style={{flex:1,fontSize:12,color:"#CBD5E1"}}>{c.title}</span><Badge t={c.status} c={SC[c.status]}/></div>)}
        </Card>

        {/* PhD */}
        <Card title="PhD & Research" icon={Ico.grad} color="#EC4899" onClick={()=>setPg("phd")}>
          <ML items={[{dot:"#10B981",t:`${s.phd.programs.filter(p=>p.fit==="Strong").length} strong-fit programs`},{dot:"#3B82F6",t:`${s.phd.papers.length} papers queued`},{dot:"#F59E0B",t:`Research: ${s.phd.research.status}`}]}/>
        </Card>

        {/* AI Lab */}
        <Card title="AI Lab" icon={Ico.cpu} color="#F59E0B" onClick={()=>setPg("ailab")}>
          <ML items={[{dot:"#10B981",t:`${s.aiLab.filter(a=>a.status==="Integrated").length} integrated`},{dot:"#3B82F6",t:`${s.aiLab.filter(a=>a.status==="Exploring").length} exploring`},{dot:"#6B7280",t:`${s.aiLab.filter(a=>a.status==="To Explore").length} to explore`}]}/>
        </Card>

        {/* Products */}
        <Card title="Products" icon={Ico.pkg} color="#F97316" onClick={()=>setPg("products")}>
          {s.products.slice(0,3).map(p=><div key={p.id} style={{display:"flex",alignItems:"center",gap:5,padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}><span style={{flex:1,fontSize:12,color:"#CBD5E1"}}>{p.name}</span><Badge t={p.status} c={SC[p.status]}/><span style={{fontSize:11,fontWeight:700,color:"#F97316"}}>{p.imp+p.ease+p.sig}</span></div>)}
        </Card>

        {/* Habits */}
        <Card title="Habits" icon={Ico.spark} color="#10B981">
          {[{l:"Exercise",v:s.fitness.habits.exercise,c:"#10B981"},{l:"Water",v:s.fitness.habits.water,c:"#06B6D4"},{l:"Sleep",v:s.fitness.habits.sleep,c:"#8B5CF6"},{l:"Stretch",v:s.fitness.habits.stretch,c:"#F59E0B"}].map((h,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:7,marginBottom:5}}><span style={{fontSize:11,color:"#94A3B8",width:50}}>{h.l}</span><div style={{display:"flex",gap:2,flex:1}}>{Array.from({length:7},(_,j)=><div key={j} style={{height:7,flex:1,borderRadius:3,background:j<h.v?h.c:"rgba(255,255,255,0.06)"}}/>)}</div><span style={{fontSize:10,color:h.c,fontWeight:600,width:22,textAlign:"right"}}>{h.v}/7</span></div>)}
        </Card>

        {/* People */}
        <Card title="Reminders" icon={Ico.heart} color="#EF4444" onClick={()=>setPg("people")}>
          <ML items={[{em:"🎂",t:"Mom's Birthday in 2 Days"},{em:"👥",t:"Meet Anil this Weekend"}]}/>
        </Card>

        {/* Travel */}
        <Card title="Travel" icon={Ico.plane} color="#14B8A6" onClick={()=>setPg("travel")}>
          {s.travel.trips.filter(t=>t.status!=="Completed").slice(0,2).map(t=><div key={t.id} style={{display:"flex",alignItems:"center",gap:5,padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}><span style={{flex:1,fontSize:12,color:"#CBD5E1"}}>{t.name}</span><Badge t={t.status} c={SC[t.status]}/></div>)}
          <div style={{marginTop:6,fontSize:11,color:"#14B8A6"}}>✈ {s.travel.wishlist.length} places on wishlist · Fund: ${s.travel.savings.current.toLocaleString()}</div>
        </Card>

        {/* Journal */}
        <Card title="Journal" icon={Ico.book} color="#8B5CF6" onClick={()=>setPg("journal")}>
          {s.journal.length>0?<div><div style={{fontSize:12,color:"#E2E8F0",fontWeight:600}}>{s.journal[s.journal.length-1].entry}</div><div style={{fontSize:10,color:"#475569",marginTop:2}}>{s.journal[s.journal.length-1].date} · {s.journal[s.journal.length-1].mood}</div></div>:<div style={{fontSize:11,color:"#475569"}}>No entries</div>}
        </Card>

        {/* Links */}
        <Card title="Quick Links" icon={Ico.link} color="#64748B">
          <ML items={[{t:"shrestharupesh.com",r:"→"},{t:"GitHub Portfolio",r:"→"},{t:"AI Prompt Library",r:"→"},{t:"Google Calendar",r:"→"},{t:"Finance OS (Excel)",r:"→"}]}/>
        </Card>

      </div>
      <div style={{textAlign:"center",marginTop:24,padding:"12px 0",borderTop:"1px solid rgba(255,255,255,0.05)"}}><p style={{fontSize:11,color:"#475569",margin:0}}>Rupesh's Life OS · v1.0 · Built for clarity, not perfection</p></div>
    </div>
  </>);
}
