// Tweaks.jsx — Rich design controls for Secugram landing page

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "colorScheme": "navy-teal",
  "accentColor": "#0b6f66",
  "heroStyle": "split",
  "typeScale": "bold",
  "navStyle": "white",
  "cardStyle": "elevated",
  "buttonShape": "pill",
  "sectionSpacing": "normal",
  "trustBarVisible": true,
  "featureCols": "3",
  "footerStyle": "dark",
  "heroGraphic": "flow-diagram"
}/*EDITMODE-END*/;

const applyTweaks = (tweaks) => {
  const root = document.documentElement;
  const scroller = document.getElementById('page-scroll');

  // ── Color Scheme ─────────────────────────────────────────────
  const schemes = {
    'navy-teal': {
      '--tw-brand':        '#1e3a5f',
      '--tw-accent':       tweaks.accentColor || '#0b6f66',
      '--tw-accent-hover': '#095e57',
      '--tw-accent-light': '#f0fdf9',
      '--tw-dark':         '#0d1b2e',
      '--tw-page-bg':      '#ffffff',
      '--tw-section-alt':  '#f9fafb',
      '--tw-text-main':    '#1e3a5f',
      '--tw-text-body':    '#4b5563',
      '--tw-text-muted':   '#6b7280',
      '--tw-nav-bg':       '#ffffff',
      '--tw-nav-border':   '#e5e7eb',
      '--tw-nav-text':     '#6b7280',
      '--tw-trust-bg':     '#1e3a5f',
      '--tw-trust-text':   '#14b8a6',
    },
    'dark-command': {
      '--tw-brand':        '#0b6f66',
      '--tw-accent':       tweaks.accentColor || '#14b8a6',
      '--tw-accent-hover': '#0b6f66',
      '--tw-accent-light': 'rgba(11,111,102,0.15)',
      '--tw-dark':         '#060e18',
      '--tw-page-bg':      '#0d1b2e',
      '--tw-section-alt':  '#0a1628',
      '--tw-text-main':    '#e2e8f0',
      '--tw-text-body':    '#94a3b8',
      '--tw-text-muted':   '#64748b',
      '--tw-nav-bg':       '#0d1b2e',
      '--tw-nav-border':   'rgba(255,255,255,0.08)',
      '--tw-nav-text':     '#94a3b8',
      '--tw-trust-bg':     '#060e18',
      '--tw-trust-text':   '#14b8a6',
    },
    'clean-minimal': {
      '--tw-brand':        '#1e3a5f',
      '--tw-accent':       tweaks.accentColor || '#0b6f66',
      '--tw-accent-hover': '#095e57',
      '--tw-accent-light': '#f0fdf9',
      '--tw-dark':         '#1e3a5f',
      '--tw-page-bg':      '#ffffff',
      '--tw-section-alt':  '#f8fafc',
      '--tw-text-main':    '#0f172a',
      '--tw-text-body':    '#475569',
      '--tw-text-muted':   '#94a3b8',
      '--tw-nav-bg':       '#ffffff',
      '--tw-nav-border':   '#f1f5f9',
      '--tw-nav-text':     '#64748b',
      '--tw-trust-bg':     '#f8fafc',
      '--tw-trust-text':   '#0b6f66',
    },
    'slate-gold': {
      '--tw-brand':        '#334155',
      '--tw-accent':       tweaks.accentColor || '#d97706',
      '--tw-accent-hover': '#b45309',
      '--tw-accent-light': '#fffbeb',
      '--tw-dark':         '#1e293b',
      '--tw-page-bg':      '#ffffff',
      '--tw-section-alt':  '#f8fafc',
      '--tw-text-main':    '#1e293b',
      '--tw-text-body':    '#475569',
      '--tw-text-muted':   '#94a3b8',
      '--tw-nav-bg':       '#ffffff',
      '--tw-nav-border':   '#e2e8f0',
      '--tw-nav-text':     '#64748b',
      '--tw-trust-bg':     '#1e293b',
      '--tw-trust-text':   '#fbbf24',
    },
  };

  const scheme = schemes[tweaks.colorScheme] || schemes['navy-teal'];
  // Override accent with custom color if set
  if (tweaks.accentColor) scheme['--tw-accent'] = tweaks.accentColor;
  Object.entries(scheme).forEach(([k, v]) => root.style.setProperty(k, v));

  if (scroller) scroller.style.background = scheme['--tw-page-bg'];
  document.body.style.background = scheme['--tw-page-bg'];

  // Patch live elements
  document.querySelectorAll('[data-tw-nav]').forEach(el => {
    el.style.background = scheme['--tw-nav-bg'];
    el.style.borderBottomColor = scheme['--tw-nav-border'];
  });
  document.querySelectorAll('[data-tw-section-bg]').forEach(el => { el.style.background = scheme['--tw-page-bg']; });
  document.querySelectorAll('[data-tw-section-alt]').forEach(el => { el.style.background = scheme['--tw-section-alt']; });
  document.querySelectorAll('[data-tw-heading]').forEach(el => { el.style.color = scheme['--tw-text-main']; });
  document.querySelectorAll('[data-tw-body]').forEach(el => { el.style.color = scheme['--tw-text-body']; });
  document.querySelectorAll('[data-tw-muted]').forEach(el => { el.style.color = scheme['--tw-text-muted']; });
  document.querySelectorAll('[data-tw-accent-text]').forEach(el => { el.style.color = scheme['--tw-accent']; });
  document.querySelectorAll('[data-tw-trust-bar]').forEach(el => {
    el.style.background = el.dataset.twTrustEnhanced === 'true'
      ? `linear-gradient(135deg, ${scheme['--tw-trust-bg']} 0%, ${scheme['--tw-dark']} 100%)`
      : scheme['--tw-trust-bg'];
  });
  document.querySelectorAll('[data-tw-trust-val]').forEach(el => { el.style.color = scheme['--tw-trust-text']; });
  document.querySelectorAll('[data-tw-footer]').forEach(el => { el.style.background = scheme['--tw-dark']; });
  document.querySelectorAll('[data-tw-nav-link]').forEach(el => {
    el.style.color = el.dataset.twNavCta === 'true' ? '#ffffff' : scheme['--tw-nav-text'];
  });
  document.querySelectorAll('[data-tw-nav-cta="true"]').forEach(el => {
    el.style.background = scheme['--tw-accent'];
    el.style.color = '#ffffff';
  });

  // ── Nav Style ────────────────────────────────────────────────
  document.querySelectorAll('[data-tw-nav]').forEach(el => {
    if (tweaks.navStyle === 'white') {
      el.style.background = scheme['--tw-nav-bg'];
      el.style.backdropFilter = 'none';
    } else if (tweaks.navStyle === 'dark') {
      el.style.background = scheme['--tw-dark'];
      el.style.backdropFilter = 'none';
    } else if (tweaks.navStyle === 'glass') {
      el.style.background = tweaks.colorScheme === 'dark-command'
        ? 'rgba(13,27,46,0.75)' : 'rgba(255,255,255,0.75)';
      el.style.backdropFilter = 'blur(14px)';
    }
  });

  // ── Hero Style ───────────────────────────────────────────────
  const heroLeft  = document.querySelector('[data-tw-hero-left]');
  const heroRight = document.querySelector('[data-tw-hero-right]');
  const heroGrid  = document.querySelector('[data-tw-hero-grid]');
  if (heroLeft && heroRight && heroGrid) {
    if (tweaks.heroStyle === 'split') {
      heroGrid.style.gridTemplateColumns = '1fr 1fr';
      heroLeft.style.background  = tweaks.colorScheme === 'dark-command' ? '#0d1b2e' : '#ffffff';
      heroLeft.style.padding     = '80px 60px 80px 80px';
      heroLeft.style.textAlign   = 'left';
      heroRight.style.display    = 'flex';
      heroRight.style.clipPath   = 'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)';
    } else if (tweaks.heroStyle === 'full-dark') {
      heroGrid.style.gridTemplateColumns = '1fr 1fr';
      heroLeft.style.background  = 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)';
      heroLeft.style.padding     = '100px 80px';
      heroLeft.style.textAlign   = 'left';
      heroRight.style.display    = 'flex';
      heroRight.style.clipPath   = 'none';
    } else if (tweaks.heroStyle === 'centered') {
      heroGrid.style.gridTemplateColumns = '1fr';
      heroLeft.style.background  = tweaks.colorScheme === 'dark-command' ? '#0d1b2e' : '#ffffff';
      heroLeft.style.padding     = '100px 80px';
      heroLeft.style.textAlign   = 'center';
      heroRight.style.display    = 'none';
      document.querySelectorAll('[data-tw-hero-stats]').forEach(el => { el.style.justifyContent = 'center'; });
      document.querySelectorAll('[data-tw-hero-ctas]').forEach(el => { el.style.justifyContent = 'center'; });
    }
    if (tweaks.heroStyle !== 'centered') {
      document.querySelectorAll('[data-tw-hero-stats]').forEach(el => { el.style.justifyContent = 'flex-start'; });
      document.querySelectorAll('[data-tw-hero-ctas]').forEach(el => { el.style.justifyContent = 'flex-start'; });
    }
    const h1col = tweaks.heroStyle === 'full-dark' ? '#ffffff'
      : tweaks.colorScheme === 'dark-command' ? '#e2e8f0' : '#1e3a5f';
    const subCol = tweaks.heroStyle === 'full-dark' ? 'rgba(255,255,255,0.72)'
      : tweaks.colorScheme === 'dark-command' ? '#94a3b8' : '#4b5563';
    document.querySelectorAll('[data-tw-hero-h1]').forEach(el => { el.style.color = h1col; });
    document.querySelectorAll('[data-tw-hero-sub]').forEach(el => { el.style.color = subCol; });
  }

  // ── Type Scale ───────────────────────────────────────────────
  if (tweaks.typeScale === 'bold') {
    document.querySelectorAll('[data-tw-h1]').forEach(el => { el.style.fontSize = '52px'; el.style.letterSpacing = '-0.02em'; el.style.fontWeight = '800'; });
    document.querySelectorAll('[data-tw-h2]').forEach(el => { el.style.fontSize = '40px'; el.style.letterSpacing = '-0.02em'; el.style.fontWeight = '800'; });
    document.querySelectorAll('[data-tw-body-text]').forEach(el => { el.style.fontSize = '16px'; el.style.lineHeight = '1.6'; });
  } else if (tweaks.typeScale === 'refined') {
    document.querySelectorAll('[data-tw-h1]').forEach(el => { el.style.fontSize = '44px'; el.style.letterSpacing = '0.01em'; el.style.fontWeight = '600'; });
    document.querySelectorAll('[data-tw-h2]').forEach(el => { el.style.fontSize = '32px'; el.style.letterSpacing = '0.01em'; el.style.fontWeight = '600'; });
    document.querySelectorAll('[data-tw-body-text]').forEach(el => { el.style.fontSize = '17px'; el.style.lineHeight = '1.8'; });
  } else if (tweaks.typeScale === 'compact') {
    document.querySelectorAll('[data-tw-h1]').forEach(el => { el.style.fontSize = '38px'; el.style.letterSpacing = '-0.01em'; el.style.fontWeight = '700'; });
    document.querySelectorAll('[data-tw-h2]').forEach(el => { el.style.fontSize = '28px'; el.style.letterSpacing = '-0.01em'; el.style.fontWeight = '700'; });
    document.querySelectorAll('[data-tw-body-text]').forEach(el => { el.style.fontSize = '15px'; el.style.lineHeight = '1.55'; });
  }

  // ── Section Spacing ──────────────────────────────────────────
  const spacingMap = { compact: '56px 80px', normal: '96px 80px', spacious: '140px 80px' };
  const pad = spacingMap[tweaks.sectionSpacing] || spacingMap.normal;
  document.querySelectorAll('[data-tw-section-bg], [data-tw-section-alt]').forEach(el => {
    el.style.padding = pad;
  });

  // ── Card Style ───────────────────────────────────────────────
  document.querySelectorAll('[data-tw-card]').forEach(el => {
    if (tweaks.cardStyle === 'flat') {
      el.style.boxShadow = 'none';
      el.style.border = '1px solid #e5e7eb';
    } else if (tweaks.cardStyle === 'elevated') {
      el.style.boxShadow = '0 4px 24px rgba(30,58,95,0.10)';
      el.style.border = '1px solid transparent';
    } else if (tweaks.cardStyle === 'outlined') {
      el.style.boxShadow = 'none';
      el.style.border = `2px solid ${scheme['--tw-accent']}44`;
    }
  });

  // ── Button Shape ─────────────────────────────────────────────
  document.querySelectorAll('[data-tw-btn]').forEach(el => {
    el.style.borderRadius = tweaks.buttonShape === 'pill' ? '9999px'
      : tweaks.buttonShape === 'rounded' ? '10px' : '4px';
  });

  // ── Trust Bar visibility ─────────────────────────────────────
  document.querySelectorAll('[data-tw-trust-bar]').forEach(el => {
    el.style.display = tweaks.trustBarVisible ? '' : 'none';
  });

  // ── Hero Graphic Variant ─────────────────────────────────────
  window.__heroVariant = tweaks.heroGraphic || 'flow-diagram';
  window.dispatchEvent(new CustomEvent('hero-variant-change', { detail: window.__heroVariant }));

  // ── Footer Style ─────────────────────────────────────────────
  document.querySelectorAll('[data-tw-footer]').forEach(el => {
    if (tweaks.footerStyle === 'dark') el.style.background = scheme['--tw-dark'];
    else if (tweaks.footerStyle === 'brand') el.style.background = scheme['--tw-brand'];
    else if (tweaks.footerStyle === 'light') {
      el.style.background = '#f9fafb';
      el.querySelectorAll('*').forEach(child => {
        if (child.style.color === 'rgba(255,255,255,0.55)' || child.style.color === '#94a3b8') {
          child.style.color = '#6b7280';
        }
      });
    }
  });
};

window.__applyTweaks = applyTweaks;
window.__TWEAK_DEFAULTS = TWEAK_DEFAULTS;

const SecugramTweaks = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  return (
    <TweaksPanel>

      <TweakSection label="🎨 Color & Theme" />
      <TweakSelect
        label="Color Scheme"
        value={tweaks.colorScheme}
        onChange={v => setTweak('colorScheme', v)}
        options={[
          { value: 'navy-teal',    label: 'Navy & Teal (Default)' },
          { value: 'dark-command', label: 'Dark Command' },
          { value: 'clean-minimal',label: 'Clean Minimal' },
          { value: 'slate-gold',   label: 'Slate & Gold' },
        ]}
      />
      <TweakColor
        label="Accent Color"
        value={tweaks.accentColor}
        onChange={v => setTweak('accentColor', v)}
      />

      <TweakSection label="🖼 Layout & Hero" />
      <TweakSelect
        label="Hero Graphic"
        value={tweaks.heroGraphic}
        onChange={v => setTweak('heroGraphic', v)}
        options={[
          { value: 'flow-diagram', label: 'Uploaded Flow Diagram' },
          { value: 'data-flow', label: 'Data Flow Pipeline' },
          { value: 'ai-brain',  label: 'AI SOC Brain' },
          { value: 'command',   label: 'Command Center' },
          { value: 'classic',   label: 'Classic Hexagon' },
        ]}
      />
      <TweakRadio
        label="Hero Style"
        value={tweaks.heroStyle}
        onChange={v => setTweak('heroStyle', v)}
        options={[
          { value: 'split',     label: 'Split' },
          { value: 'full-dark', label: 'Full Dark' },
          { value: 'centered',  label: 'Centered' },
        ]}
      />
      <TweakRadio
        label="Nav Style"
        value={tweaks.navStyle}
        onChange={v => setTweak('navStyle', v)}
        options={[
          { value: 'white', label: 'White' },
          { value: 'glass', label: 'Glass' },
          { value: 'dark',  label: 'Dark' },
        ]}
      />
      <TweakRadio
        label="Section Spacing"
        value={tweaks.sectionSpacing}
        onChange={v => setTweak('sectionSpacing', v)}
        options={[
          { value: 'compact',  label: 'Compact' },
          { value: 'normal',   label: 'Normal' },
          { value: 'spacious', label: 'Spacious' },
        ]}
      />

      <TweakSection label="✏️ Typography" />
      <TweakRadio
        label="Type Scale"
        value={tweaks.typeScale}
        onChange={v => setTweak('typeScale', v)}
        options={[
          { value: 'compact', label: 'Compact' },
          { value: 'bold',    label: 'Bold' },
          { value: 'refined', label: 'Refined' },
        ]}
      />

      <TweakSection label="🃏 Cards & Buttons" />
      <TweakRadio
        label="Card Style"
        value={tweaks.cardStyle}
        onChange={v => setTweak('cardStyle', v)}
        options={[
          { value: 'flat',     label: 'Flat' },
          { value: 'elevated', label: 'Elevated' },
          { value: 'outlined', label: 'Outlined' },
        ]}
      />
      <TweakRadio
        label="Button Shape"
        value={tweaks.buttonShape}
        onChange={v => setTweak('buttonShape', v)}
        options={[
          { value: 'sharp',   label: 'Sharp' },
          { value: 'rounded', label: 'Rounded' },
          { value: 'pill',    label: 'Pill' },
        ]}
      />

      <TweakSection label="⚙️ Sections" />
      <TweakToggle
        label="Show Trust Bar"
        value={tweaks.trustBarVisible}
        onChange={v => setTweak('trustBarVisible', v)}
      />
      <TweakRadio
        label="Footer Style"
        value={tweaks.footerStyle}
        onChange={v => setTweak('footerStyle', v)}
        options={[
          { value: 'dark',  label: 'Dark' },
          { value: 'brand', label: 'Brand' },
          { value: 'light', label: 'Light' },
        ]}
      />

    </TweaksPanel>
  );
};

Object.assign(window, { SecugramTweaks });
