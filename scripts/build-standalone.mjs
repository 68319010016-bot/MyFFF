import { build } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';

// Bundle the framework, compiled styles, and original photo into one offline file.
const result = await build({ build: { write: false } });
if (Array.isArray(result) || !('output' in result)) throw new Error('Expected one build output.');
const { output } = result;
const entry = output.find(item => item.type === 'asset' && item.fileName === 'app.html');
if (!entry || entry.type !== 'asset') throw new Error('Missing HTML entry.');
let html = String(entry.source);
for (const item of output) {
  const escapedName = item.fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (item.type === 'chunk') {
    if (item.imports.length || item.dynamicImports.length) throw new Error('External script dependency found.');
    const tag = new RegExp(`<script\\b[^>]*src="\\./${escapedName}"[^>]*><\\/script>`);
    if (!tag.test(html)) throw new Error(`Missing script: ${item.fileName}`);
    html = html.replace(tag, () => `<script type="module">\n${item.code.replace(/<\/script/gi, '<\\/script')}\n</script>`);
  } else if (item.fileName.endsWith('.css')) {
    const tag = new RegExp(`<link\\b[^>]*href="\\./${escapedName}"[^>]*>`);
    if (!tag.test(html)) throw new Error(`Missing stylesheet: ${item.fileName}`);
    html = html.replace(tag, () => `<style>\n${String(item.source).replace(/<\/style/gi, '<\\/style')}\n</style>`);
  } else if (item.fileName !== 'app.html') {
    throw new Error(`Asset was not embedded: ${item.fileName}`);
  }
}
if (/<script\b[^>]*\bsrc=|<link\b[^>]*\bhref=|<img\b[^>]*\bsrc="(?!data:)/i.test(html)) throw new Error('External resource found.');
if (!html.includes('data:image/png;base64,')) throw new Error('Profile photo was not embedded.');
if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(html)) throw new Error('Remote font found.');
await mkdir('dist', { recursive: true });
await writeFile('index.html', html);
await writeFile('dist/index.html', html);
console.log(`Standalone index.html created (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB). No external assets required.`);
