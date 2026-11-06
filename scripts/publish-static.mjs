import { readdir, readFile, writeFile, copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

// Pages is configured to serve main:/, so keep its exported files alongside source.
const root = process.cwd();
const out = path.join(root, 'out');
const manifest = '.pages-files.json';
async function walk(dir, prefix = '') {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path.join(dir, entry.name), relative));
    else files.push(relative);
  }
  return files;
}
const files = (await walk(out)).sort();
if (!files.includes('index.html') || !files.some(file => file.startsWith('_next/'))) {
  throw new Error('Build the static website before publishing.');
}
const allowed = new Set([...files.map(file => file.split('/')[0]), '_next']);
let previous = [];
try { previous = JSON.parse(await readFile(manifest, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
for (const file of previous) {
  if (!allowed.has(file.split('/')[0]) || file.includes('..') || path.isAbsolute(file)) {
    throw new Error(`Invalid generated file path: ${file}`);
  }
  if (!files.includes(file)) await rm(path.join(root, file), { force: true });
}
for (const file of files) {
  await mkdir(path.dirname(path.join(root, file)), { recursive: true });
  await copyFile(path.join(out, file), path.join(root, file));
}
await writeFile(manifest, JSON.stringify(files, null, 2) + '\n');
console.log(`Published ${files.length} exported files to main:/ for GitHub Pages.`);
