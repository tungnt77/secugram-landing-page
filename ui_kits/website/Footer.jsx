// Footer.jsx - Footer component

const FOOTER_NAV_LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'Why Secugram', target: 'why-secugram' },
  { label: 'How We Work', target: 'methodology' },
  { label: 'Services', target: 'services' },
  { label: 'Security Ops', target: 'security-ops' },
  { label: 'Integrations', target: 'integrations' },
  { label: 'Contact us', target: 'contact' },
];

const FOOTER_SERVICE_LINKS = [
  { label: 'Secure Infrastructure Platform', href: 'services/secure-infrastructure-platform.html' },
  { label: 'Security Architecture', href: 'services/security-architecture.html' },
  { label: 'Managed Detection & Response', href: 'services/managed-detection-response.html' },
];

const footerButtonStyle = {
  fontFamily: "'Open Sans',sans-serif",
  fontSize: 14,
  color: '#b6c5d8',
  marginBottom: 12,
  cursor: 'pointer',
  display: 'block',
  background: 'transparent',
  border: 0,
  padding: 0,
  textAlign: 'left',
  lineHeight: 1.45,
};

const FooterLinkButton = ({ label, target, href, onNav }) => {
  const sharedEvents = {
    onMouseEnter: e => { e.currentTarget.style.color = '#ffffff'; },
    onMouseLeave: e => { e.currentTarget.style.color = '#b6c5d8'; },
  };

  if (href) {
    return (
      <a href={href} style={{ ...footerButtonStyle, textDecoration: 'none' }} {...sharedEvents}>
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onNav(target)}
      style={footerButtonStyle}
      {...sharedEvents}
    >
      {label}
    </button>
  );
};

const FooterColumnTitle = ({ children }) => (
  <div style={{
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#ffffff',
    marginBottom: 20,
  }}>
    {children}
  </div>
);

const FooterSection = ({ onNav }) => (
  <footer data-tw-footer style={{
    background: '#0d1b2e',
    padding: '72px 80px 34px',
    color: '#fff',
    borderTop: '1px solid rgba(20,184,166,0.18)',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className="sg-footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr 1.1fr',
        gap: 56,
        marginBottom: 54,
      }}>
        <div>
          <button
            type="button"
            onClick={() => onNav('home')}
            aria-label="Go to Secugram home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 14,
              padding: '10px 14px',
              marginBottom: 22,
              cursor: 'pointer',
              boxShadow: '0 14px 32px rgba(0,0,0,0.16)',
            }}
          >
            <img
              src="long_logo.png"
              alt="Secugram"
              style={{ display: 'block', height: 30, width: 'auto' }}
            />
          </button>
          <p style={{
            fontFamily: "'Open Sans',sans-serif",
            fontSize: 14,
            color: '#b6c5d8',
            lineHeight: 1.75,
            maxWidth: 390,
            margin: '0 0 22px',
          }}>
            Cybersecurity services for growing businesses: secure infrastructure,
            security architecture, and managed detection and response.
          </p>
          <div style={{
            display: 'grid',
            gap: 8,
            fontFamily: "'Open Sans',sans-serif",
            fontSize: 14,
            color: '#dce7f3',
          }}>
            <a
              href="mailto:security@secugram.io"
              style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 700 }}
            >
              security@secugram.io
            </a>
            <span style={{ color: '#94a3b8' }}>Hanoi, Vietnam</span>
          </div>
        </div>

        <div>
          <FooterColumnTitle>Navigate</FooterColumnTitle>
          {FOOTER_NAV_LINKS.map(link => (
            <FooterLinkButton key={link.target} {...link} onNav={onNav} />
          ))}
        </div>

        <div>
          <FooterColumnTitle>Services</FooterColumnTitle>
          {FOOTER_SERVICE_LINKS.map(link => (
            <FooterLinkButton key={link.label} {...link} onNav={onNav} />
          ))}
        </div>
      </div>

      <div className="sg-footer-bottom" style={{
        borderTop: '1px solid rgba(255,255,255,0.09)',
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 18,
      }}>
        <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#94a3b8' }}>
          &copy; 2026 Secugram. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#14b8a6', boxShadow: '0 0 14px rgba(20,184,166,0.8)' }}></div>
          <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#94a3b8' }}>
            24/7 security monitoring available
          </span>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { FooterSection });
