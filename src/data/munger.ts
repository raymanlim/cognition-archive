import raw from './generated/munger.json';
import type { MungerCard, MungerModel, TableRow } from './types';

interface RawMunger {
  cards: Omit<MungerCard, 'titleEn' | 'obiEn' | 'modelCount'>[];
  sixSections: { num: number; title: string; points: { text: string; html: string }[] }[];
  allModels: MungerModel[];
}
const data = raw as unknown as RawMunger;

const TITLES_EN = [
  'General Decision & Thinking Tools',
  'Probability, Mathematics & Expectation',
  'Psychology & Human Misjudgment',
  'Economics, Business & Competitive Structure',
  'Biology & Evolution',
  'Systems & Engineering',
];

const OBI_EN = [
  'Ask first whether this is inside your circle, whether a mistake zeroes you out, and what happens next — only then ask how to win.',
  'Before compounding, ask whether the system can ever go to zero.',
  'Biases are not character flaws but the default output of a cognitive system under pressure, incentives and comparison.',
  'Advantage comes from position, and every position eventually expires.',
  'Survival is fit, not rank: there is no ladder, only a changing environment.',
  'Structures change and collapse for structural reasons, never because someone willed it.',
];

/** English names for all 52 models, in discipline order M1..M6. */
const MODEL_NAMES_EN = [
  // M1 — 7
  'Circle of Competence', 'Inversion', 'Opportunity Cost', 'Margin of Safety',
  'Second-Order Thinking', 'Occam’s Razor', 'Hanlon’s Razor',
  // M2 — 4
  'Compounding', 'Expected Value', 'Regression to the Mean', 'Pareto Principle (80/20)',
  // M3 — 26
  'Reward Superresponse', 'Liking / Love Tendency', 'Disliking / Hate Tendency',
  'Doubt-Avoidance Tendency', 'Inconsistency-Avoidance Tendency', 'Curiosity Tendency',
  'Kantian Fairness Tendency', 'Envy / Jealousy Tendency', 'Reciprocation Tendency',
  'Influence-from-Mere-Association Tendency', 'Simple, Pain-Avoiding Psychological Denial',
  'Excessive Self-Regard Tendency', 'Overoptimism Tendency', 'Deprival-Superreaction Tendency',
  'Social-Proof Tendency', 'Contrast-Misreaction Tendency', 'Stress-Influence Tendency',
  'Availability-Misweighing Tendency', 'Use-It-or-Lose-It Tendency', 'Drug-Misinfluence Tendency',
  'Senescence-Misinfluence Tendency', 'Authority-Misinfluence Tendency', 'Twaddle Tendency',
  'Reason-Respecting Tendency', 'Lollapalooza Effect', 'Confirmation Bias (supplement)',
  // M4 — 6
  'Economic Moat', 'Network Effects', 'Information Asymmetry',
  'Economies of Scale & Diseconomies', 'Creative Destruction', 'Sunk Cost Fallacy',
  // M5 — 3
  'Natural Selection', 'Ecological Niche', 'Red Queen Effect',
  // M6 — 6
  'Feedback Loops', 'Critical Mass / Phase Transition', 'Entropy',
  'Redundancy & Backup', 'Breaking Point / Critical Failure', 'Modular Design',
];

let cursor = 0;

export const mungerCards: MungerCard[] = data.cards.map((c) => {
  const models = c.models.map((m) => ({
    ...m,
    nameEn: MODEL_NAMES_EN[cursor++] ?? m.name,
    discipline: c.num,
  }));
  return {
    ...c,
    models,
    titleEn: TITLES_EN[c.num - 1] ?? c.title,
    obiEn: OBI_EN[c.num - 1] ?? '',
    modelCount: models.length,
  };
});

export const allModels: (MungerModel & { anchor: string })[] = mungerCards.flatMap((card) =>
  card.models.map((m, i) => ({
    ...m,
    anchor: `munger-model-${card.num}-${i + 1}`,
    discipline: card.num,
    indexInDiscipline: i + 1,
  })),
);

export const modelByName = new Map(allModels.map((m) => [m.name, m]));

export const sixSections = data.sixSections;

/** Interactive checklist: 7 pre-decision + 5 post-mortem questions. */
export const preDecisionQuestions = [
  { zh: '这题在我的能力圈内吗？圈外我是要学习进入，还是明确放弃？', en: 'Is this inside my circle of competence? Outside it, do I learn in or explicitly abstain?' },
  { zh: '如果判断错了，会不会一次归零？安全边际够不够？', en: 'If I am wrong, can this zero me out in one shot? Is the margin of safety sufficient?' },
  { zh: '被放弃的最佳替代选项是什么？（真正的成本是机会成本）', en: 'What is the best forgone alternative? The real cost is opportunity cost.' },
  { zh: '然后呢？二阶、三阶后果会把短期最优变成什么？', en: 'And then what? Do second- and third-order effects turn a short-term optimum into a long-term loss?' },
  { zh: '反过来问：怎样才会必然失败？先把失败路径排除掉。', en: 'Inverted: how would this fail for certain? Remove failure paths first.' },
  { zh: '解释是否用了过多假设？能不能用更简单的结构说明？（先查蠢，再查坏）', en: 'Does my explanation use too many assumptions? Can a simpler structure account for it?' },
  { zh: '有哪些倾向正在同时叠加？是否接近洛拉帕洛扎式的非线性爆发？', en: 'Which biases are operating at once? Is this approaching a Lollapalooza-style nonlinear outcome?' },
];

export const postMortemQuestions = [
  { zh: '结果差，是决策差，还是分布里的正常噪声？基础率是多少？', en: 'Was the bad outcome a bad decision or ordinary noise? What is the base rate?' },
  { zh: '我当时是被哪个激励、哪段情绪、哪个群体的认同推着走的？', en: 'Which incentive, emotion or social proof was actually pushing me?' },
  { zh: '有没有反面证据被我主动略过？（确认偏误 / 心理否认）', en: 'Did I actively skip disconfirming evidence? (Confirmation bias / denial)' },
  { zh: '这次成功里，有多少来自结构性优势，多少来自运气？会回归吗？', en: 'How much of the success was structural advantage versus luck? Will it regress?' },
  { zh: '把这一条写进检查表，还是修改产生它的结构？', en: 'Do I add a checklist item, or change the structure that produced the error?' },
];

/** Supplementary logic & metaphor tool cards (小播认知工具). */
export interface ToolCard {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  rows: TableRow[];
  note: string;
  noteEn: string;
}
const cell = (text: string) => ({ text, html: text });
export const toolCards: ToolCard[] = [
  {
    id: 'tool-m7', code: 'M7', title: '系统思维基模与转移负担',
    titleEn: 'Systems Thinking Archetypes & Shifting the Burden',
    rows: [
      { cells: [cell('事件层'), cell('只看见发生了什么（爆款、争吵、亏损）'), cell('反应式，永远在救火')] },
      { cells: [cell('行为模式层'), cell('看见重复出现的趋势与周期'), cell('能预测，但仍在系统内')] },
      { cells: [cell('系统结构层'), cell('看见产生模式的反馈回路与约束'), cell('能改变结果，是唯一有杠杆的层')] },
      { cells: [cell('转移负担陷阱'), cell('短期症状解缓解疼痛，却弱化根本解的能力'), cell('依赖形成后，系统越来越难回到根本解')] },
    ],
    note: '症状解见效快、代价低、可重复；根本解有延迟。系统因此学会选择让自己更脆弱的那条路。',
    noteEn: 'Symptomatic fixes are fast and cheap; fundamental fixes have delay. The system therefore learns the path that makes it more fragile.',
  },
  {
    id: 'tool-m8', code: 'M8', title: '批判性思维与十大逻辑谬误',
    titleEn: 'Critical Thinking & Logical Fallacies',
    rows: [
      { cells: [cell('事实 / 观点 / 立场'), cell('先剥离三层，再判断可证伪性'), cell('多数争论其实停在立场层')] },
      { cells: [cell('稻草人谬误'), cell('歪曲对方论点后攻击被歪曲的版本'), cell('让自洽变得廉价')] },
      { cells: [cell('红鲱鱼谬误'), cell('引入无关议题转移注意力'), cell('把结构问题换成人格问题')] },
      { cells: [cell('以偏概全'), cell('用单一事件推断整体分布'), cell('忽略基础率')] },
      { cells: [cell('认知吝啬与替代偏差'), cell('首因效应 / 光环效应 / 外貌与地域图式'), cell('用一个易得特征替换难算的判断')] },
    ],
    note: '谬误之所以有效，是因为它们降低了认知成本；清单不是用来赢争论，而是用来发现自己也在用。',
    noteEn: 'Fallacies work because they lower cognitive cost; the checklist is not for winning arguments but for catching yourself using them.',
  },
  {
    id: 'tool-m9', code: 'M9', title: '语言框架与隐喻认知',
    titleEn: 'Linguistic Frames & Metaphorical Cognition',
    rows: [
      { cells: [cell('框架转移'), cell('把「抄袭」从道德框架换到审美框架，结论随之改变'), cell('谁定义框架，谁先赢了半个结论')] },
      { cells: [cell('容器隐喻'), cell('「装不下」「满出来」「进入视野」'), cell('把认知当成有边界的容器')] },
      { cells: [cell('方位隐喻'), cell('「上位」「底层」「往前看」「掉队」'), cell('把价值判断伪装成空间事实')] },
      { cells: [cell('分辨率'), cell('换一个词，就能换一整套可区分的对象'), cell('语言的粒度决定可思考的粒度')] },
    ],
    note: '不是先有结论再找词，而是词先划好了结论能落在哪里。',
    noteEn: 'Words do not follow conclusions; they delimit where a conclusion is allowed to land.',
  },
];

export const mungerAxiom = {
  zh: '结构决定可能性集合，行为是结构约束下的次优解。',
  en: 'Structure determines the set of possibilities; behaviour is a second-best solution under structural constraint.',
};
