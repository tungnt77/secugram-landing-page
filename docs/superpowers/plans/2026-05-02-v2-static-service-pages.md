# V2 Static Service Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add lightweight static service detail pages for Secugram's first V2 content-depth slice.

**Architecture:** Keep the existing GitHub Pages/static website model. Add standalone HTML service pages under `ui_kits/website/services/`, share a focused CSS file, and link to those pages from the homepage Core Services cards and footer service links.

**Tech Stack:** Static HTML, CSS, existing React/Babel homepage components, Node verification script.

---

### Task 1: Verification Script

**Files:**
- Create: `tools/verify-service-pages.mjs`

- [x] **Step 1: Write failing verification**

The script checks that four service pages exist, include required service-specific phrases, and are referenced by homepage/footer links.

- [x] **Step 2: Run verification to confirm RED**

Run:

```powershell
$node='C:\Users\Asus\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node tools\verify-service-pages.mjs
```

Expected: FAIL because service pages and links do not exist yet.

### Task 2: Service Pages

**Files:**
- Create: `ui_kits/website/services/service-page.css`
- Create: `ui_kits/website/services/security-architecture.html`
- Create: `ui_kits/website/services/managed-detection-response.html`
- Create: `ui_kits/website/services/cloud-security.html`
- Create: `ui_kits/website/services/soc-operations.html`

- [ ] **Step 1: Add shared page CSS**

Create a clean Secugram-aligned layout: white/navy sections, Montserrat/Open Sans typography, teal CTAs, responsive cards.

- [ ] **Step 2: Add four service pages**

Each page must include a header, hero, problem section, Secugram approach, deliverables, process/operations section, and CTA back to contact.

- [ ] **Step 3: Run verification**

Expected: pages exist, but homepage/footer link checks still fail until Task 3.

### Task 3: Homepage and Footer Linking

**Files:**
- Modify: `ui_kits/website/Features.jsx`
- Modify: `ui_kits/website/Footer.jsx`

- [ ] **Step 1: Add service page URLs to Core Services cards**

Map:
- Secure Infrastructure Platform -> `services/cloud-security.html`
- Security Architecture & Consulting -> `services/security-architecture.html`
- Managed Detection & Response -> `services/managed-detection-response.html`

- [ ] **Step 2: Convert card "Learn more" CTA into links**

Keep the visual treatment but make it a real anchor.

- [ ] **Step 3: Update footer service links**

Map footer service links directly to the four service pages.

### Task 4: Verification and Publish

**Files:**
- All changed files

- [ ] **Step 1: Run service page verification**

Run:

```powershell
$node='C:\Users\Asus\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node tools\verify-service-pages.mjs
```

Expected: `Verified 4 service pages and homepage links.`

- [ ] **Step 2: Run JSX transform check**

Run the existing Babel transform check for all JSX files.

- [ ] **Step 3: Run `git diff --check`**

Expected: no whitespace errors.

- [ ] **Step 4: Commit and push**

Commit message: `Add V2 service detail pages`

- [ ] **Step 5: Verify GitHub Pages**

Confirm Pages status is `built` and one service page returns HTTP 200.
