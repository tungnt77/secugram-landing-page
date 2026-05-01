// ---- Contact Section ------------------------------------------------------------------------------------
const ContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="contact" style={{ background: '#f9fafb', padding: '96px 80px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#0b6f66', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 36, color: '#1e3a5f', letterSpacing: '-0.02em', marginBottom: 14 }}>Discuss Your Cybersecurity Strategy</h2>
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, color: '#6b7280', lineHeight: 1.6 }}>Contact us at <span style={{color:'#0b6f66',fontWeight:600}}>security@secugram.io</span> or fill in the form — we respond within one business day.</p>
        </div>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0fdf9', border: '2px solid #0b6f66', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0b6f66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 22, color: '#1e3a5f', marginBottom: 10 }}>Message Sent!</div>
            <div style={{ fontFamily: "'Open Sans',sans-serif", color: '#6b7280' }}>We'll be in touch within one business day.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['name','Full Name','Jane Smith'],['email','Work Email','jane@company.com']].map(([key,label,ph])=>(
                <div key={key}>
                  <label htmlFor={`contact-${key}`} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#1e3a5f', display: 'block', marginBottom: 6 }}>{label}</label>
                  <input id={`contact-${key}`} name={key} type={key==='email'?'email':'text'} autoComplete={key==='email'?'email':'name'} placeholder={ph} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} required
                    style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#1e3a5f', outline: 'none' }}
                    onFocus={e=>{e.target.style.borderColor='#0b6f66'; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                    onBlur={e=>{e.target.style.borderColor='#e5e7eb'; e.target.style.boxShadow='none';}}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="contact-company" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#1e3a5f', display: 'block', marginBottom: 6 }}>Company</label>
              <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#1e3a5f', outline: 'none' }}
                onFocus={e=>{e.target.style.borderColor='#0b6f66'; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor='#e5e7eb'; e.target.style.boxShadow='none';}}
              />
            </div>
            <div>
              <label htmlFor="contact-message" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: '#1e3a5f', display: 'block', marginBottom: 6 }}>Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell us about your security needs..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#1e3a5f', outline: 'none', resize: 'vertical' }}
                onFocus={e=>{e.target.style.borderColor='#0b6f66'; e.target.style.boxShadow='0 0 0 3px rgba(11,111,102,0.12)';}}
                onBlur={e=>{e.target.style.borderColor='#e5e7eb'; e.target.style.boxShadow='none';}}
              />
            </div>
            <button type="submit" style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16,
              background: '#0b6f66', color: '#fff', padding: '14px 0',
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(11,111,102,0.30)',
              transition: 'background 200ms',
            }}
              onMouseEnter={e=>e.currentTarget.style.background='#095e57'}
              onMouseLeave={e=>e.currentTarget.style.background='#0b6f66'}
            >Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

// ---- Trust Bar ------------------------------------------------------------------------------------------------
const METRIC_CARDS = [
  { value: '100+', label: 'Security Engagements', detail: 'Security engagements completed' },
  { value: '25+', label: 'Businesses Protected', detail: 'Growing companies supported' },
  { value: '99.9%', label: 'Platform Availability', detail: 'Resilient monitoring uptime' },
  { value: '24x7x365', label: 'Security Monitoring', detail: 'Always-on SOC coverage' },
];

const TrustBar = () => (
  <div data-tw-trust-bar data-tw-trust-enhanced="true" style={{
    background: 'linear-gradient(135deg, #1e3a5f 0%, #102844 100%)',
    padding: '34px 80px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.18,
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20,184,166,0.28) 1px, transparent 0)',
      backgroundSize: '28px 28px',
      pointerEvents: 'none',
    }} />
    <div className="sg-grid-4" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
      {METRIC_CARDS.map(metric => (
        <div key={metric.label} data-tw-metric-card style={{
          padding: '4px 18px',
          textAlign: 'center',
          borderRight: metric.label === 'Security Monitoring' ? 'none' : '1px solid rgba(148,163,184,0.18)',
        }}>
          <div data-tw-trust-val style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: metric.value.length > 5 ? 20 : 28, color: '#14b8a6', letterSpacing: '-0.02em', lineHeight: 1 }}>{metric.value}</div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, color: '#ffffff', marginTop: 7 }}>{metric.label}</div>
          <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 11.5, color: '#a7b6c8', marginTop: 4, lineHeight: 1.35 }}>{metric.detail}</div>
        </div>
      ))}
    </div>
  </div>
);

// ---- Toast helper ------------------------------------------------------------------------------------------
const showToast = (msg) => {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
};

// ---- App ------------------------------------------------------------------------------------------------------------
const App = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const scrollTo = (id) => {
    const el = document.getElementById(id === 'home' ? 'hero' : id);
    const scroller = document.getElementById('page-scroll');
    if (el && scroller) {
      scroller.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  const handleNav = (section) => {
    if (section === 'home') scrollTo('hero');
    else scrollTo(section);
  };

  const handlePlanSelect = (planName) => {
    scrollTo('contact');
  };

  return (
    <div id="page-scroll">
      <NavBar activeSection={activeSection} onNav={handleNav} />
      <div id="hero"><HeroSection onNav={handleNav} /></div>
      <TrustBar />
      <WhySecurityFailsSection />
      <DifferentiationSection />
      <PricingSection onSelectPlan={handlePlanSelect} />
      <div id="features"><FeaturesSection /></div>
      <AIAssistedSection />
      <IntegrationsStrip />
      <ContactSection />
      <FooterSection onNav={handleNav} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <SecugramTweaks />
  </>
);