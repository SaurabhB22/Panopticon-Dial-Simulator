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
    { name: "Delhi", cams: 300000, crime: 1952, frt: true, pop_l: 330, rapeK: 1.088 },
    { name: "Mumbai", cams: 50000, crime: 680, frt: true, pop_l: 205, rapeK: 0.196 },
    { name: "Bengaluru", cams: 22000, crime: 870, frt: true, pop_l: 125, rapeK: 0.22 },
    { name: "Hyderabad", cams: 75000, crime: 820, frt: true, pop_l: 100, rapeK: 0.30 },
    { name: "Chennai", cams: 30000, crime: 310, frt: false, pop_l: 87, rapeK: 0.08 },
    { name: "Kolkata", cams: 8000, crime: 210, frt: false, pop_l: 150, rapeK: 0.04 },
    { name: "Lucknow", cams: 18000, crime: 1140, frt: true, pop_l: 36, rapeK: 0.18 },
    { name: "Jaipur", cams: 12000, crime: 890, frt: true, pop_l: 38, rapeK: 0.573 },
    { name: "Ahmedabad", cams: 25000, crime: 520, frt: true, pop_l: 80, rapeK: 0.11 },
    { name: "Pune", cams: 20000, crime: 610, frt: true, pop_l: 75, rapeK: 0.12 },
    { name: "Surat", cams: 16000, crime: 390, frt: true, pop_l: 70, rapeK: 0.07 },
    { name: "Kanpur", cams: 14000, crime: 930, frt: true, pop_l: 45, rapeK: 0.19 },
    { name: "Nagpur", cams: 11000, crime: 560, frt: true, pop_l: 32, rapeK: 0.10 },
    { name: "Patna", cams: 9500, crime: 980, frt: false, pop_l: 28, rapeK: 0.16 },
    { name: "Bhopal", cams: 9000, crime: 740, frt: true, pop_l: 25, rapeK: 0.21 },
    { name: "Indore", cams: 10000, crime: 650, frt: true, pop_l: 32, rapeK: 0.13 },
    { name: "Chandigarh", cams: 8500, crime: 440, frt: true, pop_l: 12, rapeK: 0.09 },
    { name: "Kochi", cams: 7500, crime: 290, frt: false, pop_l: 20, rapeK: 0.04 },
    { name: "Visakhapatnam", cams: 12000, crime: 500, frt: true, pop_l: 22, rapeK: 0.08 },
    { name: "Thiruvananthapuram", cams: 7000, crime: 260, frt: false, pop_l: 15, rapeK: 0.03 },
    { name: "Guwahati", cams: 6500, crime: 420, frt: false, pop_l: 12, rapeK: 0.06 },
    { name: "Srinagar", cams: 14000, crime: 340, frt: true, pop_l: 14, rapeK: 0.04 }
  ],
  spending: [
    { label: "NATGRID", val: 3000 },
    { label: "State FRT Systems", val: 1499 },
    { label: "Smart City CCTV", val: 8200 },
    { label: "DigiYatra Airports", val: 420 },
    { label: "Border Surveillance", val: 2100 },
    { label: "CCTNS Network", val: 3500 },
    { label: "Cyber Crime Units", val: 1800 },
    { label: "Safe City Mission", val: 2900 },
    { label: "Women Safety Systems", val: 1200 },
    { label: "Railway Surveillance", val: 2400 },
    { label: "Coastal Security Network", val: 1600 },
    { label: "Drone Monitoring", val: 950 },
    { label: "Emergency Response Support", val: 1100 },
    { label: "AI Predictive Policing", val: 700 },
    { label: "National Data Centres", val: 4500 }
  ],
  laws: [
    {
      name: "Puttaswamy v. UoI (2017)",
      status: "safeguard",
      desc: "Supreme Court recognised privacy as a fundamental right under Article 21."
    },

    {
      name: "DPDP Act 2023",
      status: "partial",
      desc: "India's first major data protection law with government exemptions."
    },

    {
      name: "IT Act Section 69",
      status: "risk",
      desc: "Permits interception and monitoring of electronic communications."
    },

    {
      name: "Aadhaar Act 2016",
      status: "partial",
      desc: "Regulates Aadhaar ecosystem and biometric identity management."
    },

    {
      name: "NATGRID Framework",
      status: "risk",
      desc: "Aggregates travel, telecom and banking information for intelligence use."
    },

    {
      name: "UAPA",
      status: "risk",
      desc: "Counter-terror legislation with expanded surveillance powers."
    },

    {
      name: "NSA 1980",
      status: "risk",
      desc: "Preventive detention law often debated from a civil liberties perspective."
    },

    {
      name: "Telegraph Act 1885",
      status: "risk",
      desc: "Legacy interception framework still used for lawful monitoring."
    },

    {
      name: "Information Technology Rules 2021",
      status: "partial",
      desc: "Regulates intermediaries, digital platforms and content compliance."
    },

    {
      name: "CERT-In Directions 2022",
      status: "partial",
      desc: "Requires cybersecurity incident reporting and log retention."
    },

    {
      name: "CrPC Surveillance Powers",
      status: "risk",
      desc: "Various investigation provisions allow access to records and communications."
    },

    {
      name: "Digital India Act (Proposed)",
      status: "partial",
      desc: "Potential replacement for the IT Act with broader digital governance scope."
    },

    {
      name: "National Cyber Security Policy",
      status: "safeguard",
      desc: "Establishes cybersecurity standards and resilience objectives."
    },

    {
      name: "Personal Data Protection Bill (Historical)",
      status: "safeguard",
      desc: "Earlier drafts introduced stronger independent oversight mechanisms."
    },

    {
      name: "Right to Information Act 2005",
      status: "safeguard",
      desc: "Transparency mechanism balancing state power with public accountability."
    }
  ],
};
const EV_THREAT = [
  { t: "Suspect flagged via FRT", loc: "Delhi Metro", src: "DIALS-FRT" },
  { t: "Wanted criminal located", loc: "Mumbai Central", src: "CAM-network" },
  { t: "Drug trafficking route identified", loc: "Ahmedabad", src: "NATGRID" },
  { t: "Kidnapping prevented", loc: "Lucknow", src: "UP-surveillance" },
  { t: "Bomb threat neutralised", loc: "Delhi IGI Airport", src: "CISF-FRT" },
  { t: "Vehicle theft gang dismantled", loc: "Pune", src: "ANPR" },
  { t: "Cross-border infiltration detected", loc: "Jammu", src: "Border-AI" },
  { t: "Fake currency racket exposed", loc: "Kolkata", src: "Financial-Intel" },
  { t: "Explosive carrier detected", loc: "Chennai Airport", src: "DigiYatra-AI" },
  { t: "Arms smuggling network traced", loc: "Amritsar", src: "BSF-CCTV" },
  { t: "Terror finance transaction flagged", loc: "Mumbai", src: "NATGRID" },
  { t: "Cyber fraud ring uncovered", loc: "Hyderabad", src: "CyberCell" },
  { t: "Narcotics shipment intercepted", loc: "Visakhapatnam Port", src: "Port-Surveillance" },
  { t: "Human trafficking route identified", loc: "Patna", src: "Transit-AI" },
  { t: "Extortion gang leader located", loc: "Kanpur", src: "FRT-match" },
  { t: "Armed robbery suspect tracked", loc: "Jaipur", src: "City-CCTV" },
  { t: "Illegal weapon cache discovered", loc: "Nagpur", src: "Predictive-AI" },
  { t: "Prison escapee apprehended", loc: "Bhopal", src: "State-FRT" },
  { t: "Interstate gang movement detected", loc: "Indore", src: "ANPR" },
  { t: "Counterfeit passport network busted", loc: "Delhi Airport", src: "Immigration-FRT" },
  { t: "Suspicious border movement flagged", loc: "Punjab Border", src: "BSF-CCTV" },
  { t: "Drug cartel associate identified", loc: "Goa", src: "Tourist-Monitor" },
  { t: "Financial scam mastermind traced", loc: "Bengaluru", src: "Digital-Intel" },
  { t: "Child trafficking suspect arrested", loc: "Chandigarh", src: "FRT-network" },
  { t: "Organised crime vehicle tracked", loc: "Surat", src: "ANPR" },
  { t: "Illegal mining operation exposed", loc: "Ranchi", src: "Drone-Surveillance" },
  { t: "Smuggling vessel intercepted", loc: "Kochi Coast", src: "Coastal-Radar" },
  { t: "Fraudulent SIM network dismantled", loc: "Guwahati", src: "Telecom-Intel" },
  { t: "Arson suspect identified", loc: "Thiruvananthapuram", src: "City-CCTV" },
  { t: "Repeat offender located", loc: "Mysuru", src: "FRT-match" },
  { t: "Naxal movement detected", loc: "Chhattisgarh", src: "IB-intercept" },
  { t: "Illegal arms supplier tracked", loc: "Meerut", src: "NATGRID" },
  { t: "Cash laundering network exposed", loc: "Noida", src: "Financial-AI" },
  { t: "Cyber attack infrastructure identified", loc: "Pune", src: "CERT-In" },
  { t: "Hostage situation prevented", loc: "Bengaluru", src: "Emergency-AI" },
  { t: "Terror recruitment cell disrupted", loc: "Srinagar", src: "Counter-Terror" },
  { t: "Explosive material transport flagged", loc: "Guwahati", src: "Transit-AI" },
  { t: "Major burglary ring dismantled", loc: "Chennai", src: "Smart-CCTV" },
  { t: "Interstate fugitive arrested", loc: "Hyderabad", src: "FRT-network" },
  { t: "Suspicious drone activity intercepted", loc: "Jaipur", src: "Drone-Monitor" }

];
const EV_INNOCENT = [
  { t: "Farmer protest attendee flagged — passport cancelled", loc: "Punjab", src: "FRT-protest-scan" },
  { t: "Wrong-person arrest — tribal man detained 3 days", loc: "Jharkhand", src: "FRT-mismatch" },
  { t: "Journalist communications intercepted", loc: "Delhi", src: "IT-Act-69" },
  { t: "Muslim man misidentified and detained", loc: "Mumbai", src: "FRT-bias" },
  { t: "Activist added to watchlist without FIR", loc: "Bengaluru", src: "NATGRID" },
  { t: "Aadhaar biometric cloned for bank fraud", loc: "Lucknow", src: "UIDAI-breach" },
  { t: "Student detained after search-history alert", loc: "Hyderabad", src: "ISP-monitoring" },
  { t: "Union organiser location tracked", loc: "Gurugram", src: "Telecom-intercept" },
  { t: "Asylum seeker biometrics retained indefinitely", loc: "Delhi", src: "FRRO" },
  { t: "Lawyer-client call intercepted", loc: "Lucknow", src: "IT-Act-69" },
  { t: "Opposition politician travel records accessed", loc: "New Delhi", src: "NATGRID" },
  { t: "Dark-skinned woman repeatedly stopped by FRT", loc: "Kolkata", src: "FRT-bias" },
  { t: "Journalist phone infected with spyware", loc: "Delhi", src: "Spyware" },
  { t: "Minority neighbourhood over-policed by AI", loc: "Meerut", src: "Predictive-AI" },
  { t: "Teacher flagged for attending protest rally", loc: "Patna", src: "Crowd-analytics" },
  { t: "College student placed on monitoring list", loc: "Pune", src: "Social-media-AI" },
  { t: "Wrong vehicle owner investigated", loc: "Ahmedabad", src: "ANPR-error" },
  { t: "Biometric mismatch blocks welfare benefits", loc: "Bhopal", src: "Aadhaar-auth" },
  { t: "Doctor questioned over travel history", loc: "Chennai", src: "Data-linkage" },
  { t: "Researcher flagged by keyword monitoring", loc: "Bengaluru", src: "Content-scan" },
  { t: "Citizen denied airport access after false match", loc: "Mumbai Airport", src: "Airport-FRT" },
  { t: "Family profiled during religious gathering", loc: "Hyderabad", src: "Crowd-monitor" },
  { t: "Protest participant tracked after event", loc: "Kolkata", src: "Geo-fencing" },
  { t: "NGO worker added to risk database", loc: "Jaipur", src: "Predictive-AI" },
  { t: "Tourist questioned after mistaken identity", loc: "Goa", src: "FRT-mismatch" },
  { t: "Small business owner flagged by transaction analysis", loc: "Surat", src: "Financial-AI" },
  { t: "Journalist movement history collected", loc: "Chandigarh", src: "Telecom-data" },
  { t: "Student visa delayed after database error", loc: "Delhi", src: "Identity-linkage" },
  { t: "Retired citizen incorrectly marked suspicious", loc: "Nagpur", src: "Behaviour-AI" },
  { t: "Health worker profiled through mobility data", loc: "Kochi", src: "Location-tracking" },
  { t: "False gang affiliation generated by AI", loc: "Kanpur", src: "Predictive-AI" },
  { t: "Passenger detained after facial mismatch", loc: "Visakhapatnam", src: "Airport-FRT" },
  { t: "Civil rights advocate monitored online", loc: "Guwahati", src: "Social-monitor" },
  { t: "Religious leader subjected to extra screening", loc: "Srinagar", src: "Risk-engine" },
  { t: "Wrong Aadhaar linkage freezes account", loc: "Indore", src: "Identity-error" },
  { t: "Teacher travel history shared across agencies", loc: "Patna", src: "Data-sharing" },
  { t: "Community organiser tracked via mobile tower data", loc: "Ranchi", src: "Telecom-intel" },
  { t: "False alert triggers home visit", loc: "Noida", src: "Risk-scoring" },
  { t: "Student scholarship delayed by identity mismatch", loc: "Jaipur", src: "Aadhaar-auth" },
  { t: "Citizen repeatedly questioned due to name similarity", loc: "Amritsar", src: "Watchlist-error" },
  { t: "False positive causes train-travel disruption", loc: "Chandigarh", src: "Railway-monitor" },
  { t: "Wrong person linked to cybercrime case", loc: "Pune", src: "Digital-profile" },
  { t: "Resident flagged during festival surveillance", loc: "Varanasi", src: "Crowd-analytics" },
  { t: "Phone metadata retained beyond legal necessity", loc: "Mumbai", src: "Bulk-retention" },
  { t: "Citizen denied service after database mismatch", loc: "Ahmedabad", src: "Identity-link" },
  { t: "Young activist profiled through social network analysis", loc: "Delhi", src: "Network-AI" },
  { t: "False suspicious-travel alert generated", loc: "Kochi", src: "Transit-monitor" },
  { t: "Community volunteer added to risk category", loc: "Lucknow", src: "Predictive-model" },
  { t: "Public library user flagged by automated system", loc: "Hyderabad", src: "Search-monitor" },
  { t: "Incorrect facial recognition match leads to detention", loc: "Bengaluru", src: "FRT-error" }
];
const EV_NEUTRAL = [
  { t: "Routine FRT calibration completed", loc: "Delhi", src: "SYS" },
  { t: "NATGRID nightly data sync complete", loc: "National", src: "NATGRID" },
  { t: "Camera node reconnected", loc: "Mumbai", src: "CAM-net" },
  { t: "Audit log encrypted and archived", loc: "System", src: "CCTNS" },
  { t: "ANPR database updated", loc: "UP", src: "Traffic-AI" },
  { t: "Smart City CCTV maintenance cycle completed", loc: "Ahmedabad", src: "Smart-City" },
  { t: "Surveillance storage cluster expanded", loc: "Bengaluru", src: "Data-Centre" },
  { t: "Facial recognition model retrained", loc: "Hyderabad", src: "AI-Lab" },
  { t: "Traffic monitoring cameras updated", loc: "Chennai", src: "Traffic-Net" },
  { t: "Public safety dashboard refreshed", loc: "Kolkata", src: "Command-Centre" },
  { t: "Railway surveillance network synchronised", loc: "New Delhi", src: "Rail-Net" },
  { t: "Border camera firmware upgraded", loc: "Punjab Border", src: "BSF-CCTV" },
  { t: "Emergency response system tested", loc: "Lucknow", src: "ERSS" },
  { t: "Data retention policy reviewed", loc: "National", src: "Compliance" },
  { t: "Control room shift handover completed", loc: "Mumbai", src: "Ops-Centre" },
  { t: "Airport FRT checkpoint diagnostics complete", loc: "Delhi IGI", src: "DigiYatra" },
  { t: "Cyber monitoring dashboard updated", loc: "Pune", src: "CERT-In" },
  { t: "Drone surveillance battery replacement complete", loc: "Jaipur", src: "Drone-Net" },
  { t: "Predictive analytics server restarted", loc: "Bhopal", src: "AI-System" },
  { t: "State command centre connectivity restored", loc: "Patna", src: "Control-Net" },
  { t: "Coastal radar network health check complete", loc: "Kochi", src: "Coastal-Sec" },
  { t: "Public transport CCTV archive indexed", loc: "Chandigarh", src: "Transit-Net" },
  { t: "Surveillance operator training session concluded", loc: "Guwahati", src: "Training" },
  { t: "Biometric verification service updated", loc: "Visakhapatnam", src: "UIDAI-Link" },
  { t: "National threat-monitoring dashboard refreshed", loc: "National", src: "Monitoring" }
];
let dial = 50, threatsT = 0, innocentsT = 0, running = false, tickN = 0;
let prevM = null;
let trendFPR = [], trendCLI = [], trendDE = [];
const TMAX = 80;
let popDots = [];
const PDOTS = 180;
let activeTab = 'feed';

function startSim() {
  const el = document.getElementById('intro');
  el.style.opacity = '0';
  setTimeout(() => el.style.display = 'none', 700);
  running = true;
}

function updateClock() {
  document.getElementById('clock').textContent = new Date().toTimeString().slice(0, 8);
}
setInterval(updateClock, 1000); updateClock();

function initPop() {
  const g = document.getElementById('popGrid'); g.innerHTML = ''; popDots = [];
  for (let i = 0; i < PDOTS; i++) {
    const d = document.createElement('div'); d.className = 'pdot'; g.appendChild(d); popDots.push(d);
  }
}
initPop();

function updatePop(v) {
  const w = Math.floor((v / 100) * PDOTS * .65);
  const f = Math.floor((v / 100) * (v / 100) * PDOTS * .18);
  popDots.forEach((d, i) => {
    d.className = 'pdot' + (i < f ? ' f' : i < w ? ' w' : '');
  });
}

function setTab(id, el) {
  activeTab = id;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.rpanel').forEach(p => p.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('tab-' + id).classList.add('show');
  if (window.playClickSound) window.playClickSound();
}

const dcanvas = document.getElementById('dialCanvas');
const dctx = dcanvas.getContext('2d');

function drawDial(v) {
  const W = 260, H = 260, cx = 130, cy = 134, R = 102, r = 82;
  dctx.clearRect(0, 0, W, H);
  const sa = Math.PI * .75, ea = Math.PI * 2.25, arc = ea - sa;
  const fa = sa + (v / 100) * arc;

  dctx.beginPath(); dctx.arc(cx, cy, R, sa, ea);
  dctx.strokeStyle = '#162022'; dctx.lineWidth = 16; dctx.lineCap = 'butt'; dctx.stroke();

  const gr = dctx.createLinearGradient(cx - R, cy, cx + R, cy);
  gr.addColorStop(0, '#0a3d05'); gr.addColorStop(.35, '#7a4510'); gr.addColorStop(1, '#5a0f0f');
  dctx.beginPath(); dctx.arc(cx, cy, R, sa, fa);
  dctx.strokeStyle = gr; dctx.lineWidth = 16; dctx.lineCap = 'round'; dctx.stroke();

  for (let t = 0; t <= 20; t++) {
    const a = sa + (t / 20) * arc, maj = t % 4 === 0;
    const len = maj ? 12 : 6, r1 = R + 10, r2 = R + 10 + len;
    dctx.beginPath();
    dctx.moveTo(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a));
    dctx.lineTo(cx + r2 * Math.cos(a), cy + r2 * Math.sin(a));
    dctx.strokeStyle = maj ? '#2d5058' : '#1a3038'; dctx.lineWidth = maj ? 1.5 : 1; dctx.stroke();
  }

  const na = sa + (v / 100) * arc;
  const nx = cx + (r - 10) * Math.cos(na), ny = cy + (r - 10) * Math.sin(na);
  const ncol = v > 65 ? '#ff4444' : v < 35 ? '#22dd0a' : '#f0a010';
  dctx.shadowColor = ncol; dctx.shadowBlur = 14;
  dctx.beginPath(); dctx.moveTo(cx, cy); dctx.lineTo(nx, ny);
  dctx.strokeStyle = '#b8cdd0'; dctx.lineWidth = 1.8; dctx.lineCap = 'round'; dctx.stroke();
  dctx.shadowBlur = 0;

  dctx.beginPath(); dctx.arc(cx, cy, 5, 0, Math.PI * 2);
  dctx.fillStyle = '#b8cdd0'; dctx.fill();

  dctx.font = '8px IBM Plex Mono';
  [
    { a: sa + arc * .08, t: 'MINIMAL', c: '#0a3d05' },
    { a: sa + arc * .5, t: 'WATCH', c: '#6a4508' },
    { a: sa + arc * .92, t: 'TOTAL', c: '#5a0f0f' },
  ].forEach(z => {
    const lx = cx + (R + 32) * Math.cos(z.a), ly = cy + (R + 32) * Math.sin(z.a);
    dctx.fillStyle = z.c; dctx.textAlign = 'center'; dctx.textBaseline = 'middle';
    dctx.fillText(z.t, lx, ly);
  });
}

function metrics(v) {
  const s = v / 100;
  const fpr = Math.round(15 + s * s * 62 + s * 8);
  const cli = Math.round(Math.max(3, 100 - s * 88));
  const de = Math.round(18 + s * 58 - s * s * 20);
  const ce = Math.round(s * s * 72 + s * 8);
  const mb = parseFloat((1 + s * s * 3.2 + s * .8).toFixed(1));
  const st = Math.round(Math.max(4, 92 - s * 68 - s * s * 18));
  return { fpr, cli, de, ce, mb, st };
}

function policyName(v) {
  if (v < 8) return 'Minimal Oversight';
  if (v < 20) return 'Community Policing';
  if (v < 33) return 'Targeted Warrants';
  if (v < 47) return 'Passive Monitoring';
  if (v < 58) return 'Balanced Watch';
  if (v < 68) return 'Enhanced Surveillance';
  if (v < 78) return 'Mass Collection';
  if (v < 88) return 'Social Credit Tier';
  return 'Total Panopticon';
}
function verdictText(v) {
  if (v < 15) return 'MINIMAL-REACTIVE POLICING-LOW DETECTION';
  if (v < 30) return 'TARGETED-WARRANT-BASED-JUDICIAL OVERSIGHT';
  if (v < 50) return 'BALANCED POLICY-PASSIVE WATCH-MODERATE RISK';
  if (v < 65) return 'PROACTIVE SURVEILLANCE-RIGHTS EROSION RISK';
  if (v < 80) return 'MASS COLLECTION-NATGRID SCALE-HIGH ABUSE RISK';
  return 'TOTAL CONTROL-AUTHORITARIAN-PUTTASWAMY VIOLATED';
}
function verdictColor(v) {
  return v < 30 ? '#22dd0a' : v < 55 ? '#f0a010' : '#ff4444';
}

function renderMetricsLeft(m) {
  const rows = [
    { n: 'False positive rate', v: m.fpr + '%', pct: Math.min(m.fpr, 100), c: m.fpr > 40 ? '#ff4444' : m.fpr > 20 ? '#f0a010' : '#22dd0a' },
    { n: 'Detection efficacy', v: m.de + '%', pct: m.de, c: '#18b8c8' },
    { n: 'Civil liberty index', v: m.cli + '%', pct: m.cli, c: m.cli < 30 ? '#ff4444' : '#22dd0a' },
    { n: 'Chilling effect', v: m.ce + '%', pct: m.ce, c: m.ce > 50 ? '#ff4444' : '#f0a010' },
    { n: 'Minority bias', v: m.mb + '×', pct: Math.min((m.mb - 1) / 4 * 100, 100), c: '#ff9933' },
    { n: 'Public trust', v: m.st + '%', pct: m.st, c: m.st < 35 ? '#ff4444' : '#22dd0a' },
  ];
  document.getElementById('metricsLeft').innerHTML = rows.map(r => `
    <div class="mrow"><span class="mname">${r.n}</span><span class="mval" style="color:${r.c}">${r.v}</span></div>
    <div class="mbar"><div class="mbar-fill" style="width:${r.pct}%;background:${r.c}"></div></div>`).join('');
}

function renderIndiaData() {
  const rows = [
    { l: 'FRT systems deployed', v: '126', c: 'var(--saffron)' },
    { l: 'FRT spend (₹ crore)', v: '₹1,499', c: 'var(--saffron)' },
    { l: 'Aadhaar coverage', v: '1.4B', c: 'var(--amber)' },
    { l: 'NATGRID queries/month', v: '45,000', c: 'var(--cyan)' },
    { l: 'CCTV market 2023 (USD)', v: '$4.38B', c: 'var(--text2)' },
    { l: 'CCTV CAGR 2024-32', v: '16.7%', c: 'var(--green-bright)' },
    { l: 'Delhi crime rate/1L', v: '1,952', c: 'var(--red-bright)' },
    { l: 'Delhi crimes vs women \'23', v: '13,366', c: 'var(--red-bright)' },
    { l: 'Mumbai conviction rate', v: '15.3%', c: 'var(--amber)' },
    { l: 'FRT false position baseline', v: '~15%', c: 'var(--red-bright)' },
    { l: 'No data protection DPA', v: '✗', c: 'var(--red-bright)' },
    { l: 'Warrant needed for wiretap', v: '✗', c: 'var(--red-bright)' },
  ];
  document.getElementById('indiaData').innerHTML = rows.map(r => `
    <div class="datarow"><span class="drlabel">${r.l}</span><span class="drval" style="color:${r.c}">${r.v}</span></div>`).join('');
}

function renderLevers(v) {
  const levers = [
    { l: 'CCTV + ANPR network', on: v > 5, src: 'Smart City Mission' },
    { l: 'Facial recognition (FRT)', on: v > 20, src: '126 systems, ₹1499Cr' },
    { l: 'Aadhaar biometric link', on: v > 15, src: '1.4B enrolled' },
    { l: 'NATGRID data aggregation', on: v > 30, src: '45k queries/month' },
    { l: 'IT Act §69 intercept', on: v > 35, src: 'No warrant required' },
    { l: 'DigiYatra airport FRT', on: v > 25, src: 'All major airports' },
    { l: 'Predictive policing AI', on: v > 55, src: 'Hyderabad, UP, Delhi' },
    { l: 'Social media monitoring', on: v > 40, src: 'MHA directive' },
    { l: 'Gait & behaviour analytics', on: v > 65, src: 'SFLC.in report' },
    { l: 'Political dissent profiling', on: v > 70, src: 'Pegasus precedent' },
    { l: 'NPR ↔ NATGRID integration', on: v > 80, src: '1.2B citizen profiles' },
    { l: 'Warrant-free bulk retention', on: v > 85, src: 'DPDP §17 exemption' },
  ];
  document.getElementById('policyLevers').innerHTML = levers.map(l => `
    <div class="lever">
      <div class="lled ${l.on ? 'on' : 'off'}"></div>
      <span class="${l.on ? 'lon' : 'loff'}">${l.l}</span>
      ${l.on ? `<span class="lbadge" style="background:var(--border2);color:var(--text3)">${l.src}</span>` : ''}
    </div>`).join('');

  const maxSpend = INDIA_DATA.spending.reduce((a, b) => a + b.val, 0);
  document.getElementById('spendingBars').innerHTML = INDIA_DATA.spending.map(s => `
    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px">
        <span style="color:var(--text2)">${s.label}</span>
        <span style="color:var(--saffron)">₹${s.val.toLocaleString()}Cr</span>
      </div>
      <div class="mbar"><div class="mbar-fill" style="width:${(s.val / maxSpend * 100).toFixed(0)}%;background:var(--saffron-dim)"></div></div>
    </div>`).join('');
}

function renderCities() {
  document.getElementById('cityStats').innerHTML = INDIA_DATA.cities.map(c => `
    <div class="datarow">
      <span class="drlabel">${c.name} ${c.frt ? '<span style="color:var(--saffron);font-size:8px">●FRT</span>' : ''}</span>
      <span class="drval" style="color:var(--text2)">${(c.cams / 1000).toFixed(0)}k cams</span>
    </div>`).join('');
  document.getElementById('crimeStats').innerHTML = INDIA_DATA.cities.map(c => {
    const col = c.crime > 1500 ? '#ff4444' : c.crime > 800 ? '#f0a010' : '#22dd0a';
    return `<div class="datarow">
      <span class="drlabel">${c.name}</span>
      <span class="drval" style="color:${col}">${c.crime.toLocaleString()}</span>
    </div>`;
  }).join('');
}

function renderLegal() {
  const statusColor = { safeguard: '#22dd0a', risk: '#ff4444', partial: '#f0a010' };
  const statusLabel = { safeguard: 'SAFEGUARD', risk: 'RISK', partial: 'PARTIAL' };
  document.getElementById('legalPanel').innerHTML = INDIA_DATA.laws.map(l => `
    <div style="padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <span style="font-size:10px;font-weight:600;color:var(--text)">${l.name}</span>
        <span style="font-size:8px;padding:1px 6px;border-radius:2px;background:${statusColor[l.status]}18;color:${statusColor[l.status]}">${statusLabel[l.status]}</span>
      </div>
      <div style="font-size:9px;color:var(--text2);line-height:1.5">${l.desc}</div>
    </div>`).join('');
}

function renderFooter(m) {
  const s = (id, val, col, d) => {
    document.getElementById(id).textContent = val;
    if (col) document.getElementById(id).style.color = col;
    if (d) document.getElementById(id + 'd').textContent = d;
  };
  s('fFPR', m.fpr + '%', m.fpr > 40 ? '#ff4444' : m.fpr > 20 ? '#f0a010' : '#22dd0a', `India FRT baseline: ~15%`);
  s('fCLI', m.cli + '%', m.cli < 30 ? '#ff4444' : '#22dd0a', 'Puttaswamy standard');
  s('fDE', m.de + '%', '#18b8c8', 'NATGRID benchmark');
  s('fCE', m.ce + '%', m.ce > 50 ? '#ff4444' : '#f0a010', 'protest deterrence');
  s('fMB', m.mb + '×', '#ff9933', 'IFF 2023 finding');
  s('fST', m.st + '%', m.st < 35 ? '#ff4444' : '#22dd0a', 'institutional confidence');
}

function drawTrend() {
  const wrap = document.getElementById('trendWrap');
  if (!wrap) return;
  const tc = document.getElementById('trendCanvas');
  const W = wrap.clientWidth;
  const H = 100; // Fixed height under system metrics
  if (W <= 0 || H <= 0) return;
  tc.width = W; tc.height = H;
  const ctx = tc.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  if (trendFPR.length < 2) return;

  // Render a futuristic glowing grid system
  ctx.strokeStyle = 'rgba(26, 48, 56, 0.3)'; 
  ctx.lineWidth = 0.8;
  for (let i = 0; i <= 4; i++) {
    const y = (i / 4) * (H - 20) + 15;
    ctx.beginPath(); 
    ctx.moveTo(0, y); 
    ctx.lineTo(W, y); 
    ctx.stroke();
  }

  // Draw cyber-labels using the simulator's harmonious color tokens
  ctx.font = '8px "IBM Plex Mono", monospace';
  const labels = ['FPR (False Positives)', 'CLI (Civil Liberty)', 'DE (Efficacy)'];
  const colors = ['#ff4444', '#22dd0a', '#18b8c8'];
  labels.forEach((l, i) => {
    ctx.fillStyle = colors[i];
    ctx.fillText(l, 8, 10 + i * 9);
  });

  const draw = (data, col) => {
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = (i / (TMAX - 1)) * W;
      const y = (H - 20) - (v / 100) * (H - 30) + 15;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = col; 
    ctx.lineWidth = 1.6;
    
    // Add visual ambient shadow glow to the metric lines
    ctx.shadowColor = col;
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;
  };
  
  draw(trendFPR, '#ff4444');
  draw(trendCLI, '#22dd0a');
  draw(trendDE, '#18b8c8');
}

function addEvent(type, ev) {
  const feed = document.getElementById('eventFeed');
  const now = new Date().toTimeString().slice(0, 8);
  const col = type === 'threat' ? '#22dd0a' : type === 'innocent' ? '#ff4444' : '#2d5058';
  const tagCol = type === 'threat' ? 'background:#0a3d05;color:#22dd0a' :
    type === 'innocent' ? 'background:#5a0f0f;color:#ff4444' :
      'background:#162022;color:#2d5058';
  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `
    <div class="fdot" style="background:${col}"></div>
    <div class="ftime">${now}</div>
    <div class="fbody">
      <strong>${ev.t}</strong>
      <span class="ftag" style="${tagCol}">${ev.src}</span><br>
      <span style="font-size:9px;color:var(--text3)">${ev.loc}</span>
    </div>`;
  feed.insertBefore(item, feed.firstChild);
  if (feed.children.length > 50) feed.removeChild(feed.lastChild);
}

function flash(t) {
  const el = document.getElementById(t === 'red' ? 'flR' : 'flG');
  el.style.opacity = '1'; setTimeout(() => el.style.opacity = '0', 180);
}

function tick() {
  if (!running) return;
  tickN++;
  const v = dial;
  const m = metrics(v);

  if (tickN % 2 === 0) {
    const n = () => (Math.random() - .5) * 4;
    trendFPR.push(Math.min(100, Math.max(0, m.fpr + n())));
    trendCLI.push(Math.min(100, Math.max(0, m.cli + n())));
    trendDE.push(Math.min(100, Math.max(0, m.de + n())));
    if (trendFPR.length > TMAX) { trendFPR.shift(); trendCLI.shift(); trendDE.shift(); }
    drawTrend();
  }

  const s = v / 100;
  const threatRate = s * .5 + .04;
  const innocentRate = s * s * .8 + .015;

  if (Math.random() < threatRate * .28) {
    threatsT++;
    document.getElementById('cThreats').textContent = threatsT.toLocaleString();
    addEvent('threat', EV_THREAT[Math.floor(Math.random() * EV_THREAT.length)]);
    flash('green');
    if (window.playAlertSound) window.playAlertSound('threat');
  }
  if (Math.random() < innocentRate * .32) {
    innocentsT++;
    document.getElementById('cInnocents').textContent = innocentsT.toLocaleString();
    addEvent('innocent', EV_INNOCENT[Math.floor(Math.random() * EV_INNOCENT.length)]);
    flash('red');
    if (window.playAlertSound) window.playAlertSound('innocent');
  }
  if (Math.random() < .07) {
    addEvent('neutral', EV_NEUTRAL[Math.floor(Math.random() * EV_NEUTRAL.length)]);
    if (window.playAlertSound) window.playAlertSound('neutral');
  }

  if (Math.random() < innocentRate * .22 && v > 20) {
    const i = Math.floor(Math.random() * popDots.length);
    const old = popDots[i].className;
    popDots[i].className = 'pdot f';
    setTimeout(() => popDots[i].className = old, 500);
  }

  renderMetricsLeft(m);
  renderFooter(m);
}

document.getElementById('slider').addEventListener('input', function () {
  dial = +this.value;
  const m = metrics(dial);
  const col = dial < 35 ? '#22dd0a' : dial < 65 ? '#f0a010' : '#ff4444';

  if (window.playSliderSound) window.playSliderSound();

  drawDial(dial);
  const dv = document.getElementById('dval');
  dv.textContent = dial; dv.style.color = col;
  document.getElementById('dpolicy').textContent = policyName(dial);

  const vd = document.getElementById('verdict');
  vd.textContent = verdictText(dial);
  vd.style.color = verdictColor(dial);
  vd.style.borderColor = verdictColor(dial) + '38';

  document.getElementById('ssub').textContent =
    dial < 15 ? 'Reactive policing — FIR-based, judicial oversight required' :
      dial < 30 ? 'Targeted surveillance — warrant-based NATGRID access only' :
        dial < 50 ? 'Passive monitoring — CCTV + partial FRT, no bulk collection' :
          dial < 65 ? 'Proactive — FRT active, NATGRID queries unrestricted' :
            dial < 80 ? 'Mass collection — bulk data, behavioural AI, §69 intercepts' :
              'Total control — NATGRID+NPR integration, no judicial check, UAPA-ready';

  updatePop(dial);
  renderLevers(dial);
  renderMetricsLeft(m);
  renderFooter(m);
  if (activeTab === 'cities') renderCities();
  renderHeatmap();
  updateSentiment();
  calculateBudget();
}
);

drawDial(50);
document.getElementById('dval').textContent = '50';
document.getElementById('dpolicy').textContent = 'Balanced Watch';
updatePop(50);
renderLevers(50);
renderIndiaData();
renderCities();
renderLegal();
renderHeatmap();
updateSentiment();
calculateBudget();
renderMetricsLeft(metrics(50));
renderFooter(metrics(50));
addEvent('neutral', { t: 'Simulator initialised — drag the dial to set national policy', loc: 'National', src: 'SYSTEM' });
addEvent('neutral', { t: 'Data sourced: NCRB 2023-IFF-NATGRID-SFLC.in-IAPP 2026', loc: 'National', src: 'SOURCES' });

setInterval(tick, 850);

window.addEventListener('resize', drawTrend);

async function analyzeDataset() {

  const input =
    document.getElementById('datasetFile');

  const file = input.files[0];

  if (!file) {
    alert("Select a file first");
    return;
  }

  let records = [];

  if (file.name.endsWith(".json")) {
    records = await loadJSON(file);
  }
  else if (file.name.endsWith(".csv")) {
    records = await loadCSV(file);
  }
  else if (file.name.endsWith(".pdf")) {
    records = await loadPDF(file);
  }

  processDataset(records);

  // reset input so next upload is always treated as new
  input.value = "";

}

async function loadJSON(file) {

  try {
    return JSON.parse(await file.text());
  }
  catch {
    return [];
  }

}

async function loadCSV(file) {
  const txt = await file.text();
  const lines = txt.split(/\r?\n/).filter(x => x.trim());
  if (lines.length === 0) return [];
  
  // Robust CSV splitting regex that handles quoted values containing commas
  const parseCSVLine = (line) => {
    const matches = [];
    let match;
    const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
    while ((match = regex.exec(line)) !== null) {
      let val = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
      matches.push(val);
    }
    return matches;
  };

  const headers = parseCSVLine(lines[0]);

  return lines.slice(1).map(line => {
    const vals = parseCSVLine(line);
    const obj = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = vals[i] !== undefined ? vals[i].trim() : "";
    });
    return obj;
  });
}

async function loadPDF(file) {
  // Specify CDN counterpart of worker script to ensure modern PDF.js works in standard sandbox environments
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js';

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(x => x.str).join(" ");
  }

  return text
    .split(".")
    .filter(x => x.trim())
    .map(x => ({ text: x }));
}

function classifyRecord(record) {

  const text = Object.values(record)
    .join(" ")
    .toLowerCase();

  const keywords = [
    "terror",
    "explosive",
    "weapon",
    "murder",
    "kidnap",
    "fraud",
    "drug",
    "smuggling",
    "extortion",
    "gang"
  ];

  let risk = 0;

  keywords.forEach(word => {

    if (text.includes(word)) {
      risk += 20;
    }

  });

  return risk;

}

function processDataset(records) {
  window.lastRecords = records;
  console.log("Total Records:", records.length);
  console.log("First Record:", records[0]);
  console.log("Second Record:", records[1]);

  let threats = 0;
  let innocents = 0;

  records.forEach((r, index) => {

    const score = classifyRecord(r);

    if (index < 5) {
      console.log(r.crime, "=>", score);
    }

    if (score >= 20)
      threats++;
    else
      innocents++;

  });
  const total =
    records.length;

  const fp =
    total
      ? Math.round(
        innocents / total * 100
      )
      : 0;

  let verdict =
    "Balanced Watch";

  if (fp > 60)
    verdict =
      "Mass Profiling Risk";

  if (threats > innocents)
    verdict =
      "Threat Neutralisation Dominant";

  document
    .getElementById("analysisResults")
    .innerHTML = `

      <div class="analysis-card">

        <div class="analysis-title">
          Dataset Assessment
        </div>

        <div class="analysis-row">
          <span>Total Records</span>
          <strong>${total}</strong>
        </div>

        <div class="analysis-row">
          <span>Threats Neutralised</span>
          <strong style="color:#22dd0a">
            ${threats}
          </strong>
        </div>

        <div class="analysis-row">
          <span>Innocents Profiled</span>
          <strong style="color:#ff4444">
            ${innocents}
          </strong>
        </div>

        <div class="analysis-row">
          <span>False Positive Risk</span>
          <strong>
            ${fp}%
          </strong>
        </div>

        <div class="analysis-row">
          <span>Verdict</span>
          <strong style="color:#ff9933">
            ${verdict}
          </strong>
        </div>

      </div>

    `;

}

function renderHeatmap() {

  const container =
    document.getElementById("heatmapContainer");

  if (!container) return;

  const level = dial;

  container.innerHTML =
    INDIA_DATA.cities.map(city => {

      let intensity =
        Math.min(
          100,
          Math.round(
            (city.cams / 3000) +
            (level * 0.6)
          )
        );

      let color =
        intensity > 80
          ? "#ff4444"
          : intensity > 50
            ? "#f0a010"
            : "#22dd0a";

      return `
        <div class="heat-city">

          <div class="heat-label">
            <span>${city.name}</span>
            <span>${intensity}%</span>
          </div>

          <div class="heat-bar">
            <div
              class="heat-fill"
              style="
                width:${intensity}%;
                background:${color};
              ">
            </div>
          </div>

        </div>
      `;

    }).join("");

}

const CITIZEN_NAMES = [
  "Aditi Sharma",
  "Rahul Verma",
  "Priya Singh",
  "Arjun Patel",
  "Neha Gupta",
  "Vikram Kumar",
  "Pooja Mehta",
  "Rohan Joshi",
  "Ananya Rao",
  "Saurabh Mishra"
];

const OCCUPATIONS = [
  "Student",
  "Teacher",
  "Journalist",
  "Software Engineer",
  "Doctor",
  "Lawyer",
  "Farmer",
  "Business Owner",
  "Researcher",
  "Social Worker"
];

function generateCitizen() {

  const name =
    CITIZEN_NAMES[
    Math.floor(
      Math.random() * CITIZEN_NAMES.length
    )
    ];

  const occupation =
    OCCUPATIONS[
    Math.floor(
      Math.random() * OCCUPATIONS.length
    )
    ];

  const city =
    INDIA_DATA.cities[
      Math.floor(
        Math.random() * INDIA_DATA.cities.length
      )
    ].name;

  const age =
    Math.floor(
      Math.random() * 45
    ) + 18;

  const scans =
    Math.round(
      dial * 0.2
    );

  const risk =
    Math.round(
      dial * 0.8
    );

  const liberty =
    Math.max(
      5,
      100 - dial
    );

  document
    .getElementById(
      "citizenCard"
    )
    .innerHTML = `

      <div class="citizen-card">

        <div class="citizen-title">
          Simulated Citizen
        </div>

        <div class="citizen-row">
          <span>Name</span>
          <strong>${name}</strong>
        </div>

        <div class="citizen-row">
          <span>Age</span>
          <strong>${age}</strong>
        </div>

        <div class="citizen-row">
          <span>Occupation</span>
          <strong>${occupation}</strong>
        </div>

        <div class="citizen-row">
          <span>City</span>
          <strong>${city}</strong>
        </div>

        <hr>

        <div class="citizen-row">
          <span>FRT Scans</span>
          <strong>${scans}</strong>
        </div>

        <div class="citizen-row">
          <span>Risk Score</span>
          <strong>${risk}%</strong>
        </div>

        <div class="citizen-row">
          <span>Civil Liberty</span>
          <strong>${liberty}%</strong>
        </div>

      </div>

    `;

}

function generateFutureProjection() {

  const surveillance =
    Math.round(
      dial + 10
    );

  const detection =
    Math.min(
      100,
      Math.round(
        30 + dial * 0.7
      )
    );

  const falsePos =
    Math.min(
      100,
      Math.round(
        10 + dial * 0.9
      )
    );

  const privacy =
    Math.max(
      5,
      Math.round(
        100 - dial * 0.95
      )
    );

  const trust =
    Math.max(
      5,
      Math.round(
        90 - dial * 0.8
      )
    );

  let verdict =
    "Balanced Digital Society";

  if (dial > 70) {
    verdict =
      "High Surveillance State";
  }

  if (dial > 85) {
    verdict =
      "Panopticon Scenario";
  }

  document
    .getElementById(
      "futureProjection"
    )
    .innerHTML = `

      <div class="future-card">

        <div class="future-title">
          India 2030 Forecast
        </div>

        <div class="future-row">
          <span>Surveillance Index</span>
          <strong>${surveillance}%</strong>
        </div>

        <div class="future-row">
          <span>Threat Detection</span>
          <strong style="color:#22dd0a">
            ${detection}%
          </strong>
        </div>

        <div class="future-row">
          <span>False Positives</span>
          <strong style="color:#ff4444">
            ${falsePos}%
          </strong>
        </div>

        <div class="future-row">
          <span>Privacy Index</span>
          <strong style="color:#18b8c8">
            ${privacy}%
          </strong>
        </div>

        <div class="future-row">
          <span>Public Trust</span>
          <strong>
            ${trust}%
          </strong>
        </div>

        <hr>

        <div class="future-row">
          <span>Forecast</span>
          <strong style="color:#ff9933">
            ${verdict}
          </strong>
        </div>

      </div>

    `;

}

function generatePolicyAdvice() {

  const m = metrics(dial);

  let recommendation = "";
  let impact = "";
  let riskLevel = "";

  if (dial < 30) {

    riskLevel = "LOW";

    recommendation =
      "Increase targeted surveillance in high-crime zones while maintaining judicial oversight.";

    impact =
      "+12% threat detection , -3% civil liberty impact";

  }
  else if (dial < 60) {

    riskLevel = "MODERATE";

    recommendation =
      "Maintain balanced monitoring. Expand warrant-based investigations instead of mass collection.";

    impact =
      "+6% threat detection , +4% public trust";

  }
  else if (dial < 80) {

    riskLevel = "HIGH";

    recommendation =
      "Reduce facial recognition deployment and introduce independent audits.";

    impact =
      "-18% false positives , +15% civil liberty index";

  }
  else {

    riskLevel = "CRITICAL";

    recommendation =
      "Limit bulk data collection, require judicial warrants, and strengthen privacy safeguards.";

    impact =
      "-30% profiling risk , +25% public trust";

  }

  document
    .getElementById("policyAdvisor")
    .innerHTML = `

      <div class="advisor-card">

        <div class="advisor-title">
          Policy Recommendation Engine
        </div>

        <div style="margin-bottom:8px">
          Current Dial:
          <strong>${dial}</strong>
        </div>

        <div style="margin-bottom:8px">
          Risk Level:
          <span class="advisor-badge">
            ${riskLevel}
          </span>
        </div>

        <div class="advisor-section">

          <strong>
            Recommended Action
          </strong>

          <div style="margin-top:4px;color:var(--text2)">
            ${recommendation}
          </div>

        </div>

        <div class="advisor-section">

          <strong>
            Expected Outcome
          </strong>

          <div style="margin-top:4px;color:var(--text2)">
            ${impact}
          </div>

        </div>

        <div class="advisor-section">

          <strong>
            Current Metrics
          </strong>

          <div style="margin-top:4px;color:var(--text2)">
            False Positive Rate: ${m.fpr}%<br>
            Civil Liberty Index: ${m.cli}%<br>
            Detection Efficacy: ${m.de}%
          </div>

        </div>

      </div>

    `;
}

function simulateHistoricalEvent() {

  const event =
    document.getElementById(
      "historicalEvent"
    ).value;

  let title = "";
  let detection = "";
  let liberty = "";
  let outcome = "";

  if (event === "mumbai") {

    title =
      "Mumbai Attacks 2008";

    detection =
      Math.round(
        30 + dial * 0.7
      ) + "%";

    liberty =
      Math.max(
        5,
        100 - dial
      ) + "%";

    outcome =
      dial > 70
        ? "Attack preparation detected earlier through surveillance systems."
        : "Limited detection capability before attack execution.";

  }

  if (event === "covid") {

    title =
      "COVID Lockdown";

    detection =
      Math.round(
        40 + dial * 0.5
      ) + "%";

    liberty =
      Math.max(
        5,
        100 - dial
      ) + "%";

    outcome =
      dial > 60
        ? "Movement tracking improves containment but reduces privacy."
        : "Higher privacy but weaker mobility monitoring.";

  }

  if (event === "farmers") {

    title =
      "Farmers Protest";

    detection =
      Math.round(
        20 + dial * 0.4
      ) + "%";

    liberty =
      Math.max(
        5,
        100 - dial
      ) + "%";

    outcome =
      dial > 70
        ? "Large-scale participant monitoring and profiling risk."
        : "Lower surveillance with stronger civil-liberty protections.";

  }

  if (event === "delhi") {

    title =
      "Delhi Riots 2020";

    detection =
      Math.round(
        35 + dial * 0.6
      ) + "%";

    liberty =
      Math.max(
        5,
        100 - dial
      ) + "%";

    outcome =
      dial > 65
        ? "More suspects identified through cameras and FRT."
        : "Lower monitoring but reduced profiling concerns.";

  }

  if (event === "cyber") {

    title =
      "National Cyber Attack";

    detection =
      Math.round(
        45 + dial * 0.5
      ) + "%";

    liberty =
      Math.max(
        5,
        100 - dial
      ) + "%";

    outcome =
      dial > 50
        ? "Enhanced network monitoring improves threat response."
        : "Slower detection but stronger privacy guarantees.";

  }

  document
    .getElementById(
      "historyResults"
    )
    .innerHTML = `

      <div class="history-card">

        <div class="history-title">
          ${title}
        </div>

        <div class="history-row">
          <span>Surveillance Dial</span>
          <strong>${dial}</strong>
        </div>

        <div class="history-row">
          <span>Detection Potential</span>
          <strong style="color:#22dd0a">
            ${detection}
          </strong>
        </div>

        <div class="history-row">
          <span>Civil Liberty Index</span>
          <strong style="color:#18b8c8">
            ${liberty}
          </strong>
        </div>

        <hr>

        <div style="
          margin-top:10px;
          line-height:1.6;
          color:var(--text2);
        ">
          ${outcome}
        </div>

      </div>

    `;

}

const eyeCanvas =
  document.getElementById("surveillanceEyeCanvas");

if (eyeCanvas) {

  const ctx =
    eyeCanvas.getContext("2d");

  eyeCanvas.width = 700;
  eyeCanvas.height = 350;

  let rot = 0;

  function drawEye() {

    ctx.clearRect(0, 0, 700, 350);

    const cx = 350;
    const cy = 175;

    /* HUD RING 1 */

    ctx.save();

    ctx.translate(cx, cy);

    ctx.rotate(rot);

    for (let i = 0; i < 120; i++) {

      ctx.strokeStyle =
        "rgba(24,184,200,.25)";

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        90,
        (i * 3) * Math.PI / 180,
        (i * 3 + 1) * Math.PI / 180
      );

      ctx.stroke();

    }

    ctx.restore();

    /* HUD RING 2 */

    ctx.save();

    ctx.translate(cx, cy);

    ctx.rotate(-rot * 1.4);

    ctx.strokeStyle =
      "rgba(24,184,200,.5)";

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(0, 0, 70, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    /* SCAN BEAM */

    ctx.save();

    ctx.translate(cx, cy);

    ctx.rotate(rot * 2);

    const beam =
      ctx.createLinearGradient(
        0, 0, 130, 0
      );

    beam.addColorStop(
      0,
      "rgba(24,184,200,0)"
    );

    beam.addColorStop(
      .5,
      "rgba(24,184,200,.9)"
    );

    beam.addColorStop(
      1,
      "rgba(24,184,200,0)"
    );

    ctx.strokeStyle = beam;
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(130, 0);
    ctx.stroke();

    ctx.restore();

    /* IRIS */

    const iris =
      ctx.createRadialGradient(
        cx, cy, 10,
        cx, cy, 90
      );

    iris.addColorStop(0, "#ffffff");
    iris.addColorStop(.1, "#9fffff");
    iris.addColorStop(.4, "#18b8c8");
    iris.addColorStop(1, "#00181c");

    ctx.fillStyle = iris;

    ctx.beginPath();
    ctx.arc(cx, cy, 85, 0, Math.PI * 2);
    ctx.fill();

    /* ENERGY HALO */

    const halo =
      ctx.createRadialGradient(
        cx,
        cy,
        90,
        cx,
        cy,
        180
      );

    halo.addColorStop(
      0,
      "rgba(24,184,200,.18)"
    );

    halo.addColorStop(
      0.5,
      "rgba(24,184,200,.05)"
    );

    halo.addColorStop(
      1,
      "rgba(24,184,200,0)"
    );

    ctx.fillStyle = halo;

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      180,
      0,
      Math.PI * 2
    );

    ctx.fill();

    /* PUPIL */

    let offset = 0;

    const slider =
      document.getElementById("slider");

    if (slider) {

      offset =
        ((Number(slider.value) - 50) / 50) * 25;

    }

    ctx.fillStyle = "#000";

    ctx.beginPath();
    ctx.arc(
      cx + offset,
      cy,
      35,
      0,
      Math.PI * 2
    );

    ctx.fill();

    /* TARGETING MARKS */

    ctx.strokeStyle =
      "#18b8c8";

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(cx, cy, 105, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(24,184,200,.15)";
    ctx.stroke();
    /* PARTICLES */

    for (let i = 0; i < 40; i++) {

      const a =
        (i * 9 + rot * 150)
        * Math.PI / 180;

      const r =
        110 +
        Math.sin(rot + i) * 12;

      const x =
        cx +
        Math.cos(a) * r;

      const y =
        cy +
        Math.sin(a) * r;

      ctx.fillStyle =
        "#18b8c8";

      ctx.fillRect(
        x,
        y,
        2,
        2
      );

    }

    rot += 0.01;

    requestAnimationFrame(drawEye);

  }

  drawEye();

}

const feeds = [

  // INDIA

  "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",

  "https://feeds.feedburner.com/ndtvnews-top-stories",

  "https://www.thehindu.com/news/national/feeder/default.rss",

  "https://indianexpress.com/section/india/feed/",

  "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",

  "https://www.news18.com/rss/india.xml",

  "https://www.firstpost.com/india/feed",

  "https://feeds.feedburner.com/ScrollinArticles.rss",

  "https://www.deccanherald.com/rss/national.rss",

  "https://www.livemint.com/rss/news",

  // CYBERSECURITY

  "https://feeds.feedburner.com/TheHackersNews",

  "https://www.bleepingcomputer.com/feed/",

  "https://cybernews.com/feed",

  "https://krebsonsecurity.com/feed/",

  "https://www.darkreading.com/rss.xml",

  // WORLD NEWS

  "https://rss.cnn.com/rss/edition.rss",

  "https://feeds.bbci.co.uk/news/world/rss.xml",

  "https://www.aljazeera.com/xml/rss/all.xml",

  "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",

  "https://feeds.skynews.com/feeds/rss/world.xml",

  "https://www.theguardian.com/world/rss",

  "https://www.reutersagency.com/feed/?best-topics=world&post_type=best",

  // TECHNOLOGY + AI

  "https://techcrunch.com/feed/",

  "https://www.wired.com/feed/rss",

  "https://www.theverge.com/rss/index.xml",

  "https://venturebeat.com/feed/",

  // SECURITY + DEFENSE

  "https://www.defensenews.com/arc/outboundfeeds/rss/",

  "https://breakingdefense.com/feed/",

  "https://www.securityweek.com/feed/",

  "https://www.csoonline.com/feed"
];

async function refreshNewsFeed() {
  const panel = document.getElementById("newsFeedPanel");
  panel.innerHTML = "<div class='news-card'>Loading...</div>";

  try {
    const API_KEY = "pub_1309609975124228a7c587d07add082b";
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=surveillance OR cybercrime OR privacy OR security&language=en`;

    const response = await fetch(url);
    const data = await response.json();
    
    document.getElementById("lastRefreshTime").innerHTML =
      "Last Updated: " + new Date().toLocaleTimeString();

    if (!data.results || data.results.length === 0) {
      throw new Error("No news returned");
    }

    panel.innerHTML = data.results.slice(0, 10).map(news => `
      <div class="news-card">
        <div class="news-title">${news.title}</div>
        <div class="news-source">${news.source_id || "NEWS"}</div>
        <div style="margin-top:6px;color:var(--text2);font-size:9px;">
          ${news.description || ""}
        </div>
        <a href="${news.link}" target="_blank" style="color:var(--cyan);font-size:9px;display:block;margin-top:4px;">Read More</a>
      </div>
    `).join("");

  } catch (error) {
    console.warn("External live news failed, loading high-fidelity simulated intelligence ticker feed:", error);
    
    document.getElementById("lastRefreshTime").innerHTML =
      "Last Updated (Intelligence Feed): " + new Date().toLocaleTimeString();

    const mockFeed = [];
    if (dial > 75) {
      mockFeed.push(
        { title: "MHA Deploys Advanced Gait Analysis Across Major Railway Hubs", source_id: "NATGRID-News", description: "The Ministry of Home Affairs has authorized gait-recognition CCTV systems at 40 railway stations to identify suspicious behavior in real-time." },
        { title: "DPDP Act Rules Finalized: State Agencies Granted Complete Exemptions", source_id: "Surveillance-Policy-Review", description: "National security agencies have been exempted from data storage limits and consent requirements, citing sovereign security priorities." },
        { title: "Delhi & UP Police Deploy Real-Time FRT watchlists for Crowd Control", source_id: "GroundTruth-India", description: "Automated alert networks are flagged to municipal cameras, tracking watchlisted individuals at public gatherings." },
        { title: "National Data Center Expands Storage for Internet Logs to 3 Years", source_id: "CERT-In-Updates", description: "New retention directives mandate ISPs to store complete network metadata and connection records for advanced intelligence lookup." }
      );
    } else if (dial < 35) {
      mockFeed.push(
        { title: "Supreme Court Restricts Bulk Telecom Metadata Seizure by Intelligence Units", source_id: "Judicial-Gazette", description: "A five-judge constitutional bench ruled that intercepting telecom metadata without a specific judicial warrant violates Puttaswamy standards." },
        { title: "Citizen Coalition Launches Independent Audit of Municipal CCTV Networks", source_id: "IFF-Wire", description: "Digital rights organizations have started crowdsourcing camera locations to track unchecked surveillance footprint in metropolitan centers." },
        { title: "Parliament Debates strict limits on AI Facial Recognition", source_id: "Sansad-Watch", description: "Opposition MPs introduce private member bill seeking a complete ban on automated facial scans in public places without written magistrate orders." },
        { title: "NATGRID Database Operations limited to Judicial Oversight Cases", source_id: "Security-Legal-Brief", description: "New regulatory framework blocks automated cross-linkage of financial, travel and communication databases pending court audit." }
      );
    } else {
      mockFeed.push(
        { title: "Smart City Safe City Mission Expands CCTV Density by 14%", source_id: "NCRB-Review", description: "Metropolitan statistics show rapid deployment of high-definition camera infrastructure to combat urban street crime." },
        { title: "DigiYatra Airport Biometrics Coverage Crosses 50 Million Enrolled Citizens", source_id: "Civil-Aviation-News", description: "Expansion to tier-2 airports continues as travelers opt for paperless travel, spark legal privacy debates." },
        { title: "UIDAI deploys Advanced Cyber Defense System for Biometrics Protection", source_id: "Aadhaar-Watch", description: "New server clustering and zero-knowledge architecture aimed at mitigating commercial database spoofing." },
        { title: "Ministry of Electronics (MeitY) reviews IT Rules 2021 for Digital Platforms", source_id: "Gov-Tech-Journal", description: "Intermediary guidelines updated to streamline legal requests for encrypted messaging trace requests." }
      );
    }

    panel.innerHTML = mockFeed.map(news => `
      <div class="news-card">
        <div class="news-title" style="color:var(--saffron);">${news.title}</div>
        <div class="news-source" style="color:var(--text3);">${news.source_id} (TELEMETRY SIMULATED)</div>
        <div style="margin-top:6px;color:var(--text2);font-size:9px;line-height:1.4;">
          ${news.description}
        </div>
        <span style="color:var(--cyan);font-size:8px;display:block;margin-top:4px;">* local secure cache active</span>
      </div>
    `).join("");
  }
}

refreshNewsFeed();

if (window.newsTimer) {
  clearInterval(window.newsTimer);
}

window.newsTimer =
  setInterval(
    refreshNewsFeed,
    60000
  );

let secondsLeft = 60;

setInterval(() => {

  const el =
    document.getElementById(
      "feedStatus"
    );

  if (!el) return;

  el.innerHTML =
    "● LIVE • Refresh in " +
    secondsLeft +
    "s";

  secondsLeft--;

  if (secondsLeft < 0) {
    secondsLeft = 60;
  }

}, 1000);

function updateSentiment() {

  let securitySupport;
  let privacySupport;

  if (dial <= 25) {

    securitySupport =
      Math.round(
        30 + Math.random() * 10
      );

    privacySupport =
      100 - securitySupport;

  }
  else if (dial <= 50) {

    securitySupport =
      Math.round(
        45 + Math.random() * 10
      );

    privacySupport =
      100 - securitySupport;

  }
  else if (dial <= 75) {

    securitySupport =
      Math.round(
        55 + Math.random() * 10
      );

    privacySupport =
      100 - securitySupport;

  }
  else {

    securitySupport =
      Math.round(
        40 + Math.random() * 10
      );

    privacySupport =
      100 - securitySupport;

  }

  let mood = "";
  let description = "";

  if (securitySupport >= 75) {

    mood = "National Security Priority";

    description =
      "Citizens strongly support surveillance expansion for public safety.";

  }
  else if (securitySupport >= 65) {

    mood = "Security First";

    description =
      "Public opinion favors stronger monitoring and threat detection.";

  }
  else if (securitySupport >= 55) {

    mood = "Balanced Governance";

    description =
      "Citizens support surveillance with oversight and accountability.";

  }
  else if (privacySupport >= 75) {

    mood = "Privacy Rights Movement";

    description =
      "Public strongly opposes mass surveillance and data collection.";

  }
  else if (privacySupport >= 65) {

    mood = "Privacy First";

    description =
      "Citizens want stricter limits on surveillance technologies.";

  }
  else if (dial >= 85) {

    mood = "Surveillance Fatigue";

    description =
      "People are increasingly concerned about constant monitoring.";

  }
  else if (dial >= 70) {

    mood = "Trust Deficit";

    description =
      "Public confidence in surveillance programs is declining.";

  }
  else {

    mood = "Stable Public Opinion";

    description =
      "No major shift in sentiment detected.";

  }
  document
    .getElementById(
      "sentimentPanel"
    )
    .innerHTML = `

      <div class="sentiment-card">

        <div class="sentiment-row">

          <div class="sentiment-label">
            <span>Security Support</span>
            <strong>${securitySupport}%</strong>
          </div>

          <div class="sentiment-bar">
            <div
              class="sentiment-fill"
              style="
              width:${securitySupport}%;
              background:#22dd0a;">
            </div>
          </div>

        </div>

        <div class="sentiment-row">

          <div class="sentiment-label">
            <span>Privacy Support</span>
            <strong>${privacySupport}%</strong>
          </div>

          <div class="sentiment-bar">
            <div
              class="sentiment-fill"
              style="
              width:${privacySupport}%;
              background:#18b8c8;">
            </div>
          </div>

        </div>

        <hr>

        <div
  style="
  margin-top:10px;
  color:var(--saffron);
  font-weight:bold;">
  <span
style="
padding:4px 8px;
border-radius:4px;
background:#243538;
">

${mood}

</span>
</div>

<div
  style="
  margin-top:8px;
  color:var(--text2);
  line-height:1.5;
  font-size:10px;
  ">
  ${description}
</div>

      </div>

    `;

}

function calculateBudget(){

  const cctv =
    Math.round(
      1000 + dial * 80
    );

  const facialRecognition =
    Math.round(
      500 + dial * 40
    );

  const natgrid =
    Math.round(
      1200 + dial * 35
    );

  const cyberMonitoring =
    Math.round(
      800 + dial * 30
    );

  const aiAnalytics =
    Math.round(
      600 + dial * 25
    );

  const total =

    cctv +
    facialRecognition +
    natgrid +
    cyberMonitoring +
    aiAnalytics;

  let assessment =
    "Sustainable Investment";

  if(total > 15000)
    assessment =
      "High Expenditure";

  if(total > 20000)
    assessment =
      "Aggressive Surveillance Spending";

  if(total > 25000)
    assessment =
      "National Priority Budget";

  document
    .getElementById(
      "budgetPanel"
    )
    .innerHTML = `

      <div class="budget-card">

        <div class="budget-row">
          <span>CCTV Network</span>
          <strong>INR ${cctv} Cr</strong>
        </div>

        <div class="budget-row">
          <span>Facial Recognition</span>
          <strong>INR ${facialRecognition} Cr</strong>
        </div>

        <div class="budget-row">
          <span>NATGRID Systems</span>
          <strong>INR ${natgrid} Cr</strong>
        </div>

        <div class="budget-row">
          <span>Cyber Monitoring</span>
          <strong>INR ${cyberMonitoring} Cr</strong>
        </div>

        <div class="budget-row">
          <span>AI Analytics</span>
          <strong>INR ${aiAnalytics} Cr</strong>
        </div>

        <hr>

        <div
          class="budget-row budget-total">

          <span>Total Budget</span>

          <span>
            INR ${total} Cr
          </span>

        </div>

        <div class="budget-warning">

          Budget Assessment:

          <strong>
            ${assessment}
          </strong>

        </div>

      </div>

    `;

}

// Audio system global variables and controller hooks
window.isMuted = false;
window.toggleMute = function() {
  window.isMuted = !window.isMuted;
  const btn = document.getElementById("muteBtn");
  if (btn) {
    btn.textContent = window.isMuted ? "🔇 AUDIO: OFF" : "🔊 AUDIO: ON";
    btn.style.color = window.isMuted ? "var(--text3)" : "var(--cyan)";
    btn.style.borderColor = window.isMuted ? "var(--border2)" : "var(--cyan)";
  }
  if (!window.isMuted && window.playClickSound) {
    window.playClickSound();
  }
};
