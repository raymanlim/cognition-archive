/** Shared, strongly-typed shapes for the whole archive. */

export type Lang = 'zh' | 'en' | 'bi';
export type Theme = 'paper' | 'dark' | 'crisp';
export type PhilosopherTheme = 'chinese' | 'epistemology' | 'critique';
export type AuthorId = 'nagi' | 'zuoyi' | 'dankoe' | 'morris' | 'lifesinger' | 'anon' | 'munger' | 'lijigang';

export interface Author {
  id: string;
  zh: string;
  en: string;
  handle: string;
}

export interface Quote {
  source: string;
  text: string;
  html: string;
}

export interface Cell {
  text: string;
  html: string;
}

export interface TableRow {
  cells: Cell[];
}

export interface BaseCard {
  id: string;
  num: number;
  title: string;
  sourcePool: string;
  sourceText: string;
  author: Author;
  theme: string;
  quotes: Quote[];
  relation: string;
  relationText: string;
  interpretations: TableRow[];
  conclusion: string;
  conclusionText: string;
  /** Original X / Substack source URLs. Empty array for cards without links. */
  links: string[];
}

export interface CognitionCard extends BaseCard {
  titleEn: string;
  obiEn: string;
}

export interface RealityCard extends BaseCard {
  titleEn: string;
  obiEn: string;
  group: 'zuoyi' | 'dankoe' | 'morris';
  topics: string[];
}

/** Division V — AI-age reflections. Editorial annotations are explicitly
 *  marked as site-side structured reading, never as source-author analysis. */
export interface ReflectionCard extends BaseCard {
  titleEn: string;
  obiEn: string;
  group: 'ai-age';
  topics: string[];
  /** Tier 1 = full L2 model card; Tier 2 = verbatim L1 quote + editorial note. */
  tier: 'tier1' | 'tier2';
  /** Original L1 item number (1..100) for provenance; `num` is the card sequence 1..10. */
  sourceNum: number;
  /** L1 segment id (S1..S5) this card's source belongs to. */
  segment: string;
  /** Site-side editorial annotation (ZH/EN), shown as "本站结构化整理". */
  editorial: { zh: string; en: string };
  /** Tier 1 only: R/W/C + Steelman + lenses + micro-actions from the L2 model card. */
  deepDive?: {
    rwc: { key: 'R' | 'W' | 'C'; labelZh: string; labelEn: string; pointsZh: string[]; pointsEn: string[] }[];
    steelmanZh: string[]; steelmanEn: string[];
    lensesZh: string[]; lensesEn: string[];
    actionsZh: string[]; actionsEn: string[];
  };
}

/** A single L1 item in the full 100-entry index. */
export interface ReflectionIndexItem {
  num: number;
  title: string;
  date: string;
  url: string;
  segment: string;
}

/** Thought-map segment (5 L1 segments) + L2 analytic framework. */
export interface ReflectionSegment {
  key: string;
  range: string;
  zh: string;
  en: string;
  questionZh: string;
  questionEn: string;
}

export interface MungerModel {
  code: string;
  name: string;
  nameHtml: string;
  definition: string;
  definitionHtml: string;
  application: string;
  applicationHtml: string;
  nameEn?: string;
  discipline?: number;
  indexInDiscipline?: number;
}

export interface MungerCard extends BaseCard {
  reverse: string;
  reverseText: string;
  nextStep: string;
  models: MungerModel[];
  titleEn: string;
  obiEn: string;
  modelCount: number;
}

export interface CpvSection {
  title: string;
  paras: { text: string; html: string }[];
}

export interface CpvChapter {
  id: string;
  heading: string;
  numeral: string | null;
  shortTitle: string;
  detailTitle: string;
  summaryHtml: string;
  summaryText: string;
  sections: CpvSection[];
}

export interface Philosopher {
  id: string;
  nameZh: string;
  nameEn: string;
  yearSort: number;
  yearLabel: string;
  theme: PhilosopherTheme;
  ideas: string[];
  ideasEn: string[];
  proposition: string;
  propositionEn: string;
}

export interface Axiom {
  key: string;
  name: string;
  nameEn: string;
  text: string;
  html: string;
  keywords: string[];
}

export interface CrossLink {
  id: string;
  label: string;
  labelEn: string;
  href: string;
  kind: 'philosopher' | 'cpv' | 'cognition' | 'model';
  reason: string;
}

export interface CrossMatrix {
  cardId: string;
  philosophers: CrossLink[];
  cpv: CrossLink[];
  cognition: CrossLink[];
  models: CrossLink[];
  axioms: Axiom[];
  preQuestions: { zh: string; en: string }[];
  postQuestions: { zh: string; en: string }[];
}
