/**
 * parse-sources.mjs
 * ---------------------------------------------------------------------------
 * Build-time source parser for "Rayman's Mind & Philosophy".
 *
 * Reads the 5 Obsidian markdown source files in the project root and emits
 * fully structured JSON into src/data/generated/. Zero third-party deps.
 *
 * Runs automatically via `predev` / `prebuild`, so the site can never drift
 * out of sync with the source notes. Re-run manually with `npm run parse`.
 * ---------------------------------------------------------------------------
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data', 'generated');

const FILES = {
  index: '认知素材库.md',
  cognition: '认知素材库-思想认知.md',
  realityLens: '认知素材库-现实透镜.md',
  munger: '认知素材库-芒格.md',
  cpv: 'CPV原理-完整版.md',
};

const read = (name) => {
  const p = path.join(ROOT, name);
  if (!fs.existsSync(p)) throw new Error(`[parse] missing source: ${p}`);
  return fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
};

/* -------------------------------------------------------------------------- */
/* Inline markdown -> safe HTML                                                */
/* -------------------------------------------------------------------------- */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Convert a small, controlled subset of inline markdown to HTML. */
function mdInline(raw) {
  let s = esc(raw.trim());
  // Obsidian wikilinks [[target|label]] / [[target]]
  s = s.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_m, _t, label) => label);
  s = s.replace(/\[\[([^\]]+)\]\]/g, (_m, t) => t.split('/').pop());
  // Standard markdown links
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_m, label, url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
  // Bold / code / strikethrough
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>');
  // Inline math $...$ -> styled span (no external renderer, keeps build offline)
  s = s.replace(/\$([^$]+)\$/g, '<span class="math">$1</span>');
  return s;
}

/** Strip markdown markers for plain-text search / matching. */
const plain = (raw) =>
  String(raw)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*|`|~~|\$/g, '')
    .trim();

/* -------------------------------------------------------------------------- */
/* Generic card block splitter                                                */
/* -------------------------------------------------------------------------- */
/**
 * Split a markdown document on `### <num>. <title>` headings.
 * Returns [{ num, title, body }] in document order.
 */
function splitCards(md) {
  const lines = md.split('\n');
  const re = /^###\s+(\d+)\.\s*(.+)$/;
  const cards = [];
  let cur = null;
  for (const line of lines) {
    const m = line.match(re);
    if (m) {
      if (cur) cards.push(cur);
      cur = {
        num: Number(m[1]),
        title: plain(m[2]).replace(/\s*@[A-Za-z0-9_]+\s*$/, '').trim(),
        body: [],
      };
    } else if (cur) {
      if (/^##\s+/.test(line)) { cards.push(cur); cur = null; continue; }
      cur.body.push(line);
    }
  }
  if (cur) cards.push(cur);
  return cards.map((c) => ({ ...c, body: c.body.join('\n') }));
}

/** Extract a labelled field: `- **标签**：value` or `**标签**：value`. */
function field(body, label) {
  const lines = body.split('\n');
  const re = new RegExp(`^(?:-\\s*)?\\*\\*${label}\\*\\*\\s*[:：]\\s*(.*)$`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(re);
    if (!m) continue;
    const parts = [m[1]];
    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j];
      if (!next.trim()) break;
      if (/^(?:-\s*)?\*\*[^*]+\*\*\s*[:：]/.test(next)) break;
      if (/^(?:---|\||>|#{1,4}\s)/.test(next.trim())) break;
      parts.push(next);
    }
    return parts.join(' ').trim();
  }
  return '';
}

/** Extract blockquote groups: [{ source, text }]. */
function quotes(body) {
  const lines = body.split('\n');
  const out = [];
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    const first = buf[0].trim();
    const srcMatch = first.match(/^《(.+?)》(?:.*)?节选\s*[:：]?\s*$/) ||
                     first.match(/^《(.+?)》\s*[:：]?\s*$/);
    let source = '';
    let rest = buf;
    if (srcMatch) { source = srcMatch[1].replace(/》.*$/, ''); rest = buf.slice(1); }
    const text = rest.join(' ')
      .replace(/^["“]/, '').replace(/["”]\s*$/, '')
      .replace(/^["“]|["”]$/g, '')
      .trim();
    if (text) out.push({ source, text: plain(text), html: mdInline(text) });
    buf = [];
  };
  for (const line of lines) {
    if (/^>\s?/.test(line)) {
      const content = line.replace(/^>\s?/, '');
      // A new 《...》节选 marker starts a new quote group
      if (/^《.*》.*节选/.test(content.trim()) && buf.length) flush();
      buf.push(content);
    } else if (buf.length) {
      flush();
    }
  }
  flush();
  return out;
}

/** Extract a markdown table following a marker line. */
function tableAfter(body, markerRe) {
  const lines = body.split('\n');
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (markerRe.test(lines[i])) { start = i + 1; break; }
  }
  if (start < 0) return [];
  // find the header row
  while (start < lines.length && !/^\s*\|/.test(lines[start])) start++;
  if (start >= lines.length) return [];
  const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  const rows = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (!/^\s*\|/.test(l)) { if (rows.length || i > start + 1) break; else continue; }
    if (/^\s*\|[\s:|-]+\|\s*$/.test(l)) continue; // separator row
    const c = cells(l);
    if (c.every((x) => !x || /^[-:]+$/.test(x))) continue;
    rows.push(c);
  }
  return rows.map((r) => ({
    cells: r.map((c) => ({ text: plain(c), html: mdInline(c) })),
  }));
}

/** Extract the first markdown table in the body (used for 多元模型解读). */
const interpretationTable = (body) => tableAfter(body, /^\*\*多元模型解读\*\*/);

/* -------------------------------------------------------------------------- */
/* Author resolution                                                          */
/* -------------------------------------------------------------------------- */
const AUTHORS = {
  nagi:    { id: 'nagi',    zh: 'Nagi Yan', en: 'Nagi Yan',       handle: '@naki2012' },
  zuoyi:   { id: 'zuoyi',   zh: '佐伊',     en: 'Zuoyi',          handle: '@zuoyi153917761' },
  dankoe:  { id: 'dankoe',  zh: 'DAN KOE',  en: 'Dan Koe',        handle: '@thedankoe' },
  morris:  { id: 'morris',  zh: 'Morris',   en: 'Morris',         handle: '@Morris_LT' },
  lifesinger: { id: 'lifesinger', zh: '玉伯', en: 'Yu Bo (Lifesinger)', handle: '@lifesinger' },
  anon:    { id: 'anon',    zh: '匿名',     en: 'Anonymous',      handle: 'x/02 归档' },
  munger:  { id: 'munger',  zh: '查理·芒格', en: 'Charlie Munger', handle: '《穷查理宝典》' },
};

function resolveAuthor(sourceText, num, kind) {
  const s = sourceText || '';
  if (/naki2012|Nagi/i.test(s)) return AUTHORS.nagi;
  if (/lifesinger|玉伯/i.test(s)) return AUTHORS.lifesinger;
  if (/Morris/i.test(s)) return AUTHORS.morris;
  if (/zuoyi|佐伊/i.test(s)) return AUTHORS.zuoyi;
  if (/dankoe|THEdankoe/i.test(s)) return AUTHORS.dankoe;
  if (/芒格|Munger/i.test(s)) return AUTHORS.munger;
  if (kind === 'reality') {
    if (num >= 9 && num <= 11) return AUTHORS.dankoe;
    if (num >= 12 && num <= 15) return AUTHORS.morris;
    return AUTHORS.zuoyi;
  }
  if (num === 13) return AUTHORS.lifesinger;
  if (num === 12) return AUTHORS.anon;
  if (num === 15 || num === 16) return AUTHORS.morris;
  return AUTHORS.nagi;
}

/* -------------------------------------------------------------------------- */
/* 1. Cognition cards (23)                                                     */
/* -------------------------------------------------------------------------- */
function parseCognition(md) {
  return splitCards(md).map((c) => {
    const source = field(c.body, '来源');
    const conclusion = field(c.body, '认知卡片');
    return {
      id: `C${String(c.num).padStart(2, '0')}`,
      num: c.num,
      title: c.title,
      sourcePool: field(c.body, '原文池'),
      sourceText: source,
      author: resolveAuthor(source, c.num, 'cognition'),
      links: (field(c.body, '链接') || '').split(/[；;\s]+/).filter((u) => /^https?:/.test(u)),
      theme: field(c.body, '核心主题'),
      quotes: quotes(c.body),
      relation: mdInline(field(c.body, '认知关联')),
      relationText: plain(field(c.body, '认知关联')),
      interpretations: interpretationTable(c.body),
      conclusion: mdInline(conclusion),
      conclusionText: plain(conclusion),
    };
  });
}

/* -------------------------------------------------------------------------- */
/* 2. Reality-lens cards (25)                                                  */
/* -------------------------------------------------------------------------- */
function parseReality(md) {
  return splitCards(md).map((c) => {
    const source = field(c.body, '来源');
    const conclusion = field(c.body, '认知卡片');
    return {
      id: `R${String(c.num).padStart(2, '0')}`,
      num: c.num,
      title: c.title,
      sourcePool: field(c.body, '原文池'),
      sourceText: source,
      author: resolveAuthor(source, c.num, 'reality'),
      theme: field(c.body, '核心主题'),
      links: (field(c.body, '链接') || '').split(/[；;\s]+/).filter((u) => /^https?:/.test(u)),
      quotes: quotes(c.body),
      relation: mdInline(field(c.body, '认知关联')),
      relationText: plain(field(c.body, '认知关联')),
      interpretations: interpretationTable(c.body),
      conclusion: mdInline(conclusion),
      conclusionText: plain(conclusion),
    };
  });
}

/* -------------------------------------------------------------------------- */
/* 3. Munger: six discipline cards + 52 model rows + six-section analysis     */
/* -------------------------------------------------------------------------- */
function parseMunger(md) {
  const cards = splitCards(md).map((c) => {
    const source = field(c.body, '来源');
    const marker = /^\*\*本类模型清单/;
    // Discipline 3 (psychology) uses | 编号 | 倾向 | 定义与结构视角 | while the
    // other five use | 模型 | 定义 | 结构视角 / 应用 |. Normalise both shapes.
    const numbered = c.num === 3;
    const models = tableAfter(c.body, marker).map((row) => {
      const cells = row.cells;
      const name = numbered ? (cells[1]?.text || '') : (cells[0]?.text || '');
      const nameHtml = numbered ? (cells[1]?.html || '') : (cells[0]?.html || '');
      const definition = numbered
        ? (cells[2]?.text || '').split(/[；;]/)[0]
        : (cells[1]?.text || '');
      const definitionHtml = numbered
        ? (cells[2]?.html || '').split(/[；;]/)[0]
        : (cells[1]?.html || '');
      const application = numbered
        ? (cells[2]?.text || '').split(/[；;]/).slice(1).join('；')
        : (cells[2]?.text || '');
      const applicationHtml = numbered
        ? (cells[2]?.html || '').split(/[；;]/).slice(1).join('；')
        : (cells[2]?.html || '');
      return {
        code: numbered ? (cells[0]?.text || '') : '',
        name, nameHtml, definition, definitionHtml, application, applicationHtml,
      };
    });
    return {
      id: `M${c.num}`,
      num: c.num,
      title: c.title,
      sourcePool: field(c.body, '原文池'),
      sourceText: source,
      author: AUTHORS.munger,
      theme: field(c.body, '核心主题'),
      links: (field(c.body, '链接') || '').split(/[；;\s]+/).filter((u) => /^https?:/.test(u)),
      quotes: quotes(c.body),
      relation: mdInline(field(c.body, '认知关联')),
      relationText: plain(field(c.body, '认知关联')),
      interpretations: interpretationTable(c.body),
      reverse: mdInline(field(c.body, '反向思考')),
      reverseText: plain(field(c.body, '反向思考')),
      conclusion: mdInline(field(c.body, '认知卡片')),
      conclusionText: plain(field(c.body, '认知卡片')),
      nextStep: mdInline(field(c.body, '待解问题 / 下一步') || field(c.body, '待解问题')),
      models,
    };
  });

  // Six-section master analysis (### 1 核心现象 ... ### 6 下一步行动)
  const sixSections = [];
  const secRe = /^###\s+([1-6])\s+(.+)$/gm;
  const matches = [...md.matchAll(secRe)];
  matches.forEach((m, i) => {
    const from = m.index + m[0].length;
    const to = i + 1 < matches.length ? matches[i + 1].index : md.indexOf('\n## 收录篇目', from);
    const chunk = md.slice(from, to < 0 ? undefined : to)
      .split('\n')
      .filter((l) => l.trim() && !/^---$/.test(l.trim()) && !/^>/.test(l.trim()))
      .map((l) => l.replace(/^\s*-\s*/, '').trim());
    sixSections.push({
      num: Number(m[1]),
      title: m[2].trim(),
      points: chunk.map((t) => ({ text: plain(t), html: mdInline(t) })),
    });
  });

  return { cards, sixSections, allModels: cards.flatMap((c) => c.models.map((m) => ({ ...m, discipline: c.num }))) };
}

/* -------------------------------------------------------------------------- */
/* 4. CPV book: introduction + 9 chapters + stage summary + appendix         */
/* -------------------------------------------------------------------------- */
function parseCpv(md) {
  const lines = md.split('\n');
  const chapters = [];
  let cur = null;
  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      if (cur) chapters.push(cur);
      cur = { heading: line.replace(/^##\s+/, '').trim(), body: [] };
    } else if (cur) {
      cur.body.push(line);
    }
  }
  if (cur) chapters.push(cur);

  return chapters.map((ch, idx) => {
    const bodyLines = ch.body;
    const sections = [];
    let sec = null;
    for (const l of bodyLines) {
      if (/^###\s+/.test(l)) {
        if (sec) sections.push(sec);
        sec = { title: l.replace(/^###\s+/, '').trim(), paras: [] };
      } else if (sec) {
        const t = l.trim();
        if (t && !/^---$/.test(t) && !/^>/.test(t)) sec.paras.push(t);
      }
    }
    if (sec) sections.push(sec);

    const conclusionSec = sections.find((s) => /结论/.test(s.title));
    const firstPara = sections.find((s) => s.paras.length)?.paras[0] || '';
    const summary = plain((conclusionSec?.paras?.join(' ') || firstPara || '').slice(0, 400));

    return {
      id: `cpv-${idx}`,
      heading: ch.heading,
      numeral: /^第(.+?)章/.test(ch.heading) ? ch.heading.match(/^第(.+?)章/)[1] : null,
      shortTitle: ch.heading.split(/[｜:：]/)[0].trim(),
      detailTitle: ch.heading.split(/[｜:：]/).slice(1).join('｜').trim(),
      summaryHtml: mdInline(summary),
      summaryText: summary,
      sections: sections.map((s) => ({
        title: s.title,
        paras: s.paras.map((p) => ({ text: plain(p), html: mdInline(p) })),
      })),
    };
  });
}

/* -------------------------------------------------------------------------- */
/* 5. Index: cross-library axioms + content map                               */
/* -------------------------------------------------------------------------- */
function parseIndex(md) {
  const lines = md.split('\n');
  const axioms = [];
  let inAxioms = false;
  for (const l of lines) {
    if (/^##\s+多家内容的对照与交叉点/.test(l)) { inAxioms = true; continue; }
    if (!inAxioms) continue;
    if (/^##\s+/.test(l)) break;
    const m = l.match(/^-\s+\*\*([^*]+)\*\*\s*[:：]\s*(.+)$/);
    if (m) axioms.push({ name: m[1].trim(), text: plain(m[2]), html: mdInline(m[2]) });
  }

  const comparison = tableAfter(md, /^\|\s*维度\s*\|/);
  return { axioms, comparison };
}

/* -------------------------------------------------------------------------- */
/* Run                                                                        */
/* -------------------------------------------------------------------------- */
fs.mkdirSync(OUT, { recursive: true });

const sources = Object.fromEntries(Object.entries(FILES).map(([k, v]) => [k, read(v)]));

const cognition = parseCognition(sources.cognition);
const realityLens = parseReality(sources.realityLens);
const munger = parseMunger(sources.munger);
const cpv = parseCpv(sources.cpv);
const meta = parseIndex(sources.index);

const outputs = {
  'cognition.json': cognition,
  'reality-lens.json': realityLens,
  'munger.json': munger,
  'cpv.json': cpv,
  'meta.json': meta,
};
for (const [name, data] of Object.entries(outputs)) {
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(data, null, 2), 'utf8');
}

const modelCounts = munger.cards.map((c) => c.models.length);
console.log('[parse] sourced from 5 markdown files -> src/data/generated/');
console.log(`  cognition cards : ${cognition.length} (expected 23)`);
console.log(`  reality cards   : ${realityLens.length} (expected 25)`);
console.log(`  munger cards    : ${munger.cards.length} (expected 6)`);
console.log(`  munger models   : ${modelCounts.join('+')} = ${munger.allModels.length} (expected 52)`);
console.log(`  six-sections    : ${munger.sixSections.length}`);
console.log(`  cpv chapters    : ${cpv.length}`);
console.log(`  cross axioms    : ${meta.axioms.length}`);

const missing = [];
cognition.forEach((c) => { if (!c.conclusionText || !c.interpretations.length) missing.push(`${c.id} conclusion/table`); });
realityLens.forEach((c) => { if (!c.conclusionText || !c.interpretations.length) missing.push(`${c.id} conclusion/table`); });
if (missing.length) console.warn('[parse] WARN incomplete cards:', missing.join(', '));
if (cognition.length !== 23 || realityLens.length !== 25 || munger.cards.length !== 6) {
  throw new Error('[parse] card count mismatch — aborting build');
}
