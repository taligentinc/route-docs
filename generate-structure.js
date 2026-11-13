const fs = require('fs');
const path = require('path');

const DOCS_ROOT = __dirname;
const IGNORED_DIRS = new Set(['.git', '.github', 'css', 'js', 'images', 'node_modules', '.agents']);
const IGNORED_FILES = new Set(['.gitignore', 'index.html', 'structure.json', 'generate-structure.js', 'package.json', 'package-lock.json', 'README.md', 'CNAME', '.nojekyll', '.DS_Store']);

const CATEGORY_ORDER = [
  'getting-started',
  'roles-and-permissions',
  'bus-routes',
  'visitation',
  'attendance',
  'public-registration',
  'territory-soulwinning',
  'fleet-management',
  'telephony-and-messaging',
  'workers-and-security',
  'data-management',
  'settings',
  'central-administration',
  'developer-guide',
  'manuals-and-playbooks',
  'troubleshooting-and-faq',
  'api-reference',
  'deep-dives-and-architecture'
];

function formatTitle(slug) {
  return slug
    .replace(/^\d+[-_]/, '') // remove leading 01-, 02- etc.
    .replace(/[-_]+/g, ' ')
    .replace(/\.md$/i, '')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/\bAnd\b/g, '&')
    .replace(/\bApi\b/g, 'API')
    .replace(/\bPwa\b/g, 'PWA')
    .replace(/\bFaq\b/g, 'FAQ')
    .replace(/\bPdf\b/g, 'PDF')
    .replace(/\bSms\b/g, 'SMS')
    .replace(/\bVoip\b/g, 'VoIP')
    .replace(/\bSso\b/g, 'SSO')
    .replace(/\b2fa\b/gi, '2FA')
    .replace(/\bCrm\b/g, 'CRM')
    .replace(/\bCdl\b/g, 'CDL')
    .replace(/\bDvir\b/g, 'DVIR')
    .replace(/\bDot\b/g, 'DOT')
    .replace(/\bSop\b/g, 'SOP')
    .replace(/\bGps\b/g, 'GPS')
    .replace(/\b10dlc\b/gi, '10DLC');
}

function extractMarkdownTitle(filePath, defaultTitle) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const firstHeading = content.match(/^#\s+(.+)$/m);
    if (firstHeading && firstHeading[1]) {
      return firstHeading[1].trim();
    }
  } catch (e) {
    // ignore
  }
  return defaultTitle;
}

function scanDirectory(dirPath, relativePath = '') {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const items = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const itemRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;

      const children = scanDirectory(fullPath, itemRelativePath);
      if (children.length > 0) {
        items.push({
          type: 'category',
          name: entry.name,
          title: formatTitle(entry.name),
          path: itemRelativePath,
          children
        });
      }
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name) || entry.name.startsWith('.')) continue;
      if (!entry.name.endsWith('.md')) continue;

      const title = extractMarkdownTitle(fullPath, formatTitle(entry.name));
      items.push({
        type: 'file',
        name: entry.name,
        title: title,
        path: itemRelativePath
      });
    }
  }

  items.sort((a, b) => {
    if (a.name === 'index.md') return -1;
    if (b.name === 'index.md') return 1;

    if (a.type === 'category' && b.type === 'category') {
      const idxA = CATEGORY_ORDER.indexOf(a.name);
      const idxB = CATEGORY_ORDER.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.name.localeCompare(b.name);
    }

    if (a.type === 'category' && b.type !== 'category') return -1;
    if (a.type !== 'category' && b.type === 'category') return 1;

    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  return items;
}

function main() {
  console.log('Generating documentation structure...');
  const structure = scanDirectory(DOCS_ROOT);
  const outputPath = path.join(DOCS_ROOT, 'structure.json');
  fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2), 'utf8');
  console.log(`Successfully generated structure with ${structure.length} root items -> ${outputPath}`);
}

main();
