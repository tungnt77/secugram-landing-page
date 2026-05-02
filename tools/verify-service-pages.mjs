import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const websiteDir = join(root, 'ui_kits', 'website');

const expectedPages = [
  'services/secure-infrastructure-platform.html',
  'services/security-architecture.html',
  'services/managed-detection-response.html',
];

const requiredPhrases = {
  'services/secure-infrastructure-platform.html': ['Secure Infrastructure Platform', 'Hardened cloud', 'hybrid'],
  'services/security-architecture.html': ['Security Architecture & Consulting', 'Risk assessment', 'Zero Trust'],
  'services/managed-detection-response.html': ['Managed Detection & Response', '24/7 SOC', 'Incident response'],
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
  "{ label: 'Secure Infrastructure Platform', target: 'services' }",
  "{ label: 'SOC Operations', target: 'security-ops' }",
]) {
  if (footer.includes(oldTarget)) {
    failures.push(`Footer still uses old anchor-only service target: ${oldTarget}`);
  }
}

for (const removedService of ['services/cloud-security.html', 'services/soc-operations.html']) {
  const pagePath = join(websiteDir, removedService);
  if (existsSync(pagePath)) {
    failures.push(`Removed service page still exists: ${removedService}`);
  }
  if (features.includes(removedService) || footer.includes(removedService)) {
    failures.push(`Homepage still links removed service page: ${removedService}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${expectedPages.length} service pages and homepage links.`);
