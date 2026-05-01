// HeroGraphics.jsx — Multiple hero graphic variants for the right panel

// Variant 1: Data Flow Pipeline (Sources → Ingest → Detect → Respond)
// DIAGRAM_SOURCE:FLOW_PNG
const FlowDiagramGraphic = () => (
  <div
    style={{
      width: 'min(700px, 92%)',
      padding: 10,
      borderRadius: 26,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(248,250,252,0.98) 100%)',
      border: '1px solid rgba(45,212,191,0.46)',
      boxShadow: '0 34px 90px rgba(0,0,0,0.38), 0 0 44px rgba(20,184,166,0.24)',
      transform: 'translateX(-18px)',
      position: 'relative',
    }}
  >
    <div style={{
      position: 'absolute',
      inset: 0,
      borderRadius: 26,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute',
      top: -1,
      left: 32,
      right: 32,
      height: 3,
      borderRadius: 9999,
      background: 'linear-gradient(90deg, transparent, #14b8a6, transparent)',
      opacity: 0.9,
    }} />
    <img
      src="flow.png"
      alt="Secugram security operations flow diagram"
      width="1672"
      height="941"
      loading="eager"
      decoding="async"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        borderRadius: 20,
      }}
    />
  </div>
);

const DataFlowGraphic = () => {
  const teal = '#14b8a6', tealDim = 'rgba(20,184,166,0.55)', glow = 'rgba(20,184,166,0.2)';
  const node = { fill: '#0b6f66' };
  const txt = { fill: '#cbd5e1', fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 8, letterSpacing: '0.08em' };
  const lbl = { fill: '#94a3b8', fontFamily: "'Open Sans',sans-serif", fontWeight: 600, fontSize: 9 };
  return (
    <svg width="430" height="340" viewBox="0 0 430 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hexGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={teal} stopOpacity="0.45"/>
          <stop offset="60%" stopColor={teal} stopOpacity="0.08"/>
          <stop offset="100%" stopColor={teal} stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Column labels */}
      <text x="50" y="18" {...txt}>SOURCES</text>
      <text x="170" y="18" {...txt}>INGEST</text>
      <text x="280" y="18" {...txt}>DETECT</text>
      <text x="380" y="18" {...txt}>RESPOND</text>

      {/* Left column: data sources */}
      <rect x="20" y="40" width="100" height="200" rx="10" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      {['Cloud','Endpoints','Network','Apps','Identity'].map((label, i) => (
        <g key={label}>
          <circle cx="40" cy={68 + i*36} r="7" fill="none" stroke={teal} strokeWidth="1.4"/>
          <circle cx="40" cy={68 + i*36} r="2" fill={teal}/>
          <text x="56" y={71 + i*36} {...lbl}>{label}</text>
        </g>
      ))}

      {/* Connector lines from sources to funnel */}
      {[0,1,2,3,4].map(i => (
        <path key={i} d={`M120 ${68 + i*36} Q145 ${68 + i*36} 160 140`} stroke={teal} strokeWidth="1" fill="none" opacity="0.45"/>
      ))}

      {/* Funnel */}
      <rect x="155" y="80" width="70" height="120" rx="8" fill="rgba(20,184,166,0.08)" stroke={tealDim} strokeWidth="1.2"/>
      <path d="M165 100 L215 100 L200 130 L200 170 L180 170 L180 130 Z" fill="none" stroke={teal} strokeWidth="1.5" strokeLinejoin="round"/>
      {[170,178,186,194,202,210].map((x, i) => (
        <circle key={i} cx={x} cy={92 - (i%2)*4} r="1.5" fill={teal} opacity="0.7"/>
      ))}
      <text x="190" y="220" textAnchor="middle" fill="#cbd5e1" fontFamily="'Open Sans',sans-serif" fontWeight="600" fontSize="9">Logs &amp; Events</text>

      {/* Connector funnel → hex */}
      <line x1="225" y1="140" x2="265" y2="140" stroke={teal} strokeWidth="1.5" strokeDasharray="3 3"/>

      {/* Center hexagon detection engine */}
      <circle cx="310" cy="140" r="58" fill="url(#hexGlow)"/>
      <circle cx="310" cy="140" r="48" fill="none" stroke={tealDim} strokeWidth="1" strokeDasharray="2 3"/>
      <polygon points="310,100 345,118 345,162 310,180 275,162 275,118" fill="rgba(13,27,46,0.6)" stroke={teal} strokeWidth="1.8"/>
      <polygon points="310,112 335,124 335,156 310,168 285,156 285,124" fill="none" stroke="#0b6f66" strokeWidth="1.2" opacity="0.7"/>
      <circle cx="310" cy="135" r="6" fill="none" stroke={teal} strokeWidth="1.6"/>
      <path d="M306 140 L306 150 L314 150 L314 140 Z" fill={teal}/>
      <text x="310" y="210" textAnchor="middle" fill="#cbd5e1" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.06em">SIEM • AI/ML</text>

      {/* Connector hex → response */}
      {[0,1,2,3,4].map(i => (
        <path key={i} d={`M358 140 Q380 ${68 + i*36} 360 ${68 + i*36}`} stroke={teal} strokeWidth="1" fill="none" opacity="0.45"/>
      ))}

      {/* Right column: response */}
      <rect x="360" y="40" width="62" height="200" rx="10" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      {['Alert','Probe','Block','Heal','Learn'].map((label, i) => (
        <g key={label}>
          <rect x="368" y={62 + i*36} width="10" height="10" rx="2" fill="none" stroke={teal} strokeWidth="1.4"/>
          <text x="384" y={71 + i*36} {...lbl}>{label}</text>
        </g>
      ))}

      {/* Bottom 24/7 SOC bar */}
      <rect x="40" y="270" width="350" height="46" rx="12" fill="rgba(20,184,166,0.06)" stroke={teal} strokeWidth="1"/>
      <circle cx="65" cy="293" r="9" fill="none" stroke={teal} strokeWidth="1.5"/>
      <text x="65" y="296" textAnchor="middle" fill={teal} fontFamily="'Montserrat',sans-serif" fontWeight="800" fontSize="6">24/7</text>
      <text x="85" y="296" fill="#fff" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.08em">SOC </text>
      <text x="120" y="296" fill={teal} fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.08em">MONITORING &amp; THREAT HUNTING</text>
    </svg>
  );
};

// Variant 2: AI SOC Brain — hexagon with agent satellites
const AIBrainGraphic = () => {
  const teal = '#14b8a6', tealDim = 'rgba(20,184,166,0.5)';
  const cx = 215, cy = 170;
  const agents = [
    { angle: 200, label: 'Threat Detection', sub: 'Monitor signals' },
    { angle: 245, label: 'Intelligence', sub: 'Threat context' },
    { angle: 290, label: 'Hunting', sub: 'Hidden threats' },
    { angle: 20,  label: 'Response', sub: 'Stop threats' },
    { angle: 65,  label: 'Investigation', sub: 'Analyze incidents' },
    { angle: 115, label: 'Compliance', sub: 'Policy & audit' },
  ];
  const radius = 130;
  return (
    <svg width="430" height="340" viewBox="0 0 430 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={teal} stopOpacity="0.4"/>
          <stop offset="100%" stopColor={teal} stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Connecting lines from center to each agent */}
      {agents.map((a, i) => {
        const ax = cx + Math.cos(a.angle * Math.PI/180) * radius;
        const ay = cy + Math.sin(a.angle * Math.PI/180) * radius;
        return <line key={i} x1={cx} y1={cy} x2={ax} y2={ay} stroke={teal} strokeWidth="1" opacity="0.35" strokeDasharray="2 3"/>;
      })}

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={radius + 8} fill="none" stroke={tealDim} strokeWidth="1" strokeDasharray="3 4"/>
      <circle cx={cx} cy={cy} r={radius - 30} fill="none" stroke={tealDim} strokeWidth="0.8" opacity="0.5"/>

      {/* Center glow + hexagon */}
      <circle cx={cx} cy={cy} r="72" fill="url(#brainGlow)"/>
      <polygon points={`${cx},${cy-50} ${cx+43},${cy-25} ${cx+43},${cy+25} ${cx},${cy+50} ${cx-43},${cy+25} ${cx-43},${cy-25}`} fill="rgba(13,27,46,0.6)" stroke={teal} strokeWidth="2"/>
      <polygon points={`${cx},${cy-36} ${cx+31},${cy-18} ${cx+31},${cy+18} ${cx},${cy+36} ${cx-31},${cy+18} ${cx-31},${cy-18}`} fill="none" stroke="#0b6f66" strokeWidth="1.3" opacity="0.7"/>
      <circle cx={cx} cy={cy-5} r="7" fill="none" stroke={teal} strokeWidth="1.8"/>
      <path d={`M${cx-5} ${cy} L${cx-5} ${cy+12} L${cx+5} ${cy+12} L${cx+5} ${cy} Z`} fill={teal}/>

      {/* Agent satellites */}
      {agents.map((a, i) => {
        const ax = cx + Math.cos(a.angle * Math.PI/180) * radius;
        const ay = cy + Math.sin(a.angle * Math.PI/180) * radius;
        const rightSide = ax > cx;
        return (
          <g key={i}>
            <circle cx={ax} cy={ay} r="14" fill="rgba(13,27,46,0.7)" stroke={teal} strokeWidth="1.5"/>
            <circle cx={ax} cy={ay} r="4" fill={teal}/>
            <text x={rightSide ? ax + 20 : ax - 20} y={ay - 1} textAnchor={rightSide ? 'start' : 'end'}
              fill="#cbd5e1" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="9">{a.label}</text>
            <text x={rightSide ? ax + 20 : ax - 20} y={ay + 11} textAnchor={rightSide ? 'start' : 'end'}
              fill="#64748b" fontFamily="'Open Sans',sans-serif" fontWeight="500" fontSize="7.5">{a.sub}</text>
          </g>
        );
      })}

      {/* Title pill bottom */}
      <rect x="135" y="312" width="160" height="22" rx="11" fill="rgba(20,184,166,0.1)" stroke={teal} strokeWidth="1"/>
      <text x="215" y="327" textAnchor="middle" fill={teal} fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.10em">AI SOC BRAIN</text>
    </svg>
  );
};

// Variant 3: Security Command Center — dashboard mock
const CommandCenterGraphic = () => {
  const teal = '#14b8a6', tealDim = 'rgba(20,184,166,0.4)';
  return (
    <svg width="430" height="340" viewBox="0 0 430 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame */}
      <rect x="20" y="20" width="390" height="300" rx="14" fill="rgba(13,27,46,0.6)" stroke={tealDim} strokeWidth="1.2"/>

      {/* Header bar */}
      <rect x="20" y="20" width="390" height="32" rx="14" fill="rgba(20,184,166,0.06)"/>
      <circle cx="38" cy="36" r="5" fill="none" stroke={teal} strokeWidth="1.2"/>
      <text x="50" y="40" fill="#cbd5e1" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.10em">SECUGRAM COMMAND CENTER</text>
      <circle cx="365" cy="36" r="3" fill="#22c55e"/>
      <text x="372" y="40" fill="#22c55e" fontFamily="'Open Sans',sans-serif" fontWeight="600" fontSize="8">LIVE</text>

      {/* Top row metrics */}
      <rect x="32" y="64" width="115" height="78" rx="8" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      <text x="42" y="80" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">THREAT OVERVIEW</text>
      {/* Mini line chart */}
      <polyline points="42,120 54,108 66,116 78,98 90,104 102,90 114,96 126,82 138,88" stroke={teal} strokeWidth="1.5" fill="none"/>
      <polyline points="42,120 54,108 66,116 78,98 90,104 102,90 114,96 126,82 138,88 138,128 42,128" fill={teal} opacity="0.15"/>
      <text x="42" y="138" fill="#fff" fontFamily="'Montserrat',sans-serif" fontWeight="800" fontSize="13">248</text>
      <text x="72" y="137" fill="#94a3b8" fontFamily="'Open Sans',sans-serif" fontSize="7">Total Alerts</text>
      <text x="120" y="137" fill="#22c55e" fontFamily="'Open Sans',sans-serif" fontWeight="700" fontSize="7">↑12%</text>

      {/* Donut */}
      <rect x="155" y="64" width="115" height="78" rx="8" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      <text x="165" y="80" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">SEVERITY</text>
      <circle cx="195" cy="112" r="20" fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="6"/>
      <circle cx="195" cy="112" r="20" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="40 100" strokeDashoffset="0" transform="rotate(-90 195 112)"/>
      <circle cx="195" cy="112" r="20" fill="none" stroke="#f59e0b" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-40" transform="rotate(-90 195 112)"/>
      <circle cx="195" cy="112" r="20" fill="none" stroke={teal} strokeWidth="6" strokeDasharray="20 100" strokeDashoffset="-70" transform="rotate(-90 195 112)"/>
      <text x="195" y="115" textAnchor="middle" fill="#fff" fontFamily="'Montserrat',sans-serif" fontWeight="800" fontSize="11">68</text>
      <g fontFamily="'Open Sans',sans-serif" fontSize="7" fill="#94a3b8">
        <circle cx="232" cy="98" r="2.5" fill="#ef4444"/><text x="238" y="101">Critical 18</text>
        <circle cx="232" cy="111" r="2.5" fill="#f59e0b"/><text x="238" y="114">High 27</text>
        <circle cx="232" cy="124" r="2.5" fill={teal}/><text x="238" y="127">Med 16</text>
        <circle cx="232" cy="137" r="2.5" fill="#64748b"/><text x="238" y="140">Low 7</text>
      </g>

      {/* Attack map */}
      <rect x="278" y="64" width="120" height="78" rx="8" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      <text x="288" y="80" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">ATTACK MAP</text>
      {/* Stylized continents */}
      <path d="M290 100 Q300 95 310 102 Q320 100 330 105 L335 115 Q325 118 318 113 L300 116 Q292 110 290 100Z" fill="rgba(20,184,166,0.2)" stroke={tealDim} strokeWidth="0.6"/>
      <path d="M340 105 Q355 102 370 108 Q380 112 388 118 L385 128 Q370 130 358 124 Q348 122 340 116 Z" fill="rgba(20,184,166,0.2)" stroke={tealDim} strokeWidth="0.6"/>
      <path d="M298 122 Q315 124 330 130 L328 138 Q310 138 298 132 Z" fill="rgba(20,184,166,0.2)" stroke={tealDim} strokeWidth="0.6"/>
      {/* Threat dots */}
      <circle cx="305" cy="108" r="2" fill="#ef4444"/>
      <circle cx="328" cy="115" r="2" fill="#f59e0b"/>
      <circle cx="358" cy="118" r="2" fill="#ef4444"/>
      <circle cx="378" cy="125" r="2" fill="#f59e0b"/>
      <circle cx="320" cy="132" r="2" fill={teal}/>
      {/* Connecting lines */}
      <path d="M305 108 Q330 90 358 118" stroke="#ef4444" strokeWidth="0.8" fill="none" opacity="0.7"/>

      {/* Bottom row: alerts list + status */}
      <rect x="32" y="156" width="220" height="148" rx="8" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      <text x="42" y="172" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">RECENT ALERTS</text>
      {[
        ['Possible Malware Detected', '#ef4444', 'High'],
        ['Brute Force Login Attempt', '#f59e0b', 'Med'],
        ['Unusual Data Exfiltration', '#ef4444', 'High'],
        ['Suspicious Activity', '#f59e0b', 'Med'],
        ['Phishing Email Blocked', teal, 'Low'],
      ].map(([title, col, sev], i) => (
        <g key={i}>
          <rect x="42" y={184 + i*22} width="200" height="18" rx="4" fill="rgba(255,255,255,0.02)"/>
          <circle cx="50" cy={193 + i*22} r="3" fill={col}/>
          <text x="60" y={196 + i*22} fill="#cbd5e1" fontFamily="'Open Sans',sans-serif" fontWeight="600" fontSize="8">{title}</text>
          <text x="220" y={196 + i*22} fill={col} fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7">{sev}</text>
        </g>
      ))}

      {/* Right side status panel */}
      <rect x="260" y="156" width="138" height="148" rx="8" fill="rgba(20,184,166,0.05)" stroke={tealDim} strokeWidth="1"/>
      <text x="270" y="172" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">SYSTEM HEALTH</text>
      {[['SIEM','Healthy'],['EDR','Healthy'],['Network','Healthy'],['Cloud','Healthy']].map(([k,v], i) => (
        <g key={i}>
          <text x="270" y={192 + i*16} fill="#cbd5e1" fontFamily="'Open Sans',sans-serif" fontWeight="600" fontSize="8">{k}</text>
          <circle cx="370" cy={189 + i*16} r="3" fill="#22c55e"/>
          <text x="378" y={192 + i*16} fill="#22c55e" fontFamily="'Open Sans',sans-serif" fontWeight="700" fontSize="7.5">{v}</text>
        </g>
      ))}
      <line x1="270" y1="266" x2="388" y2="266" stroke={tealDim} strokeWidth="0.6"/>
      <text x="270" y="280" fill="#94a3b8" fontFamily="'Montserrat',sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.10em">SOC STATUS</text>
      <text x="270" y="294" fill="#cbd5e1" fontFamily="'Open Sans',sans-serif" fontWeight="600" fontSize="8">Active Analysts</text>
      <text x="380" y="294" fill="#fff" fontFamily="'Montserrat',sans-serif" fontWeight="800" fontSize="9" textAnchor="end">12</text>
    </svg>
  );
};

// Original hexagon graphic kept as 'classic' option
const ClassicHexGraphic = () => (
  <svg width="320" height="300" viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="150" r="130" fill="rgba(11,111,102,0.06)"/>
    <polygon points="160,20 275,82.5 275,207.5 160,270 45,207.5 45,82.5" fill="none" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5"/>
    <polygon points="160,42 255,96 255,204 160,258 65,204 65,96" fill="none" stroke="rgba(20,184,166,0.35)" strokeWidth="1.5"/>
    <polygon points="160,65 235,108.5 235,196.5 160,240 85,196.5 85,108.5" fill="none" stroke="#0b6f66" strokeWidth="2" opacity="0.5"/>
    {[[160,20],[275,82.5],[275,207.5],[160,270],[45,207.5],[45,82.5]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#14b8a6" opacity="0.7"/>
    ))}
    <path d="M120 230 L160 100 L200 140" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M188 110 L205 138 L220 118" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="220" cy="115" r="5" fill="#0b6f66"/>
    <circle cx="160" cy="138" r="18" stroke="#0b6f66" strokeWidth="3" fill="rgba(11,111,102,0.1)"/>
    <path d="M150 150 L150 165 L170 165 L170 150 Z" stroke="#0b6f66" strokeWidth="2.5" fill="rgba(11,111,102,0.2)" strokeLinejoin="round"/>
  </svg>
);

const HeroGraphicSwitcher = ({ variant }) => {
  if (variant === 'flow-diagram') return <FlowDiagramGraphic />;
  if (variant === 'data-flow') return <DataFlowGraphic />;
  if (variant === 'ai-brain')  return <AIBrainGraphic />;
  if (variant === 'command')   return <CommandCenterGraphic />;
  return <ClassicHexGraphic />;
};

Object.assign(window, { HeroGraphicSwitcher, FlowDiagramGraphic, DataFlowGraphic, AIBrainGraphic, CommandCenterGraphic, ClassicHexGraphic });
