// SecurityArchitecture.jsx — Security Architecture & Consulting service page

// ── Shared atoms ─────────────────────────────────────────────
const SAIconMap = ({ name, color = SG_SERVICE_TOKENS.alertBlue, size = 24 }) => {
  const s = { width: size, height: size };
  const p = { stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    shield:    <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    search:    <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="8"/><line {...p} x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    map:       <svg {...s} viewBox="0 0 24 24"><polygon {...p} points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line {...p} x1="8" y1="2" x2="8" y2="18"/><line {...p} x1="16" y1="6" x2="16" y2="22"/></svg>,
    check:     <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline {...p} points="9 12 11 14 15 10"/></svg>,
    users:     <svg {...s} viewBox="0 0 24 24"><path {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 0 0-3-3.87"/><path {...p} d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    layers:    <svg {...s} viewBox="0 0 24 24"><polygon {...p} points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><polyline {...p} points="2 8.5 12 15 22 8.5"/><line {...p} x1="12" y1="15" x2="12" y2="22"/></svg>,
    target:    <svg {...s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle {...p} cx="12" cy="12" r="2"/></svg>,
    clipboard: <svg {...s} viewBox="0 0 24 24"><path {...p} d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect {...p} x="8" y="2" width="8" height="4" rx="1"/><line {...p} x1="9" y1="12" x2="15" y2="12"/><line {...p} x1="9" y1="16" x2="12" y2="16"/></svg>,
    zeroTrust: <svg {...s} viewBox="0 0 24 24"><rect {...p} x="3" y="11" width="18" height="11" rx="2"/><path {...p} d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5" fill={color}/></svg>,
    chart:     <svg {...s} viewBox="0 0 24 24"><line {...p} x1="18" y1="20" x2="18" y2="10"/><line {...p} x1="12" y1="20" x2="12" y2="4"/><line {...p} x1="6" y1="20" x2="6" y2="14"/></svg>,
    arrow:     <svg {...s} viewBox="0 0 24 24"><line {...p} x1="5" y1="12" x2="19" y2="12"/><polyline {...p} points="13 6 19 12 13 18"/></svg>,
    brief:     <svg {...s} viewBox="0 0 24 24"><rect {...p} x="2" y="7" width="20" height="14" rx="2"/><path {...p} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line {...p} x1="12" y1="12" x2="12" y2="16"/><line {...p} x1="10" y1="14" x2="14" y2="14"/></svg>,
  };
  return icons[name] || null;
};

const SACheckBullet = ({ text, accent = SG_SERVICE_TOKENS.alertBlue }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${accent}18`, border: `1.5px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14.5, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.55 }}>{text}</span>
  </div>
);


// ── 1. Hero ───────────────────────────────────────────────────
const SAHero = ({ onContact }) => (
  <div className="svc-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
    <div className="svc-hero-copy" style={{ padding: '88px 60px 88px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: SG_SERVICE_TOKENS.surface }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
        <a href="../index.html" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, textDecoration: 'none' }}>Home</a>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate }}>Services</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke={SG_SERVICE_TOKENS.mutedReadable} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, color: SG_SERVICE_TOKENS.alertBlue }}>Security Architecture</span>
      </div>
      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: SG_SERVICE_TOKENS.architectureSurface, border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SAIconMap name="shield" size={16} />
        </div>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.alertBlue, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Consulting</span>
      </div>
      <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 46, color: SG_SERVICE_TOKENS.headingNavy, lineHeight: 1.07, letterSpacing: '-0.025em', margin: '0 0 22px' }}>
        Security Architecture<br /><span style={{ color: SG_SERVICE_TOKENS.alertBlue }}>& Consulting</span>
      </h1>
      <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480 }}>
        Risk assessment, gap analysis, and security architecture design that gives growing businesses the right security foundation — built by practitioners who've done it at enterprise scale.
      </p>
      <div className="svc-cta-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <button onClick={onContact} style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15,
          background: SG_SERVICE_TOKENS.alertBlue, color: SG_SERVICE_TOKENS.textOnDark, padding: '13px 32px',
          borderRadius: 9999, border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(30,111,165,0.32)',
          transition: 'background 200ms, transform 150ms',
        }}
          onMouseEnter={e => { e.currentTarget.style.background='#1a5f8e'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.alertBlue; e.currentTarget.style.transform='translateY(0)'; }}
        >Request a Consultation</button>
        <a href="#sa-capabilities" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1.5px solid #1e3a5f', paddingBottom: 1 }}>
          Explore capabilities →
        </a>
      </div>
      {/* Quick stats */}
      <div className="svc-stat-row" style={{ display: 'flex', gap: 40, marginTop: 48, paddingTop: 36, borderTop: '1px solid #f0f0f0' }}>
        {[['ISO · PCI · NIST','Framework aligned'],['Zero Trust','Architecture design'],['Executive','Advisory included']].map(([val, label]) => (
          <div key={label}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 17, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.01em' }}>{val}</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12, color: SG_SERVICE_TOKENS.mutedSlate, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right — dark with architecture visual */}
    <div className="svc-hero-visual" style={{
      background: 'linear-gradient(140deg, #0d1b2e 0%, #1a2e4a 60%, #0e2035 100%)',
      clipPath: 'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '60px 40px',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(30,111,165,0.4) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', width: 420, height: 420, background: 'radial-gradient(circle, rgba(30,111,165,0.18) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', zIndex: 1, width: 380 }}>
        <SAArchitectureDiagram />
      </div>
    </div>
  </div>
);

const SAArchitectureDiagram = () => {
  const layers = [
    { label: 'Executive Advisory', sub: 'CISO-level guidance', color: '#3b82f6', icon: 'users' },
    { label: 'Security Policy & Governance', sub: 'Frameworks · Standards · Controls', color: '#2563eb', icon: 'clipboard' },
    { label: 'Zero Trust Architecture', sub: 'Identity · Access · Micro-segmentation', color: '#1d4ed8', icon: 'zeroTrust' },
    { label: 'Risk & Compliance Alignment', sub: 'ISO 27001 · PCI-DSS · NIST', color: SG_SERVICE_TOKENS.alertBlue, icon: 'check' },
    { label: 'Gap Analysis & Assessment', sub: 'Threat modelling · Attack surface', color: '#1a5f8e', icon: 'search' },
  ];
  return (
    <div>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.alertBlueReadable, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 22, textAlign: 'center' }}>Security Architecture Layers</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={layer.label} style={{
            background: `rgba(255,255,255,${0.04 + i * 0.025})`,
            border: '1px solid rgba(59,130,246,0.18)',
            borderBottom: i < layers.length - 1 ? 'none' : '1px solid rgba(59,130,246,0.18)',
            borderRadius: i === 0 ? '12px 12px 0 0' : i === layers.length - 1 ? '0 0 12px 12px' : '0',
            padding: '14px 20px',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `${layer.color}22`, border: `1px solid ${layer.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <SAIconMap name={layer.icon} color={layer.color} size={16} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12.5, color: SG_SERVICE_TOKENS.textOnDark, marginBottom: 2 }}>{layer.label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{layer.sub}</div>
            </div>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: layer.color, boxShadow: `0 0 8px ${layer.color}`, flexShrink: 0 }}></div>
          </div>
        ))}
      </div>
      {/* Bottom: engagement modes */}
      <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
        {['Point Assessment', 'Programme Design', 'Ongoing Advisory'].map((mode) => (
          <div key={mode} style={{ flex: 1, background: 'rgba(30,111,165,0.15)', border: '1px solid rgba(30,111,165,0.3)', borderRadius: 8, padding: '8px 10px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.alertBlueReadable, letterSpacing: '0.04em' }}>{mode}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ── 2. Core Capabilities ──────────────────────────────────────
const SACapabilities = () => {
  const caps = [
    {
      icon: 'search',
      title: 'Risk Assessment & Gap Analysis',
      body: 'We map your current security posture against industry benchmarks and your specific threat landscape — identifying gaps, misconfigurations, and priority risks before they become incidents.',
      tags: ['Threat Modelling', 'Gap Analysis', 'Risk Prioritisation'],
    },
    {
      icon: 'zeroTrust',
      title: 'Zero Trust Architecture Design',
      body: 'We design Zero Trust frameworks adapted to your environment: identity-centric access controls, micro-segmentation, least-privilege enforcement, and continuous verification across every layer.',
      tags: ['Identity-Centric', 'Micro-segmentation', 'Least Privilege'],
    },
    {
      icon: 'check',
      title: 'Compliance Alignment',
      body: 'We map your controls to ISO 27001, PCI-DSS, and NIST frameworks — helping you understand your compliance gaps, prioritise remediation, and prepare for audits with confidence.',
      tags: ['ISO 27001', 'PCI-DSS', 'NIST CSF'],
    },
    {
      icon: 'clipboard',
      title: 'Security Policy & Governance',
      body: 'Policies that are actually followed — we help you build a practical governance framework with security policies, procedures, acceptable use standards, and an escalation structure that works.',
      tags: ['Policy Design', 'Governance', 'ISMS'],
    },
    {
      icon: 'users',
      title: 'Executive Security Advisory',
      body: 'Security needs to be understood in the boardroom. We translate technical risk into business language — providing strategic guidance for leadership on security investment and programme maturity.',
      tags: ['CISO Advisory', 'Board Reporting', 'Programme Roadmap'],
    },
    {
      icon: 'map',
      title: 'Security Roadmap & Programme Design',
      body: 'From a current-state assessment to a prioritised multi-year roadmap — we give you a clear, costed plan for building your security programme in the right order, at the right pace.',
      tags: ['Roadmap', 'Prioritisation', 'Maturity Model'],
    },
  ];
  const accent = SG_SERVICE_TOKENS.alertBlue;

  return (
    <div id="sa-capabilities" className="svc-section" style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>What's Included</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Core Capabilities</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Practical security architecture from practitioners who have built and run enterprise security programmes.
          </p>
        </div>
        <div className="svc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {caps.map(cap => <SACapabilityCard key={cap.title} {...cap} accent={accent} />)}
        </div>
      </div>
    </div>
  );
};

const SACapabilityCard = ({ icon, title, body, tags, accent }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: SG_SERVICE_TOKENS.surface, border: `1px solid ${hov ? accent : SG_SERVICE_TOKENS.borderCloud}`,
        borderRadius: 14, padding: '28px 26px',
        boxShadow: hov ? `0 12px 36px ${accent}1e` : '0 2px 10px rgba(30,58,95,0.05)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease', display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 11, background: hov ? accent : SG_SERVICE_TOKENS.architectureSurface, border: `1.5px solid ${hov ? accent : '#bfdbfe'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 240ms ease, border-color 240ms ease', flexShrink: 0 }}>
        <SAIconMap name={icon} color={hov ? SG_SERVICE_TOKENS.textOnDark : accent} size={20} />
      </div>
      <div>
        <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16, color: SG_SERVICE_TOKENS.headingNavy, margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.65, margin: 0 }}>{body}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 10, color: accent, background: SG_SERVICE_TOKENS.architectureSurface, border: '1px solid #bfdbfe', borderRadius: 9999, padding: '3px 10px', letterSpacing: '0.04em' }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};


// ── 3. Engagement Types ───────────────────────────────────────
const SAEngagementTypes = () => {
  const [active, setActive] = React.useState(0);
  const accent = SG_SERVICE_TOKENS.alertBlue;
  const types = [
    {
      label: 'Point Assessment',
      title: 'Security Risk Assessment',
      duration: '2–4 weeks',
      summary: 'A focused, time-boxed assessment of your current security posture. Ideal as a starting point or ahead of a compliance audit.',
      deliverables: [
        'Current-state architecture review',
        'Threat landscape and attack surface analysis',
        'Compliance gap report (ISO / PCI / NIST)',
        'Prioritised risk register',
        'Executive summary and roadmap briefing',
      ],
      ideal: 'Businesses starting their security journey or preparing for an audit',
    },
    {
      label: 'Programme Design',
      title: 'Security Programme Design',
      duration: '4–8 weeks',
      summary: 'End-to-end design of your security programme: architecture, policies, controls, governance, and a phased implementation roadmap.',
      deliverables: [
        'Security architecture blueprint',
        'Zero Trust design and control mapping',
        'Policy and governance framework',
        'Multi-year security roadmap with costings',
        'Implementation partner recommendations',
      ],
      ideal: 'Growing businesses building a security foundation for the first time',
    },
    {
      label: 'Ongoing Advisory',
      title: 'Fractional CISO Advisory',
      duration: 'Retainer — monthly',
      summary: 'Access to senior security expertise without hiring a full-time CISO. We attend leadership meetings, review decisions, and guide your programme on an ongoing basis.',
      deliverables: [
        'Monthly strategic advisory sessions',
        'Board and leadership security reporting',
        'Vendor and tooling evaluation support',
        'Incident and crisis advisory',
        'Continuous programme oversight',
      ],
      ideal: 'SMEs that need senior security input at board and leadership level',
    },
  ];
  const t = types[active];

  return (
    <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Engagement Models</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 16px' }}>How We Engage</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: SG_SERVICE_TOKENS.mutedSlate, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Three engagement models designed to meet you where you are — from a first assessment to ongoing strategic partnership.
          </p>
        </div>
        {/* Type tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
          {types.map((tp, i) => (
            <button key={tp.label} onClick={() => setActive(i)} style={{
              background: active === i ? accent : SG_SERVICE_TOKENS.surface,
              border: 'none', borderRight: i < types.length - 1 ? `1px solid ${SG_SERVICE_TOKENS.borderCloud}` : 'none',
              padding: '24px 28px', cursor: 'pointer', textAlign: 'left', transition: 'background 200ms',
            }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 11, color: active === i ? 'rgba(255,255,255,0.7)' : SG_SERVICE_TOKENS.mutedReadable, letterSpacing: '0.12em', marginBottom: 6 }}>0{i + 1}</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: active === i ? SG_SERVICE_TOKENS.textOnDark : SG_SERVICE_TOKENS.headingNavy, marginBottom: 4 }}>{tp.label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: active === i ? 'rgba(255,255,255,0.65)' : SG_SERVICE_TOKENS.mutedSlate }}>{tp.duration}</div>
            </button>
          ))}
        </div>
        {/* Detail */}
        <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: SG_SERVICE_TOKENS.architectureSurface, border: '1px solid #bfdbfe', borderRadius: 9999, padding: '5px 14px', marginBottom: 20 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: accent }}></div>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.10em' }}>{t.duration}</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 28, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.015em', margin: '0 0 16px' }}>{t.title}</h3>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: '0 0 24px' }}>{t.summary}</p>
            <div style={{ background: SG_SERVICE_TOKENS.sectionMist, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.mutedSlate, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Ideal for</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, lineHeight: 1.55 }}>{t.ideal}</div>
            </div>
          </div>
          <div style={{ background: SG_SERVICE_TOKENS.sectionMist, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '28px', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10, color: SG_SERVICE_TOKENS.mutedSlate, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Deliverables</div>
            {t.deliverables.map(d => <SACheckBullet key={d} text={d} />)}
          </div>
        </div>
      </div>
    </div>
  );
};


// ── 4. Frameworks ─────────────────────────────────────────────
const SAFrameworks = () => {
  const frameworks = [
    {
      code: 'ISO 27001',
      name: 'Information Security Management System',
      desc: 'We map your controls to ISO 27001 requirements and guide you through certification readiness — from initial gap analysis to statement of applicability.',
      controls: ['Annex A control mapping', 'Risk treatment plan', 'ISMS scope and policy design', 'Certification readiness review'],
    },
    {
      code: 'PCI-DSS',
      name: 'Payment Card Industry Data Security Standard',
      desc: 'For businesses handling card data, we assess against PCI-DSS v4.0 requirements and design the controls needed to achieve and maintain compliance.',
      controls: ['Cardholder data environment scoping', 'Network segmentation review', 'Security testing requirements', 'SAQ / QSA preparation'],
    },
    {
      code: 'NIST CSF',
      name: 'Cybersecurity Framework 2.0',
      desc: 'The NIST CSF provides a flexible, risk-based approach. We use it to structure your security programme across Govern, Identify, Protect, Detect, Respond and Recover.',
      controls: ['Current profile assessment', 'Target profile design', 'Gap and implementation plan', 'Continuous improvement structure'],
    },
  ];

  return (
    <div style={{ background: '#0d1b2e', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(30,111,165,0.3) 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.alertBlueReadable, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Compliance</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: SG_SERVICE_TOKENS.textOnDark, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Framework Expertise</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            We're framework-agnostic by approach but deeply experienced across the standards your customers and regulators care about.
          </p>
        </div>
        <div className="svc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {frameworks.map((fw) => (
            <div key={fw.code} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(30,111,165,0.35)', borderRadius: 14, padding: '32px 28px' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 22, color: SG_SERVICE_TOKENS.alertBlueReadable, marginBottom: 8, letterSpacing: '-0.01em' }}>{fw.code}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12.5, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>{fw.name}</div>
              <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: '0 0 22px' }}>{fw.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {fw.controls.map(c => (
                  <div key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: SG_SERVICE_TOKENS.alertBlueReadable, marginTop: 6, flexShrink: 0 }}></div>
                    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{c}</span>
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


// ── 5. Why Matters ────────────────────────────────────────────
const SAWhyItMatters = () => {
  const accent = SG_SERVICE_TOKENS.alertBlue;
  return (
    <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="svc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div className="svc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { val: '68%', label: 'of SMEs have no documented security policy', sub: 'Ponemon Institute' },
              { val: '3×', label: 'more likely to suffer breach without an ISMS', sub: 'IBM Security' },
              { val: '60%', label: 'of SMEs close within 6 months of a breach', sub: 'National Cyber Alliance' },
              { val: '$1.5M', label: 'average cost of an SME cyber incident', sub: 'Hiscox Cyber Report' },
            ].map(s => (
              <div key={s.val} style={{ background: SG_SERVICE_TOKENS.surface, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 14, padding: '28px 24px', boxShadow: '0 2px 12px rgba(30,58,95,0.06)' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 30, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.5, marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: SG_SERVICE_TOKENS.mutedReadable }}>{s.sub}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Why It Matters</div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 38, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', margin: '0 0 22px', lineHeight: 1.1 }}>
              Most SMEs Are Building Security<br />Without a Blueprint
            </h2>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.bodySlate, lineHeight: 1.7, margin: '0 0 32px' }}>
              Without proper architecture and governance, security investments go in the wrong order — tools get deployed without strategy, policies don't exist or aren't followed, and compliance becomes a reactive scramble before every audit.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Strategy before tools — architecture drives better buying decisions',
                'Compliance built in from the start, not bolted on before an audit',
                'Risk-based prioritisation so your investment lands where it matters',
                'Senior expertise without the cost of a full-time CISO hire',
              ].map(item => <SACheckBullet key={item} text={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ── 6. CTA ────────────────────────────────────────────────────
const SAServiceCTA = ({ onContact }) => (
  <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '96px 80px' }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div className="svc-hero-visual" style={{
      background: 'linear-gradient(140deg, #0d1b2e 0%, #1a3050 100%)',
        borderRadius: 20, padding: '72px 80px',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 56, alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg width="220" height="220" viewBox="0 0 100 100" style={{ position: 'absolute', right: -30, bottom: -40, opacity: 0.08 }}>
          <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke={SG_SERVICE_TOKENS.alertBlue} strokeWidth="1.5"/>
          <polygon points="50,18 80,36 80,64 50,82 20,64 20,36" fill="none" stroke={SG_SERVICE_TOKENS.alertBlue} strokeWidth="1.2"/>
        </svg>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.alertBlueReadable, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Get Started</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.textOnDark, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.15 }}>
            Start with a Security Risk Assessment
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0 }}>
            Understand your current exposure and security gaps before investing in tools or building an internal team. No commitment required.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
          <button onClick={onContact} style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15,
            background: SG_SERVICE_TOKENS.alertBlue, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 36px',
            borderRadius: 9999, border: 'none', cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(30,111,165,0.40)',
            transition: 'background 200ms, transform 150ms', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.background='#1a5f8e'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background=SG_SERVICE_TOKENS.alertBlue; e.currentTarget.style.transform='translateY(0)'; }}
          >Request Free Consultation</button>
          <a href="../index.html#contact" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textAlign: 'center' }}>
            Or email security@secugram.io
          </a>
        </div>
      </div>
    </div>
  </div>
);


// ── 7. Related Services ───────────────────────────────────────
const SARelatedServices = () => (
  <div style={{ background: SG_SERVICE_TOKENS.sectionMist, padding: '60px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: SG_SERVICE_TOKENS.securityTeal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24 }}>Also from Secugram</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {[
          { tag: 'Infrastructure', title: 'Secure Infrastructure Platform', body: 'Hardened cloud, hybrid, and on-prem environments with integrated 24/7 monitoring.', href: 'secure-infrastructure.html', accent: SG_SERVICE_TOKENS.securityTeal },
          { tag: 'MDR', title: 'Managed Detection & Response', body: '24/7 SOC monitoring, incident response, forensics, and threat hunting.', href: 'managed-detection-response.html', accent: SG_SERVICE_TOKENS.securityTeal },
        ].map(svc => (
          <a key={svc.title} href={svc.href} style={{
            display: 'flex', gap: 20, alignItems: 'flex-start',
            background: SG_SERVICE_TOKENS.surface, border: `1px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 12, padding: '22px 24px',
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
            <SAIconMap name="arrow" color={svc.accent} size={18} />
          </a>
        ))}
      </div>
    </div>
  </div>
);


// ── Contact ───────────────────────────────────────────────────
const SAContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ background: SG_SERVICE_TOKENS.surface, padding: '96px 80px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.alertBlue, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: SG_SERVICE_TOKENS.headingNavy, letterSpacing: '-0.02em', marginBottom: 14 }}>Request a Consultation</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: SG_SERVICE_TOKENS.mutedSlate, lineHeight: 1.6 }}>
            Tell us about your current environment and security goals. Email us at <span style={{ color: SG_SERVICE_TOKENS.alertBlue, fontWeight: 600 }}>security@secugram.io</span> or fill in the form.
          </p>
        </div>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: SG_SERVICE_TOKENS.architectureSurface, border: `2px solid ${SG_SERVICE_TOKENS.alertBlue}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={SG_SERVICE_TOKENS.alertBlue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22, color: SG_SERVICE_TOKENS.headingNavy, marginBottom: 10 }}>Message Sent!</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", color: SG_SERVICE_TOKENS.mutedSlate }}>We'll be in touch within one business day.</div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="svc-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['name','Full Name','Jane Smith'],['email','Work Email','jane@company.com']].map(([key,label,ph]) => (
                <div key={key}>
                  <label htmlFor={`sa-${key}`} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>{label}</label>
                  <input id={`sa-${key}`} name={key} autoComplete={key==='email'?'email':'name'} type={key==='email'?'email':'text'} placeholder={ph} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} required
                    style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                    onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.alertBlue; e.target.style.boxShadow='0 0 0 3px rgba(30,111,165,0.12)';}}
                    onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="sa-company" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Company</label>
              <input id="sa-company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.alertBlue; e.target.style.boxShadow='0 0 0 3px rgba(30,111,165,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <div>
              <label htmlFor="sa-message" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: SG_SERVICE_TOKENS.headingNavy, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea id="sa-message" name="message" placeholder="Tell us about your security goals and current environment..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${SG_SERVICE_TOKENS.borderCloud}`, borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: SG_SERVICE_TOKENS.headingNavy, outline: 'none', resize: 'vertical' }}
                onFocus={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.alertBlue; e.target.style.boxShadow='0 0 0 3px rgba(30,111,165,0.12)';}}
                onBlur={e=>{e.target.style.borderColor=SG_SERVICE_TOKENS.borderCloud; e.target.style.boxShadow='none';}}
              />
            </div>
            <button type="submit" style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
              background: SG_SERVICE_TOKENS.alertBlue, color: SG_SERVICE_TOKENS.textOnDark, padding: '14px 0',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(30,111,165,0.30)', transition: 'background 200ms',
            }}
              onMouseEnter={e=>e.currentTarget.style.background='#1a5f8e'}
              onMouseLeave={e=>e.currentTarget.style.background=SG_SERVICE_TOKENS.alertBlue}
            >Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};


// ── Nav ───────────────────────────────────────────────────────
const SANavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('sa-scroll');
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
        <a href="#sa-contact" className="sg-nav-link sg-nav-cta"
          onClick={e => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('sa-contact'); const sc = document.getElementById('sa-scroll'); if (el && sc) sc.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' }); }}
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
const SecurityArchitecturePage = () => {
  const scrollToContact = () => {
    const el = document.getElementById('sa-contact');
    const sc = document.getElementById('sa-scroll');
    if (el && sc) sc.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <div id="sa-scroll" className="svc-page" style={{ height: '100vh', overflowY: 'auto', scrollBehavior: 'smooth', background: SG_SERVICE_TOKENS.surface }}>
      <SANavBar />
      <main>
      <SAHero onContact={scrollToContact} />
      <SAWhyItMatters />
      <SACapabilities />
      <SAEngagementTypes />
      <SAFrameworks />
      <SARelatedServices />
      <div id="sa-contact"><SAContactSection /></div>
      </main>
      <FooterSection onNav={section => { window.location.href = `../index.html#${section}`; }} rootPath="../" />
    </div>
  );
};

Object.assign(window, { SecurityArchitecturePage });
