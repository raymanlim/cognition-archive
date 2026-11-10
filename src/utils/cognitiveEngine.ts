/**
 * cognitiveEngine.ts
 * ---------------------------------------------------------------------------
 * Three-layer cross-library dissection engine.
 *
 * For any Reality Lens card, match:
 *   1. philosophical foundations (Division I)
 *   2. CPV diagnostic dimensions + cognition cards (Division II-A/B)
 *   3. Munger mental models (Division II-C)
 *
 * Two mechanisms are combined:
 *   - a curated, high-precision mapping for all 25 cards (examples in design.md)
 *   - a keyword-weighted automatic matcher driven by the 8 cross axioms,
 *     which fills gaps and keeps the matrix alive when source notes change.
 * ---------------------------------------------------------------------------
 */
import { philosopherById, canonicalPhilId } from '../data/philosophers';
import { cogCardAnchor, mungerModelAnchor } from './anchors';
import { cognitionById } from '../data/cognition';
import { realityById } from '../data/reality-lens';
import { allModels, postMortemQuestions, preDecisionQuestions } from '../data/munger';
import { cpvChain } from '../data/cpv';
import metaRaw from '../data/generated/meta.json';
import type { Axiom, CrossLink, CrossMatrix } from '../data/types';

/* -------------------------------------------------------------------------- */
/* 1. Eight cross-library axioms                                              */
/* -------------------------------------------------------------------------- */
interface RawAxiom { name: string; text: string; html: string }
const rawAxioms = metaRaw.axioms as unknown as RawAxiom[];

const AXIOM_DEFS: { key: string; match: string; name: string; nameEn: string; keywords: string[] }[] = [
  { key: 'struct-vs-act', match: '结构 vs 行为', name: '结构 vs 行为', nameEn: 'Structure vs. Behavior',
    keywords: ['结构', '位置', '约束', '可能性', '次优', '共生', '分化', '边界'] },
  { key: 'disenchantment', match: '祛魅', name: '祛魅与慈悲', nameEn: 'Disenchantment',
    keywords: ['祛魅', '光环', '真实', '幻觉', '浪漫化', '表象', '投影', '遮蔽'] },
  { key: 'education-order', match: '教育', name: '教育与代际创伤', nameEn: 'Education & Intergenerational Loop',
    keywords: ['教育', '代际', '创伤', '驯化', '原生家庭', '秩序', '评价'] },
  { key: 'pain-feedback', match: '痛苦', name: '痛苦与现实反馈', nameEn: 'Pain & Market Feedback',
    keywords: ['痛苦', '反馈', '亏损', '不适', '创伤', '周期', '代价'] },
  { key: 'awake-vs-auto', match: '自动化 vs 清醒', name: '清醒 vs 自动化驯化', nameEn: 'Agency vs. Algorithmic Automation',
    keywords: ['自动化', '算法', '清醒', '异化', '抽离', '杠杆', '媒介', 'AI'] },
  { key: 'leverage-shift', match: '杠杆', name: '杠杆构建与模式切换', nameEn: 'Leverage & Regime Shift',
    keywords: ['杠杆', '复利', '切换', '第一桶金', '临界', '受众', '资本'] },
  { key: 'coherence-vs-valid', match: '模型 vs 现实', name: '模型自洽 vs 现实有效', nameEn: 'Self-Coherence vs. Validity',
    keywords: ['自洽', '有效', '模型', '争论', '可证伪', '市场', '正确'] },
  { key: 'lollapalooza', match: '清单 vs 机制', name: '误判清单与叠加机制', nameEn: 'Misjudgment & Lollapalooza',
    keywords: ['叠加', '倾向', '非线性', '机制', '清单', '并发', '洛拉帕洛扎'] },
];

export const axioms: Axiom[] = AXIOM_DEFS.map((d) => {
  const src = rawAxioms.find((a) => a.name === d.match) ?? rawAxioms.find((a) => a.name.includes(d.match));
  return {
    key: d.key,
    name: d.name,
    nameEn: d.nameEn,
    text: src?.text ?? '',
    html: src?.html ?? '',
    keywords: d.keywords,
  };
});
export const axiomByKey = new Map(axioms.map((a) => [a.key, a]));
export const axiomTopics = axioms.map((a) => ({ key: a.key, zh: a.name, en: a.nameEn }));

/* -------------------------------------------------------------------------- */
/* 2. Curated high-precision mapping (25 cards)                               */
/* -------------------------------------------------------------------------- */
interface Mapping {
  philosophers: string[];
  cognition: string[];
  cpv: string[];
  models: string[];
}
const M: Record<string, Mapping> = {
  R01: { philosophers: ['rousseau', 'hegel', 'honneth'], cognition: ['C03', 'C14'], cpv: ['ch3', 'ch5'], models: ['对比误判', '社会认同', '沉没成本谬误'] },
  R02: { philosophers: ['marx', 'marcuse', 'honneth'], cognition: ['C06', 'C16'], cpv: ['ch3', 'ch6'], models: ['激励超级反应', '社会认同', '简单心理否认'] },
  R03: { philosophers: ['nietzsche', 'wittgenstein', 'epicurus'], cognition: ['C16', 'C14'], cpv: ['ch6', 'ch5'], models: ['简单心理否认', '剥夺超级反应', '确认偏误'] },
  R04: { philosophers: ['nietzsche', 'hegel', 'foucault'], cognition: ['C14', 'C22'], cpv: ['ch7', 'ch3'], models: ['嫉妒', '对比误判', '洛拉帕洛扎效应'] },
  R05: { philosophers: ['rousseau', 'foucault', 'socrates'], cognition: ['C07', 'C16'], cpv: ['ch3', 'ch5'], models: ['权威误导', '用进废退', '不一致回避'] },
  R06: { philosophers: ['epicurus', 'socrates', 'nietzsche'], cognition: ['C08', 'C03'], cpv: ['ch5', 'ch6'], models: ['简单心理否认', '压力影响', '剥夺超级反应'] },
  R07: { philosophers: ['marx', 'rousseau', 'rawls'], cognition: ['C03', 'C15'], cpv: ['ch3', 'ch6'], models: ['机会成本', '对比误判', '帕累托'] },
  R08: { philosophers: ['bacon', 'wittgenstein', 'popper'], cognition: ['C22', 'C19'], cpv: ['ch9', 'ch2'], models: ['易得性偏差', '确认偏误', '奥卡姆剃刀'] },
  R09: { philosophers: ['dewey', 'descartes', 'sunzi'], cognition: ['C15', 'C11'], cpv: ['ch5', 'ch8'], models: ['复利', '帕累托', '能力圈'] },
  R10: { philosophers: ['hegel', 'wittgenstein', 'popper'], cognition: ['C22', 'C19'], cpv: ['ch5', 'ch9'], models: ['怀疑回避', '不一致回避', '确认偏误'] },
  R11: { philosophers: ['marcuse', 'wittgenstein', 'dewey'], cognition: ['C02', 'C19'], cpv: ['ch8', 'ch9'], models: ['网络效应', '创造性破坏', '用进废退'] },
  R12: { philosophers: ['marx', 'bacon', 'hume'], cognition: ['C15', 'C08'], cpv: ['ch6', 'ch4'], models: ['复利', '能力圈', '安全边际'] },
  R13: { philosophers: ['spinoza', 'wangyangming', 'hume'], cognition: ['C15', 'C09'], cpv: ['ch4', 'ch6'], models: ['复利', '临界质量', '用进废退'] },
  R14: { philosophers: ['socrates', 'rousseau', 'honneth'], cognition: ['C13', 'C14'], cpv: ['ch3', 'ch7'], models: ['互惠', '沉没成本谬误', '对比误判'] },
  R15: { philosophers: ['wittgenstein', 'saussure', 'marcuse'], cognition: ['C06', 'C18'], cpv: ['ch1', 'ch9'], models: ['废话倾向', '易得性偏差', '社会认同'] },
  R16: { philosophers: ['kant', 'zhuangzi', 'nietzsche'], cognition: ['C18', 'C21'], cpv: ['ch1', 'ch7'], models: ['对比误判', '单纯关联', '奥卡姆剃刀'] },
  R17: { philosophers: ['saussure', 'wittgenstein', 'han'], cognition: ['C06', 'C17'], cpv: ['ch1', 'ch8'], models: ['社会认同', '理由尊重', '不一致回避'] },
  R18: { philosophers: ['sunzi', 'laozi', 'wangyangming'], cognition: ['C03', 'C14'], cpv: ['ch3', 'ch5'], models: ['安全边际', '二阶思维', '逆向思维'] },
  R19: { philosophers: ['wangyangming', 'kant', 'han'], cognition: ['C16', 'C19'], cpv: ['ch3', 'ch7'], models: ['压力影响', '药物误导', '用进废退'] },
  R20: { philosophers: ['nietzsche', 'hegel', 'hume'], cognition: ['C08', 'C17'], cpv: ['ch4', 'ch5'], models: ['均值回归', '剥夺超级反应', '衰老误导'] },
  R21: { philosophers: ['wittgenstein', 'nietzsche', 'epicurus'], cognition: ['C16', 'C22'], cpv: ['ch6', 'ch9'], models: ['简单心理否认', '社会认同', '对比误判'] },
  R22: { philosophers: ['marcuse', 'saussure', 'han'], cognition: ['C02', 'C06'], cpv: ['ch8', 'ch9'], models: ['单纯关联', '网络效应', '废话倾向'] },
  R23: { philosophers: ['sunzi', 'laozi', 'foucault'], cognition: ['C14', 'C03'], cpv: ['ch3', 'ch7'], models: ['安全边际', '二阶思维', '压力影响'] },
  R24: { philosophers: ['socrates', 'popper', 'wittgenstein'], cognition: ['C22', 'C19'], cpv: ['ch9', 'ch2'], models: ['权威误导', '确认偏误', '好奇倾向'] },
  R25: { philosophers: ['honneth', 'wangyangming', 'rawls'], cognition: ['C21', 'C16'], cpv: ['ch6', 'ch7'], models: ['过度自我评价', '剥夺超级反应', '社会认同'] },
};

/* -------------------------------------------------------------------------- */
/* 3. Fuzzy model resolver                                                    */
/* -------------------------------------------------------------------------- */
function resolveModel(query: string) {
  const exact = allModels.find((m) => m.name === query);
  if (exact) return exact;
  return allModels.find((m) => m.name.includes(query) || query.includes(m.name));
}

function link(id: string, label: string, labelEn: string, href: string, kind: CrossLink['kind'], reason = ''): CrossLink {
  return { id, label, labelEn, href, kind, reason };
}

/* -------------------------------------------------------------------------- */
/* 4. Automatic keyword-weighted augmentation                                */
/* -------------------------------------------------------------------------- */
function score(text: string, keywords: string[]): number {
  return keywords.reduce((n, k) => n + (text.includes(k) ? 1 : 0), 0);
}

function keywordsFor(cardTopics: string[]): string[] {
  return [...new Set(cardTopics.flatMap((k) => axiomByKey.get(k)?.keywords ?? []))];
}

/* -------------------------------------------------------------------------- */
/* 5. Public API                                                              */
/* -------------------------------------------------------------------------- */
/** Accept 'R25', 25 or '25'. */
export function normaliseCardId(input: string | number): string {
  if (typeof input === 'number') return `R${String(input).padStart(2, '0')}`;
  const s = String(input).trim().toUpperCase();
  if (/^R\d{2}$/.test(s)) return s;
  if (/^\d{1,2}$/.test(s)) return `R${s.padStart(2, '0')}`;
  return s;
}

export function buildCrossLibraryMatrix(realityCardId: string | number): CrossMatrix {
  const cardId = normaliseCardId(realityCardId);
  const card = realityById.get(cardId);
  const mapping = M[cardId] ?? { philosophers: [], cognition: [], cpv: [], models: [] };
  const keywords = keywordsFor(card?.topics ?? []);
  const combined = [...new Set([...keywords, ...(card?.topics ?? [])])];

  /* -- Layer 1: philosophers -------------------------------------------- */
  const canonicalIds = new Set(mapping.philosophers.map(canonicalPhilId));
  const philosophers: CrossLink[] = mapping.philosophers
    .map((id) => philosopherById.get(canonicalPhilId(id)))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => link(p.id, p.name.zh, p.name.en, `/philosophy#${p.id}`, 'philosopher', p.oneLiner.zh));

  // auto-fill up to 1 extra philosopher with the strongest keyword hit
  if (philosophers.length < 4) {
    const extra = [...philosopherById.values()]
      .filter((p) => !canonicalIds.has(p.id))
      .map((p) => ({ p, s: score(`${p.oneLiner.zh}${p.tags.map((t) => t.zh).join('')}${p.name.zh}`, combined) }))
      .sort((a, b) => b.s - a.s)[0];
    if (extra && extra.s > 0) {
      philosophers.push(link(extra.p.id, extra.p.name.zh, extra.p.name.en, `/philosophy#${extra.p.id}`, 'philosopher', `Auto-matched · ${extra.s} keyword hits`));
    }
  }

  /* -- Layer 2a: CPV diagnostic dimensions ------------------------------- */
  const cpv: CrossLink[] = mapping.cpv
    .map((id) => cpvChain.find((n) => n.id === id))
    .filter((n): n is NonNullable<typeof n> => Boolean(n))
    .map((n) => link(n.id, `${n.numeral} ${n.titleZh}`, `${n.numeral} ${n.titleEn}`, `/cognition#${n.anchor}`, 'cpv', n.question));

  /* -- Layer 2b: cognition cards ----------------------------------------- */
  const cognition: CrossLink[] = mapping.cognition
    .map((id) => cognitionById.get(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => link(c.id, `§ ${String(c.num).padStart(2, '0')} ${c.title}`, c.titleEn, `/cognition#${cogCardAnchor(c.num)}`, 'cognition', c.conclusionText.slice(0, 90)));

  // auto-fill one cognition card by keyword score
  if (cognition.length < 3) {
    const extra = [...cognitionById.values()]
      .filter((c) => !mapping.cognition.includes(c.id))
      .map((c) => ({ c, s: score(`${c.title}${c.conclusionText}${c.relationText}`, combined) }))
      .sort((a, b) => b.s - a.s)[0];
    if (extra && extra.s > 0) {
      cognition.push(link(extra.c.id, `§ ${String(extra.c.num).padStart(2, '0')} ${extra.c.title}`, extra.c.titleEn, `/cognition#${cogCardAnchor(extra.c.num)}`, 'cognition', `Auto-matched · ${extra.s} keyword hits`));
    }
  }

  /* -- Layer 3: Munger models -------------------------------------------- */
  const seenModels = new Set<string>();
  const models: CrossLink[] = [];
  for (const q of mapping.models) {
    const m = resolveModel(q);
    if (m && !seenModels.has(m.name)) {
      seenModels.add(m.name);
      models.push(link(m.anchor, m.name, m.nameEn ?? m.name, `/cognition#${mungerModelAnchor(m.discipline ?? 1, m.indexInDiscipline ?? 1)}`, 'model', m.definition));
    }
  }
  // auto-fill one model by keyword score
  if (models.length < 4) {
    const extra = allModels
      .filter((m) => !seenModels.has(m.name))
      .map((m) => ({ m, s: score(`${m.name}${m.definition}${m.application}`, combined) }))
      .sort((a, b) => b.s - a.s)[0];
    if (extra && extra.s > 0) {
      models.push(link(extra.m.anchor, extra.m.name, extra.m.nameEn ?? extra.m.name, `/cognition#${mungerModelAnchor(extra.m.discipline ?? 1, extra.m.indexInDiscipline ?? 1)}`, 'model', `Auto-matched · ${extra.s} keyword hits`));
    }
  }

  const cardAxioms = (card?.topics ?? [])
    .map((k) => axiomByKey.get(k))
    .filter((a): a is Axiom => Boolean(a));

  return {
    cardId,
    philosophers,
    cpv,
    cognition,
    models,
    axioms: cardAxioms,
    preQuestions: preDecisionQuestions,
    postQuestions: postMortemQuestions,
  };
}

/** Full 25 × 3 matrix for the Cross Atlas page. */
export function buildFullMatrix(): CrossMatrix[] {
  return Array.from({ length: 25 }, (_, i) => buildCrossLibraryMatrix(i + 1));
}

/** Keyword relevance used by the atlas heat cells. */
export function relevance(cardId: string, axiomKey: string): number {
  const card = realityById.get(normaliseCardId(cardId));
  if (!card) return 0;
  const a = axiomByKey.get(axiomKey);
  if (!a) return 0;
  if (!card.topics.includes(axiomKey)) return 0;
  return score(`${card.title}${card.conclusionText}${card.relationText}`, a.keywords) + 1;
}

export const crossStats = {
  cards: realityById.size,
  philosophers: philosopherById.size,
  cognition: cognitionById.size,
  models: allModels.length,
  axioms: axioms.length,
};
