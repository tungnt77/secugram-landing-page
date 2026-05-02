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
    accent: '#0b6f66',
    href: 'services/secure-infrastructure-platform.html',
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
    href: 'services/security-architecture.html',
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
    accent: '#0b6f66',
    href: 'services/managed-detection-response.html',
  },
];

const ServiceShortcutLinks = () => (
  <div className="sg-service-shortcuts" style={{
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 26,
  }}>
    {FEATURES.map(({ title, href, accent }) => (
      <a key={title} href={href} style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 42,
        padding: '0 17px',
        borderRadius: 999,
        border: `1px solid ${accent}33`,
        background: `${accent}0d`,
        color: '#1e3a5f',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: 800,
        fontSize: 12,
        textDecoration: 'none',
      }}>
        {title}
        <span aria-hidden="true" style={{ color: accent }}>→</span>
      </a>
    ))}
  </div>
);

// Integrations strip — two-row dotted connector layout

// Cloud / network / EDR / AV
const ROW_1 = [
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'Azure', icon: 'azure.svg' },
  { name: 'Google Cloud', icon: 'google-cloud.svg' },
  { name: 'Cloudflare', icon: 'cloudflare.svg' },
  { name: 'Akamai', icon: 'akamai.svg' },
  { name: 'Palo Alto Networks', icon: 'paloalto.svg' },
  { name: 'Fortinet', icon: 'fortinet.svg' },
  { name: 'Cisco', icon: 'cisco.svg' },
  { name: 'F5', icon: 'f5.svg' },
  { name: 'CrowdStrike', icon: 'crowdstrike.svg' },
  { name: 'SentinelOne', icon: 'sentinelone.svg' },
  { name: 'Trend Micro', icon: 'trendmicro.svg' },
  { name: 'Bitdefender', icon: 'bitdefender.svg' },
  { name: 'McAfee', icon: 'mcafee.svg' },
  { name: 'Malwarebytes', icon: 'malwarebytes.svg' },
];

// SIEM / IAM / AppSec / encryption
const ROW_2 = [
  { name: 'Splunk', icon: 'splunk.svg' },
  { name: 'Elastic', icon: 'elastic.svg' },
  { name: 'Kaspersky', icon: 'kaspersky.svg' },
  { name: 'Okta', icon: 'okta.svg' },
  { name: 'Auth0', icon: 'auth0.svg' },
  { name: '1Password', icon: 'onepassword.svg' },
  { name: 'Bitwarden', icon: 'bitwarden.svg' },
  { name: 'Yubico', icon: 'yubico.svg' },
  { name: 'Dashlane', icon: 'dashlane.svg' },
  { name: 'LastPass', icon: 'lastpass.svg' },
  { name: "Let's Encrypt", icon: 'letsencrypt.svg' },
  { name: 'Proton', icon: 'proton.svg' },
  { name: 'Snyk', icon: 'snyk.svg' },
  { name: 'SonarQube', icon: 'sonarqube.svg' },
];

const IntegrationChip = ({ item }) => (
  <div className="sg-int-chip" title={item.name}>
    <img src={`assets/integrations/${item.icon}`} alt={`${item.name} logo`} width="32" height="32" loading="lazy" decoding="async" />
  </div>
);

const IntegrationsStripV2 = () => (
  <section id="integrations" data-tw-section-alt className="sg-integrations">
    <style>{`
      .sg-integrations {
        background:
          radial-gradient(circle at 18% 12%, rgba(11,111,102,0.07), transparent 30%),
          radial-gradient(circle at 82% 18%, rgba(30,58,95,0.05), transparent 26%),
          #ffffff;
        padding: 96px 80px 104px;
        overflow: hidden;
      }
      .sg-int-shell {
        max-width: 1180px;
        margin: 0 auto;
        text-align: center;
      }
      .sg-int-kicker {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #0b6f66;
        margin-bottom: 14px;
      }
      .sg-int-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 42px;
        line-height: 1.15;
        letter-spacing: -0.025em;
        color: #1e3a5f;
        margin: 0 0 18px;
      }
      .sg-int-title .sg-int-hl { color: #0b6f66; }
      .sg-int-copy {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        line-height: 1.7;
        color: #5f6f86;
        max-width: 640px;
        margin: 0 auto 26px;
      }
      .sg-int-rows {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        gap: 36px;
      }
      .sg-int-row {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
      }
      .sg-int-row::before {
        content: '';
        position: absolute;
        left: -28px;
        right: -28px;
        top: 50%;
        border-top: 2px dotted rgba(11,111,102,0.35);
        transform: translateY(-1px);
        pointer-events: none;
        z-index: 0;
      }
      .sg-int-chip {
        position: relative;
        z-index: 1;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid #eef2f6;
        box-shadow: 0 6px 18px rgba(30,58,95,0.10), 0 0 0 4px #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
      }
      .sg-int-chip:hover {
        transform: translateY(-3px);
        border-color: rgba(11,111,102,0.35);
        box-shadow: 0 12px 26px rgba(30,58,95,0.14), 0 0 0 4px #ffffff;
      }
      .sg-int-chip img {
        width: 32px;
        height: 32px;
        object-fit: contain;
        display: block;
      }
      .sg-int-chip--more {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 13px;
        color: #0b6f66;
        letter-spacing: 0.01em;
      }

      @media (max-width: 1100px) {
        .sg-integrations { padding: 80px 48px 88px; }
        .sg-int-title { font-size: 36px; }
        .sg-int-rows { gap: 28px; }
        .sg-int-chip { width: 54px; height: 54px; box-shadow: 0 5px 14px rgba(30,58,95,0.10), 0 0 0 3px #ffffff; }
        .sg-int-chip img { width: 28px; height: 28px; }
      }
      @media (max-width: 860px) {
        .sg-integrations { padding: 64px 20px 72px; }
        .sg-int-title { font-size: 28px; }
        .sg-int-copy { font-size: 14.5px; }
        .sg-int-rows { margin-top: 36px; gap: 20px; }
        .sg-int-row { flex-wrap: wrap; justify-content: center; gap: 14px; }
        .sg-int-row::before { display: none; }
        .sg-int-chip { width: 48px; height: 48px; box-shadow: 0 4px 12px rgba(30,58,95,0.10); }
        .sg-int-chip img { width: 24px; height: 24px; }
      }
    `}</style>
    <div className="sg-int-shell">
      <div className="sg-int-kicker">Ecosystem Coverage</div>
      <h2 className="sg-int-title">Over <span className="sg-int-hl">300+</span> built-in integrations</h2>
      <p className="sg-int-copy">
        Connect cloud platforms, identity providers, collaboration tools, SIEM, EDR, monitoring,
        DevOps, and business systems into one practical security operations workflow.
      </p>
      <div className="sg-int-rows" aria-label="Supported integrations">
        <div className="sg-int-row">
          {ROW_1.map(item => <IntegrationChip key={item.name} item={item} />)}
        </div>
        <div className="sg-int-row">
          {ROW_2.map(item => <IntegrationChip key={item.name} item={item} />)}
          <div className="sg-int-chip sg-int-chip--more" title="And 250+ more">+250</div>
        </div>
      </div>
    </div>
  </section>
);

const IconMap = ({ name, color = '#0b6f66', size = 24 }) => {
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

const FeatureCard = ({ icon, tag, title, body, capabilities, stat, statLabel, accent, href }) => {
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
        transition: 'transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
          <div style={{
            width: 50, height: 50, borderRadius: 12,
            background: hovered ? 'rgba(255,255,255,0.18)' : '#fff',
            border: `1.5px solid ${hovered ? 'rgba(255,255,255,0.35)' : accent+'33'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 260ms ease, border-color 260ms ease',
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
          textAlign: 'right', flexShrink: 1, marginLeft: 12, minWidth: 0, maxWidth: 132,
        }}>
          <div style={{
            fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18,
            color: hovered ? '#fff' : accent, lineHeight: 1.05, overflowWrap: 'anywhere',
          }}>{stat}</div>
          <div style={{
            fontFamily: "'Open Sans',sans-serif", fontSize: 10,
            color: hovered ? 'rgba(255,255,255,0.7)' : '#6b7280', marginTop: 3,
            whiteSpace: 'normal',
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
        <a href={href} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12,
          color: accent, cursor: 'pointer',
          textDecoration: 'none',
          borderBottom: `1.5px solid ${accent}44`, paddingBottom: 1,
          transition: 'border-color 200ms',
        }}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <polyline points="5 12 19 12" stroke={accent} strokeWidth="2.5" strokeLinecap="round"/>
            <polyline points="13 6 19 12 13 18" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <div id="services" data-tw-section-bg style={{ background: '#fff', padding: '96px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0b6f66', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
          <span data-tw-accent-text style={{ color: '#0b6f66' }}>End-to-End Security Solutions</span>
        </div>
        <h2 data-tw-h2 data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#1e3a5f', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
          Core Services
        </h2>
        <p data-tw-muted data-tw-body-text style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          From infrastructure hardening to round-the-clock threat response — every layer of your security, fully covered by a dedicated team of experts.
        </p>
        <ServiceShortcutLinks />
      </div>

      {/* Cards grid */}
      <div className="sg-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
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
        <div className="sg-service-trust-actions" style={{ display: 'flex', gap: 28, alignItems: 'center', flexShrink: 0 }}>
          {[['ISO 27001','Aligned'],['PCI-DSS','Ready'],['NIST','Framework']].map(([label, sub]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 13, color: '#1e3a5f' }}>{label}</div>
              <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11, color: '#0b6f66', fontWeight: 600 }}>{sub}</div>
            </div>
          ))}
          <div style={{ width: 1, height: 36, background: '#e5e7eb' }}></div>
          <button
            style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
              background: '#0b6f66', color: '#fff', padding: '11px 24px',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(11,111,102,0.28)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#095e57'}
            onMouseLeave={e => e.currentTarget.style.background = '#0b6f66'}
          >Book a Free Assessment</button>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { FeaturesSection, IntegrationsStrip: IntegrationsStripV2 });
