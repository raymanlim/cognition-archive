import raw from './generated/cognition.json';
import type { BaseCard, CognitionCard } from './types';

const cards = raw as unknown as (BaseCard & { links: string[] })[];

/** English titles, index-aligned to card numbers 01–23. */
const TITLES_EN = [
  'CPV Framework: Cognitive Positioning Value',
  'AI & the Civilisational Operating System',
  'Structure Theory & System Constraints',
  'Democracy, Power & Governance',
  'Civilisational Ethics & Cultural Narrative',
  'Language as Projection & Cognitive Exploitation',
  'Cognitive Degradation & Hallucinatory Education',
  'Time, Cycles & the Philosophy of Endgames',
  'System Evolution & Zero-Report Organisations',
  'Understanding as the Narrow Gate of Civilisation',
  'Token Thinking vs Structural Thinking',
  'Cognition Recognition: The Intelligent Machine Tool',
  'The Person as Emergence of Relations',
  'The Limits of Reason & the Mentality of Power',
  'The Agency of Cognition',
  'Emotion, Trauma & Executive Capacity',
  'The Evolution & Collapse of Thinking',
  'Linguistic Resolution & Persuasive Distance',
  'The Illusion of Certainty & AI Honesty',
  'The Ethical Risk of High Cognition',
  'The Emergence of Meaning & Philosophy',
  'The Principles of Disagreement',
  'Structural Civilisation & Protocol Density',
];

/** One-line English obi (core proposition) for ZH/EN/BI parallel typesetting. */
const OBI_EN = [
  'CPV is not a ladder of intelligence but a mirror of how your cognitive structure actually runs.',
  'AI does not make old work faster; it makes old organisational and power structures obsolete.',
  'Structure determines the set of possibilities; every observable behaviour is a second-best solution under constraint.',
  'A system without negative feedback will keep calling its own failures success.',
  'Narrative is the underlying protocol; ethics is the cell membrane that keeps a civilisation from dissolving.',
  'Language is a lossy projection; cognition is the reconstruction of the structure that produced it.',
  'Cognitive decay begins when external evaluation replaces real feedback.',
  'Cycles are the oscillation of negative feedback; an endgame is where feedback stops.',
  'Tension, not harmony, is the driving force of evolution; zero-report organisations have stopped sensing.',
  'Understanding is a function of position, not a function of information volume.',
  'Token thinking chains words to emotion; structural thinking solves under constraints.',
  'A civilisation is measured by how precisely it processes cognition and how little it loses to trial and error.',
  'A person is not a substance but the emergent node of a relation.',
  'Facts are finite while explanations are infinite; only real cost ends an argument.',
  'The market does not reward being right; it rewards occupying a favourable structure.',
  'Procrastination and perfectionism are defence modes; emotional stability is an allocation of value resources.',
  'Intuition is logic whose grammar has not yet been unfolded; collapse is when that grammar never gets written.',
  'Value density equals cognitive delta over time delta; persuasion fails when the distance is too large.',
  'Cognitive honesty means keeping the human and machine dimensions symmetric about uncertainty.',
  'Build bridges, not thrones: replace low-resolution morality with explicit protocols.',
  'Meaning emerges when a hidden variable is added to the observer.',
  'Disagreement is a clash of models; dialogue requires admitting your model is incomplete.',
  'Protocol density, not slogan density, is the measure of a structural civilisation.',
];

export const cognitionCards: CognitionCard[] = cards.map((c) => ({
  ...c,
  titleEn: TITLES_EN[c.num - 1] ?? c.title,
  obiEn: OBI_EN[c.num - 1] ?? '',
}));

export const cognitionById = new Map(cognitionCards.map((c) => [c.id, c]));

export const cognitionAuthors = [
  { id: 'nagi', zh: 'Nagi Yan', en: 'Nagi Yan', handle: '@naki2012' },
  { id: 'morris', zh: 'Morris', en: 'Morris', handle: '@Morris_LT' },
  { id: 'lifesinger', zh: '玉伯', en: 'Yu Bo', handle: '@lifesinger' },
  { id: 'anon', zh: '匿名', en: 'Anonymous', handle: 'x/02 归档' },
];
