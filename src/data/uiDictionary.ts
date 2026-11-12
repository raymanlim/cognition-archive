import type { LocalizedText } from '../types/schema';

/**
 * uiDictionary.ts — single source of truth for ALL UI chrome strings.
 * PATCH_DATA_AND_I18N.md Part 3, section 2. No component may hard-code a
 * bare Chinese string; every label resolves through this dictionary.
 */
export const dict = {
  /* ---- Site chrome ---- */
  siteTitle: { zh: '思想文库', en: 'The Editorial Archive' },
  siteLatin: { zh: 'RAYMANLIM · US · CI', en: 'RAYMANLIM · US · CI' },
  navPhilosophy: { zh: '壹 · 哲学源流', en: 'I · Philosophy' },
  navCognition: { zh: '贰 · 思想认知', en: 'II · Cognition' },
  navReality: { zh: '叁 · 现实透镜', en: 'III · Reality Lens' },
  navAtlas: { zh: '肆 · 交叉图谱', en: 'IV · Cross Atlas' },
  navReflections: { zh: '伍 · 省思录', en: 'V · AI-Age Reflections' },
  mobilePhilosophy: { zh: '壹·哲学', en: 'I · Phil.' },
  mobileCognition: { zh: '贰·认知', en: 'II · Cog.' },
  mobileReality: { zh: '叁·透镜', en: 'III · Lens' },
  mobileAtlas: { zh: '肆·图谱', en: 'IV · Atlas' },
  mobileReflections: { zh: '伍·省思', en: 'V · Refl.' },
  langLabel: { zh: '语言', en: 'Language' },
  themeLabel: { zh: '外观', en: 'Appearance' },
  themePaper: { zh: '宣纸典藏', en: 'Paper' },
  themeDark: { zh: '暗夜书斋', en: 'Dark' },
  themeCrisp: { zh: '纯白极简', en: 'Crisp' },
  footerNote: {
    zh: '本站由 Astro 5 + Tailwind CSS + TypeScript 静态构建，数据源为 Obsidian 素材库，构建期自动解析。',
    en: 'Statically built with Astro 5, Tailwind CSS and TypeScript; data parsed at build time from Obsidian source notes.',
  },
  footerRights: { zh: '思想文库 · 仅供个人研读', en: 'The Editorial Archive · For private study' },
  backToTop: { zh: '回到顶部', en: 'Back to top' },

  /* ---- Part 3 §2: Division I filters ---- */
  philFilters: {
    all: { zh: '全部源流 (27)', en: 'All Philosophers (27)' },
    chinese: { zh: '东方哲思与心性 (4)', en: 'Chinese Philosophy (4)' },
    epistemology: { zh: '西方认识论与语言科学 (11)', en: 'Epistemology & Language (11)' },
    critique: { zh: '存在、伦理与社会批判 (12)', en: 'Existence, Ethics & Critique (12)' },
  },

  /* ---- Part 3 §2: Division II tabs + table headers ---- */
  cognitionTabs: {
    cpv: { zh: '壹 · CPV 原理全书问题链', en: 'I · CPV Principles Chain' },
    cards: { zh: '贰 · 思想认知 23 卡片', en: 'II · 23 Cognitive Cards' },
    munger: { zh: '叁 · 芒格 52 模型格栅', en: 'III · Munger 52-Model Latticework' },
  },
  interpretationHeaders: {
    dimension: { zh: '分析维度', en: 'Dimension' },
    corePoint: { zh: '核心结构要点', en: 'Structural Core Point' },
    theory: { zh: '关联理论与学科', en: 'Associated Theory' },
  },
  mungerModelHeaders: {
    modelName: { zh: '模型名称', en: 'Mental Model' },
    definition: { zh: '一句话定义', en: 'One-Line Definition' },
    application: { zh: '结构视角与现实应用', en: 'Structural View & Application' },
  },

  /* ---- Part 3 §2: Division III author + 8 axioms ---- */
  lensAuthorFilters: {
    all: { zh: '全部透镜 (25)', en: 'All Lenses (25)' },
    zuoyi: { zh: '佐伊 · 社会与主体性 (18)', en: 'Zuoyi · Society & Subjectivity (18)' },
    dankoe: { zh: 'THEdankoe · 数字杠杆与效能 (3)', en: 'THEdankoe · Leverage & Agency (3)' },
    morris: { zh: 'Morris · 财富结构与边界 (4)', en: 'Morris · Wealth & Boundaries (4)' },
  },
  lensTopicFilters: {
    'struct-vs-act': { zh: '结构 vs 行为', en: 'Structure vs. Behavior' },
    disenchantment: { zh: '祛魅与慈悲', en: 'Disenchantment' },
    'education-order': { zh: '教育与代际创伤', en: 'Education & Intergenerational Loop' },
    'pain-feedback': { zh: '痛苦与现实反馈', en: 'Pain & Market Feedback' },
    'awake-vs-auto': { zh: '清醒 vs 自动化驯化', en: 'Agency vs. Algorithmic Automation' },
    'leverage-shift': { zh: '杠杆构建与模式切换', en: 'Leverage & Regime Shift' },
    'coherence-vs-valid': { zh: '模型自洽 vs 现实有效', en: 'Self-Coherence vs. Validity' },
    lollapalooza: { zh: '误判清单与叠加机制', en: 'Misjudgment & Lollapalooza' },
  },

  /* ---- Shared field labels / buttons / states ---- */
  all: { zh: '全部', en: 'All' },
  clearFilter: { zh: '清除筛选', en: 'Clear filters' },
  resultCount: { zh: '张卡片', en: 'cards' },
  filterAuthor: { zh: '按作者 / 领域', en: 'By Author / Field' },
  filterTopic: { zh: '跨库串联主题', en: 'Cross-Library Axioms' },
  filterAllTopics: { zh: '全部主题', en: 'All Axioms' },
  sortByNumber: { zh: '按主题 · 编号', en: 'By Theme · Number' },
  sortByYear: { zh: '按年代 · 升序', en: 'By Year · Ascending' },
  yearAxis: { zh: '年代刻度', en: 'TIMELINE' },
  born: { zh: '生年', en: 'Born' },
  coreIdeas: { zh: '核心命题', en: 'Core Ideas' },
  logicChain: { zh: '三步推导逻辑链', en: 'Three-Step Reasoning Chain' },
  premise: { zh: '起点前提 / 时代困境', en: 'Premise / Historical Predicament' },
  argument: { zh: '核心论证过程', en: 'Core Argument' },
  conclusionStep: { zh: '最终哲学结论', en: 'Philosophical Conclusion' },
  works: { zh: '剥洋葱式著作梯度', en: 'Layered Reading Path' },
  worksEntry: { zh: '入门首选', en: 'Entry' },
  worksAdvanced: { zh: '进阶核心', en: 'Advanced' },
  lineage: { zh: '思想承启网络', en: 'Intellectual Lineage' },
  lineageFrom: { zh: '继承 / 批判自', en: 'Inherits / Critiques' },
  lineageTo: { zh: '启发 / 影响了', en: 'Influenced' },
  quote: { zh: '经典原话', en: 'Canonical Quote' },
  modernInsight: { zh: '给现代人的认知启发', en: 'Modern Cognitive Insight' },
  bridgeLabel: { zh: '特别桥接 · Nagi Yan 卡片 21', en: 'Special Bridge · Nagi Yan Card 21' },

  sourcePool: { zh: '原文池', en: 'Source Pool' },
  sourceCredit: { zh: '来源与出处', en: 'Source & Attribution' },
  sourceLinks: { zh: '原文出处', en: 'Original sources' },
  sourceLinkOpen: { zh: '在新标签打开原文', en: 'Open original in a new tab' },
  quotesLabel: { zh: '原文节选', en: 'Selected Passages' },
  relationLabel: { zh: '认知关联', en: 'Cognitive Relation' },
  modelsTable: { zh: '多元模型解读', en: 'Multi-Model Reading' },
  conclusionLabel: { zh: '认知卡片', en: 'Cognitive Card' },
  reverseLabel: { zh: '反向思考', en: 'Inversion' },
  nextStepLabel: { zh: '待解问题 / 下一步', en: 'Open Questions / Next' },
  modelCount: { zh: '张原始模型', en: 'Raw Models' },
  expandModels: { zh: '展开模型清单', en: 'Expand model list' },
  collapseModels: { zh: '收起清单', en: 'Collapse' },
  sixSections: { zh: '多元思维笔记 · 六节总解析', en: 'Latticework Notes · Six-Section Analysis' },
  checklistPre: { zh: '决策前 7 问', en: '7 Pre-Decision Questions' },
  checklistPost: { zh: '复盘 5 问', en: '5 Post-Mortem Questions' },
  checklistHint: { zh: '点击勾选，进度本地保存', en: 'Click to check; progress saved locally' },
  toolCards: { zh: '小播逻辑与隐喻工具箱', en: 'Logic & Metaphor Toolkit' },
  selfCheck: { zh: '自检交互', en: 'Self-Check' },
  marginaliaLabel: { zh: '古籍眉批 · 算法联动', en: 'MARGINALIA · ALGORITHMIC LINKS' },
  marginaliaHint: {
    zh: '由 cognitiveEngine 自动匹配，点击可跳转至对应版块锚点',
    en: 'Matched by cognitiveEngine; click to jump to the source anchor',
  },
  openMarginalia: { zh: '展开古籍夹注', en: 'Open marginal notes' },
  layerPhilosophers: { zh: '哲学底座', en: 'Philosophical Base' },
  layerCpv: { zh: 'CPV 诊断', en: 'CPV Diagnosis' },
  layerCognition: { zh: '认知卡片', en: 'Cognition Cards' },
  layerModels: { zh: '芒格模型', en: 'Munger Models' },
  layerAxioms: { zh: '串联公理', en: 'Cross Axioms' },
  chainLabel: { zh: '连续问题链', en: 'THE CONTINUOUS PROBLEM CHAIN' },
  chainHint: { zh: '点击任一章节展开要点与全书原文', en: 'Click a chapter to expand key points and full text' },
  showSource: { zh: '展开全书原文', en: 'Show full text' },
  levelsLabel: { zh: 'L1–L7 层级 · 交互式展开', en: 'L1–L7 Levels · Interactive' },
  systemsLabel: { zh: '系统桥接 CPV1–CPV5', en: 'System Bridge CPV1–CPV5' },
  axesLabel: { zh: '动机向量 · 三轴剖面', en: 'Motivation Vector · Three Axes' },
  cardLibrary: { zh: '思想认知 · 23 张综合卡片', en: 'Cognition · 23 Structure Cards' },
  expandModelsFull: { zh: '展开 52 张模型清单', en: 'Expand the 52-model list' },
  toolConcept: { zh: '概念', en: 'Concept' },
  toolKeyPoint: { zh: '要点', en: 'Key Point' },
  toolImplication: { zh: '认知含义', en: 'Cognitive Implication' },
  coreAxiom: { zh: '核心公理', en: 'CORE AXIOM' },
  sixDisciplines: { zh: '六大学科综合卡片 · 内嵌 52 张原始模型清单', en: 'SIX DISCIPLINES · 52 RAW MODELS' },
  problemChain: { zh: '问题链', en: 'PROBLEM CHAIN' },
  chapterSections: { zh: '节', en: 'sections' },
  sourceNoteZh: {
    zh: '源文档为中文：卡片正文、原文节选与表格内容保留原文，并提供可展开的中文源文对照。',
    en: 'Source notes are in Chinese. Body text, excerpts and table cells keep the original, available via the expandable source view.',
  },
  sourceNoteEn: {
    zh: '源文档为中文：卡片正文、原文节选与表格内容保留原文，并提供可展开的中文源文对照。',
    en: 'Source notes are in Chinese. Body text, excerpts and table cells keep the original, available via the expandable source view.',
  },
  originalSource: { zh: '查看中文原文', en: 'View original Chinese source' },
  hideOriginalSource: { zh: '收起中文原文', en: 'Hide original Chinese source' },
  sourceUntranslated: {
    zh: '该段为源文档中文原文，未提供英文译文。',
    en: 'This passage is verbatim from the Chinese source notes; no English translation is supplied in the patch data.',
  },
  readMore: { zh: '进入版块', en: 'Open division' },
  sectionLabel: { zh: '三大版块', en: 'THREE DIVISIONS' },
  heroKicker: { zh: '世纪文库 · 极简典藏', en: 'THE EDITORIAL ARCHIVE' },
  heroEnter: { zh: '入藏阅读', en: 'Enter the Archive' },
  heroAtlas: { zh: '查看交叉图谱', en: 'Open the Cross Atlas' },
  statPhilosophers: { zh: '位哲学家', en: 'Philosophers' },
  statCognition: { zh: '张认知卡片', en: 'Cognition Cards' },
  statModels: { zh: '个思维模型', en: 'Mental Models' },
  statReality: { zh: '张现实透镜', en: 'Reality Lenses' },
  statChapters: { zh: '章 CPV 原理', en: 'CPV Chapters' },
  statAxioms: { zh: '条串联公理', en: 'Cross Axioms' },
  axiomsLabel: { zh: '八条串联公理', en: 'EIGHT CROSS-LIBRARY AXIOMS' },
  matrixLabel: { zh: '全量交叉矩阵', en: 'FULL CROSS MATRIX' },
  matrixHint: { zh: '点击任意单元格跳转到对应卡片', en: 'Click any cell to jump to its card' },
  realityCardCol: { zh: '现实透镜卡片', en: 'Reality Card' },
  fullIndex: { zh: '三层认知交叉解剖 · 全量索引', en: 'THREE-LAYER DISSECTION · FULL INDEX' },
  openFullCard: { zh: '查看该卡片全文与眉批', en: 'Open full card & marginalia' },

  /* ---- Division V: AI-Age Reflections ---- */
  refEyebrow: { zh: 'AI 时代 · 高认知省思', en: 'AI AGE · HIGH-COGNITION REFLECTIONS' },
  refTitle: { zh: '伍 · AI时代省思录', en: 'V · Reflections from the AI Age' },
  refLead: {
    zh: 'AI 时代高认知人群的反思辑录——精选导师级思想者那些常人难以触达的思考角度，以卡片写作、提示词理念与人机协作实践抛砖引玉，附导读与跨库关联。',
    en: 'Reflections from high-cognition minds of the AI age — selected angles most people rarely reach, offered as a brick to draw jade: card-writing, prompt-as-philosophy and human–AI workflows, with annotations and cross-links.',
  },
  refLeadExtra: {
    zh: '他的思考不是答案，而是把你带到一个你独自到不了的认知位置。',
    en: 'His thinking is not an answer but a place you could not have reached alone.',
  },
  thoughtMapLabel: { zh: '思想地图', en: 'THOUGHT MAP' },
  thoughtMapNote: { zh: '结构化整理视角', en: 'A structured-reading lens' },
  mainlineLabel: { zh: '核心主线逻辑链', en: 'CORE THREAD' },
  declarationsLabel: { zh: '核心哲学宣言', en: 'CORE PHILOSOPHICAL DECLARATIONS' },
  segmentsLabel: { zh: '五段分区概览（依原文索引）', en: 'FIVE SEGMENTS (AS INDEXED IN THE SOURCE)' },
  segmentCount: { zh: '篇', en: 'items' },
  refFiltersLabel: { zh: '按主题筛选', en: 'By Axiom' },
  refAll: { zh: '全部省思 (10)', en: 'All Reflections (10)' },
  refResultCount: { zh: '张省思卡', en: 'reflection cards' },
  tier1Label: { zh: '完整范本卡 · R/W/C 深度解读', en: 'Full model card · R/W/C deep dive' },
  tier2Label: { zh: '原文 + 本站导读', en: 'Verbatim source + editorial annotation' },
  editorialBadge: { zh: '本站结构化整理', en: 'Editorial annotation' },
  editorialNote: {
    zh: '导读、认知关联与思想地图均为本站结构化整理，非原作者观点；原文节选逐字保留。',
    en: 'Guides, cognitive relations and the thought map are site-side editorial annotations, not the author’s own analysis; all excerpts are verbatim.',
  },
  deepRwcLabel: { zh: 'R/W/C 三维', en: 'R/W/C Triad' },
  deepSteelmanLabel: { zh: '深层追问（Steelman）', en: 'Steelman & Deep Questions' },
  deepLensesLabel: { zh: '思想透镜', en: 'Cognitive Lenses' },
  deepActionsLabel: { zh: '微小行动', en: 'Micro-Actions' },
  deepSourceNote: {
    zh: '本区块依 L2 思想卡片范本（R/W/C · Steelman · 思想透镜 · 微小行动）整理，属结构化导读。',
    en: 'This block follows the L2 model-card template (R/W/C · Steelman · lenses · micro-actions) as structured editorial reading.',
  },
  refIndexLabel: { zh: '全量索引 · 100 篇', en: 'FULL INDEX · 100 ITEMS' },
  refIndexHint: {
    zh: '按原文五段分组，编号 / 标题 / 日期 / 原文链接可折叠展开，一条不丢。',
    en: 'Grouped by the five source segments; number / title / date / source link, collapsible, with nothing omitted.',
  },
  refIndexExpand: { zh: '展开该段', en: 'Expand segment' },
  refIndexCollapse: { zh: '收起该段', en: 'Collapse segment' },
  refSourceLink: { zh: 'X 原文', en: 'Original on X' },
  refProvenance: {
    zh: '栏目为策展式导读：10 张深度卡（1 张完整范本 + 9 张原文与本站导读）与 100 条全量索引，均溯源自同一原文层。',
    en: 'A curated reading: 10 in-depth cards (one full model card plus nine verbatim-source cards with editorial notes) and a complete 100-item index, all traced to the same source layer.',
  },
  refSourceItem: { zh: '源自原文第', en: 'Source item' },
} satisfies Record<string, LocalizedText | Record<string, LocalizedText>>;

export type DictKey = keyof typeof dict;

/** Type-safe lookup returning a LocalizedText (or a nested group). */
export function L(key: DictKey): LocalizedText {
  const v = dict[key];
  return v as LocalizedText;
}

export const localize = (t: LocalizedText, lang: 'zh' | 'en' | 'bi'): string =>
  lang === 'en' ? t.en : lang === 'bi' ? `${t.zh} / ${t.en}` : t.zh;
