import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const websiteDir = join(root, 'ui_kits', 'website');

const expectedPages = [
  'services/security-architecture.html',
  'services/managed-detection-response.html',
  'services/cloud-security.html',
  'services/soc-operations.html',
];

const requiredPhrases = {
  'services/security-architecture.html': ['Security Architecture & Consulting', 'Risk assessment', 'Zero Trust'],
  'services/managed-detection-response.html': ['Managed Detection & Response', '24/7 SOC', 'Incident response'],
  'services/cloud-security.html': ['Cloud Security', 'Hardened cloud', 'hybrid'],
  'services/soc-operations.html': ['SOC Operations', 'Detect', 'Respond'],
};

const failures = [];

for (const page of expectedPages) {
  const pagePath = join(websiteDir, page);
  if (!existsSync(pagePath)) {
    failures.push(`Missing page: ${page}`);
    continue;
  }

  const html = readFileSync(pagePath, 'utf8');
  for (const phrase of requiredPhrases[page]) {
    if (!html.includes(phrase)) {
      failures.push(`${page} missing required phrase: ${phrase}`);
    }
  }
}

const features = readFileSync(join(websiteDir, 'Features.jsx'), 'utf8');
const footer = readFileSync(join(websiteDir, 'Footer.jsx'), 'utf8');

for (const page of expectedPages) {
  if (!features.includes(page) && !footer.includes(page)) {
    failures.push(`No homepage link references ${page}`);
  }
}

for (const oldTarget of [
  "{ label: 'Security Architecture', target: 'services' }",
  "{ label: 'Managed Detection & Response', target: 'services' }",
  "{ label: 'Cloud Security', target: 'services' }",
  "{ label: 'SOC Operations', target: 'security-ops' }",
]) {
  if (footer.includes(oldTarget)) {
    failures.push(`Footer still uses old anchor-only service target: ${oldTarget}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${expectedPages.length} service pages and homepage links.`);
