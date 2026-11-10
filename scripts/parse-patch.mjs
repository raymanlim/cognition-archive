/**
 * parse-patch.mjs
 * ---------------------------------------------------------------------------
 * Parses Part 2 of PATCH_DATA_AND_I18N.md (27 fully bilingual philosopher
 * records) into src/data/generated/philosophers.json.
 *
 * Runs in `predev` / `prebuild` alongside parse-sources.mjs so the typed data
 * layer can never drift from the patch specification.
 * ---------------------------------------------------------------------------
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'PATCH_DATA_AND_I18N.md');
const OUT = path.join(ROOT, 'src', 'data', 'generated', 'philosophers.json');

const md = fs.readFileSync(SRC, 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');

/** Extract every `{ zh: "...", en: "..." }` pair from a string, in order. */
const LOCAL_RE = /\{\s*zh\s*:\s*"((?:[^"\\]|\\.)*)"\s*,\s*en\s*:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
function locals(text) {
  const out = [];
  let m;
  const re = new RegExp(LOCAL_RE.source, 'g');
  while ((m = re.exec(text)) !== null) {
    out.push({ zh: clean(m[1]), en: cleanEn(m[2]) });
  }
  return out;
}

/** Normalise escaped quotes / stray encoding artefacts from the patch text. */
function clean(s) {
  return s
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    // 港元 is an obvious stray IME artefact in the source patch (Wittgenstein quote).
    .replace(/港元/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Known encoding / IME artefacts inside EN fields of the patch. Applied to
 * English values only, so legitimate Chinese in the zh side is untouched.
 */
const EN_FIXES = [
  [/shifting虚\/实 dynamics/g, 'shifting void/solid dynamics'],
  [/港元/g, ''],
];
function cleanEn(s) {
  return EN_FIXES.reduce((acc, [re, rep]) => acc.replace(re, rep), clean(s));
}

const quoted = (s) => {
  const m = s.match(/"([^"]+)"/);
  return m ? m[1] : '';
};
const singleQuoted = (s) => {
  const m = s.match(/'([^']+)'/);
  return m ? m[1] : quoted(s);
};

const GROUPS = new Set(['coreIdeas', 'logicChain', 'works', 'lineage']);

function parseTop(card, key, raw) {
  const one = () => locals(raw)[0] ?? null;
  switch (key) {
    case 'id': card.id = quoted(raw); break;
    case 'sectionNum': card.sectionNum = quoted(raw); break;
    case 'yearSort': card.yearSort = Number(raw.replace(/[`\s]/g, '')); break;
    case 'theme': card.theme = singleQuoted(raw); break;
    case 'name': card.name = one(); break;
    case 'era': card.era = one(); break;
    case 'tags': card.tags = locals(raw); break;
    case 'oneLiner': card.oneLiner = one(); break;
    case 'quote': card.quote = one(); break;
    case 'modernInsight': card.modernInsight = one(); break;
    default: break;
  }
}

function parseSub(card, group, raw) {
  const keyMatch = raw.match(/^`(\w+)`\s*:\s*([\s\S]*)$/);
  const key = keyMatch ? keyMatch[1] : null;
  const body = keyMatch ? keyMatch[2] : raw;
  const l = locals(body);

  if (group === 'coreIdeas') {
    if (l.length >= 2) card.coreIdeas.push({ title: l[0], desc: l[1] });
    return;
  }
  if (!key) return;
  if (group === 'logicChain') {
    if (l[0]) card.logicChain[key] = l[0];
  } else if (group === 'works') {
    if (l.length >= 2) card.works[key] = { title: l[0], note: l[1] };
  } else if (group === 'lineage') {
    if (l[0]) card.lineage[key] = l[0];
  }
}

const blocks = md.split(/^#### /m).slice(1);
const cards = [];
for (const block of blocks) {
  const lines = block.split('\n');
  const head = lines[0].trim();
  if (!/^\d+\./.test(head)) continue;
  const card = {
    coreIdeas: [],
    logicChain: {},
    works: {},
    lineage: {},
  };
  let group = null;
  for (const line of lines.slice(1)) {
    const top = line.match(/^-\s+\*\*`(\w+)`\*\*\s*:\s*(.*)$/);
    if (top) {
      group = GROUPS.has(top[1]) ? top[1] : null;
      if (!group) parseTop(card, top[1], top[2]);
      continue;
    }
    const sub = line.match(/^\s+-\s+(.*)$/);
    if (sub && group) parseSub(card, group, sub[1]);
  }
  cards.push(card);
}

/* -------------------------------------------------------------------------- */
/* Strict validation                                                          */
/* -------------------------------------------------------------------------- */
const REQUIRED = ['id', 'sectionNum', 'name', 'era', 'yearSort', 'theme', 'tags', 'oneLiner',
  'coreIdeas', 'logicChain', 'works', 'lineage', 'quote', 'modernInsight'];
const problems = [];

function checkLocal(label, v) {
  if (!v || typeof v.zh !== 'string' || typeof v.en !== 'string' || !v.zh.trim() || !v.en.trim()) {
    problems.push(`${label}: missing zh/en`);
  } else if (/[\u4e00-\u9fff]/.test(v.en)) {
    problems.push(`${label}: English field contains Chinese characters -> ${v.en.slice(0, 60)}`);
  }
}

cards.forEach((c, i) => {
  const tag = `${c.sectionNum || i + 1} ${c.id || '(no id)'}`;
  for (const k of REQUIRED) {
    if (c[k] === undefined || c[k] === null || (Array.isArray(c[k]) && !c[k].length)) {
      problems.push(`${tag}: missing ${k}`);
    }
  }
  ['name', 'era', 'oneLiner', 'quote', 'modernInsight'].forEach((k) => checkLocal(`${tag}.${k}`, c[k]));
  (c.tags ?? []).forEach((t, j) => checkLocal(`${tag}.tags[${j}]`, t));
  (c.coreIdeas ?? []).forEach((idea, j) => {
    checkLocal(`${tag}.coreIdeas[${j}].title`, idea.title);
    checkLocal(`${tag}.coreIdeas[${j}].desc`, idea.desc);
  });
  ['premise', 'argument', 'conclusion'].forEach((k) => checkLocal(`${tag}.logicChain.${k}`, c.logicChain[k]));
  ['entry', 'advanced'].forEach((k) => {
    checkLocal(`${tag}.works.${k}.title`, c.works[k]?.title);
    checkLocal(`${tag}.works.${k}.note`, c.works[k]?.note);
  });
  ['from', 'to'].forEach((k) => checkLocal(`${tag}.lineage.${k}`, c.lineage[k]));
  if (!c.coreIdeas || c.coreIdeas.length < 1) problems.push(`${tag}: coreIdeas empty`);
});

// The patch deliberately supplies only one coreIdea for Berkeley; report, do not invent data.
const thin = cards.filter((c) => c.coreIdeas.length < 2).map((c) => `${c.sectionNum} ${c.id} (${c.coreIdeas.length})`);

const ids = cards.map((c) => c.id);
if (new Set(ids).size !== ids.length) problems.push('duplicate id');
const nums = cards.map((c) => c.sectionNum);
if (new Set(nums).size !== nums.length) problems.push('duplicate sectionNum');
if (cards.length !== 27) problems.push(`expected 27 cards, got ${cards.length}`);

if (problems.length) {
  console.error('[parse-patch] VALIDATION FAILED:');
  problems.forEach((p) => console.error('  -', p));
  throw new Error('[parse-patch] aborting build');
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(cards, null, 2), 'utf8');

const themeCount = cards.reduce((a, c) => { a[c.theme] = (a[c.theme] || 0) + 1; return a; }, {});
console.log(`[parse-patch] PATCH_DATA_AND_I18N.md -> ${path.relative(ROOT, OUT)}`);
console.log(`  philosophers : ${cards.length} × full bilingual schema`);
console.log(`  themes       : ${JSON.stringify(themeCount)}`);
console.log(`  coreIdeas    : ${cards.reduce((n, c) => n + c.coreIdeas.length, 0)}`);
console.log(`  tags         : ${cards.reduce((n, c) => n + c.tags.length, 0)}`);
console.log(`  yearSort     : ${cards.map((c) => c.yearSort).join(', ')}`);
if (thin.length) console.log(`  NOTE coreIdeas < 2 (as supplied by patch): ${thin.join(', ')}`);
