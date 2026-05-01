---
name: Secugram Landing Page
description: Enterprise-grade cybersecurity landing page for growing businesses.
colors:
  brand-navy: "#1e3a5f"
  deep-command: "#0d1b2e"
  command-ink: "#061726"
  security-teal: "#0b6f66"
  security-teal-hover: "#095e57"
  signal-teal: "#14b8a6"
  alert-blue: "#1e6fa5"
  mint-surface: "#f0fdf9"
  mint-border: "#a7f3d0"
  page-white: "#ffffff"
  section-mist: "#f9fafb"
  border-cloud: "#e5e7eb"
  heading-navy: "#1e3a5f"
  body-slate: "#4b5563"
  muted-slate: "#6b7280"
  cool-slate: "#94a3b8"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "52px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  xl: "16px"
  diagram: "26px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "48px"
  section-y: "96px"
  section-x: "80px"
components:
  button-primary:
    backgroundColor: "{colors.security-teal}"
    textColor: "{colors.page-white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.security-teal-hover}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.pill}"
  nav-cta:
    backgroundColor: "{colors.security-teal}"
    textColor: "{colors.page-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 26px"
  feature-card:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.heading-navy}"
    rounded: "{rounded.xl}"
    padding: "22px 26px"
  input-field:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.heading-navy}"
    rounded: "{rounded.sm}"
    padding: "11px 14px"
  integration-chip:
    backgroundColor: "{colors.page-white}"
    rounded: "{rounded.pill}"
    size: "64px"
---

# Design System: Secugram Landing Page

## 1. Overview

**Creative North Star: "The Calm Security Command Center"**

Secugram uses the visual language of a security operations floor, but filters it through a clean B2B marketing frame. The default surface is bright, structured, and reassuring; the dark command panels appear only when the page needs to show detection, monitoring, and technical depth.

The system is built around a restrained navy and teal palette. Navy carries authority, teal marks action and signal, and white or mist sections keep the page approachable for SME buyers who need security expertise without enterprise friction.

**Key Characteristics:**
- Structured, audit-ready layouts with generous section rhythm.
- Teal used as a signal color for CTAs, active states, status, and security telemetry.
- Dark panels reserved for operations, SOC, diagrams, and trust moments.
- Rounded, elevated cards that feel stable rather than decorative.
- Technical imagery built from hexagons, grids, dotted connectors, and lifecycle diagrams.

## 2. Colors

The palette is a restrained command palette: navy for authority, teal for action, and cool neutrals for readability.

### Primary
- **Command Navy**: The main brand authority color. Use it for headings, active navigation, trust-band bases, and selected dark feature panels.
- **Deep Command**: The darkest operational surface. Use it for the hero graphic side, footer, and security operations sections.
- **Security Teal**: The primary action and signal color. Use it for CTAs, links, icon strokes, active tabs, focus states, and important numerical signals.

### Secondary
- **Signal Teal**: A brighter teal used on dark backgrounds, glows, connector lines, and SOC-style telemetry.
- **Alert Blue**: A limited secondary service accent, currently used to distinguish the consulting card from the teal service cards.

### Neutral
- **Page White**: The default canvas, nav background, cards, and form fields.
- **Section Mist**: Alternating section background for scanability.
- **Border Cloud**: Default dividers and card borders.
- **Body Slate**: Main paragraph copy.
- **Muted Slate**: Secondary copy, nav labels, form helper text.
- **Cool Slate**: Footer copy and low-emphasis text on dark surfaces.

### Named Rules

**The Signal Rarity Rule.** Security Teal must mark action, state, or telemetry. Do not flood every heading, icon, and border with teal at once.

**The Command Surface Rule.** Deep Command belongs to operational context: hero graphics, SOC sections, trust bands, and footer. Do not turn the whole marketing page dark unless intentionally using the `dark-command` tweak variant.

## 3. Typography

**Display Font:** Montserrat with Arial fallback
**Body Font:** Open Sans with Arial fallback
**Label/Mono Font:** Montserrat for labels and badges

**Character:** Montserrat gives the page confident enterprise weight, while Open Sans keeps SME-oriented explanations clear and plainspoken.

### Hierarchy
- **Display** (800, 52px or 48px, 1.08): Hero headlines and the strongest landing page claims.
- **Headline** (800, 40px, 1.15): Section titles and major conversion blocks.
- **Title** (700, 20px to 22px, 1.25): Card titles, feature names, and industry labels.
- **Body** (400 to 600, 16px to 17px, 1.6): Explanatory copy. Keep paragraph measure near 65ch when centered.
- **Label** (700 to 800, 10px to 12px, 0.10em to 0.16em): Eyebrows, badges, step labels, and small system markers. Labels are uppercase.

### Named Rules

**The Executive Scan Rule.** Every section must be readable by scanning the label, headline, and first sentence. Do not bury the value proposition inside dense body copy.

**The Heavy Headline Rule.** Use 800-weight Montserrat for major claims. If a heading drops to 600, the whole section should intentionally become quieter.

## 4. Elevation

The system uses a hybrid of tonal layering and soft elevation. Most cards sit on white with light borders, then lift on hover with blue-navy or teal-tinted shadows. Dark command panels use glow and rim lighting instead of heavy drop shadows.

### Shadow Vocabulary
- **Nav Scroll** (`0 2px 12px rgba(30,58,95,0.08)`): Sticky navigation after scrolling.
- **Card Rest** (`0 2px 10px rgba(30,58,95,0.06)`): Default service and metric cards.
- **Card Hover** (`0 12px 40px rgba(30,58,95,0.13)`): Feature cards when active.
- **Primary CTA** (`0 6px 24px rgba(11,111,102,0.35)`): Hero primary button.
- **Diagram Lift** (`0 34px 90px rgba(0,0,0,0.38), 0 0 44px rgba(20,184,166,0.24)`): White diagram cards placed inside dark command panels.
- **Integration Chip** (`0 6px 18px rgba(30,58,95,0.10), 0 0 0 4px #ffffff`): Logo chips on connector rows.

### Named Rules

**The Lift With Purpose Rule.** Elevation signals interactivity, hierarchy, or a white artifact floating over a command surface. Do not apply large shadows to every neutral card.

## 5. Components

### Buttons
- **Shape:** Fully rounded pill controls (`9999px`) are the default for CTAs.
- **Primary:** Security Teal background, Page White text, Montserrat 700, 14px to 16px, with 14px vertical padding and 24px to 40px horizontal padding.
- **Hover / Focus:** Hover darkens to Security Teal Hover and may translate up by 1px to 2px. Form focus uses a teal border plus `0 0 0 3px rgba(11,111,102,0.12)`.
- **Secondary / Ghost:** Text links use Command Navy with a thin underline or arrow. Keep them quiet beside the primary CTA.

### Chips
- **Style:** Pill badges use tinted teal backgrounds (`#f0fdf9` or low-opacity teal), fine teal borders, uppercase Montserrat labels, and compact padding.
- **State:** Active or featured chips can invert onto dark or teal fills. Do not make chips look like primary buttons.

### Cards / Containers
- **Corner Style:** Service cards use strong rounded corners (`16px`), process cards use slightly smaller corners (`14px`), form fields use compact corners (`8px`).
- **Background:** Cards are usually Page White on Page White or Section Mist. Dark featured cards use a navy gradient.
- **Shadow Strategy:** Resting cards use low blue-navy shadow. Hover cards lift and shift border color to the local accent.
- **Border:** Default border is Border Cloud. Accent borders appear only on hover, focus, or selected cards.
- **Internal Padding:** Feature cards use 22px to 32px padding; compact metric cards use 16px to 18px.

### Inputs / Fields
- **Style:** Page White background, 1.5px Border Cloud stroke, 8px radius, Open Sans 14px text, 11px by 14px padding.
- **Focus:** Security Teal border with a soft teal focus ring.
- **Error / Disabled:** No explicit error or disabled state exists yet. Add these before production forms.

### Navigation
- **Style, typography, default/hover/active states, mobile treatment.** Sticky white nav, 72px high, 60px side padding, logo left, Montserrat 13px links right. Active links use Command Navy with a 2px Security Teal underline. The contact CTA is a teal pill with a soft teal shadow. Mobile uses a labeled hamburger button that opens a full-width stacked navigation menu with 44px minimum targets.

### Feature Cards

Service cards combine a tinted header band, square icon tile, compact uppercase tag, stat badge, capability checklist, and footer text link. On hover, the header band fills with the service accent, text inverts to white, and the card lifts by 4px.

### Command Diagrams

Diagram containers are white rounded panels floating on Deep Command backgrounds. They use teal rim lines, top glow strips, and large soft shadows to make SOC workflows feel tangible without making the page look like a dashboard.

### Integration Chips

Integration logos sit in circular white chips connected by dotted teal lines. Chips use 64px size on desktop, shrink to 54px and 48px at narrower breakpoints, and lift on hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep Secugram's default mode bright and reassuring, with dark command surfaces used as contrast.
- **Do** use Security Teal for primary action, live signal, focus, and important operational markers.
- **Do** preserve the Montserrat and Open Sans pairing unless the whole brand system is intentionally reworked.
- **Do** keep section spacing generous: 88px to 96px vertical padding is the normal marketing rhythm.
- **Do** use hexagons, grids, dotted connectors, and lifecycle diagrams for technical texture.
- **Do** add missing responsive navigation and form states before treating the prototype as production.

### Don't:
- **Don't** use generic cybersecurity neon-on-black for the whole page. Dark surfaces must be specific to operations and diagrams.
- **Don't** replace teal with arbitrary accent colors unless all CTA, focus, link, trust, and diagram states are updated together.
- **Don't** use side-stripe borders as card accents. Use full borders, header bands, icon tiles, or badges.
- **Don't** use gradient text. Secugram emphasis comes from weight, color, and structure.
- **Don't** make every repeated item an identical icon-heading-text grid. The current system alternates cards, lifecycle steps, split panels, trust bands, and connector rows.
- **Don't** use glassmorphism as the site aesthetic. The tweaks panel may use blur, but the public landing page should stay clean and concrete.
