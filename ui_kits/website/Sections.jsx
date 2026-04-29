// Sections.jsx — Why SMEs Struggle, Why SMEs Choose, Modern SecOps, Final CTA

// ── Why SMEs Struggle with Cybersecurity ─────────────────────
const WhySecurityFailsSection = () => {
  const items = [
    {
      title: 'No Dedicated Security Team',
      body: 'Most growing businesses cannot afford a full-time security team or 24/7 SOC operation.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        </svg>
      ),
    },
    {
      title: 'Enterprise Security Is Too Complex',
      body: 'Traditional security platforms are expensive, difficult to operate, and require specialist expertise.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
          <path d="M7 8h.01M11 8h6M7 12h3M14 12h3"/>
        </svg>
      ),
    },
    {
      title: 'Limited Visibility Until It Is Too Late',
      body: 'Many SMEs only discover security gaps after an incident, audit finding, or customer requirement.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="3" y1="3" x2="21" y2="21"/>
        </svg>
      ),
    },
  ];

  return (
    <div id="challenges" data-tw-section-alt style={{ background: '#f9fafb', padding: '88px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0d9488', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
            The Challenge
          </div>
          <h2 data-tw-h2 data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#1e3a5f', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Why SMEs Struggle with Cybersecurity
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: '#6b7280', maxWidth: 580, margin: '0 auto', lineHeight: 1.6 }}>
            Growing businesses face structural challenges that traditional security approaches are not designed to solve.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map(it => (
            <div key={it.title} data-tw-card style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14,
              padding: '32px 28px', position: 'relative',
              boxShadow: '0 2px 12px rgba(30,58,95,0.05)',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                background: '#f0fdf9', border: '1px solid #ccfbf1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>{it.icon}</div>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 20, color: '#1e3a5f', margin: '0 0 10px' }}>{it.title}</h3>
              <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 15, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Why SMEs Choose Secugram ─────────────────────────────────
const DifferentiationSection = () => {
  const items = [
    {
      eyebrow: '01',
      title: 'Enterprise Expertise, SME Fit',
      body: 'Built by experienced cybersecurity professionals, delivered in a practical model for growing businesses.',
      featured: false,
    },
    {
      eyebrow: '02',
      title: 'Security Operations Without Building a SOC',
      body: 'Access 24/7 monitoring, detection, and response without hiring a full internal security team.',
      featured: true,
    },
    {
      eyebrow: '03',
      title: 'Vendor-Neutral and Practical',
      body: 'We integrate with existing tools or deploy best-fit solutions based on the client\'s environment.',
      featured: false,
    },
  ];

  return (
    <div id="why-secugram" data-tw-section-bg style={{ background: '#fff', padding: '96px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0d9488', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
            Why Secugram
          </div>
          <h2 data-tw-h2 data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#1e3a5f', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Why SMEs Choose Secugram
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: '#6b7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Purpose-built for growing businesses that need enterprise-grade security without the enterprise cost or complexity.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid #e5e7eb', borderRadius: 16, overflow: 'hidden' }}>
          {items.map((it, i) => (
            <div key={it.title} style={{
              padding: '40px 32px',
              background: it.featured ? 'linear-gradient(155deg, #0d1b2e 0%, #1e3a5f 100%)' : '#fff',
              borderRight: i < items.length - 1 ? '1px solid #e5e7eb' : 'none',
              position: 'relative',
            }}>
              <div style={{
                fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 13,
                color: it.featured ? '#14b8a6' : '#0d9488',
                letterSpacing: '0.16em', marginBottom: 18,
              }}>{it.eyebrow}</div>
              <h3 style={{
                fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22,
                color: it.featured ? '#fff' : '#1e3a5f',
                margin: '0 0 14px', lineHeight: 1.25, letterSpacing: '-0.01em',
              }}>{it.title}</h3>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: 15,
                color: it.featured ? 'rgba(255,255,255,0.78)' : '#6b7280',
                lineHeight: 1.65, margin: 0,
              }}>{it.body}</p>
              {it.featured && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10,
                  color: '#14b8a6', background: 'rgba(20,184,166,0.12)',
                  border: '1px solid rgba(20,184,166,0.28)',
                  padding: '4px 10px', borderRadius: 9999, letterSpacing: '0.1em',
                }}>KEY</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Modern Security Operations for SMEs ──────────────────────
const AIAssistedSection = () => (
  <div id="security-ops" data-tw-ai-section style={{ background: '#0d1b2e', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.5,
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20,184,166,0.18) 1px, transparent 0)',
      backgroundSize: '32px 32px',
      pointerEvents: 'none',
    }}></div>
    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#14b8a6', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>
          Security Operations
        </div>
        <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 24px', lineHeight: 1.1 }}>
          Modern Security Operations for SMEs
        </h2>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, margin: '0 0 32px' }}>
          Secugram combines experienced analysts, detection engineering, threat intelligence, SIEM, EDR, and cloud security controls to help SMEs detect and respond faster.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            ['SOC Analysts', '24/7 human-led monitoring and investigation'],
            ['Detection Engineering', 'Custom rules and threat intelligence correlation'],
            ['SIEM & EDR', 'Centralised visibility across endpoints and cloud'],
            ['Cloud Security Controls', 'Hardened, monitored cloud environments'],
          ].map(([label, desc]) => (
            <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#14b8a6', marginTop: 7, flexShrink: 0, boxShadow: '0 0 8px #14b8a6' }}></div>
              <div>
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: '#fff' }}>{label}</span>
                <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', marginLeft: 8 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SOC_OPERATIONS_DIAGRAM_SOURCE: Secugram_SOC_operations.png */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: 'min(540px, 100%)',
          padding: 10,
          borderRadius: 28,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(248,250,252,0.98) 100%)',
          border: '1px solid rgba(45,212,191,0.42)',
          boxShadow: '0 34px 90px rgba(0,0,0,0.34), 0 0 44px rgba(20,184,166,0.18)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: -1,
            left: 40,
            right: 40,
            height: 3,
            borderRadius: 9999,
            background: 'linear-gradient(90deg, transparent, #14b8a6, transparent)',
          }} />
          <img
            src="Secugram_SOC_operations.png"
            alt="Secugram SOC operations lifecycle diagram"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 22,
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

// ── Final CTA ────────────────────────────────────────────────
