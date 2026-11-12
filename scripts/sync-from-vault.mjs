#!/usr/bin/env node
/**
 * sync-from-vault.mjs — pull the five Cognition source notes out of the
 * Obsidian vault and into the project root, ready for `npm run parse`.
 *
 * WHY AN ENV VAR: the vault lives outside this repository. Hard-coding its
 * absolute path here would (a) break the Cloudflare Pages build, which has no
 * such directory, and (b) violate the Division V spec §9.8 rule that no
 * machine-specific path may appear under scripts/. So the location is injected
 * at runtime:
 *
 *   COGNITION_VAULT_DIR="/path/to/vault/pinghe/Cognition" \
 *     node scripts/sync-from-vault.mjs --check
 *
 * Modes
 *   --check   report drift only (default). Exit 1 when any file differs.
 *   --apply   copy the differing files into the project root.
 *
 * The generated JSON under src/data/generated/ is deliberately untouched:
 * run `npm run parse` after an --apply so parse-sources.mjs rebuilds it.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

/** Canonical file map — must stay in step with parse-sources.mjs FILES. */
const FILES = {
  index: '认知素材库.md',
  cognition: '认知素材库-思想认知.md',
  realityLens: '认知素材库-现实透镜.md',
  munger: '认知素材库-芒格.md',
  cpv: 'CPV原理-完整版.md',
};

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VAULT = process.env.COGNITION_VAULT_DIR;
const APPLY = process.argv.includes('--apply');

const md5 = (p) => crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex');

function fail(msg) {
  console.error(`[sync] ${msg}`);
  process.exit(2);
}

if (!VAULT) {
  fail('COGNITION_VAULT_DIR is not set.\n' +
       '  Example: COGNITION_VAULT_DIR="/path/to/vault/pinghe/Cognition" \\\n' +
       '             node scripts/sync-from-vault.mjs --check');
}
if (!fs.existsSync(VAULT)) fail(`vault directory not found: ${VAULT}`);

const rows = [];
let drift = 0;
let missing = 0;

for (const [key, name] of Object.entries(FILES)) {
  const src = path.join(VAULT, name);
  const dst = path.join(ROOT, name);

  if (!fs.existsSync(src)) { rows.push({ key, name, state: 'MISSING-IN-VAULT' }); missing++; continue; }
  if (!fs.existsSync(dst)) {
    rows.push({ key, name, state: 'NEW', srcBytes: fs.statSync(src).size });
    drift++;
    if (APPLY) { fs.copyFileSync(src, dst); rows.at(-1).state = 'NEW → COPIED'; }
    continue;
  }

  const same = md5(src) === md5(dst);
  if (same) { rows.push({ key, name, state: 'same' }); continue; }

  drift++;
  rows.push({ key, name, state: APPLY ? 'changed → COPIED' : 'changed', srcBytes: fs.statSync(src).size, dstBytes: fs.statSync(dst).size });
  if (APPLY) fs.copyFileSync(src, dst);
}

console.log(`[sync] mode=${APPLY ? 'apply' : 'check'} vault=${VAULT}`);
for (const r of rows) {
  const size = r.srcBytes != null ? ` (${r.dstBytes ?? '-'}→${r.srcBytes} B)` : '';
  console.log(`  ${r.state.padEnd(16)} ${r.name}${size}`);
}
console.log(`[sync] drift=${drift} missing=${missing} total=${rows.length}`);

if (missing) process.exit(2);
if (!APPLY && drift > 0) {
  console.log('[sync] drift detected — re-run with --apply, then `npm run parse`.');
  process.exit(1);
}
if (APPLY && drift > 0) console.log('[sync] copied. Next: `npm run parse` (and rebuild).');
else if (APPLY) console.log('[sync] nothing to do.');
process.exit(0);
