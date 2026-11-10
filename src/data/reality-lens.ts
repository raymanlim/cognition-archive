import raw from './generated/reality-lens.json';
import type { BaseCard, RealityCard } from './types';

const cards = raw as unknown as BaseCard[];

/** English titles, index-aligned to card numbers 01–25. */
const TITLES_EN = [
  'Female Awakening & the Marital Trap',
  'The Alienation & Independence of Motherhood',
  'Psychology, Personality & Relationships',
  'A Critique of Chinese Cultural Games',
  'The Education Spiral & Childhood Trauma',
  'Death, Suffering & Existence',
  'Class, Freedom & Boundaries',
  'Reality Lens: Disenchantment & Structural Dissection',
  'Personal Efficacy & Creative Work',
  'Mental Models & Psychological Capacity',
  'AI & the Creator Economy',
  'Wealth Levers & the Path to Money',
  'Focus & Long-Termism',
  'The Boundaries of Relationships',
  'A Critique of Content Consumption',
  'The Quotient of Beauty',
  'The Dissolution of Promises',
  'Flexibility as a Survival System',
  'Being Able to Feel Oneself',
  'Youth & Maturity',
  'Manchester by the Sea: Refusing False Reconciliation',
  'The Last Song of Wu Dalang',
  'Chrysanthemum & Sword: The Art of Boundaries',
  'The Courage of Stupid Questions',
  'Worthiness: Life’s Supreme Lesson',
];

const OBI_EN = [
  'The trap is the symbiosis of two undifferentiated systems, not a free choice; awakening means building a psychological boundary.',
  'A mother is a complete person first and a caregiver second; her exhaustion, desire and fear are equally real.',
  'Do not romanticise suffering: a breakdown is a price paid, not a badge of wisdom.',
  'Winning-ology and female competition are pathological survival strategies born of zero-sum scarcity, not human nature.',
  'Education is a delivery channel for intergenerational trauma; breaking the loop starts with seeing it.',
  'The bravest act is to stop using belief and rules to cover up harm, and face what is real.',
  'Class is not income but the degree of freedom: the ability to command distance, quiet, boundaries and choice.',
  'Disenchantment is the starting point of cognition, not its end — after understanding there must still be compassion.',
  'Freedom is not quitting a job but building a replicable value system from code, media and audience.',
  'The mark of high intelligence is holding contradictory views; confidence is built by repeatedly facing discomfort.',
  'AI will not replace you, but people who use it will; the moat is human curiosity and system-building.',
  'The real dividing line is after the first pot of gold — most lose by managing capital with a pauper’s strategy. Losses rarely lie.',
  'Success is compounding past its critical point; "unrecognised talent" is waiting disguised as evidence.',
  'Wealth comes from strangers trading by rules; trouble comes from intimates trading on feelings.',
  'Optimising hooks raises the chance of being seen while abandoning the strategy of who you are.',
  'Aesthetic quotient is the strength of subjectivity expressed in ordered choices.',
  'Cheapened promises are a media effect, not a moral collapse: what cannot be stored depreciates.',
  'Flexibility is not compromise but using elasticity to defend a bottom line.',
  'Feeling the body is an ontological confirmation, a guard against automated living.',
  'Sensitivity gives way to stability: maturity is a time paradox, not a verdict.',
  'Refusing false reconciliation allows existence inside what remains broken.',
  'In the AI era emotional narratives are reproduced at scale while real feeling becomes scarce.',
  'Restraint is the boundary sense of someone who could be angry and chooses not to be.',
  'A stupid question that pierces the omen is worth more than a correct answer that closes it.',
  'Worthiness is not something you earn; it is a real connection to your own bodily logic.',
];

/** Topic tags: the 8 cross-library axioms used by the filter and the engine. */
const TOPICS: Record<string, number[]> = {
  'struct-vs-act': [1, 2, 4, 7, 8, 14, 16, 18, 23, 25],
  disenchantment: [3, 6, 8, 14, 17, 20, 21, 22, 24, 25],
  'education-order': [1, 5, 25],
  'pain-feedback': [3, 5, 6, 10, 13, 19, 20, 21],
  'awake-vs-auto': [2, 9, 11, 15, 16, 17, 19, 22],
  'leverage-shift': [7, 9, 11, 12, 13],
  'coherence-vs-valid': [10, 12, 18, 23, 24],
  lollapalooza: [4, 15],
};

const topicMap = new Map<number, string[]>();
for (const [key, nums] of Object.entries(TOPICS)) {
  for (const n of nums) topicMap.set(n, [...(topicMap.get(n) ?? []), key]);
}

export const realityCards: RealityCard[] = cards.map((c) => ({
  ...c,
  titleEn: TITLES_EN[c.num - 1] ?? c.title,
  obiEn: OBI_EN[c.num - 1] ?? '',
  group: (c.author.id === 'dankoe' ? 'dankoe' : c.author.id === 'morris' ? 'morris' : 'zuoyi') as RealityCard['group'],
  topics: topicMap.get(c.num) ?? [],
}));

export const realityById = new Map(realityCards.map((c) => [c.id, c]));

export const realityGroups = [
  { key: 'all', zh: '全部 25', en: 'All 25', count: 25 },
  { key: 'zuoyi', zh: '佐伊 · 社会与主体性', en: 'Zuoyi · Society & Subjectivity', count: 18 },
  { key: 'dankoe', zh: 'THEdankoe · 数字杠杆与效能', en: 'Dan Koe · Digital Leverage', count: 3 },
  { key: 'morris', zh: 'Morris · 财富结构与边界', en: 'Morris · Wealth & Boundaries', count: 4 },
] as const;
