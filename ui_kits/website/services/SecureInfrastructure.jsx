// SecureInfrastructure.jsx — Secure Infrastructure Platform service page components

// ── Shared atoms ─────────────────────────────────────────────
const SIPIconMap = ({ name, color = SG_SERVICE_TOKENS.securityTeal, size = 24 }) => {
  const s = { width: size, height: size };
  const p = { stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    server:    <svg {...s} viewBox="0 0 24 24"><rect {...p} x="2" y="2" width="20" height="8" rx="2"/><rect {...p} x="2" y="14" width="20" height="8" rx="2"/><line {...p} x1="6" y1="6" x2="6.01" y2="6"/><line {...p} x1="6" y1="18" x2="6.01" y2="18"/><line {...p} x1="10" y1="6" x2="18" y2="6"/><line {...p} x1="10" y1="18" x2="18" y2="18"/></svg>,
    cloud:     <svg {...s} viewBox="0 0 24 24"><path {...p} d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    shield:    <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    lock:      <svg {...s} viewBox="0 0 24 24"><rect {...p} x="3" y="11" width="18" height="11" rx="2"/><path {...p} d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    network:   <svg {...s} viewBox="0 0 24 24"><rect {...p} x="2" y="2" width="6" height="6" rx="1"/><rect {...p} x="16" y="2" width="6" height="6" rx="1"/><rect {...p} x="9" y="16" width="6" height="6" rx="1"/><path {...p} d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><line {...p} x1="12" y1="13" x2="12" y2="16"/></svg>,
    patch:     <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline {...p} points="9 12 11 14 15 10"/></svg>,
    eye:       <svg {...s} viewBox="0 0 24 24"><path {...p} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle {...p} cx="12" cy="12" r="3"/></svg>,
    zap:       <svg {...s} viewBox="0 0 24 24"><polygon {...p} points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    check:     <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="20 6 9 17 4 12"/></svg>,
    layers:    <svg {...s} viewBox="0 0 24 24"><polygon {...p} points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><polyline {...p} points="2 8.5 12 15 22 8.5"/><line {...p} x1="12" y1="15" x2="12" y2="22"/></svg>,
    cpu:       <svg {...s} viewBox="0 0 24 24"><rect {...p} x="4" y="4" width="16" height="16" rx="2"/><rect {...p} x="9" y="9" width="6" height="6"/><line {...p} x1="9" y1="1" x2="9" y2="4"/><line {...p} x1="15" y1="1" x2="15" y2="4"/><line {...p} x1="9" y1="20" x2="9" y2="23"/><line {...p} x1="15" y1="20" x2="15" y2="23"/><line {...p} x1="20" y1="9" x2="23" y2="9"/><line {...p} x1="20" y1="14" x2="23" y2="14"/><line {...p} x1="1" y1="9" x2="4" y2="9"/><line {...p} x1="1" y1="14" x2="4" y2="14"/></svg>,
    arrow:     <svg {...s} viewBox="0 0 24 24"><line {...p} x1="5" y1="12" x2="19" y2="12"/><polyline {...p} points="13 6 19 12 13 18"/></svg>,
    globe:     <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><line {...p} x1="2" y1="12" x2="22" y2="12"/><path {...p} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    activity:  <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  };
  return icons[name] || null;
};

const SIPCheckBullet = ({ text, accent = SG_SERVICE_TOKENS.securityTeal }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${accent}18`, border: `1.5px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14.5, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.55 }}>{text}</span>
  </div>
);


// ── 1. Hero ───────────────────────────────────────────────────
const SIPHero = ({ onContact }) => (
  <div className="svc-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
    {/* Left */}
    <div className="svc-hero-copy" style={{ padding: '88px 60px 88px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: SG_SERVICE_TOKENS.surface }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
        <a href="../index.html" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, textDecoration: 'none', letterSpacing: '0.04em' }}>Home</a>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, letterSpacing: '0.04em' }}>Services</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.04em' }}>Secure Infrastructure</span>
      </div>
      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SIPIconMap name="server" size={16} />
        </div>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Infrastructure</span>
      </div>
      {/* Headline */}
      <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 46, color: SG_SERVICE_TOKENS.headingNavy, lineHeight: 1.07, letterSpacing: '-0.025em', margin: '0 0 22px' }}>
        Secure Infrastructure<br /><span style={{ color: SG_SERVICE_TOKENS.securityTeal }}>Platform</span>
      </h1>
      <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480 }}>
        Hardened cloud, hybrid, and on-premises environments engineered for security from the ground up — with 24/7 monitoring baked in from day one.
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
        >Request Assessment</button>
        <a href="#capabilities" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1.5px solid #1e3a5f', paddingBottom: 1 }}>
          Explore capabilities →
        </a>
      </div>
      {/* Quick stats */}
      <div className="svc-stat-row" style={{ display: 'flex', gap: 40, marginTop: 48, paddingTop: 36, borderTop: '1px solid #f0f0f0' }}>
        {[['Cloud · Hybrid','On-prem ready'],['24/7','Integrated monitoring'],['99.9%','Platform availability']].map(([val, label]) => (
          <div key={label}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 20, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.01em' }}>{val}</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
    {/* Right — dark with animated diagram */}
    <div className="svc-hero-visual" style={{
      background: 'linear-gradient(140deg, #0d1b2e 0%, #162840 60%, #0a2535 100%)',
      clipPath: 'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '60px 40px',
    }}>
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20,184,166,0.35) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }}></div>
      {/* Radial glow */}
      <div style={{ position: 'absolute', width: 420, height: 420, background: 'radial-gradient(circle, rgba(11,111,102,0.18) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      {/* Infrastructure stack diagram */}
      <div style={{ position: 'relative', zIndex: 1, width: 380 }}>
        <SIPStackDiagram />
      </div>
    </div>
  </div>
);

// Layered infrastructure stack visual
const SIPStackDiagram = () => {
  const layers = [
    { label: 'Business Applications', sub: 'Secure app layer', icon: 'layers', color: SG_SERVICE_TOKENS.signalTeal },
    { label: 'Cloud / Hybrid Hosting', sub: 'AWS · Azure · GCP · On-prem', icon: 'cloud', color: SG_SERVICE_TOKENS.securityTeal },
    { label: 'Network & Firewall', sub: 'Segmentation · WAF · VPN', icon: 'network', color: SG_SERVICE_TOKENS.securityTealHover },
    { label: 'Endpoint & Server Hardening', sub: 'CIS benchmarks · EDR', icon: 'server', color: '#0d6b62' },
    { label: 'Continuous Monitoring', sub: '24/7 SOC · SIEM · Alerting', icon: 'eye', color: '#0a5c54' },
  ];
  return (
    <div>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.signalReadable, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 22, textAlign: 'center' }}>Infrastructure Security Stack</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={layer.label} style={{
            background: `rgba(255,255,255,${0.04 + i * 0.025})`,
            border: '1px solid rgba(20,184,166,0.18)',
            borderBottom: i < layers.length - 1 ? 'none' : '1px solid rgba(20,184,166,0.18)',
            borderRadius: i === 0 ? '12px 12px 0 0' : i === layers.length - 1 ? '0 0 12px 12px' : '0',
            padding: '14px 20px',
            display: 'flex', alignItems: 'center', gap: 16,
            transition: 'background 200ms',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `${layer.color}22`, border: `1px solid ${layer.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <SIPIconMap name={layer.icon} color={layer.color} size={16} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12.5, color: SG_SERVICE_TOKENS.textOnDark, marginBottom: 2 }}>{layer.label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{layer.sub}</div>
            </div>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: layer.color, boxShadow: `0 0 8px ${layer.color}`, flexShrink: 0 }}></div>
          </div>
        ))}
      </div>
      {/* Monitoring pulse line at bottom */}
      <div style={{ marginTop: 18, height: 40, position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: SG_SERVICE_TOKENS.signalReadable, letterSpacing: '0.10em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 8 }}>Live monitoring signal</div>
        <svg width="100%" height="24" viewBox="0 0 380 24" preserveAspectRatio="none" fill="none">
          <polyline points="0,12 40,12 55,4 70,20 85,4 100,20 115,12 160,12 175,6 190,18 205,6 220,18 235,12 380,12" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          <circle cx="235" cy="12" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </div>
  );
};


// ── 2. Core Capabilities ──────────────────────────────────────
const SIPCapabilities = () => {
  const caps = [
    {
      icon: 'server',
      title: 'Hardened Server Environments',
      body: 'Every server is configured against CIS Benchmarks — OS hardening, unnecessary services removed, privilege separation enforced, and baseline drift alerting active from day one.',
      tags: ['CIS Benchmarks', 'OS Hardening', 'Baseline Monitoring'],
    },
    {
      icon: 'cloud',
      title: 'Secure Cloud & Hybrid Hosting',
      body: 'Cloud-native architectures (AWS, Azure, GCP) and hybrid environments designed with security controls embedded at every layer — IAM, encryption, network policy, and continuous posture assessment.',
      tags: ['AWS · Azure · GCP', 'IAM Controls', 'Posture Management'],
    },
    {
      icon: 'eye',
      title: 'Integrated 24/7 Security Monitoring',
      body: 'SIEM and EDR deployed and tuned to your environment — not a generic ruleset. Our SOC analysts review alerts around the clock so threats are investigated, not just logged.',
      tags: ['SIEM', 'EDR', 'SOC Coverage'],
    },
    {
      icon: 'network',
      title: 'Network Segmentation & Firewall Management',
      body: 'Lateral movement is the attacker\'s fastest path. We design and enforce network boundaries, manage firewall rule sets, and implement micro-segmentation to limit blast radius.',
      tags: ['Zero Trust Networking', 'WAF', 'Micro-segmentation'],
    },
    {
      icon: 'patch',
      title: 'Patch Management & Vulnerability Remediation',
      body: 'Unpatched systems are the leading cause of breaches. We automate patch cycles, track vulnerability exposure, and prioritise critical remediation before attackers can exploit it.',
      tags: ['Automated Patching', 'CVE Tracking', 'Risk Prioritisation'],
    },
    {
      icon: 'lock',
      title: 'Access Control & Identity Security',
      body: 'Privileged access management, MFA enforcement, service account governance, and identity lifecycle management — because most breaches start with a compromised credential.',
      tags: ['PAM', 'MFA Enforcement', 'IAM Governance'],
    },
  ];

  return (
    <div id="capabilities" className="svc-section" style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>What's Included</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Core Capabilities</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Every capability is delivered and managed by our team — not handed off as a tooling deployment.
          </p>
        </div>
        <div className="svc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {caps.map((cap, i) => (
            <SIPCapabilityCard key={cap.title} {...cap} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SIPCapabilityCard = ({ icon, title, body, tags }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: SG_SERVICE_TOKENS.surface,
        border: `1px solid ${hov ? SG_SERVICE_TOKENS.securityTeal : SG_SERVICE_TOKENS.borderCloud}`,
        borderRadius: 14,
        padding: '28px 26px',
        boxShadow: hov ? '0 12px 36px rgba(11,111,102,0.12)' : '0 2px 10px rgba(30,58,95,0.05)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 11, background: hov ? SG_SERVICE_TOKENS.securityTeal : SG_SERVICE_TOKENS.mintSurface, border: `1.5px solid ${hov ? SG_SERVICE_TOKENS.securityTeal : '#ccfbf1'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 240ms ease, border-color 240ms ease', flexShrink: 0 }}>
        <SIPIconMap name={icon} color={hov ? SG_SERVICE_TOKENS.textOnDark : SG_SERVICE_TOKENS.securityTeal} size={20} />
      </div>
      <div>
        <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16, color: SG_SERVICE_TOKENS.headingNavy, margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.65, margin: 0 }}>{body}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: SG_SERVICE_TOKENS.securityTeal, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #a7f3d0', borderRadius: 9999, padding: '3px 10px', letterSpacing: '0.04em' }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};


// ── 3. How It Works ───────────────────────────────────────────
const SIPHowItWorks = () => {
  const [active, setActive] = React.useState(0);
  const phases = [
    {
      num: '01',
      title: 'Discovery & Assessment',
      summary: 'We map your full environment — cloud accounts, servers, endpoints, network topology, and third-party services — and identify every security gap.',
      details: [
        'Architecture discovery and asset inventory',
        'Threat modelling and attack surface analysis',
        'Compliance gap identification (ISO, PCI, NIST)',
        'Existing control effectiveness review',
        'Risk prioritisation report delivered',
      ],
      duration: '1–2 weeks',
    },
    {
      num: '02',
      title: 'Hardening & Build',
      summary: 'Our team applies security controls layer by layer — hardening servers, configuring cloud environments, deploying monitoring tooling, and enforcing access policy.',
      details: [
        'OS and server hardening to CIS Benchmarks',
        'Cloud security posture configuration',
        'Network segmentation and firewall rule design',
        'SIEM and EDR deployment and tuning',
        'IAM policy and PAM implementation',
      ],
      duration: '2–4 weeks',
    },
    {
      num: '03',
      title: '24/7 Monitoring Goes Live',
      summary: 'The platform enters continuous monitoring. Our SOC analysts watch your environment around the clock, investigating every alert and suppressing false positives.',
      details: [
        'SOC monitoring activated across all layers',
        'Custom detection rules deployed for your environment',
        'Threat intelligence feeds integrated',
        'Alert escalation and on-call response active',
        'Weekly security posture reports delivered',
      ],
      duration: 'Ongoing',
    },
    {
      num: '04',
      title: 'Continuous Improvement',
      summary: 'Security is not a one-time project. We track new vulnerabilities, refine detections, conduct quarterly reviews, and improve your posture continuously.',
      details: [
        'Patch management and vulnerability remediation',
        'Quarterly architecture and posture reviews',
        'Detection engineering iterations',
        'Threat hunting and proactive adversary pursuit',
        'Annual penetration testing coordination',
      ],
      duration: 'Quarterly cycles',
    },
  ];

  const ph = phases[active];

  return (
    <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Delivery</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>How It Works</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            From first discovery to ongoing operations — a structured onboarding that gets you protected fast.
          </p>
        </div>

        {/* Phase tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
          {phases.map((ph, i) => (
            <button key={ph.num} onClick={() => setActive(i)}
              style={{
                background: active === i ? SG_SERVICE_TOKENS.securityTeal : SG_SERVICE_TOKENS.surface,
                border: 'none',
                borderRight: i < phases.length - 1 ? `1px solid ${SG_SERVICE_TOKENS.borderCloud}` : 'none',
                padding: '22px 20px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 200ms',
              }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 11, color: active === i ? 'rgba(255,255,255,0.7)' : SG_SERVICE_TOKENS.mutedReadable, letterSpacing: '0.12em', marginBottom: 6 }}>{ph.num}</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13.5, color: active === i ? SG_SERVICE_TOKENS.textOnDark : SG_SERVICE_TOKENS.headingNavy, lineHeight: 1.25 }}>{ph.title}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: active === i ? 'rgba(255,255,255,0.65)' : SG_SERVICE_TOKENS.mutedSlate, marginTop: 4 }}>{ph.duration}</div>
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #a7f3d0', borderRadius: 9999, padding: '5px 14px', marginBottom: 20 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: SG_SERVICE_TOKENS.securityTeal }}></div>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.10em' }}>{ph.duration}</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 28, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.015em', margin: '0 0 16px' }}>{ph.title}</h3>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: 0 }}>{ph.summary}</p>
          </div>
          <div style={{ background: SG_SERVICE_TOKENS.sectionMist, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '28px 28px', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.mutedSlate, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Deliverables</div>
            {ph.details.map(d => <SIPCheckBullet key={d} text={d} />)}
          </div>
        </div>
      </div>
    </div>
  );
};


// ── 4. Environment Support ────────────────────────────────────
const SIPEnvironments = () => {
  const envs = [
    {
      label: 'Public Cloud',
      sub: 'AWS · Azure · Google Cloud',
      icon: 'cloud',
      features: ['Cloud security posture management', 'IAM policy governance', 'CloudTrail / Defender / Chronicle', 'Serverless and container security'],
      highlight: true,
    },
    {
      label: 'Hybrid',
      sub: 'Cloud + On-premises',
      icon: 'layers',
      features: ['Unified monitoring across both', 'Consistent policy enforcement', 'Hybrid identity management', 'Site-to-site encrypted connectivity'],
      highlight: false,
    },
    {
      label: 'On-Premises',
      sub: 'Data centres & bare metal',
      icon: 'server',
      features: ['Physical & virtual server hardening', 'Internal network segmentation', 'On-site log collection & SIEM', 'Hypervisor security controls'],
      highlight: false,
    },
  ];

  return (
    <div style={{ background: '#0d1b2e', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20,184,166,0.2) 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.signalTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Environment Coverage</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.textOnDark, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Wherever Your Infrastructure Lives
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            We secure any environment — cloud-native, hybrid, or on-premises — with the same rigour and monitoring depth.
          </p>
        </div>
        <div className="svc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {envs.map(env => (
            <div key={env.label} style={{
              background: env.highlight ? 'rgba(11,111,102,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${env.highlight ? 'rgba(11,111,102,0.5)' : 'rgba(255,255,255,0.10)'}`,
              borderRadius: 14,
              padding: '32px 28px',
            }}>
              <div style={{ width: 50, height: 50, borderRadius: 11, background: env.highlight ? SG_SERVICE_TOKENS.securityTeal : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <SIPIconMap name={env.icon} color={env.highlight ? SG_SERVICE_TOKENS.textOnDark : SG_SERVICE_TOKENS.signalTeal} size={22} />
              </div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: SG_SERVICE_TOKENS.textOnDark, marginBottom: 4 }}>{env.label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12.5, color: 'rgba(255,255,255,0.5)', marginBottom: 22 }}>{env.sub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {env.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: env.highlight ? SG_SERVICE_TOKENS.signalTeal : SG_SERVICE_TOKENS.signalReadable, marginTop: 6, flexShrink: 0 }}></div>
                    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ── 5. Why It Matters ─────────────────────────────────────────
const SIPWhyItMatters = () => {
  const stats = [
    { val: '82%', label: 'of breaches involve cloud assets', src: 'Verizon DBIR 2024' },
    { val: '43%', label: 'of cyberattacks target SMEs', src: 'Verizon DBIR 2024' },
    { val: '207 days', label: 'average time to identify a breach', src: 'IBM Cost of Breach 2024' },
    { val: '$4.9M', label: 'average cost of a data breach', src: 'IBM Cost of Breach 2024' },
  ];

  return (
    <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Why It Matters</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 38, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 22px', lineHeight: 1.1 }}>
              Infrastructure Is the<br />Most-Targeted Attack Surface
            </h2>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: '0 0 32px' }}>
              Attackers exploit misconfigured servers, unpatched systems, and overly permissive cloud policies every day. Most SMEs don't discover a breach until weeks or months after it occurred.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Security embedded at infrastructure design — not added later',
                'Continuous monitoring to reduce dwell time from months to hours',
                'Vendor-neutral: we work with your existing cloud and tooling',
                'Compliance-aligned to ISO 27001, PCI-DSS, and NIST frameworks',
              ].map(item => <SIPCheckBullet key={item} text={item} />)}
            </div>
          </div>
          <div className="svc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {stats.map(s => (
              <div key={s.val} style={{
                background: SG_SERVICE_TOKENS.surface, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14,
                padding: '28px 24px', boxShadow: '0 2px 12px rgba(30,58,95,0.06)',
              }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 32, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.5, marginBottom: 12 }}>{s.label}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: SG_SERVICE_TOKENS.mutedReadable }}>{s.src}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// ── 6. Compliance Alignment ───────────────────────────────────
const SIPCompliance = () => {
  const frameworks = [
    { code: 'ISO 27001', name: 'Information Security Management', badge: 'Aligned', items: ['A.8 Asset management', 'A.12 Operations security', 'A.13 Network security'] },
    { code: 'PCI-DSS', name: 'Payment Card Industry', badge: 'Ready', items: ['Req. 1 Network controls', 'Req. 2 Secure configs', 'Req. 6 Vulnerability mgmt'] },
    { code: 'NIST CSF', name: 'Cybersecurity Framework', badge: 'Framework', items: ['Identify & Protect', 'Detect & Respond', 'Recover & Improve'] },
    { code: 'CIS Controls', name: 'Center for Internet Security', badge: 'Implemented', items: ['CIS Control 1–4 (Basic)', 'CIS Control 5–11 (Foundational)', 'Continuous benchmarking'] },
  ];

  return (
    <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>Compliance</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: 0 }}>Framework Alignment</h2>
          </div>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 15, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            Our platform is designed to support your compliance obligations — from ISO audits to PCI assessments.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {frameworks.map(fw => (
            <div key={fw.code} style={{ border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '24px 22px', background: SG_SERVICE_TOKENS.surface, boxShadow: '0 2px 8px rgba(30,58,95,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 16, color: SG_SERVICE_TOKENS.headingNavy }}>{fw.code}</div>
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 9, color: SG_SERVICE_TOKENS.securityTeal, background: SG_SERVICE_TOKENS.mintSurface, border: '1px solid #a7f3d0', borderRadius: 9999, padding: '3px 9px', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{fw.badge}</span>
              </div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, marginBottom: 16 }}>{fw.name}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {fw.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: SG_SERVICE_TOKENS.securityTeal, marginTop: 6, flexShrink: 0 }}></div>
                    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ── 7. Service CTA ────────────────────────────────────────────
const SIPServiceCTA = ({ onContact }) => (
  <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{
      background: 'linear-gradient(140deg, #0d1b2e 0%, #1e3a5f 100%)',
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
            Ready to Secure Your Infrastructure?
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0 }}>
            Start with a free infrastructure security assessment. We'll map your environment, identify gaps, and recommend the right controls — no commitment required.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
          <button onClick={onContact} style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15,
            background: SG_SERVICE_TOKENS.securityTeal, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 36px',
            borderRadius: 9999, border: 'none', cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(11,111,102,0.40)',
            transition: 'background 200ms, transform 150ms',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTealHover; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.securityTeal; e.currentTarget.style.transform='translateY(0)'; }}
          >Request Free Assessment</button>
          <a href="../index.html#contact" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textAlign: 'center', cursor: 'pointer' }}>
            Or email us at security@secugram.io
          </a>
        </div>
      </div>
    </div>
  </div>
);


// ── 8. Related Services strip ─────────────────────────────────
const SIPRelatedServices = () => (
  <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '60px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24 }}>Also from Secugram</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {[
          { tag: 'Consulting', title: 'Security Architecture & Consulting', body: 'Risk assessment, Zero Trust design, compliance alignment, and executive advisory.', href: 'security-architecture.html', accent: SG_SERVICE_TOKENS.alertBlue },
          { tag: 'MDR', title: 'Managed Detection & Response', body: '24/7 SOC monitoring, incident response, forensics, and threat hunting.', href: 'managed-detection-response.html', accent: SG_SERVICE_TOKENS.securityTeal },
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
              <SIPIconMap name="arrow" color={svc.accent} size={18} />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);


// ── Page root ─────────────────────────────────────────────────
const SecureInfrastructurePage = () => {
  const scrollToContact = () => {
    const el = document.getElementById('sip-contact');
    const scroller = document.getElementById('sip-scroll');
    if (el && scroller) scroller.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <div id="sip-scroll" className="svc-page" style={{ height: '100vh', overflowY: 'auto', scrollBehavior: 'smooth', background: SG_SERVICE_TOKENS.surface }}>
      <SIPNavBar />
      <main>
      <SIPHero onContact={scrollToContact} />
      <SIPWhyItMatters />
      <SIPCapabilities />
      <SIPHowItWorks />
      <SIPEnvironments />
      <SIPCompliance />
      <SIPRelatedServices />
      <div id="sip-contact"><SIPContactSection /></div>
      </main>
      <FooterSection onNav={(section) => { window.location.href = `../index.html#${section}`; }} rootPath="../" />
    </div>
  );
};

const SIPNavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('sip-scroll');
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
        <a href="#sip-contact" className="sg-nav-link sg-nav-cta"
          onClick={e => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('sip-contact'); const sc = document.getElementById('sip-scroll'); if (el && sc) sc.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' }); }}
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

// Contact form
const SIPContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = React.useState(false);

  return (
    <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 14 }}>Discuss Your Infrastructure</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.6 }}>
            Tell us about your environment and we'll outline the right approach. Email us at <span style={{ color: SG_SERVICE_TOKENS.securityTeal, fontWeight: 600 }}>security@secugram.io</span> or fill in the form.
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
                  <label htmlFor={`sip-${key}`} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>{label}</label>
                  <input id={`sip-${key}`} name={key} autoComplete={key==='email'?'email':'name'} type={key==='email'?'email':'text'} placeholder={ph} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} required
                    style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                    onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                    onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="sip-company" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Company</label>
              <input id="sip-company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <div>
              <label htmlFor="sip-message" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea id="sip-message" name="message" placeholder="Tell us about your infrastructure and security needs..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none', resize: 'vertical' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.securityTeal; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <button type="submit" style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
              background: SG_SERVICE_TOKENS.securityTeal, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 0',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(11,111,102,0.30)',
              transition: 'background 200ms',
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

Object.assign(window, { SecureInfrastructurePage });
