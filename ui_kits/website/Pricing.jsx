// Pricing.jsx — Engagement Model + Industries sections

const STEPS = [
  {
    num: '01',
    label: 'Assess',
    title: 'Assess',
    items: ['Architecture & risk review', 'Compliance gap analysis', 'Threat exposure identification'],
    outcome: 'We review your architecture, compliance gaps, and threat exposure to identify security priorities.',
  },
  {
    num: '02',
    label: 'Build',
    title: 'Build',
    items: ['Security foundation design', 'Infrastructure, SIEM & cloud controls', 'Monitoring deployment'],
    outcome: 'We design and deploy the security foundation, including infrastructure, SIEM, cloud controls, and monitoring.',
  },
  {
    num: '03',
    label: 'Detect',
    title: 'Detect',
    items: ['SOC operations & detection engineering', 'Security analytics & threat intelligence', '24/7 continuous monitoring'],
    outcome: 'We continuously monitor threats using SOC operations, detection engineering, analytics, and threat intelligence.',
  },
  {
    num: '04',
    label: 'Respond & Improve',
    title: 'Respond & Improve',
    items: ['Investigate, contain & remediate', 'Threat hunting & forensics', 'Continuous posture improvement'],
    outcome: 'We investigate, contain, remediate, hunt, and continuously improve your security posture.',
  },
];

const INDUSTRIES = [
  { icon: 'credit-card', name: 'Financial Services & Fintech',   body: 'Securing high-value transactions and sensitive customer data.' },
  { icon: 'shield',      name: 'Government & Public Sector',      body: 'Critical infrastructure protection and compliance standards.' },
  { icon: 'shopping-bag',name: 'E-commerce & Digital Platforms',  body: 'Safeguarding payment gateways and user privacy at scale.' },
  { icon: 'cpu',         name: 'Technology & SaaS Companies',     body: 'Protecting intellectual property and analytical data assets.' },
];

// Step icons — unique SVG for each lifecycle phase
const StepIcon = ({ step, active }) => {
  const col = active ? '#fff' : '#0b6f66';
  const s = { width: 28, height: 28 };
  const p = { stroke: col, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    '01': ( // Assess — magnifying glass with checkmark
      <svg {...s} viewBox="0 0 24 24">
        <circle {...p} cx="11" cy="11" r="7"/>
        <line {...p} x1="16.5" y1="16.5" x2="22" y2="22"/>
        <polyline {...p} points="8 11 10.5 13.5 14.5 9"/>
      </svg>
    ),
    '02': ( // Build — layers / foundation
      <svg {...s} viewBox="0 0 24 24">
        <polygon {...p} points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
        <polyline {...p} points="2 8.5 12 15 22 8.5"/>
        <line {...p} x1="12" y1="15" x2="12" y2="22"/>
      </svg>
    ),
    '03': ( // Detect — radar / eye
      <svg {...s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="2"/>
        <path {...p} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
        <circle {...p} cx="12" cy="12" r="5" strokeDasharray="3 2"/>
      </svg>
    ),
    '04': ( // Respond & Improve — shield with refresh arrow
      <svg {...s} viewBox="0 0 24 24">
        <path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path {...p} d="M9 12.5c.4-1.7 1.8-2.5 3-2.5 1.7 0 3 1.3 3 3"/>
        <polyline {...p} points="13.5 16 15 13 12.5 13"/>
      </svg>
    ),
  };
  return icons[step] || null;
};

const IIcon = ({ name }) => {
  const s = { width: 20, height: 20 };
  const p = { stroke: '#0b6f66', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const icons = {
    'credit-card':  <svg {...s} viewBox="0 0 24 24"><rect {...p} x="1" y="4" width="22" height="16" rx="2"/><line {...p} x1="1" y1="10" x2="23" y2="10"/></svg>,
    shield:         <svg {...s} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    'shopping-bag': <svg {...s} viewBox="0 0 24 24"><path {...p} d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line {...p} x1="3" y1="6" x2="21" y2="6"/><path {...p} d="M16 10a4 4 0 0 1-8 0"/></svg>,
    cpu:            <svg {...s} viewBox="0 0 24 24"><rect {...p} x="4" y="4" width="16" height="16" rx="2"/><rect {...p} x="9" y="9" width="6" height="6"/><line {...p} x1="9" y1="1" x2="9" y2="4"/><line {...p} x1="15" y1="1" x2="15" y2="4"/><line {...p} x1="9" y1="20" x2="9" y2="23"/><line {...p} x1="15" y1="20" x2="15" y2="23"/><line {...p} x1="20" y1="9" x2="23" y2="9"/><line {...p} x1="20" y1="14" x2="23" y2="14"/><line {...p} x1="1" y1="9" x2="4" y2="9"/><line {...p} x1="1" y1="14" x2="4" y2="14"/></svg>,
  };
  return icons[name] || null;
};

const EngagementModel = ({ onContact }) => (
  <div id="methodology" data-tw-section-alt style={{ background: '#f9fafb', padding: '96px 80px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0b6f66', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
          Methodology
        </div>
        <h2 data-tw-h2 data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 40, color: '#1e3a5f', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
          How Secugram Works
        </h2>
        <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          A structured, continuous security lifecycle — from first assessment to ongoing response and improvement.
        </p>
      </div>

      {/* Steps */}
      <div className="sg-grid-4 sg-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, position: 'relative', alignItems: 'stretch' }}>
        {/* Connector line */}
        <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #0b6f66, #1e3a5f)', zIndex: 0, borderRadius: 2 }}></div>
        {STEPS.map((step, i) => {
          const isFilled = i === 0 || i === 3;
          const bgColor = i === 3 ? '#1e3a5f' : '#0b6f66';
          return (
            <div key={step.num} style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column',
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 14,
              padding: '28px 20px 0',
              boxShadow: '0 2px 12px rgba(30,58,95,0.07)',
              overflow: 'hidden',
            }}>
              {/* Step number badge */}
              <div style={{
                position: 'absolute', top: 16, right: 16,
                fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
                fontSize: 11, color: '#e5e7eb', letterSpacing: '0.06em',
              }}>{step.num}</div>

              {/* Icon circle */}
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: isFilled ? bgColor : '#f0fdf9',
                border: `2.5px solid ${bgColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: isFilled ? `0 6px 20px ${bgColor}44` : '0 2px 10px rgba(11,111,102,0.10)',
              }}>
                <StepIcon step={step.num} active={isFilled} />
              </div>

              {/* Label pill */}
              <div style={{
                textAlign: 'center', marginBottom: 8,
              }}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10,
                  color: bgColor, letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: isFilled ? `${bgColor}12` : '#f0fdf9',
                  border: `1px solid ${bgColor}33`,
                  borderRadius: 9999, padding: '3px 10px',
                }}>{step.label}</span>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14,
                color: '#1e3a5f', marginBottom: 14, textAlign: 'center', lineHeight: 1.3,
              }}>{step.title}</div>

              {/* Bullet items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20, flexGrow: 1 }}>
                {step.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="12" cy="12" r="10" fill={bgColor} opacity="0.12"/>
                      <polyline points="8 12 11 15 16 9" stroke={bgColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 12.5, color: '#6b7280', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome — pinned to bottom, full-width flush panel */}
              <div style={{
                marginLeft: -20, marginRight: -20,
                background: isFilled ? bgColor : `${bgColor}12`,
                borderTop: `2px solid ${bgColor}`,
                padding: '12px 20px 16px',
                minHeight: 80,
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke={isFilled ? 'rgba(255,255,255,0.9)' : bgColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 10,
                    color: isFilled ? 'rgba(255,255,255,0.75)' : bgColor,
                    textTransform: 'uppercase', letterSpacing: '0.10em',
                  }}>Outcome</span>
                </div>
                <div style={{
                  fontFamily: "'Open Sans',sans-serif", fontWeight: 600, fontSize: 12,
                  color: isFilled ? '#fff' : '#1e3a5f',
                  lineHeight: 1.45,
                }}>{step.outcome}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <button onClick={onContact} style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
          background: '#0b6f66', color: '#fff', padding: '14px 40px',
          borderRadius: 9999, border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(11,111,102,0.30)',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#095e57'}
          onMouseLeave={e => e.currentTarget.style.background = '#0b6f66'}
        >Discuss Your Security Strategy →</button>
      </div>
    </div>
  </div>
);

const IndustriesSection = () => (
  <div id="industries" style={{ background: '#f9fafb', padding: '80px 80px' }} data-tw-section-alt>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className="sg-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* Left: heading + metrics */}
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0b6f66', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
            Trusted Partner for Secure Growth
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: '#1e3a5f', letterSpacing: '-0.02em', marginBottom: 20 }}>
            Industries We Protect
          </h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: '#6b7280', lineHeight: 1.65, marginBottom: 36 }}>
            From fintech to government, we deliver tailored cybersecurity programs for sectors with the highest security demands.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[['Compliance','ISO 27001 · PCI-DSS aligned'],['Coverage','SOC, IR & Threat Hunting'],['Cloud-native','AWS · Azure · GCP'],['Hybrid','On-prem & Cloud']].map(([val,label])=>(
              <div key={label} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '16px 18px', boxShadow: '0 2px 8px rgba(30,58,95,0.06)' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: '#1e3a5f' }} dangerouslySetInnerHTML={{ __html: val }}></div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#6b7280', marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: industry cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {INDUSTRIES.map(ind => (
            <div key={ind.name} style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10,
              padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start',
              boxShadow: '0 2px 8px rgba(30,58,95,0.07)',
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0b6f66'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(11,111,102,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(30,58,95,0.07)'; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 8, background: '#f0fdf9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IIcon name={ind.icon} />
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: '#1e3a5f', marginBottom: 4 }}>{ind.name}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{ind.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Keep PricingSection as alias for EngagementModel for App compatibility
const PricingSection = ({ onSelectPlan }) => (
  <>
    <EngagementModel onContact={onSelectPlan} />
  </>
);

Object.assign(window, { PricingSection, IndustriesSection });
