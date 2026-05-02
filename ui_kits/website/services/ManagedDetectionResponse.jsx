// ManagedDetectionResponse.jsx — Managed Detection & Response service page

// ── Shared atoms ─────────────────────────────────────────────
const MDRIconMap = ({ name, color = SG_SERVICE_TOKENS.securityTeal, size = 24 }) => {
  const s = { width: size, height: size };
  const p = { stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    activity:  <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    eye:       <svg {...s} viewBox="0 0 24 24"><path {...p} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle {...p} cx="12" cy="12" r="3"/></svg>,
    alert:     <svg {...s} viewBox="0 0 24 24"><path {...p} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line {...p} x1="12" y1="9" x2="12" y2="13"/><line {...p} x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    search:    <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="8"/><line {...p} x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    shield:    <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    clock:     <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><polyline {...p} points="12 6 12 12 16 14"/></svg>,
    cpu:       <svg {...s} viewBox="0 0 24 24"><rect {...p} x="4" y="4" width="16" height="16" rx="2"/><rect {...p} x="9" y="9" width="6" height="6"/><line {...p} x1="9" y1="1" x2="9" y2="4"/><line {...p} x1="15" y1="1" x2="15" y2="4"/><line {...p} x1="9" y1="20" x2="9" y2="23"/><line {...p} x1="15" y1="20" x2="15" y2="23"/><line {...p} x1="20" y1="9" x2="23" y2="9"/><line {...p} x1="20" y1="14" x2="23" y2="14"/><line {...p} x1="1" y1="9" x2="4" y2="9"/><line {...p} x1="1" y1="14" x2="4" y2="14"/></svg>,
    zap:       <svg {...s} viewBox="0 0 24 24"><polygon {...p} points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    bug:       <svg {...s} viewBox="0 0 24 24"><path {...p} d="M8 2l1.5 1.5"/><path {...p} d="M14.5 3.5L16 2"/><path {...p} d="M9 9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/><path {...p} d="M3 11h4M17 11h4M3 16h4M17 16h4"/><path {...p} d="M9 7.5A3.5 3.5 0 0 1 12 5a3.5 3.5 0 0 1 3 2.5"/></svg>,
    terminal:  <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="4 17 10 11 4 5"/><line {...p} x1="12" y1="19" x2="20" y2="19"/></svg>,
    database:  <svg {...s} viewBox="0 0 24 24"><ellipse {...p} cx="12" cy="5" rx="9" ry="3"/><path {...p} d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path {...p} d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    arrow:     <svg {...s} viewBox="0 0 24 24"><line {...p} x1="5" y1="12" x2="19" y2="12"/><polyline {...p} points="13 6 19 12 13 18"/></svg>,
    globe:     <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><line {...p} x1="2" y1="12" x2="22" y2="12"/><path {...p} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    repeat:    <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="17 1 21 5 17 9"/><path {...p} d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline {...p} points="7 23 3 19 7 15"/><path {...p} d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  };
  return icons[name] || null;
};

const MDRCheckBullet = ({ text, accent = SG_SERVICE_TOKENS.securityTeal }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${accent}18`, border: `1.5px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14.5, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.55 }}>{text}</span>
  </div>
);


// ── 1. Hero ───────────────────────────────────────────────────
const MDRHero = ({ onContact }) => (
  <div className="svc-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
    <div className="svc-hero-copy" style={{ padding: '88px 60px 88px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: SG_SERVICE_TOKENS.surface }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
        <a href="../index.html" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, textDecoration: 'none' }}>Home</a>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate }}>Services</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.securityTeal }}>Managed Detection & Response</span>
      </div>
      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MDRIconMap name="activity" size={16} />
        </div>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase' }}>MDR</span>
      </div>
      <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 46, color: SG_SERVICE_TOKENS.headingNavy, lineHeight: 1.07, letterSpacing: '-0.025em', margin: '0 0 22px' }}>
        Managed Detection<br /><span style={{ color: SG_SERVICE_TOKENS.securityTeal }}>& Response</span>
      </h1>
      <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480 }}>
        24/7 proactive monitoring, expert investigation, and rapid incident response — so threats are neutralised before they become business-impacting incidents.
      </p>
      <div className="svc-cta-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <button onClick={onContact} style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15,
          background: SG_SERVICE_TOKENS.securityTeal, color: SG_SERVICE_TOKENS.textOnDark, padding: '13px 32px',
          borderRadius: 9999, border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(11,111,102,0.32)',
          transition: 'background 200ms, transform 150ms',
        }}
          onMouseEnter={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTealHover; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTeal; e.currentTarget.style.transform='translateY(0)'; }}
        >Request Free Assessment</button>
        <a href="#mdr-capabilities" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1.5px solid #1e3a5f', paddingBottom: 1 }}>
          Explore capabilities →
        </a>
      </div>
      {/* Quick stats */}
      <div className="svc-stat-row" style={{ display: 'flex', gap: 40, marginTop: 48, paddingTop: 36, borderTop: '1px solid #f0f0f0' }}>
        {[['24/7','SOC Coverage'],['<1 hr','Mean time to respond'],['365','Days per year']].map(([val, label]) => (
          <div key={label}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 22, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.01em' }}>{val}</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right — dark SOC visual */}
    <div className="svc-hero-visual" style={{
      background: 'linear-gradient(140deg, #0d1b2e 0%, #0f2337 60%, #071420 100%)',
      clipPath: 'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '60px 40px',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,111,102,0.35) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', width: 420, height: 420, background: 'radial-gradient(circle, rgba(11,111,102,0.18) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', zIndex: 1, width: 380 }}>
        <MDRSOCVisual />
      </div>
    </div>
  </div>
);

// SOC operations visual — live threat feed style
const MDRSOCVisual = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  const events = [
    { time: '00:04', sev: 'LOW',  msg: 'Successful auth from new IP — reviewed', color: SG_SERVICE_TOKENS.signalTeal },
    { time: '00:11', sev: 'MED',  msg: 'Unusual outbound port scan — investigating', color: '#f59e0b' },
    { time: '00:19', sev: 'HIGH', msg: 'Lateral movement attempt — contained', color: '#ef4444' },
    { time: '00:23', sev: 'LOW',  msg: 'Patch compliance check completed', color: SG_SERVICE_TOKENS.signalTeal },
    { time: '00:31', sev: 'MED',  msg: 'Privileged account login at off-hours', color: '#f59e0b' },
  ];
  const visibleEvents = events.slice(0, 3 + (tick % 3));

  return (
    <div>
      {/* SOC header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.signalReadable, letterSpacing: '0.14em', textTransform: 'uppercase' }}>SOC Live Feed</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: SG_SERVICE_TOKENS.signalTeal, boxShadow: '0 0 8px #14b8a6' }}></div>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: SG_SERVICE_TOKENS.signalTeal }}>MONITORING ACTIVE</span>
        </div>
      </div>

      {/* Threat feed */}
      <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: 10, padding: '12px', marginBottom: 16, minHeight: 168 }}>
        {visibleEvents.map((ev, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: i < visibleEvents.length - 1 ? 10 : 0 }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: 'rgba(255,255,255,0.35)', flexShrink: 0, marginTop: 2 }}>{ev.time}</span>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 9, color: ev.color, background: `${ev.color}18`, border: `1px solid ${ev.color}44`, borderRadius: 4, padding: '1px 6px', flexShrink: 0, letterSpacing: '0.06em', marginTop: 1 }}>{ev.sev}</span>
            <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.45 }}>{ev.msg}</span>
          </div>
        ))}
      </div>

      {/* Response metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
        {[['MTTD', '< 15 min', SG_SERVICE_TOKENS.signalTeal], ['MTTR', '< 1 hour', SG_SERVICE_TOKENS.securityTeal], ['Uptime', '99.99%', SG_SERVICE_TOKENS.signalTeal]].map(([label, val, col]) => (
          <div key={label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: 8, padding: '10px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 13, color: col, marginBottom: 2 }}>{val}</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Pulse waveform */}
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: SG_SERVICE_TOKENS.signalReadable, letterSpacing: '0.10em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 6 }}>Threat activity — last 24h</div>
      <svg width="100%" height="28" viewBox="0 0 380 28" preserveAspectRatio="none" fill="none">
        <polyline points="0,14 30,14 45,6 55,22 65,6 75,22 90,14 130,14 145,8 155,20 165,8 175,20 185,14 220,14 235,4 245,24 255,4 265,24 275,14 310,14 325,10 335,18 345,10 355,18 365,14 380,14" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <polyline points="0,14 60,14 85,10 110,18 135,10 160,18 185,14 380,14" stroke={SG_SERVICE_TOKENS.securityTeal} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
      </svg>
    </div>
  );
};


// ── 2. Core Capabilities ──────────────────────────────────────
const MDRCapabilities = () => {
  const accent = SG_SERVICE_TOKENS.securityTeal;
  const caps = [
    {
      icon: 'eye',
      title: '24/7 SOC Threat Monitoring',
      body: 'Our analysts monitor your environment around the clock — triaging alerts, suppressing noise, and escalating only what genuinely requires your attention.',
      tags: ['Human-led SOC', '24/7/365', 'Alert Triage'],
    },
    {
      icon: 'zap',
      title: 'Incident Response & Forensics',
      body: 'When a threat is confirmed, our IR team activates immediately — containing, investigating, and remediating the incident, with full forensic documentation.',
      tags: ['IR Activation', 'Containment', 'Digital Forensics'],
    },
    {
      icon: 'database',
      title: 'SIEM & EDR Management',
      body: 'We deploy, tune, and manage your SIEM and endpoint detection tooling — with custom detection rules calibrated to your environment, not generic out-of-the-box policies.',
      tags: ['SIEM Tuning', 'EDR Management', 'Custom Rules'],
    },
    {
      icon: 'globe',
      title: 'Threat Intelligence & Analytics',
      body: 'We feed current adversary TTPs, emerging threat actor campaigns, and industry-specific intelligence into our detection logic — so you\'re prepared for what\'s coming, not just what\'s known.',
      tags: ['CTI Feeds', 'TTP Mapping', 'MITRE ATT&CK'],
    },
    {
      icon: 'search',
      title: 'Threat Hunting',
      body: 'Assume breach is already in. Our analysts conduct proactive threat hunts — looking for adversary indicators, dormant malware, and persistence mechanisms that automated tools miss.',
      tags: ['Proactive Hunting', 'Hypothesis-led', 'Dwell Time Reduction'],
    },
    {
      icon: 'terminal',
      title: 'Detection Engineering',
      body: 'Rules that decay are worse than no rules. We continuously tune, test, and evolve detection logic against new attack patterns — reducing false positives while improving coverage.',
      tags: ['Custom Detections', 'Sigma Rules', 'Continuous Tuning'],
    },
  ];

  return (
    <div id="mdr-capabilities" className="svc-section" style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>What's Included</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Core Capabilities</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Detection and response that goes beyond alerting — human analysts backed by purpose-built tooling, tuned to your environment.
          </p>
        </div>
        <div className="svc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {caps.map(cap => <MDRCapabilityCard key={cap.title} {...cap} accent={accent} />)}
        </div>
      </div>
    </div>
  );
};

const MDRCapabilityCard = ({ icon, title, body, tags, accent }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: SG_SERVICE_TOKENS.surface, border: `1px solid ${hov ? accent : SG_SERVICE_TOKENS.borderCloud}`,
        borderRadius: 14, padding: '28px 26px',
        boxShadow: hov ? '0 12px 36px rgba(11,111,102,0.12)' : '0 2px 10px rgba(30,58,95,0.05)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease', display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 11, background: hov ? accent : SG_SERVICE_TOKENS.mintSurface, border: `1.5px solid ${hov ? accent : '#ccfbf1'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 240ms ease, border-color 240ms ease', flexShrink: 0 }}>
        <MDRIconMap name={icon} color={hov ? SG_SERVICE_TOKENS.textOnDark : accent} size={20} />
      </div>
      <div>
        <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16, color: SG_SERVICE_TOKENS.headingNavy, margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.65, margin: 0 }}>{body}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: accent, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #a7f3d0', borderRadius: 9999, padding: '3px 10px', letterSpacing: '0.04em' }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};


// ── 3. SOC Lifecycle ──────────────────────────────────────────
const MDRSOCLifecycle = () => {
  const [active, setActive] = React.useState(0);
  const accent = SG_SERVICE_TOKENS.securityTeal;
  const phases = [
    {
      label: 'Monitor',
      title: 'Continuous Monitoring',
      icon: 'eye',
      desc: 'Every log line, every endpoint event, every network flow — ingested, normalised, and correlated in real time. Our analysts watch what the alerts surface and investigate what matters.',
      details: ['SIEM log ingestion across all sources', 'EDR telemetry from every endpoint', 'Cloud trail and network flow analysis', 'Custom alert rules calibrated to your environment'],
    },
    {
      label: 'Detect',
      title: 'Threat Detection',
      icon: 'alert',
      desc: 'Detection engineering is a discipline, not a product feature. Our rules are maintained, tested, and tuned — mapped to MITRE ATT&CK and continuously updated as adversary TTPs evolve.',
      details: ['MITRE ATT&CK-mapped detections', 'Behavioural and anomaly-based analytics', 'Threat intelligence correlation', 'Low false-positive, high-fidelity alerting'],
    },
    {
      label: 'Triage',
      title: 'Alert Triage & Investigation',
      icon: 'search',
      desc: 'Every alert is reviewed by a human analyst — not just auto-closed or escalated en masse. We investigate context, determine severity, and confirm before acting.',
      details: ['Human analyst reviews every alert', 'Full kill-chain investigation', 'Context enrichment and correlation', 'Clear escalation with evidence attached'],
    },
    {
      label: 'Respond',
      title: 'Incident Response',
      icon: 'zap',
      desc: 'Confirmed threats trigger immediate response — containment, eradication, and recovery, with your team kept fully informed throughout the incident lifecycle.',
      details: ['Immediate containment actions', 'Endpoint and network isolation', 'Evidence preservation and forensics', 'Full incident report and root cause analysis'],
    },
    {
      label: 'Improve',
      title: 'Continuous Improvement',
      icon: 'repeat',
      desc: 'Every incident is a learning opportunity. We feed findings back into detections, update runbooks, and improve response playbooks — measurably reducing risk over time.',
      details: ['Post-incident review and lessons learned', 'Detection rule refinement', 'Threat hunting based on new TTPs', 'Monthly security posture reporting'],
    },
  ];
  const ph = phases[active];

  return (
    <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Operations</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>The MDR Lifecycle</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            A continuous loop of monitoring, detection, response, and improvement — running 24 hours a day, 365 days a year.
          </p>
        </div>

        {/* Phase strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
          {phases.map((ph, i) => (
            <button key={ph.label} onClick={() => setActive(i)} style={{
              background: active === i ? accent : SG_SERVICE_TOKENS.surface,
              border: 'none', borderRight: i < phases.length - 1 ? `1px solid ${SG_SERVICE_TOKENS.borderCloud}` : 'none',
              padding: '20px 16px', cursor: 'pointer', textAlign: 'center', transition: 'background 200ms',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: active === i ? 'rgba(255,255,255,0.18)' : SG_SERVICE_TOKENS.mintSurface, border: `1.5px solid ${active === i ? 'rgba(255,255,255,0.3)' : '#ccfbf1'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 200ms ease, border-color 200ms ease' }}>
                <MDRIconMap name={ph.icon} color={active === i ? SG_SERVICE_TOKENS.textOnDark : accent} size={16} />
              </div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: active === i ? SG_SERVICE_TOKENS.textOnDark : SG_SERVICE_TOKENS.headingNavy }}>{ph.label}</div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 28, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.015em', margin: '0 0 16px' }}>{ph.title}</h3>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: 0 }}>{ph.desc}</p>
          </div>
          <div style={{ background: SG_SERVICE_TOKENS.sectionMist, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '28px', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.mutedSlate, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>What happens</div>
            {ph.details.map(d => <MDRCheckBullet key={d} text={d} />)}
          </div>
        </div>
      </div>
    </div>
  );
};


// ── 4. Threat Coverage — Live Detection Log ───────────────────
const MDR_LOG_EVENTS = [
  { time: '00:02:14', sev: 'BLOCKED',   cat: 'Ransomware',    msg: 'Ransomware execution halted — Conti variant detected on WKSTN-047' },
  { time: '00:08:31', sev: 'CONTAINED', cat: 'Lateral Move',  msg: 'Pass-the-hash attempt contained — credential pivot from SRV-012 blocked' },
  { time: '00:15:09', sev: 'ALERTED',   cat: 'Cloud',         msg: 'S3 bucket misconfiguration detected — public read access removed' },
  { time: '00:21:44', sev: 'BLOCKED',   cat: 'Identity',      msg: 'MFA bypass blocked — impossible travel: Hanoi → Singapore in 4 min' },
  { time: '00:29:03', sev: 'HUNTING',   cat: 'Threat Hunt',   msg: 'Proactive hunt: APT29 TTP pattern identified — no active compromise found' },
  { time: '00:34:52', sev: 'ALERTED',   cat: 'Insider',       msg: 'Anomalous bulk export: 2.4 GB to personal Dropbox — user suspended pending review' },
  { time: '00:41:17', sev: 'BLOCKED',   cat: 'Supply Chain',  msg: 'Malicious npm package flagged — build pipeline quarantined' },
  { time: '00:47:29', sev: 'RESOLVED',  cat: 'DDoS',          msg: 'Application-layer DDoS mitigated — 48k req/s absorbed, upstream filtering engaged' },
];

const MDR_SEV_STYLE = {
  'BLOCKED':   { bg: 'rgba(239,68,68,0.15)',  border: 'rgba(239,68,68,0.4)',  col: '#ef4444' },
  'CONTAINED': { bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.4)', col: '#f59e0b' },
  'ALERTED':   { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)',col: '#f59e0b' },
  'HUNTING':   { bg: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.35)',col: SG_SERVICE_TOKENS.signalTeal },
  'RESOLVED':  { bg: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.35)',col: SG_SERVICE_TOKENS.signalTeal },
};

const MDRThreatCoverage = () => {
  const [visibleCount, setVisibleCount] = React.useState(4);
  const [pulse, setPulse] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setPulse(p => p + 1);
      setVisibleCount(c => c < MDR_LOG_EVENTS.length ? c + 1 : 4);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const visible = MDR_LOG_EVENTS.slice(0, visibleCount);

  return (
    <div style={{ background: '#0d1b2e', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,111,102,0.2) 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'flex-start', marginBottom: 52 }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.signalTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Coverage</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.textOnDark, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.1 }}>
              Full-Spectrum Threat Coverage
            </h2>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
              Every threat we detect and neutralise — across every attack category, around the clock. Our SOC handles it so you don't have to.
            </p>
          </div>
          {/* KPI pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
            {[['24/7','SOC monitoring'],['6','Threat categories'],['< 1 hr','Mean time to respond']].map(([val, label]) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '11px 16px', display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 17, color: SG_SERVICE_TOKENS.signalTeal }}>{val}</span>
                <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal log */}
        <div style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: 14, overflow: 'hidden' }}>
          {/* Terminal chrome */}
          <div style={{ background: 'rgba(0,0,0,0.35)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '11px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ef4444','#f59e0b','#22c55e'].map(c => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.7 }}></div>
              ))}
            </div>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.06em' }}>secugram-soc — live detection feed</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 7, alignItems: 'center' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: SG_SERVICE_TOKENS.signalTeal, boxShadow: '0 0 6px #14b8a6' }}></div>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.signalTeal, letterSpacing: '0.08em' }}>LIVE</span>
            </div>
          </div>

          {/* Log rows */}
          <div style={{ padding: '4px 0' }}>
            {visible.map((ev, i) => {
              const st = MDR_SEV_STYLE[ev.sev];
              const isNew = i === visibleCount - 1;
              return (
                <div key={`${i}-${visibleCount}`} style={{
                  display: 'grid', gridTemplateColumns: '88px 96px 110px 1fr',
                  gap: 18, alignItems: 'center',
                  padding: '11px 20px',
                  background: isNew ? 'rgba(11,111,102,0.07)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'background 600ms',
                }}>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.03em' }}>{ev.time}</span>
                  <span style={{
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 9.5,
                    color: st.col, background: st.bg, border: `1px solid ${st.border}`,
                    borderRadius: 5, padding: '3px 8px', letterSpacing: '0.07em', textAlign: 'center',
                  }}>{ev.sev}</span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.03em' }}>{ev.cat}</span>
                  <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>{ev.msg}</span>
                </div>
              );
            })}
            {/* Blinking cursor */}
            <div style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.signalTeal }}>›</span>
              <div style={{ width: 8, height: 15, background: SG_SERVICE_TOKENS.signalTeal, opacity: pulse % 2 === 0 ? 1 : 0, transition: 'opacity 300ms', borderRadius: 1 }}></div>
            </div>
          </div>
        </div>

        {/* Category legend */}
        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          {[
            { label: 'Ransomware', col: '#ef4444' },
            { label: 'Lateral Movement', col: '#f59e0b' },
            { label: 'Cloud Threats', col: '#f59e0b' },
            { label: 'Identity Attacks', col: '#ef4444' },
            { label: 'Insider Threats', col: '#f59e0b' },
            { label: 'Supply Chain', col: '#ef4444' },
            { label: 'Threat Hunting', col: SG_SERVICE_TOKENS.signalTeal },
            { label: 'DDoS', col: SG_SERVICE_TOKENS.signalTeal },
          ].map(({ label, col }) => (
            <div key={label} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: col }}></div>
              <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11.5, color: 'rgba(255,255,255,0.4)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ── 5. Why It Matters ─────────────────────────────────────────
const MDRWhyItMatters = () => (
  <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Why It Matters</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 38, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 22px', lineHeight: 1.1 }}>
            Attackers Move Fast.<br />Most SMEs Don't See It Coming.
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: '0 0 32px' }}>
            The average dwell time for an attacker in an SME environment is over 200 days. Without continuous monitoring, you don't know you've been breached until the ransomware note appears — or a customer tells you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Reduce dwell time from months to hours with continuous monitoring',
              'Human analysts confirm every real threat before it escalates',
              'Rapid containment limits blast radius and business disruption',
              'Full forensic documentation for regulatory and legal requirements',
            ].map(item => <MDRCheckBullet key={item} text={item} />)}
          </div>
        </div>
        <div className="svc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { val: '207 days', label: 'average attacker dwell time in SME', src: 'IBM Cost of Breach 2024' },
            { val: '74%', label: 'of breaches involve human element', src: 'Verizon DBIR 2024' },
            { val: '83%', label: 'of organisations had multiple breaches', src: 'IBM Security 2024' },
            { val: '< 1hr', label: 'Secugram mean time to respond', src: 'Secugram SLA' },
          ].map(s => (
            <div key={s.val} style={{ background: SG_SERVICE_TOKENS.surface, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14, padding: '28px 24px', boxShadow: '0 2px 12px rgba(30,58,95,0.06)' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 26, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.5, marginBottom: 10 }}>{s.label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: SG_SERVICE_TOKENS.mutedReadable }}>{s.src}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


// ── 6. Tooling ────────────────────────────────────────────────
const MDRTooling = () => (
  <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '80px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>Tooling</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: 0 }}>Vendor-Neutral Technology</h2>
        </div>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 15, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
          We integrate with your existing stack or deploy best-fit solutions — we're not tied to any single vendor.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { cat: 'SIEM', tools: ['Microsoft Sentinel', 'Splunk', 'Elastic SIEM', 'QRadar'] },
          { cat: 'EDR / XDR', tools: ['CrowdStrike Falcon', 'Microsoft Defender', 'SentinelOne', 'Carbon Black'] },
          { cat: 'Cloud Security', tools: ['AWS Security Hub', 'Azure Defender', 'GCP Security', 'Wiz / Prisma'] },
          { cat: 'Threat Intel', tools: ['MISP', 'Recorded Future', 'VirusTotal', 'ISAC feeds'] },
        ].map(({ cat, tools }) => (
          <div key={cat} style={{ border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '24px 22px', background: SG_SERVICE_TOKENS.surface, boxShadow: '0 2px 8px rgba(30,58,95,0.05)' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, marginBottom: 16 }}>{cat}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {tools.map(t => (
                <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: SG_SERVICE_TOKENS.securityTeal, flexShrink: 0 }}></div>
                  <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: SG_SERVICE_TOKENS.bodySlate }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


// ── 7. CTA ────────────────────────────────────────────────────
const MDRServiceCTA = ({ onContact }) => (
  <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div className="svc-hero-visual" style={{
      background: 'linear-gradient(140deg, #071420 0%, #0d2335 100%)',
        borderRadius: 20, padding: '72px 80px',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 56, alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg width="220" height="220" viewBox="0 0 100 100" style={{ position: 'absolute', right: -30, bottom: -40, opacity: 0.08 }}>
          <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke={SG_SERVICE_TOKENS.securityTeal} strokeWidth="1.5"/>
          <polygon points="50,18 80,36 80,64 50,82 20,64 20,36" fill="none" stroke={SG_SERVICE_TOKENS.securityTeal} strokeWidth="1.2"/>
        </svg>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.signalTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Get Started</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.textOnDark, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.15 }}>
            Know About Threats Before<br />They Become Incidents
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0 }}>
            Start with a free security assessment — we'll review your current detection capabilities, identify blind spots, and show you what monitored coverage looks like for your environment.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
          <button onClick={onContact} style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15,
            background: SG_SERVICE_TOKENS.securityTeal, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 36px',
            borderRadius: 9999, border: 'none', cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(11,111,102,0.40)',
            transition: 'background 200ms, transform 150ms', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTealHover; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTeal; e.currentTarget.style.transform='translateY(0)'; }}
          >Request Free Assessment</button>
          <a href="../index.html#contact" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textAlign: 'center' }}>
            Or email security@secugram.io
          </a>
        </div>
      </div>
    </div>
  </div>
);


// ── 8. Related Services ───────────────────────────────────────
const MDRRelatedServices = () => (
  <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '60px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24 }}>Also from Secugram</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {[
          { tag: 'Infrastructure', title: 'Secure Infrastructure Platform', body: 'Hardened cloud, hybrid, and on-prem environments with integrated 24/7 monitoring.', href: 'secure-infrastructure.html', accent: SG_SERVICE_TOKENS.securityTeal },
          { tag: 'Consulting', title: 'Security Architecture & Consulting', body: 'Risk assessment, Zero Trust design, compliance alignment, and executive advisory.', href: 'security-architecture.html', accent: SG_SERVICE_TOKENS.alertBlue },
        ].map(svc => (
          <a key={svc.title} href={svc.href} style={{
            display: 'flex', gap: 20, alignItems: 'flex-start',
            background: SG_SERVICE_TOKENS.sectionMist, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '22px 24px',
            textDecoration: 'none', transition: 'border-color 200ms, box-shadow 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = svc.accent; e.currentTarget.style.boxShadow = `0 4px 20px ${svc.accent}1a`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = SG_SERVICE_TOKENS.borderCloud; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: svc.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{svc.tag}</span>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15, color: SG_SERVICE_TOKENS.headingNavy, margin: '5px 0 6px', lineHeight: 1.3 }}>{svc.title}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.55 }}>{svc.body}</div>
            </div>
            <MDRIconMap name="arrow" color={svc.accent} size={18} />
          </a>
        ))}
      </div>
    </div>
  </div>
);


// ── Contact ───────────────────────────────────────────────────
const MDRContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 14 }}>Discuss Your MDR Requirements</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.6 }}>
            Tell us about your environment and current detection gaps. Email us at <span style={{ color: SG_SERVICE_TOKENS.securityTeal, fontWeight: 600 }}>security@secugram.io</span> or fill in the form.
          </p>
        </div>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: SG_SERVICE_TOKENS.mintSurface, border: `2px solid ${SG_SERVICE_TOKENS.securityTeal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={SG_SERVICE_TOKENS.securityTeal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22, color: SG_SERVICE_TOKENS.headingNavy, marginBottom: 10 }}>Message Sent!</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", color: SG_SERVICE_TOKENS.mutedSlate }}>We'll be in touch within one business day.</div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="svc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['name','Full Name','Jane Smith'],['email','Work Email','jane@company.com']].map(([key,label,ph]) => (
                <div key={key}>
                  <label htmlFor={`mdr-${key}`} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>{label}</label>
                  <input id={`mdr-${key}`} name={key} autoComplete={key==='email'?'email':'name'} type={key==='email'?'email':'text'} placeholder={ph} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} required
                    style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                    onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                    onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="mdr-company" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Company</label>
              <input id="mdr-company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <div>
              <label htmlFor="mdr-message" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea id="mdr-message" name="message" placeholder="Tell us about your current monitoring capabilities and environment..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none', resize: 'vertical' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <button type="submit" style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
              background: SG_SERVICE_TOKENS.securityTeal, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 0',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(11,111,102,0.30)', transition: 'background 200ms',
            }}
              onMouseEnter={e=>e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTealHover}
              onMouseLeave={e=>e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTeal}
            >Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};


// ── Nav ───────────────────────────────────────────────────────
const MDRNavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('mdr-scroll');
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 20);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);
  const navItems = [
    { label: 'Home', href: '../index.html' },
    { label: 'Why Secugram', href: '../index.html#why-secugram' },
    { label: 'How We Work', href: '../index.html#methodology' },
    { label: 'Services', href: '../index.html#services', active: true },
    { label: 'Security Ops', href: '../index.html#security-ops' },
  ];
  return (
    <nav data-tw-nav style={{
      position: 'sticky', top: 0, zIndex: 100, background: SG_SERVICE_TOKENS.surface,
      borderBottom: scrolled ? `1px solid ${SG_SERVICE_TOKENS.borderCloud}` : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(30,58,95,0.08)' : 'none',
      transition: 'background 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 60px', height: 72,
    }}>
      <a href="../index.html" className="sg-logo-button" aria-label="Secugram home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', border: 0, background: 'transparent', padding: 0 }}>
        <img src="../long_logo.png" alt="Secugram" width="300" height="83" decoding="async" style={{ width: 186, height: 'auto', display: 'block' }} />
      </a>
      <button className="sg-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
        <span></span><span></span><span></span>
      </button>
      <div className="sg-nav-links" data-open={menuOpen ? 'true' : 'false'} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {navItems.map(item => (
          <a key={item.label} href={item.href} className="sg-nav-link" style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13,
            color: item.active ? SG_SERVICE_TOKENS.headingNavy : SG_SERVICE_TOKENS.mutedSlate, textDecoration: 'none',
            borderBottom: item.active ? `2px solid ${SG_SERVICE_TOKENS.securityTeal}` : '2px solid transparent',
            paddingBottom: 2, transition: 'color 200ms, border-color 200ms', whiteSpace: 'nowrap',
          }}>{item.label}</a>
        ))}
        <a href="#mdr-contact" className="sg-nav-link sg-nav-cta"
          onClick={e => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('mdr-contact'); const sc = document.getElementById('mdr-scroll'); if (el && sc) sc.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' }); }}
          style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13,
            color: SG_SERVICE_TOKENS.textOnDark, background: SG_SERVICE_TOKENS.securityTeal, textDecoration: 'none',
            borderRadius: 9999, padding: '11px 26px',
            boxShadow: '0 10px 24px rgba(11,111,102,0.24)',
            transition: 'color 200ms, background 200ms, transform 150ms, box-shadow 200ms', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTealHover; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(11,111,102,0.30)'; }}
          onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTeal; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 10px 24px rgba(11,111,102,0.24)'; }}
        >Contact us</a>
      </div>
    </nav>
  );
};


// ── Page Root ─────────────────────────────────────────────────
const ManagedDetectionResponsePage = () => {
  const scrollToContact = () => {
    const el = document.getElementById('mdr-contact');
    const sc = document.getElementById('mdr-scroll');
    if (el && sc) sc.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <div id="mdr-scroll" className="svc-page" style={{ height: '100vh', overflowY: 'auto', scrollBehavior: 'smooth', background: SG_SERVICE_TOKENS.surface }}>
      <MDRNavBar />
      <main>
      <MDRHero onContact={scrollToContact} />
      <MDRWhyItMatters />
      <MDRCapabilities />
      <MDRSOCLifecycle />
      <MDRThreatCoverage />
      <MDRTooling />
      <MDRRelatedServices />
      <div id="mdr-contact"><MDRContactSection /></div>
      </main>
      <FooterSection onNav={section => { window.location.href = `../index.html#${section}`; }} rootPath="../" />
    </div>
  );
};

Object.assign(window, { ManagedDetectionResponsePage });
