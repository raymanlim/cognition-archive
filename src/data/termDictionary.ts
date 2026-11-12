/**
 * termDictionary.ts
 * ---------------------------------------------------------------------------
 * The patch supplies full bilingual data for the 27 philosophers and for UI
 * chrome, but NOT sentence-level translations for the Obsidian source notes
 * (23 cognition cards, 25 reality cards, Munger model definitions, table cells).
 *
 * This dictionary therefore covers SHORT TERMS ONLY (table dimension column,
 * associated-theory column, tags, author names). Long prose is NOT machine-
 * translated or invented; it is surfaced via I18nBlock with an explicit
 * "no English translation supplied" fallback plus an expandable Chinese source.
 * ---------------------------------------------------------------------------
 */
const TERMS: Record<string, string> = {
  // 分析维度 / Dimension column
  '投影理论': 'Projection Theory', '结构恢复': 'Structural Recovery', '位置坐标': 'Position Coordinates',
  '层级成熟度': 'Level Maturity', '跃迁断裂': 'Transition Rupture', '净值判别': 'Net Value',
  '动机向量': 'Motivation Vector', '数学化诊断': 'Mathematical Diagnosis', '系统桥接': 'System Bridge',
  '技术哲学': 'Philosophy of Technology', '组织经济学': 'Organisational Economics',
  '权力动力学': 'Power Dynamics', '文明演化': 'Civilisational Evolution', '资本风险': 'Capital Risk',
  '结构主义': 'Structuralism', '复杂性科学': 'Complexity Science', '制度经济学': 'Institutional Economics',
  '安全悖论': 'Safety Paradox', '治理逻辑': 'Governance Logic', '家庭系统论': 'Family Systems Theory',
  '女性主义': 'Feminism', '心理边界': 'Psychological Boundaries', '认知贫穷': 'Cognitive Scarcity',
  '慕强心理': 'Power-Worship Psychology', '认识论': 'Epistemology', '决策论': 'Decision Theory',
  '概率/风险': 'Probability / Risk', '系统动力学': 'System Dynamics', '归因/推断': 'Attribution / Inference',
  '方法论': 'Methodology', '数学': 'Mathematics', '概率论': 'Probability Theory',
  '统计': 'Statistics', '分布形态': 'Distribution Shape', '系统': 'Systems',
  '生物学': 'Biology', '演化论': 'Evolutionary Theory', '生态学': 'Ecology',
  '热力学': 'Thermodynamics', '工程学': 'Engineering', '控制论': 'Cybernetics',
  '语言学': 'Linguistics', '符号学': 'Semiotics', '语义学': 'Semantics',
  '现象学': 'Phenomenology', '建构主义': 'Constructivism', '信息论': 'Information Theory',
  '认知心理学': 'Cognitive Psychology', '逆向推理理论': 'Abductive Reasoning',
  '社会认知理论': 'Social Cognition Theory', '视角主义': 'Perspectivism',
  '复杂系统理论': 'Complex Systems Theory', '发展阶段论': 'Developmental Stage Theory',
  '形态发生理论': 'Morphogenesis', '范式转换': 'Paradigm Shift', '价值理论': 'Value Theory',
  '伦理学': 'Ethics', '动机心理学': 'Motivation Psychology', '存在主义': 'Existentialism',
  '测量理论': 'Measurement Theory', '诊断学': 'Diagnostics', '系统论': 'Systems Theory',
  '复杂适应系统': 'Complex Adaptive Systems', '耗散结构理论': 'Dissipative Structures',
  '逆向选择理论': 'Adverse Selection', '瑞士奶酪模型': 'Swiss Cheese Model',
  '治理理论': 'Governance Theory', '失效理论': 'Failure Theory', '元认知': 'Metacognition',
  '邓宁-克鲁格效应': 'Dunning–Kruger Effect', '认知谦逊': 'Epistemic Humility',
  '微观经济学': 'Microeconomics', '边际分析': 'Marginal Analysis',
  '格雷厄姆价值投资': 'Graham Value Investing', '鲁棒优化': 'Robust Optimisation',
  '非预期后果': 'Unintended Consequences', '最小描述长度': 'Minimum Description Length',
  '归因理论': 'Attribution Theory', '证伪主义': 'Falsificationism',
  '事前验尸（premortem）': 'Premortem', '海德格尔技术追问': 'Heidegger on Technology',
  '麦克卢汉媒介即讯息': 'McLuhan: The Medium is the Message',
  '科斯定理': 'Coase Theorem', '交易成本经济学': 'Transaction Cost Economics',
  '福柯微观权力': 'Foucault: Micro-Physics of Power', '信息权力理论': 'Information Power Theory',
  '演化经济学': 'Evolutionary Economics', '权力集中理论': 'Concentration of Power',
  '集体行动逻辑': 'Logic of Collective Action', '波伏娃第二性': 'Beauvoir: The Second Sex',
  '主体性理论': 'Subjectivity Theory', '边界理论': 'Boundary Theory',
  '自我分化': 'Self-Differentiation', '稀缺心态': 'Scarcity Mindset',
  '认知框架理论': 'Cognitive Frame Theory', '进化心理学': 'Evolutionary Psychology',
  '依附理论': 'Attachment Theory', '米纽秦家庭系统理论': 'Minuchin Family Systems',
  '分化理论': 'Differentiation Theory', '指数增长': 'Exponential Growth',
  '微分方程': 'Differential Equations', '期望效用': 'Expected Utility',
  '大数定律': 'Law of Large Numbers', '回归到均值': 'Regression to the Mean',
  '基础率': 'Base Rate', '幂律 / 帕累托分布': 'Power Law / Pareto Distribution',
  '长尾': 'Long Tail', '反馈循环': 'Feedback Loops', '路径依赖': 'Path Dependence',
  // 作者 / 来源
  '佐伊': 'Zuoyi', '玉伯': 'Yu Bo', '匿名': 'Anonymous',
  '查理·芒格': 'Charlie Munger', 'Nagi Yan': 'Nagi Yan', 'Morris': 'Morris',
  'DAN KOE': 'Dan Koe', 'THEdankoe': 'Dan Koe',

  // X handles are PROPER NOUNS — identity mapping, never translated, never
  // replaced by a generic placeholder. Attribution must survive ZH / EN / BI.
  '@naki2012': '@naki2012',
  '@lifesinger': '@lifesinger',
  '@Morris_LT': '@Morris_LT',
  '@zuoyi153917761': '@zuoyi153917761',
  '@thedankoe': '@thedankoe',
  '@lijigang': '@lijigang',
  'x/02 归档': 'x/02 Archive',
  '《穷查理宝典》': 'Poor Charlie’s Almanack',
  // 常见短标签
  '核心概念': 'Core Concept', '核心要点': 'Key Point', '关联理论': 'Related Theory',
  '维度': 'Dimension', '模型': 'Model', '定义': 'Definition',
  '结构视角 / 应用': 'Structural View / Application', '认知关联': 'Cognitive Relation',
  '认知卡片': 'Cognitive Card', '原文节选': 'Selected Passages', '原文池': 'Source Pool',
  '自动匹配': 'Auto-matched',
};

/** Translate short terms only. Returns null for prose (no invented translation). */
export function translateTerm(text: string): string | null {
  const t = text.trim();
  if (!t) return null;
  if (TERMS[t]) return TERMS[t];
  if (t.length > 28) return null;
  // Partial match for short labels such as "投影理论 / 现象学"
  const hit = Object.keys(TERMS).find((k) => t.length <= 28 && (t.includes(k) || k.includes(t)) && k.length > 1);
  return hit ? TERMS[hit] : null;
}

/**
 * Exact-match English titles for frequently quoted works. Intentionally NOT
 * using translateTerm()'s partial matching here: a partial hit on a short word
 * like "投影" would otherwise mis-translate long article titles. Unmapped
 * titles keep their original 《...》 form (a proper noun, never a placeholder).
 */
const WORK_TITLES: Record<string, string> = {
  'CPV 原理': 'CPV Principles',
  '投影': 'Projection',
  '结构恢复': 'Structural Recovery',
  '层级': 'Levels',
  '跃迁': 'Transition',
  '净值': 'Net Value',
  '动机': 'Motivation',
  '系统桥接': 'System Bridge',
  'AI-Native 架构宣言': 'AI-Native Architecture Manifesto',
  '2026 AI 结构变局': '2026 AI Structural Shift',
  'Zero-Report 组织模型': 'Zero-Report Organisation Model',
  '认知识别': 'Cognition Recognition',
  '确定性的幻觉': 'The Illusion of Certainty',
  '思维的演化': 'The Evolution of Thinking',
  '语言的分辨率': 'The Resolution of Language',
  '争论的原理': 'Principles of Argument',
};

export function translateWork(title: string): string | null {
  return WORK_TITLES[title.trim()] ?? null;
}

export const TERM_COUNT = Object.keys(TERMS).length;
