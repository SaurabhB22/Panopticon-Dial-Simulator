const INDIA_DATA = {
  population: 1440000000,
  frtSystems: 126,
  frtSpend_cr: 1499,
  aadhaarCoverage: 1400000000,
  natgridQueriesMonth: 45000,
  frtFalsePosBaseline: 15,
  cctvMarket2023_usd_mn: 4379,
  cctvCAGR: 16.69,
  cities: [
    {name:"Delhi",    cams:300000, crime:1952, frt:true,  pop_l:330, rapeK:1.088},
    {name:"Hyderabad",cams:75000,  crime:820,  frt:true,  pop_l:100, rapeK:0.3},
    {name:"Mumbai",   cams:50000,  crime:680,  frt:true,  pop_l:205, rapeK:0.196},
    {name:"Chennai",  cams:30000,  crime:310,  frt:false, pop_l:87,  rapeK:0.08},
    {name:"Bengaluru",cams:22000,  crime:870,  frt:true,  pop_l:125, rapeK:0.22},
    {name:"Lucknow",  cams:18000,  crime:1140, frt:true,  pop_l:36,  rapeK:0.18},
    {name:"Kolkata",  cams:8000,   crime:210,  frt:false, pop_l:150, rapeK:0.04},
    {name:"Jaipur",   cams:12000,  crime:890,  frt:true,  pop_l:38,  rapeK:0.573},
  ],
  spending: [
    {label:"NATGRID",          val:3000},
    {label:"State FRT systems", val:1499},
    {label:"Smart City CCTV",   val:8200},
    {label:"DigiYatra airports",val:420},
    {label:"Border surveillance",val:2100},
  ],
  laws: [
    {name:"Puttaswamy v. UoI (2017)",status:"safeguard",desc:"SC declares privacy a fundamental right. Surveillance must be necessary, proportionate, and have legal backing."},
    {name:"IT Act 69 (2000/2008)",status:"risk",desc:"Allows govt to intercept/monitor any digital traffic for vague 'national security' reasons. No judicial warrant needed."},
    {name:"DPDP Act 2023",status:"partial",desc:"First data protection law but §17 exempts any govt agency citing 'national interest'. No independent DPA yet."},
    {name:"Aadhaar Act 2016",status:"partial",desc:"Covers UIDAI-held data but 1.4B biometric records accessible to agencies. 2019 breach exposed millions of records."},
    {name:"NATGRID (exec order)",status:"risk",desc:"Operates without statutory framework. No FIR needed to access financial, travel, telecoms data. ~15% FPR acknowledged internally."},
    {name:"UAPA / NSA",status:"risk",desc:"Used to detain activists, journalists, minorities on surveillance-derived evidence. Bail extremely difficult once invoked."},
    {name:"No wiretap warrant req.",status:"risk",desc:"Unlike EU/US, India has no judicial pre-authorisation for telecom surveillance. Home Secretary can self-authorise."},
  ],
};
const EV_THREAT = [
  {t:"Suspect flagged via FRT",  loc:"Delhi Metro",     src:"DIALS-FRT"},
  {t:"Terror finance link found",loc:"Mumbai",          src:"NATGRID"},
  {t:"Wanted criminal located",  loc:"Hyderabad",       src:"CAM-network"},
  {t:"Drug network disrupted",   loc:"Bengaluru",       src:"CCTNS"},
  {t:"Cross-border movement flagged",loc:"Punjab border",src:"BSF-CCTV"},
  {t:"Kidnapping prevented",     loc:"Lucknow",         src:"UP-surveillance"},
  {t:"Vehicle theft ring broken",loc:"Delhi",           src:"ANPR"},
  {t:"Bomb threat defused",      loc:"Chennai airport", src:"DigiYatra-AI"},
  {t:"Naxal sympathiser traced", loc:"Chhattisgarh",    src:"IB-intercept"},
  {t:"Explosive carrier detected",loc:"Delhi IGI",      src:"CISF-FRT"},
];
const EV_INNOCENT = [
  {t:"Citizen #{Math.floor(1000 + Math.random()*9000)} flagged for critical social media post", loc:"Kanpur",src:"Target-Monitor"},
  {t:"Aadhaar suspended for user #{Math.floor(1000 + Math.random()*9000)} due to low trust score", loc:"Odisha", src:"UIDAI-Grid"},
  {t:"Farmer protest attendee flagged — passport cancelled", loc:"Punjab",      src:"FRT-protest-scan"},
  {t:"Wrong-person arrest — tribal man, 3-day detention",    loc:"Jharkhand",   src:"FRT-mismatch"},
  {t:"Journalist communications intercepted",                loc:"Delhi",       src:"IT-Act-§69"},
  {t:"Muslim man misidentified — detained 6 hrs",            loc:"Mumbai",      src:"FRT-bias"},
  {t:"Activist added to NATGRID watchlist without FIR",      loc:"Bengaluru",   src:"NATGRID"},
  {t:"Aadhaar biometric cloned — fraudulent withdrawal",     loc:"UP",          src:"UIDAI-breach"},
  {t:"Dalit woman flagged for 'abnormal movement pattern'",  loc:"Chennai",     src:"AI-behaviour"},
  {t:"Union organiser location tracked — employer notified", loc:"Gurugram",    src:"telecom-intercept"},
  {t:"Asylum seeker biometrics retained indefinitely",       loc:"Delhi",       src:"FRRO"},
  {t:"Student detained — library search history flagged",    loc:"Hyderabad",   src:"ISP-intercept"},
  {t:"Lawyer-lient call intercepted under §69",             loc:"Lucknow",     src:"IT-Act-§69"},
  {t:"Opposition MP travel data accessed without warrant",   loc:"Parliament",  src:"NATGRID"},
  {t:"Dark-skinned woman — 3 false FRT stops in one week",   loc:"Kolkata",     src:"FRT-bias"},
  {t:"Pegasus-style spyware found on journalist's phone",    loc:"New Delhi",   src:"NSO-equiv"},
  {t:"Minority neighbourhood — 4x police AI dispatch rate",  loc:"Meerut",      src:"predictive-AI"},
];
const EV_NEUTRAL = [
  {t:"Routine FRT calibration — sector 4",    loc:"Delhi",    src:"SYS"},
  {t:"NATGRID nightly data sync complete",    loc:"National", src:"NATGRID"},
  {t:"Camera node reconnected",               loc:"Mumbai",   src:"CAM-net"},
  {t:"Audit log encrypted and archived",      loc:"System",   src:"CCTNS"},
  {t:"ANPR database updated",                 loc:"UP",       src:"Traffic-AI"},
];
let dial=50, threatsT=0, innocentsT=0, running=false, tickN=0;
let prevM=null;
let trendFPR=[], trendCLI=[], trendDE=[];
const TMAX=80;
let popDots=[];
const PDOTS=180;
let activeTab='feed';

function startSim(){
  const el=document.getElementById('intro');
  el.style.opacity='0';
  setTimeout(()=>el.style.display='none',700);
  running=true;
}

function updateClock(){
  document.getElementById('clock').textContent=new Date().toTimeString().slice(0,8);
}
setInterval(updateClock,1000); updateClock();

function initPop(){
  const g=document.getElementById('popGrid'); g.innerHTML=''; popDots=[];
  for(let i=0;i<PDOTS;i++){
    const d=document.createElement('div'); d.className='pdot'; g.appendChild(d); popDots.push(d);
  }
}
initPop();

function updatePop(v){
  const w=Math.floor((v/100)*PDOTS*.65);
  const f=Math.floor((v/100)*(v/100)*PDOTS*.18);
  popDots.forEach((d,i)=>{
    d.className='pdot'+(i<f?' f':i<w?' w':'');
  });
}

function setTab(id,el){
  activeTab=id;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.rpanel').forEach(p=>p.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('tab-'+id).classList.add('show');
}

const dcanvas=document.getElementById('dialCanvas');
const dctx=dcanvas.getContext('2d');

function drawDial(v){
  const W=260,H=260,cx=130,cy=134,R=102,r=82;
  dctx.clearRect(0,0,W,H);
  const sa=Math.PI*.75, ea=Math.PI*2.25, arc=ea-sa;
  const fa=sa+(v/100)*arc;

  dctx.beginPath(); dctx.arc(cx,cy,R,sa,ea);
  dctx.strokeStyle='#162022'; dctx.lineWidth=16; dctx.lineCap='butt'; dctx.stroke();

  const gr=dctx.createLinearGradient(cx-R,cy,cx+R,cy);
  gr.addColorStop(0,'#0a3d05'); gr.addColorStop(.35,'#7a4510'); gr.addColorStop(1,'#5a0f0f');
  dctx.beginPath(); dctx.arc(cx,cy,R,sa,fa);
  dctx.strokeStyle=gr; dctx.lineWidth=16; dctx.lineCap='round'; dctx.stroke();

  for(let t=0;t<=20;t++){
    const a=sa+(t/20)*arc, maj=t%4===0;
    const len=maj?12:6, r1=R+10, r2=R+10+len;
    dctx.beginPath();
    dctx.moveTo(cx+r1*Math.cos(a),cy+r1*Math.sin(a));
    dctx.lineTo(cx+r2*Math.cos(a),cy+r2*Math.sin(a));
    dctx.strokeStyle=maj?'#2d5058':'#1a3038'; dctx.lineWidth=maj?1.5:1; dctx.stroke();
  }

  const na=sa+(v/100)*arc;
  const nx=cx+(r-10)*Math.cos(na), ny=cy+(r-10)*Math.sin(na);
  const ncol=v>65?'#ff4444':v<35?'#22dd0a':'#f0a010';
  dctx.shadowColor=ncol; dctx.shadowBlur=14;
  dctx.beginPath(); dctx.moveTo(cx,cy); dctx.lineTo(nx,ny);
  dctx.strokeStyle='#b8cdd0'; dctx.lineWidth=1.8; dctx.lineCap='round'; dctx.stroke();
  dctx.shadowBlur=0;

  dctx.beginPath(); dctx.arc(cx,cy,5,0,Math.PI*2);
  dctx.fillStyle='#b8cdd0'; dctx.fill();

  dctx.font='8px IBM Plex Mono';
  [
    {a:sa+arc*.08,t:'MINIMAL',c:'#0a3d05'},
    {a:sa+arc*.5, t:'WATCH',  c:'#6a4508'},
    {a:sa+arc*.92,t:'TOTAL',  c:'#5a0f0f'},
  ].forEach(z=>{
    const lx=cx+(R+32)*Math.cos(z.a), ly=cy+(R+32)*Math.sin(z.a);
    dctx.fillStyle=z.c; dctx.textAlign='center'; dctx.textBaseline='middle';
    dctx.fillText(z.t,lx,ly);
  });
}

function metrics(v){
  const s=v/100;
  const fpr=Math.round(15+s*s*62+s*8);
  const cli=Math.round(Math.max(3,100-s*88));
  const de=Math.round(18+s*58-s*s*20);
  const ce=Math.round(s*s*72+s*8);
  const mb=parseFloat((1+s*s*3.2+s*.8).toFixed(1));
  const st=Math.round(Math.max(4,92-s*68-s*s*18));
  return {fpr,cli,de,ce,mb,st};
}

function policyName(v){
  if(v<8)  return 'Minimal Oversight';
  if(v<20) return 'Community Policing';
  if(v<33) return 'Targeted Warrants';
  if(v<47) return 'Passive Monitoring';
  if(v<58) return 'Balanced Watch';
  if(v<68) return 'Enhanced Surveillance';
  if(v<78) return 'Mass Collection';
  if(v<88) return 'Social Credit Tier';
  return 'Total Panopticon';
}
function verdictText(v){
  if(v<15) return 'MINIMAL-REACTIVE POLICING-LOW DETECTION';
  if(v<30) return 'TARGETED-WARRANT-BASED-JUDICIAL OVERSIGHT';
  if(v<50) return 'BALANCED POLICY-PASSIVE WATCH-MODERATE RISK';
  if(v<65) return 'PROACTIVE SURVEILLANCE-RIGHTS EROSION RISK';
  if(v<80) return 'MASS COLLECTION-NATGRID SCALE-HIGH ABUSE RISK';
  return 'TOTAL CONTROL-AUTHORITARIAN-PUTTASWAMY VIOLATED';
}
function verdictColor(v){
  return v<30?'#22dd0a':v<55?'#f0a010':'#ff4444';
}

function renderMetricsLeft(m){
  const rows=[
    {n:'False positive rate', v:m.fpr+'%',  pct:Math.min(m.fpr,100), c:m.fpr>40?'#ff4444':m.fpr>20?'#f0a010':'#22dd0a'},
    {n:'Detection efficacy',  v:m.de+'%',   pct:m.de,                c:'#18b8c8'},
    {n:'Civil liberty index', v:m.cli+'%',  pct:m.cli,               c:m.cli<30?'#ff4444':'#22dd0a'},
    {n:'Chilling effect',     v:m.ce+'%',   pct:m.ce,                c:m.ce>50?'#ff4444':'#f0a010'},
    {n:'Minority bias',       v:m.mb+'×',   pct:Math.min((m.mb-1)/4*100,100),c:'#ff9933'},
    {n:'Public trust',        v:m.st+'%',   pct:m.st,                c:m.st<35?'#ff4444':'#22dd0a'},
  ];
  document.getElementById('metricsLeft').innerHTML=rows.map(r=>`
    <div class="mrow"><span class="mname">${r.n}</span><span class="mval" style="color:${r.c}">${r.v}</span></div>
    <div class="mbar"><div class="mbar-fill" style="width:${r.pct}%;background:${r.c}"></div></div>`).join('');
}

function renderIndiaData(){
  const rows=[
    {l:'FRT systems deployed',     v:'126',         c:'var(--saffron)'},
    {l:'FRT spend (₹ crore)',       v:'₹1,499',      c:'var(--saffron)'},
    {l:'Aadhaar coverage',         v:'1.4B',         c:'var(--amber)'},
    {l:'NATGRID queries/month',    v:'45,000',       c:'var(--cyan)'},
    {l:'CCTV market 2023 (USD)',    v:'$4.38B',       c:'var(--text2)'},
    {l:'CCTV CAGR 2024-32',        v:'16.7%',        c:'var(--green-bright)'},
    {l:'Delhi crime rate/1L',      v:'1,952',        c:'var(--red-bright)'},
    {l:'Delhi crimes vs women \'23',v:'13,366',      c:'var(--red-bright)'},
    {l:'Mumbai conviction rate',   v:'15.3%',        c:'var(--amber)'},
    {l:'FRT false position baseline',  v:'~15%',         c:'var(--red-bright)'},
    {l:'No data protection DPA',   v:'✗',            c:'var(--red-bright)'},
    {l:'Warrant needed for wiretap',v:'✗',           c:'var(--red-bright)'},
  ];
  document.getElementById('indiaData').innerHTML=rows.map(r=>`
    <div class="datarow"><span class="drlabel">${r.l}</span><span class="drval" style="color:${r.c}">${r.v}</span></div>`).join('');
}

function renderLevers(v){
  const levers=[
    {l:'CCTV + ANPR network',         on:v>5,  src:'Smart City Mission'},
    {l:'Facial recognition (FRT)',     on:v>20, src:'126 systems, ₹1499Cr'},
    {l:'Aadhaar biometric link',       on:v>15, src:'1.4B enrolled'},
    {l:'NATGRID data aggregation',     on:v>30, src:'45k queries/month'},
    {l:'IT Act §69 intercept',         on:v>35, src:'No warrant required'},
    {l:'DigiYatra airport FRT',        on:v>25, src:'All major airports'},
    {l:'Predictive policing AI',       on:v>55, src:'Hyderabad, UP, Delhi'},
    {l:'Social media monitoring',      on:v>40, src:'MHA directive'},
    {l:'Gait & behaviour analytics',   on:v>65, src:'SFLC.in report'},
    {l:'Political dissent profiling',  on:v>70, src:'Pegasus precedent'},
    {l:'NPR ↔ NATGRID integration',    on:v>80, src:'1.2B citizen profiles'},
    {l:'Warrant-free bulk retention',  on:v>85, src:'DPDP §17 exemption'},
  ];
  document.getElementById('policyLevers').innerHTML=levers.map(l=>`
    <div class="lever">
      <div class="lled ${l.on?'on':'off'}"></div>
      <span class="${l.on?'lon':'loff'}">${l.l}</span>
      ${l.on?`<span class="lbadge" style="background:var(--border2);color:var(--text3)">${l.src}</span>`:''}
    </div>`).join('');

  const maxSpend=INDIA_DATA.spending.reduce((a,b)=>a+b.val,0);
  document.getElementById('spendingBars').innerHTML=INDIA_DATA.spending.map(s=>`
    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px">
        <span style="color:var(--text2)">${s.label}</span>
        <span style="color:var(--saffron)">₹${s.val.toLocaleString()}Cr</span>
      </div>
      <div class="mbar"><div class="mbar-fill" style="width:${(s.val/maxSpend*100).toFixed(0)}%;background:var(--saffron-dim)"></div></div>
    </div>`).join('');
}

function renderCities(){
  document.getElementById('cityStats').innerHTML=INDIA_DATA.cities.map(c=>`
    <div class="datarow">
      <span class="drlabel">${c.name} ${c.frt?'<span style="color:var(--saffron);font-size:8px">●FRT</span>':''}</span>
      <span class="drval" style="color:var(--text2)">${(c.cams/1000).toFixed(0)}k cams</span>
    </div>`).join('');
  document.getElementById('crimeStats').innerHTML=INDIA_DATA.cities.map(c=>{
    const col=c.crime>1500?'#ff4444':c.crime>800?'#f0a010':'#22dd0a';
    return`<div class="datarow">
      <span class="drlabel">${c.name}</span>
      <span class="drval" style="color:${col}">${c.crime.toLocaleString()}</span>
    </div>`;}).join('');
}

function renderLegal(){
  const statusColor={safeguard:'#22dd0a',risk:'#ff4444',partial:'#f0a010'};
  const statusLabel={safeguard:'SAFEGUARD',risk:'RISK',partial:'PARTIAL'};
  document.getElementById('legalPanel').innerHTML=INDIA_DATA.laws.map(l=>`
    <div style="padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <span style="font-size:10px;font-weight:600;color:var(--text)">${l.name}</span>
        <span style="font-size:8px;padding:1px 6px;border-radius:2px;background:${statusColor[l.status]}18;color:${statusColor[l.status]}">${statusLabel[l.status]}</span>
      </div>
      <div style="font-size:9px;color:var(--text2);line-height:1.5">${l.desc}</div>
    </div>`).join('');
}

function renderFooter(m){
  const s=(id,val,col,d)=>{
    document.getElementById(id).textContent=val;
    if(col)document.getElementById(id).style.color=col;
    if(d)document.getElementById(id+'d').textContent=d;
  };
  s('fFPR',m.fpr+'%', m.fpr>40?'#ff4444':m.fpr>20?'#f0a010':'#22dd0a', `India FRT baseline: ~15%`);
  s('fCLI',m.cli+'%', m.cli<30?'#ff4444':'#22dd0a', 'Puttaswamy standard');
  s('fDE', m.de+'%',  '#18b8c8', 'NATGRID benchmark');
  s('fCE', m.ce+'%',  m.ce>50?'#ff4444':'#f0a010', 'protest deterrence');
  s('fMB', m.mb+'×',  '#ff9933', 'IFF 2023 finding');
  s('fST', m.st+'%',  m.st<35?'#ff4444':'#22dd0a', 'institutional confidence');
}

function drawTrend(){
  const wrap=document.getElementById('trendWrap');
  if(!wrap)return;
  const tc=document.getElementById('trendCanvas');
  const W=wrap.clientWidth-28, H=wrap.clientHeight-20;
  if(W<=0||H<=0)return;
  tc.width=W; tc.height=H;
  const ctx=tc.getContext('2d');
  ctx.clearRect(0,0,W,H);
  if(trendFPR.length<2)return;

  ctx.strokeStyle='#162022'; ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    ctx.beginPath(); ctx.moveTo(0,(i/4)*H); ctx.lineTo(W,(i/4)*H); ctx.stroke();
  }

  ctx.font='7px IBM Plex Mono'; ctx.fillStyle='#2d5058';
  ['FPR','CLI','DE'].forEach((l,i)=>{
    ctx.fillStyle=['#5a0f0f','#0a3d05','#0a4850'][i];
    ctx.fillText(l,4,12+i*10);
  });

  const draw=(data,col)=>{
    ctx.beginPath();
    data.forEach((v,i)=>{
      const x=(i/(TMAX-1))*W, y=H-(v/100)*H;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.strokeStyle=col; ctx.lineWidth=1.2; ctx.stroke();
  };
  draw(trendFPR,'#5a0f0f');
  draw(trendCLI,'#0a3d05');
  draw(trendDE, '#0a4850');
}

function addEvent(type,ev){
  const feed=document.getElementById('eventFeed');
  const now=new Date().toTimeString().slice(0,8);
  const col=type==='threat'?'#22dd0a':type==='innocent'?'#ff4444':'#2d5058';
  const tagCol=type==='threat'?'background:#0a3d05;color:#22dd0a':
               type==='innocent'?'background:#5a0f0f;color:#ff4444':
               'background:#162022;color:#2d5058';
  const item=document.createElement('div');
  item.className='feed-item';
  item.innerHTML=`
    <div class="fdot" style="background:${col}"></div>
    <div class="ftime">${now}</div>
    <div class="fbody">
      <strong>${ev.t}</strong>
      <span class="ftag" style="${tagCol}">${ev.src}</span><br>
      <span style="font-size:9px;color:var(--text3)">${ev.loc}</span>
    </div>`;
  feed.insertBefore(item,feed.firstChild);
  if(feed.children.length>50)feed.removeChild(feed.lastChild);
}

function flash(t){
  const el=document.getElementById(t==='red'?'flR':'flG');
  el.style.opacity='1'; setTimeout(()=>el.style.opacity='0',180);
}

function tick(){
  if(!running)return;
  tickN++;
  const v=dial;
  const m=metrics(v);

  if(tickN%2===0){
    const n=()=>(Math.random()-.5)*4;
    trendFPR.push(Math.min(100,Math.max(0,m.fpr+n())));
    trendCLI.push(Math.min(100,Math.max(0,m.cli+n())));
    trendDE.push(Math.min(100,Math.max(0,m.de+n())));
    if(trendFPR.length>TMAX){trendFPR.shift();trendCLI.shift();trendDE.shift();}
    drawTrend();
  }

  const s=v/100;
  const threatRate=s*.5+.04;
  const innocentRate=s*s*.8+.015;

  if(Math.random()<threatRate*.28){
    threatsT++;
    document.getElementById('cThreats').textContent=threatsT.toLocaleString();
    addEvent('threat',EV_THREAT[Math.floor(Math.random()*EV_THREAT.length)]);
    flash('green');
  }
  if(Math.random()<innocentRate*.32){
    innocentsT++;
    document.getElementById('cInnocents').textContent=innocentsT.toLocaleString();
    addEvent('innocent',EV_INNOCENT[Math.floor(Math.random()*EV_INNOCENT.length)]);
    flash('red');
  }
  if(Math.random()<.07){
    addEvent('neutral',EV_NEUTRAL[Math.floor(Math.random()*EV_NEUTRAL.length)]);
  }

  if(Math.random()<innocentRate*.22&&v>20){
    const i=Math.floor(Math.random()*popDots.length);
    const old=popDots[i].className;
    popDots[i].className='pdot f';
    setTimeout(()=>popDots[i].className=old,500);
  }

  renderMetricsLeft(m);
  renderFooter(m);
}

document.getElementById('slider').addEventListener('input',function(){
  dial=+this.value;
  const m=metrics(dial);
  const col=dial<35?'#22dd0a':dial<65?'#f0a010':'#ff4444';

  drawDial(dial);
  const dv=document.getElementById('dval');
  dv.textContent=dial; dv.style.color=col;
  document.getElementById('dpolicy').textContent=policyName(dial);

  const vd=document.getElementById('verdict');
  vd.textContent=verdictText(dial);
  vd.style.color=verdictColor(dial);
  vd.style.borderColor=verdictColor(dial)+'38';

  document.getElementById('ssub').textContent=
    dial<15?'Reactive policing — FIR-based, judicial oversight required':
    dial<30?'Targeted surveillance — warrant-based NATGRID access only':
    dial<50?'Passive monitoring — CCTV + partial FRT, no bulk collection':
    dial<65?'Proactive — FRT active, NATGRID queries unrestricted':
    dial<80?'Mass collection — bulk data, behavioural AI, §69 intercepts':
    'Total control — NATGRID+NPR integration, no judicial check, UAPA-ready';

  updatePop(dial);
  renderLevers(dial);
  renderMetricsLeft(m);
  renderFooter(m);
  if(activeTab==='cities')renderCities();
});

drawDial(50);
document.getElementById('dval').textContent='50';
document.getElementById('dpolicy').textContent='Balanced Watch';
updatePop(50);
renderLevers(50);
renderIndiaData();
renderCities();
renderLegal();
renderMetricsLeft(metrics(50));
renderFooter(metrics(50));
addEvent('neutral',{t:'Simulator initialised — drag the dial to set national policy',loc:'National',src:'SYSTEM'});
addEvent('neutral',{t:'Data sourced: NCRB 2023-IFF-NATGRID-SFLC.in-IAPP 2026',loc:'National',src:'SOURCES'});

setInterval(tick,850);

window.addEventListener('resize',drawTrend);