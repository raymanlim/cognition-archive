#!/usr/bin/env node
/**
 * check-contrast.mjs — WCAG 2.1 contrast guard for the three themes.
 *
 * Parses the CSS custom properties out of src/styles/global.css and checks the
 * text/background pairs that actually carry body copy. Exit 1 when any pair
 * drops below AA (4.5:1 for normal text, 3:1 for large text).
 *
 * Zero dependencies; run with `npm run check:contrast`. Intentionally NOT part
 * of prebuild — a deliberate design change should not be blocked by CI, but the
 * regression should be visible.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CSS = path.join(ROOT, 'src', 'styles', 'global.css');
const css = fs.readFileSync(CSS, 'utf8');

/** Extract `--name: #hex;` pairs inside the block that follows a selector. */
function varsFor(selector) {
  const start = css.indexOf(selector);
  if (start < 0) throw new Error(`[contrast] selector not found: ${selector}`);
  const open = css.indexOf('{', start);
  const close = css.indexOf('}', open);
  const body = css.slice(open + 1, close);
  const out = {};
  for (const m of body.matchAll(/--([\w-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) out[m[1]] = m[2].toLowerCase();
  return out;
}

const THEMES = {
  paper: varsFor("[data-theme='paper']"),
  dark: varsFor("[data-theme='dark']"),
  crisp: varsFor("[data-theme='crisp']"),
};

const hex2rgb = (h) => {
  const s = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(s.substr(i, 2), 16) / 255);
};
const lin = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const lum = (h) => {
  const [r, g, b] = hex2rgb(h).map(lin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const l1 = lum(a), l2 = lum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

/** [fg, bg, min, label] — body copy and small UI text. */
const PAIRS = [
  ['ink', 'paper', 4.5, 'body text'],
  ['ink-soft', 'paper', 4.5, 'secondary text'],
  ['ink-faint', 'paper', 4.5, 'faint text (dates, hints)'],
  ['cinnabar', 'paper', 4.5, 'cinnabar accent text'],
  ['pine', 'paper', 4.5, 'pine accent text'],
  ['obi-ink', 'obi', 4.5, 'obi strip'],
];

let fail = 0;
console.log('[contrast] WCAG 2.1 AA check (normal text >= 4.5, large >= 3.0)');
for (const [name, vars] of Object.entries(THEMES)) {
  console.log(`\n  ${name}`);
  for (const [fg, bg, min, label] of PAIRS) {
    const a = vars[fg], b = vars[bg];
    if (!a || !b) { console.log(`    ?  ${label}: missing --${!a ? fg : bg}`); fail++; continue; }
    const r = ratio(a, b);
    const ok = r >= min;
    if (!ok) fail++;
    console.log(`    ${ok ? 'OK ' : 'FAIL'} ${r.toFixed(2)}:1  ${label} (${a} on ${b}, min ${min})`);
  }
}

console.log(fail === 0 ? '\n[contrast] all pairs pass.' : `\n[contrast] ${fail} pair(s) below AA.`);
process.exit(fail === 0 ? 0 : 1);
