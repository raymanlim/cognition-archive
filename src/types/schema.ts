/**
 * schema.ts — canonical bilingual schema (PATCH_DATA_AND_I18N.md Part 1).
 * Every human-readable text field MUST be LocalizedText. No bare strings.
 */
export interface LocalizedText {
  zh: string;
  en: string;
}

export type PhilosopherTheme = 'chinese' | 'epistemology' | 'critique';

export interface CoreIdea {
  title: LocalizedText;
  desc: LocalizedText;
}

export interface LogicChain {
  premise: LocalizedText;    // 起点前提 / 时代困境
  argument: LocalizedText;   // 核心论证过程
  conclusion: LocalizedText; // 最终哲学结论
}

export interface WorkRecommendation {
  title: LocalizedText;
  note: LocalizedText;
}

export interface PhilosopherCard {
  id: string;                 // 全局唯一锚点 'phil-{slug}'
  sectionNum: string;         // '01' ... '27'
  name: LocalizedText;
  era: LocalizedText;
  yearSort: number;
  theme: PhilosopherTheme;
  tags: LocalizedText[];
  oneLiner: LocalizedText;    // 灰蓝腰封
  coreIdeas: CoreIdea[];
  logicChain: LogicChain;
  works: {
    entry: WorkRecommendation;    // 剥洋葱：入门首选
    advanced: WorkRecommendation; // 剥洋葱：进阶核心
  };
  lineage: {
    from: LocalizedText;
    to: LocalizedText;
  };
  quote: LocalizedText;
  modernInsight: LocalizedText;
}

/** Short internal ids used by the cross-library engine -> canonical anchors. */
export const PHIL_ID_ALIAS: Record<string, string> = {
  sunzi: 'phil-suntzu',
};
