// Features.jsx — Core Services section (comprehensive)

const FEATURES = [
  {
    icon: 'server',
    tag: 'Infrastructure',
    title: 'Secure Infrastructure Platform',
    body: 'Hardened cloud, hybrid, and server environments designed to support critical business operations securely.',
    capabilities: [
      'Hardened server environments',
      'Secure cloud and hybrid hosting',
      'Integrated 24/7 security monitoring',
      'Network segmentation & firewall management',
      'Patch management & vulnerability remediation',
    ],
    stat: 'Cloud · Hybrid', statLabel: 'On-prem ready',
    accent: '#0d9488',
  },
  {
    icon: 'shield',
    tag: 'Consulting',
    title: 'Security Architecture & Consulting',
    body: 'Risk assessment, gap analysis, and security architecture design to help SMEs build the right security foundation.',
    capabilities: [
      'Risk assessment and gap analysis',
      'Zero Trust architecture design',
      'Compliance alignment with ISO, PCI, and NIST',
      'Security policy & governance frameworks',
      'Executive-level security advisory',
    ],
    stat: 'ISO · PCI', statLabel: 'Aligned',
    accent: '#1e6fa5',
  },
  {
    icon: 'activity',
    tag: 'MDR',
    title: 'Managed Detection & Response',
    body: '24/7 proactive monitoring, investigation, and response support to neutralize threats before business impact.',
    capabilities: [
      '24/7 SOC threat monitoring',
      'Incident response and forensics',
      'SIEM and EDR management',
      'Threat intelligence & advanced analytics',
      'Threat hunting & proactive adversary pursuit',
    ],
    stat: '24/7', statLabel: 'SOC Coverage',
    accent: '#0d9488',
  },
];

// Integrations strip — over 300+ generic vendor-style badges
const INTEGRATION_BADGES = [
  // Row 1
  [
    { txt: 'AW', col: '#f97316', bg: '#fff7ed' },
    { txt: 'AZ', col: '#0078d4', bg: '#eff6ff' },
    { txt: 'GC', col: '#ea4335', bg: '#fef2f2' },
    { txt: 'M',  col: '#5e5e5e', bg: '#f3f4f6' },
    { txt: 'OK', col: '#007dc1', bg: '#eff6ff' },
    { txt: 'CR', col: '#f48120', bg: '#fff7ed' },
    { txt: 'VR', col: '#1ba0e2', bg: '#ecfeff' },
    { txt: 'SL', col: '#611f69', bg: '#f5f3ff' },
    { txt: 'TM', col: '#5059c9', bg: '#eef2ff' },
    { txt: 'GH', col: '#1f2328', bg: '#f3f4f6' },
    { txt: 'GL', col: '#fc6d26', bg: '#fff7ed' },
    { txt: 'BB', col: '#2684ff', bg: '#eff6ff' },
    { txt: 'JR', col: '#0052cc', bg: '#eff6ff' },
    { txt: 'ZD', col: '#03363d', bg: '#ecfdf5' },
    { txt: 'BX', col: '#0061d5', bg: '#eff6ff' },
  ],
  // Row 2
  [
    { txt: 'AD', col: '#ed1c24', bg: '#fef2f2' },
    { txt: 'NW', col: '#293e40', bg: '#f1f5f9' },
    { txt: 'F5', col: '#e4002b', bg: '#fef2f2' },
    { txt: 'CS', col: '#1ba0d7', bg: '#ecfeff' },
    { txt: 'SP', col: '#ee0000', bg: '#fef2f2' },
    { txt: 'TW', col: '#f22f46', bg: '#fef2f2' },
    { txt: 'SF', col: '#00a1e0', bg: '#ecfeff' },
    { txt: 'K8', col: '#326ce5', bg: '#eff6ff' },
    { txt: 'SK', col: '#ed4d4e', bg: '#fef2f2' },
    { txt: 'TG', col: '#26a5e4', bg: '#ecfeff' },
    { txt: 'FG', col: '#a259ff', bg: '#f5f3ff' },
    { txt: 'DB', col: '#0061ff', bg: '#eff6ff' },
    { txt: 'GD', col: '#1aa260', bg: '#ecfdf5' },
    { txt: 'NJ', col: '#83b81a', bg: '#f7fee7' },
    { txt: '+250', col: '#0d9488', bg: '#f0fdf9', wide: true },
  ],
];

const IntegrationBadge = ({ txt, col, bg, wide }) => (
  <div style={{
    width: wide ? 64 : 52, height: 52, borderRadius: '50%',
    background: '#fff',
    boxShadow: '0 4px 14px rgba(30,58,95,0.10), 0 0 0 1px rgba(30,58,95,0.04)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>
    <div style={{
      width: wide ? 50 : 38, height: wide ? 50 : 38, borderRadius: '50%',
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
      fontSize: wide ? 12 : 13, color: col, letterSpacing: '0.02em',
    }}>{txt}</div>
  </div>
);

const IntegrationsStrip = () => (
  <div style={{
    margin: '0',
    background: '#ffffff',
    padding: '74px 0 70px',
    overflow: 'hidden',
  }}>
    <img
      src="integration.png"
      alt="Over 300 built-in integrations"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
);

const IconMap = ({ name, color = '#0d9488', size = 24 }) => {
  const s = { width: size, height: size };
  const p = { stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    server:   <svg {...s} viewBox="0 0 24 24"><rect {...p} x="2" y="2" width="20" height="8" rx="2"/><rect {...p} x="2" y="14" width="20" height="8" rx="2"/><line {...p} x1="6" y1="6" x2="6.01" y2="6"/><line {...p} x1="6" y1="18" x2="6.01" y2="18"/><line {...p} x1="10" y1="6" x2="18" y2="6"/><line {...p} x1="10" y1="18" x2="18" y2="18"/></svg>,
    shield:   <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline {...p} points="9 12 11 14 15 10"/></svg>,
    activity: <svg {...s} viewBox="0 0 24 24"><polyline {...p} points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  };
  return icons[name] || null;
};

const CheckIcon = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="12" cy="12" r="10" fill={color} opacity="0.12"/>
    <polyline points="8 12 11 15 16 9" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatureCard = ({ icon, tag, title, body, capabilities, stat, statLabel, accent }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? accent : '#e5e7eb'}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: hovered ? `0 12px 40px rgba(30,58,95,0.13)` : '0 2px 10px rgba(30,58,95,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 260ms ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Card header band */}
      <div style={{
        background: hovered ? accent : `${accent}0d`,
        padding: '22px 26px 20px',
        borderBottom: `1px solid ${accent}22`,
        transition: 'background 260ms',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        minHeight: 110,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 50, height: 50, borderRadius: 12,
            background: hovered ? 'rgba(255,255,255,0.18)' : '#fff',
            border: `1.5px solid ${hovered ? 'rgba(255,255,255,0.35)' : accent+'33'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 260ms',
            flexShrink: 0,
          }}>
            <IconMap name={icon} color={hovered ? '#fff' : accent} size={22} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10,
              color: hovered ? 'rgba(255,255,255,0.75)' : accent,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4,
            }}>{tag}</div>
            <div style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 15,
              color: hovered ? '#fff' : '#1e3a5f', lineHeight: 1.2,
            }}>{title}</div>
          </div>
        </div>
        {/* Stat badge */}
        <div style={{
          textAlign: 'right', flexShrink: 0, marginLeft: 12,
        }}>
          <div style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18,
            color: hovered ? '#fff' : accent, lineHeight: 1,
          }}>{stat}</div>
          <div style={{
            fontFamily: "'Open Sans',sans-serif", fontSize: 10,
            color: hovered ? 'rgba(255,255,255,0.7)' : '#6b7280', marginTop: 3,
            whiteSpace: 'nowrap',
          }}>{statLabel}</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 26px 0' }}>
        <p style={{
          fontFamily: "'Open Sans',sans-serif", fontSize: 13.5,
          color: '#6b7280', lineHeight: 1.65, margin: '0 0 18px',
        }}>{body}</p>

        {/* Capabilities list */}
        <div style={{
          borderTop: '1px solid #f0f0f0', paddingTop: 16,
          display: 'flex', flexDirection: 'column', gap: 9,
        }}>
          <div style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10,
            color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: 2,
          }}>What's included</div>
          {capabilities.map(cap => (
            <div key={cap} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <CheckIcon color={accent} />
              <span style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: 13,
                color: '#374151', lineHeight: 1.45,
              }}>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ padding: '18px 26px 22px', marginTop: 'auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12,
          color: accent, cursor: 'pointer',
          borderBottom: `1.5px solid ${accent}44`, paddingBottom: 1,
          transition: 'border-color 200ms',
        }}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <polyline points="5 12 19 12" stroke={accent} strokeWidth="2.5" strokeLinecap="round"/>
            <polyline points="13 6 19 12 13 18" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <div id="services" data-tw-section-bg style={{ background: '#fff', padding: '96px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0d9488', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
          <span data-tw-accent-text style={{ color: '#0d9488' }}>End-to-End Security Solutions</span>
        </div>
        <h2 data-tw-h2 data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#1e3a5f', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
          Core Services
        </h2>
        <p data-tw-muted data-tw-body-text style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          From infrastructure hardening to round-the-clock threat response — every layer of your security, fully covered by a dedicated team of experts.
        </p>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
        {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
      </div>

      {/* Bottom trust strip */}
      <div style={{
        marginTop: 52, background: '#fff',
        border: '1px solid #e5e7eb', borderRadius: 14,
        padding: '24px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
        boxShadow: '0 2px 10px rgba(30,58,95,0.05)',
      }}>
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15, color: '#1e3a5f', marginBottom: 4 }}>
            Not sure which service fits your needs?
          </div>
          <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13.5, color: '#6b7280' }}>
            Our team will assess your environment and recommend the right coverage — no obligation.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexShrink: 0 }}>
          {[['ISO 27001','Aligned'],['PCI-DSS','Ready'],['NIST','Framework']].map(([label, sub]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 13, color: '#1e3a5f' }}>{label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: '#0d9488', fontWeight: 600 }}>{sub}</div>
            </div>
          ))}
          <div style={{ width: 1, height: 36, background: '#e5e7eb' }}></div>
          <button
            style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
              background: '#0d9488', color: '#fff', padding: '11px 24px',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(13,148,136,0.28)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#0b7a70'}
            onMouseLeave={e => e.currentTarget.style.background = '#0d9488'}
          >Book a Free Assessment</button>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { FeaturesSection, IntegrationsStrip });
