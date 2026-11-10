import raw from './generated/cpv.json';
import type { CpvChapter } from './types';

export const cpvBook = raw as unknown as CpvChapter[];

/** Match a curated node to the full-text chapter parsed from the book. */
export const chapterSource = (key: string): CpvChapter | undefined =>
  cpvBook.find((c) => c.heading.includes(key));

export interface CpvPoint { zh: string; en: string }
export interface CpvNode {
  id: string;
  numeral: string;
  titleZh: string;
  titleEn: string;
  question: string;
  questionEn: string;
  points: CpvPoint[];
  sourceKey: string;
  anchor: string;
}

/** The continuous problem-chain: 導論 + Ch.1–9 + Appendix. */
export const cpvChain: CpvNode[] = [
  {
    id: 'ch0', numeral: '导论', titleZh: '为什么同一个现实，不同人却活在不同世界里', titleEn: 'Why the Same Reality Yields Different Worlds',
    question: '如果现实只有一个，分歧究竟发生在哪一步？', questionEn: 'If there is only one reality, at which step does divergence enter?',
    points: [
      { zh: '人从不直接面对现实，只面对现实的有损投影。', en: 'We never face reality, only its lossy projection.' },
      { zh: '位置、语言、经验、时间、权力、注意力共同制造切片。', en: 'Position, language, experience, time, power and attention jointly produce the slice.' },
      { zh: '严肃的认知理论必须从「投影如何抵达」开始，而非「人看见了什么」。', en: 'A serious theory starts with how the projection arrives, not with what is seen.' },
    ], sourceKey: '导论', anchor: 'cpv-ch-0',
  },
  {
    id: 'ch1', numeral: '§ 01', titleZh: '投影：有损抵达', titleEn: 'Projection: Lossy Arrival',
    question: '被丢掉的那些信息，去了哪里？', questionEn: 'Where did the discarded information go?',
    points: [
      { zh: '投影不是幻觉，是信息在有损通道中的必然衰减。', en: 'Projection is not illusion but inevitable attenuation in a lossy channel.' },
      { zh: '同一现实经不同投影机制，会生成互不兼容的世界。', en: 'The same reality through different projection mechanisms generates incompatible worlds.' },
      { zh: '认知的任务因此不是「看得更多」，而是逆推投影机制。', en: 'The task is therefore not seeing more but reverse-inferring the projection mechanism.' },
    ], sourceKey: '第一章', anchor: 'cpv-ch-1',
  },
  {
    id: 'ch2', numeral: '§ 02', titleZh: '结构恢复：从投影到生成链', titleEn: 'Structural Recovery: From Projection to Generative Chain',
    question: '知道更多，为什么仍然看不穿？', questionEn: 'Why does knowing more still fail to see through?',
    points: [
      { zh: '结构恢复不是堆信息，而是重建生成现象的那条链。', en: 'Recovery is not accumulating information but rebuilding the chain that generated the phenomenon.' },
      { zh: '必须依赖潜变量（Latent Variables）：看不见但决定可见。', en: 'It depends on latent variables: invisible, yet determining the visible.' },
      { zh: '「理解一个对象」= 能在约束变化下预测它的重排。', en: 'To understand an object is to predict its rearrangement when constraints change.' },
    ], sourceKey: '第二章', anchor: 'cpv-ch-2',
  },
  {
    id: 'ch3', numeral: '§ 03', titleZh: '位置：视野的上界', titleEn: 'Position: The Upper Bound of Vision',
    question: '你站在哪里，决定了你能看见什么？', questionEn: 'Does where you stand determine what you can see?',
    points: [
      { zh: '四个面决定视野上界：接触面、责任面、时间面、权力面。', en: 'Four surfaces bound vision: contact, responsibility, time and power.' },
      { zh: '位置差异不只是社会差异，而是结构差异。', en: 'Positional difference is not merely social but structural.' },
      { zh: '四种典型错位：只见结果不见生成、只见局部不见约束、只见当下不见延迟、只见执行不见调用。', en: 'Four misplacements: result without genesis, part without constraint, now without delay, execution without invocation.' },
    ], sourceKey: '第三章', anchor: 'cpv-ch-3',
  },
  {
    id: 'ch4', numeral: '§ 04', titleZh: '层级 L1–L7：分层稳定的结构成熟度', titleEn: 'Levels L1–L7: Layered Structural Maturity',
    question: '层级是奖牌，还是稳定能力的分层？', questionEn: 'Is level a medal or a layering of stable capacities?',
    points: [
      { zh: '层级不是智力或道德排名，而是结构恢复、时间尺度、镜像稳定与责任闭环的长期积累。', en: 'Levels are not rankings of intelligence or morality but accumulation of recovery, time horizon, mirroring and closure.' },
      { zh: '高层级也可能高幻觉——层级与净值之间没有必然关系。', en: 'High level can coexist with high hallucination; level does not entail net value.' },
      { zh: '层级一旦与责任脱钩，就会退化成身份标签。', en: 'Once decoupled from responsibility, level degenerates into an identity label.' },
    ], sourceKey: '第四章', anchor: 'cpv-ch-4',
  },
  {
    id: 'ch5', numeral: '§ 05', titleZh: '跃迁：旧自洽断裂后的新闭环', titleEn: 'Transition: A New Loop After the Old Coherence Breaks',
    question: '顿悟之后，为什么一切照旧？', questionEn: 'Why does nothing change after an epiphany?',
    points: [
      { zh: '三种伪跃迁：概念跃迁、情绪跃迁、立场跃迁。', en: 'Three pseudo-transitions: conceptual, emotional and positional.' },
      { zh: '真跃迁链条：破旧自洽 → 新解释 → 外部验证 → 最小协议闭环。', en: 'Real chain: break old coherence → new explanation → external validation → minimal protocol loop.' },
      { zh: '越往上，跃迁越像痛苦而不是奖励；且必须伴随版本治理。', en: 'Higher up it feels like pain, not reward, and requires version governance.' },
    ], sourceKey: '第五章', anchor: 'cpv-ch-5',
  },
  {
    id: 'ch6', numeral: '§ 06', titleZh: '净值：高层级 ≠ 高价值', titleEn: 'Net Value: High Level ≠ High Worth',
    question: '一个很会解释世界的人，为什么可能毫无价值？', questionEn: 'Why can a brilliant explainer be worth almost nothing?',
    points: [
      { zh: '扣除高配幻觉之后剩下的，才是净值。', en: 'Net value is what remains after subtracting high-spec illusion.' },
      { zh: '四个分量：保真度、闭环力、幻觉率、伦理托底。', en: 'Four components: fidelity, closure, hallucination rate, ethical floor.' },
      { zh: '伦理不是附加项，是净值的必要条件。', en: 'Ethics is not an add-on but a necessary condition of net value.' },
    ], sourceKey: '第六章', anchor: 'cpv-ch-6',
  },
  {
    id: 'ch7', numeral: '§ 07', titleZh: '动机向量：利益 / 恐惧 / 荣誉', titleEn: 'Motivation Vector: Interest / Fear / Honor',
    question: '认知决定你看见什么，什么决定你去向哪里？', questionEn: 'Cognition sets what you see; what sets where you go?',
    points: [
      { zh: '三轴：利益（Interest）、恐惧（Fear）、荣誉（Honor）。', en: 'Three axes: Interest, Fear, Honor.' },
      { zh: '同样层级，因动机向量不同而长出完全不同的人格结构。', en: 'The same level yields wholly different personalities under different motivation vectors.' },
      { zh: '荣誉轴最危险也最重要：它最容易把自洽伪装成有效。', en: 'Honor is the most dangerous and most important axis: it most easily disguises coherence as validity.' },
    ], sourceKey: '第七章', anchor: 'cpv-ch-7',
  },
  {
    id: 'ch8', numeral: '§ 08', titleZh: '数学化：诊断报告而非评分器', titleEn: 'Mathematisation: A Diagnostic, Not a Score',
    question: '能量化，为什么不能排名？', questionEn: 'If it can be quantified, why must it not be ranked?',
    points: [
      { zh: '模块优先于总分：把系统拆成可分别诊断的模块。', en: 'Modules before total score: decompose the system into separately diagnosable modules.' },
      { zh: '折价与托底并存；动机不应粗暴并入总分。', en: 'Discount and floor coexist; motivation must not be folded crudely into a total.' },
      { zh: '三个防误用原则：不排名、不跨位置比较、必须保留版本意识。', en: 'Three safeguards: no ranking, no cross-position comparison, always version-aware.' },
    ], sourceKey: '第八章', anchor: 'cpv-ch-8',
  },
  {
    id: 'ch9', numeral: '§ 09', titleZh: '结构之镜：让自欺变难', titleEn: 'The Mirror: Making Self-Deception Harder',
    question: '一面镜子，要怎样才算有效？', questionEn: 'What makes a mirror genuinely effective?',
    points: [
      { zh: 'CPV 首先不是用来判人的，而是作为诊断层。', en: 'CPV is not for judging people but for diagnosis.' },
      { zh: '进入现实后的四种失真：标签化、层级崇拜、评分化、跨位置比较。', en: 'Four distortions in the wild: labelling, level worship, scoring, cross-position comparison.' },
      { zh: '协议接口比自由传播更重要。', en: 'Protocol interfaces matter more than free circulation.' },
      { zh: '真正有效的镜子，会让自欺变难。', en: 'An effective mirror makes self-deception harder.' },
    ], sourceKey: '第九章', anchor: 'cpv-ch-9',
  },
  {
    id: 'appendix', numeral: '附录', titleZh: '系统桥接：从反馈到结构生成', titleEn: 'Appendix: From Feedback to Structure Generation',
    question: '把 CPV 放进系统论，它会变成什么？', questionEn: 'Placed inside systems theory, what does CPV become?',
    points: [
      { zh: 'CPV = 系统将外部差异转化为内部结构，并用该结构重组自身与环境耦合关系的能力层级。', en: 'CPV is a system’s capacity tier for converting external differences into internal structure.' },
      { zh: '与组织学习理论桥接：单环学习 → 双环学习 → 结构生成。', en: 'Bridge to organisational learning: single-loop → double-loop → structure generation.' },
      { zh: '全书一句话：差异进入系统后，停在哪里？', en: 'The book in one line: after a difference enters the system, where does it stop?' },
    ], sourceKey: '附录', anchor: 'cpv-ch-appendix',
  },
];

/** Interactive L1–L7 ladder (Ch.4). */
export const cpvLevels = [
  { id: 'L1', zh: '表象依附层', en: 'Surface Attachment', desc: '以可见现象、标签与他人评价作为判断依据。', descEn: 'Judging by visible phenomena, labels and others’ evaluations.' },
  { id: 'L2', zh: '单轴实用层', en: 'Single-Axis Utility', desc: '能用一条因果链解决具体问题，但只在一个轴上优化。', descEn: 'Solves concrete problems with one causal chain, optimising on a single axis.' },
  { id: 'L3', zh: '系统感形成层', en: 'Emergent System Sense', desc: '开始感知反馈与延迟，但仍倾向于把结构问题归因为行为。', descEn: 'Senses feedback and delay, yet still attributes structural issues to behaviour.' },
  { id: 'L4', zh: '结构显影层', en: 'Structure Becomes Visible', desc: '能识别潜变量与生成链，看到可能性集合的边界。', descEn: 'Identifies latent variables and generative chains; sees the boundary of the possibility set.' },
  { id: 'L5', zh: '协议建构层', en: 'Protocol Construction', desc: '把洞见写成可继承、可验证、可复用最小协议。', descEn: 'Turns insight into inheritable, verifiable, reusable minimal protocols.' },
  { id: 'L6', zh: '文明建构层', en: 'Civilisation Building', desc: '设计让陌生人也能协作的结构与制度，而非依赖个人。', descEn: 'Designs structures allowing strangers to collaborate without depending on individuals.' },
  { id: 'L7', zh: '主控层', en: 'Master Control', desc: '能改写产生结构的元规则，并对版本与失效负责。', descEn: 'Rewrites the meta-rules that generate structures and owns versions and failures.' },
];

/** CPV1–CPV5 system bridge. */
export const cpvSystems = [
  { id: 'CPV1', zh: '反应系统', en: 'Reactive System', desc: '刺激 → 反应，无内部模型。', descEn: 'Stimulus → response, no internal model.' },
  { id: 'CPV2', zh: '调节系统 · 单环学习', en: 'Regulating System · Single-loop', desc: '用反馈修正行为，但不改目标与模型。', descEn: 'Feedback corrects behaviour without changing goals or the model.' },
  { id: 'CPV3', zh: '建模系统', en: 'Modelling System', desc: '建立内部模型，可预测与预演。', descEn: 'Builds an internal model able to predict and simulate.' },
  { id: 'CPV4', zh: '自重构系统 · 双环学习', en: 'Self-Restructuring · Double-loop', desc: '能修改自己的模型与目标函数。', descEn: 'Can revise its own model and objective function.' },
  { id: 'CPV5', zh: '结构生成系统', en: 'Structure-Generating System', desc: '生成新的结构，改变环境耦合方式。', descEn: 'Generates new structures and changes how it couples to the environment.' },
];

/** Three motivation axes (Ch.7 radar). */
export const motivationAxes = [
  { id: 'interest', zh: '利益', en: 'Interest', desc: '把能力导向可交换、可累积的现实收益。', descEn: 'Directs capacity toward exchangeable, accumulable returns.' },
  { id: 'fear', zh: '恐惧', en: 'Fear', desc: '收缩可能性集合，优先避免损失与暴露。', descEn: 'Shrinks the possibility set, prioritising loss and exposure avoidance.' },
  { id: 'honor', zh: '荣誉', en: 'Honor', desc: '追求被承认；最易把自洽误判为有效。', descEn: 'Seeks recognition; most easily mistakes coherence for validity.' },
];

export const philosophyFormula = {
  zh: '哲学输出 = Reality × 认知位置 × 现实约束 × 解码方式 × 反馈历史',
  en: 'Philosophical output = Reality × Cognitive Position × Real Constraints × Decoding × Feedback History',
  note: '西方哲学研究「在一个位置上如何运算」；中国哲学研究「人如何改变自己的位置」。',
  noteEn: 'Western philosophy asks how to compute at a given position; Chinese philosophy asks how to change one’s position.',
};
