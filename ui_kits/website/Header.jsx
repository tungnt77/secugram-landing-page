// Header.jsx — Nav + Hero components for Secugram website

const LogoMark = ({ color = '#1e3a5f' }) => (
  <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,4 95,27.5 95,72.5 50,96 5,72.5 5,27.5" fill="none" stroke={color} strokeWidth="6.5"/>
    <polygon points="50,18 82,36 82,64 50,82 18,64 18,36" fill="none" stroke={color} strokeWidth="5"/>
    <polygon points="50,31 70,42.5 70,57.5 50,69 30,57.5 30,42.5" fill="none" stroke={color} strokeWidth="4"/>
    <circle cx="50" cy="43" r="9" fill="none" stroke="#0b6f66" strokeWidth="3.5"/>
    <path d="M43 50 L43 61 L57 61 L57 50 Z" fill="none" stroke="#0b6f66" strokeWidth="3.5" strokeLinejoin="round"/>
  </svg>
);

const NavBar = ({ activeSection, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Why Secugram', target: 'why-secugram' },
    { label: 'How We Work', target: 'methodology' },
    { label: 'Services', target: 'services' },
    { label: 'Security Ops', target: 'security-ops' },
    { label: 'Contact us', target: 'contact', isCta: true },
  ];
  React.useEffect(() => {
    const el = document.getElementById('page-scroll');
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 20);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);

  const go = (target) => {
    onNav(target);
    setMenuOpen(false);
  };

  return (
    <nav data-tw-nav
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#fff',
        borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(30,58,95,0.08)' : 'none',
        transition: 'background 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 60px', height: 72,
      }}>
      <button className="sg-logo-button" type="button" aria-label="Go to top" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', border: 0, background: 'transparent', padding: 0 }} onClick={() => go('hero')}>
        <img
          src="long_logo.png"
          alt="Secugram"
          width="300"
          height="83"
          decoding="async"
          style={{ width: 186, height: 'auto', display: 'block' }}
        />
      </button>
      <button
        className="sg-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span></span><span></span><span></span>
      </button>
      <div className="sg-nav-links" data-open={menuOpen ? 'true' : 'false'} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {navItems.map(item => (
          <button key={item.target} type="button" className={item.isCta ? 'sg-nav-link sg-nav-cta' : 'sg-nav-link'} aria-current={activeSection === item.target ? 'page' : undefined} data-tw-nav-link data-tw-nav-cta={item.isCta ? 'true' : undefined} onClick={() => go(item.target)}
            style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13,
              color: item.isCta ? '#fff' : (activeSection === item.target ? '#1e3a5f' : '#6b7280'),
              background: item.isCta ? '#0b6f66' : 'transparent',
              textDecoration: 'none', cursor: 'pointer',
              borderBottom: item.isCta ? 'none' : (activeSection === item.target ? '2px solid #0b6f66' : '2px solid transparent'),
              borderRadius: item.isCta ? 9999 : 0,
              borderTop: 'none', borderLeft: 'none', borderRight: 'none',
              padding: item.isCta ? '11px 26px' : '0 0 2px',
              boxShadow: item.isCta ? '0 10px 24px rgba(11,111,102,0.24)' : 'none',
              transition: 'color 200ms, border-color 200ms, background 200ms, transform 150ms, box-shadow 200ms',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (!item.isCta) return;
              e.currentTarget.style.background = '#095e57';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(11,111,102,0.30)';
            }}
            onMouseLeave={e => {
              if (!item.isCta) return;
              e.currentTarget.style.background = '#0b6f66';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(11,111,102,0.24)';
            }}
          >{item.label}</button>
        ))}
      </div>
    </nav>
  );
};

const HeroGraphic = () => (
  <svg width="320" height="300" viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="150" r="130" fill="rgba(11,111,102,0.06)"/>
    <polygon points="160,20 275,82.5 275,207.5 160,270 45,207.5 45,82.5" fill="none" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5"/>
    <polygon points="160,42 255,96 255,204 160,258 65,204 65,96" fill="none" stroke="rgba(20,184,166,0.35)" strokeWidth="1.5"/>
    <polygon points="160,65 235,108.5 235,196.5 160,240 85,196.5 85,108.5" fill="none" stroke="#0b6f66" strokeWidth="2" opacity="0.5"/>
    {[[160,65,160,20],[275,82.5,310,60],[275,207.5,310,230],[160,270,160,295],[45,207.5,18,230],[45,82.5,18,60]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#14b8a6" strokeWidth="1" opacity="0.4"/>
    ))}
    {[[160,20],[275,82.5],[275,207.5],[160,270],[45,207.5],[45,82.5]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#14b8a6" opacity="0.7"/>
    ))}
    <path d="M120 230 L160 100 L200 140" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M188 110 L205 138 L220 118" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="220" cy="115" r="5" fill="#0b6f66"/>
    <circle cx="160" cy="138" r="18" stroke="#0b6f66" strokeWidth="3" fill="rgba(11,111,102,0.1)"/>
    <path d="M150 150 L150 165 L170 165 L170 150 Z" stroke="#0b6f66" strokeWidth="2.5" fill="rgba(11,111,102,0.2)" strokeLinejoin="round"/>
    <circle cx="160" cy="155" r="3" fill="#0b6f66"/>
  </svg>
);

const HeroSection = ({ onNav }) => {
  const [variant, setVariant] = React.useState(window.__heroVariant || 'flow-diagram');
  React.useEffect(() => {
    const handler = (e) => setVariant(e.detail);
    window.addEventListener('hero-variant-change', handler);
    return () => window.removeEventListener('hero-variant-change', handler);
  }, []);
  return (
  <div data-tw-hero-grid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
    {/* Left */}
    <div data-tw-hero-left style={{
      padding: '80px 60px 80px 80px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: '#fff',
    }}>
      <div data-tw-accent-text style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0b6f66', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>
        Built by Experienced Cybersecurity Professionals
      </div>
      <h1 data-tw-hero-h1 data-tw-h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 48, color: '#1e3a5f', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 22px' }}>
        Enterprise-Grade Cybersecurity<br />for <span data-tw-accent-text style={{ color: '#0b6f66' }}>Growing Businesses</span>
      </h1>
      <p data-tw-hero-sub data-tw-body-text style={{ fontFamily: "'Open Sans',sans-serif", fontWeight: 500, fontSize: 17, color: '#4b5563', lineHeight: 1.6, margin: '0 0 36px' }}>
        Secugram helps SMEs access 24/7 security monitoring, incident response, and practical security architecture — without building an enterprise security team.
      </p>
      <div data-tw-hero-ctas style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <button onClick={() => onNav('methodology')} style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
          background: '#0b6f66', color: '#fff', padding: '14px 36px',
          borderRadius: 9999, border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(11,111,102,0.35)',
          transition: 'background 200ms, transform 150ms',
        }}
          onMouseEnter={e => { e.currentTarget.style.background='#095e57'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='#0b6f66'; e.currentTarget.style.transform='translateY(0)'; }}
        >Request Security Assessment</button>
        <button type="button" className="sg-secondary-link" onClick={() => onNav('services')} style={{
          fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15,
          color: '#1e3a5f', cursor: 'pointer', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
          border: 'none', borderBottom: '1.5px solid #1e3a5f', padding: '0 0 1px',
          background: 'transparent',
        }}>Explore Services →</button>
      </div>
      <div data-tw-hero-stats style={{ display: 'none' }}>
        {[['100+','Security Engagements'],['25+','Businesses Protected'],['24/7','SOC Coverage']].map(([num,label])=>(
          <div key={label}>
            <div data-tw-heading style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 26, color: '#1e3a5f' }}>{num}</div>
            <div data-tw-muted style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#6b7280', marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
    {/* Right — dark */}
    <div data-tw-hero-right style={{
      background: 'linear-gradient(140deg, #162840 0%, #0d1b2e 48%, #061726 100%)',
      clipPath: 'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(90deg, rgba(20,184,166,0.14) 1px, transparent 1px), linear-gradient(0deg, rgba(20,184,166,0.10) 1px, transparent 1px)',
        backgroundSize: '42px 42px',
        opacity: 0.18,
      }}/>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(11,111,102,0.28) 0%, rgba(11,111,102,0.08) 38%, transparent 72%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      }}/>
      <div style={{ position: 'absolute', right: 24, top: 40, width: 160, height: 160, border: '1px solid rgba(20,184,166,0.18)', borderRadius: '50%' }}/>
      <div data-tw-hero-graphic style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HeroGraphicSwitcher variant={variant} />
      </div>
    </div>
  </div>
  );
};

Object.assign(window, { NavBar, HeroSection });
