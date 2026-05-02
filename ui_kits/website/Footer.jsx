// Footer.jsx — Footer component

const FooterLogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round"/>
    <polygon points="50,17 82,35 82,65 50,83 18,65 18,35" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinejoin="round"/>
    <polygon points="50,30 71,42 71,58 50,70 29,58 29,42" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round"/>
    <circle cx="50" cy="43" r="9" fill="none" stroke="#0b6f66" strokeWidth="3.5"/>
    <path d="M44 51 L43 63 L57 63 L56 51" fill="none" stroke="#0b6f66" strokeWidth="3" strokeLinejoin="round"/>
  </svg>
);

const FooterSection = ({ onNav }) => (
  <footer data-tw-footer style={{ background: '#0d1b2e', padding: '64px 80px 32px', color: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Top row */}
      <div className="sg-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
        {/* Brand col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <FooterLogoMark />
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '0.12em' }}>SECUGRAM</span>
          </div>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#94a3b8', lineHeight: 1.7, maxWidth: 280 }}>
            Enterprise-grade cybersecurity for SMEs. Founded 2021, Hanoi, Vietnam. Helping businesses detect, respond, and stay resilient against cyber threats.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {['twitter', 'linkedin', 'github'].map(net => (
              <button key={net} type="button" aria-label={`Open Secugram ${net}`} style={{
                width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'transparent', padding: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {net === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.5 4.5 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.5 4.5 0 0 1-2.04.08c.57 1.79 2.24 3.09 4.21 3.13A9.05 9.05 0 0 1 0 19.54a12.77 12.77 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.18 9.18 0 0 0 22 5.55"/>}
                  {net === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
                  {net === 'github' && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>}
                </svg>
              </button>
            ))}
          </div>
        </div>
        {/* Product col */}
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>Product</div>
          {['Features', 'Pricing', 'Security', 'Changelog'].map(l => (
            <button key={l} type="button" style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#94a3b8', marginBottom: 12, cursor: 'pointer', display: 'block', background: 'transparent', border: 0, padding: 0, textAlign: 'left' }}>{l}</button>
          ))}
        </div>
        {/* Company col */}
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>Company</div>
          {['About', 'Blog', 'Careers', 'Contact'].map(l => (
            <button key={l} type="button" style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#94a3b8', marginBottom: 12, cursor: 'pointer', display: 'block', background: 'transparent', border: 0, padding: 0, textAlign: 'left' }}>{l}</button>
          ))}
        </div>
        {/* Legal col */}
        <div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>Legal</div>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map(l => (
            <button key={l} type="button" style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#94a3b8', marginBottom: 12, cursor: 'pointer', display: 'block', background: 'transparent', border: 0, padding: 0, textAlign: 'left' }}>{l}</button>
          ))}
        </div>
      </div>
      {/* Bottom row */}
      <div className="sg-footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#94a3b8' }}>© 2025 Secugram JSC. All rights reserved. · 272 Nguyen Khoai, Hai Ba Trung, Hanoi</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#14b8a6' }}></div>
          <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#94a3b8' }}>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { FooterSection });
