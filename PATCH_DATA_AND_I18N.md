# Patch Specification: 27 Philosophers Full Schema & Global i18n / Anchor Consistency

## Part 1: 统一强类型双语接口规范 (`src/types/schema.ts`)

所有文本必须使用 `LocalizedText` 接口，严禁出现纯中文字符串或缺失英文翻译：

```typescript
export interface LocalizedText {
  zh: string;
  en: string;
}

export interface PhilosopherCard {
  id: string; // 全局唯一锚点 ID，如 'phil-kant', 'phil-wittgenstein'，跨页跳转统一使用 `/philosophy#${id}`
  sectionNum: string; // 维特根斯坦式段落标号，如 '01', '02'... '27'
  name: LocalizedText;
  era: LocalizedText;
  yearSort: number; // 严格按此数字升序排列
  theme: 'chinese' | 'epistemology' | 'critique';
  tags: LocalizedText[];
  oneLiner: LocalizedText; // 渲染在 #3B4D5E 世纪文库灰蓝腰封上
  coreIdeas: { title: LocalizedText; desc: LocalizedText }[];
  logicChain: {
    premise: LocalizedText;    // 起点前提 / 时代困境
    argument: LocalizedText;   // 核心论证过程
    conclusion: LocalizedText; // 最终哲学结论
  };
  works: {
    entry: { title: LocalizedText; note: LocalizedText };    // 剥洋葱：入门首选
    advanced: { title: LocalizedText; note: LocalizedText }; // 剥洋葱：进阶核心
  };
  lineage: {
    from: LocalizedText; // 继承/批判了谁
    to: LocalizedText;   // 启发/影响了谁
  };
  quote: LocalizedText;
  modernInsight: LocalizedText;
}
```

---

## Part 2: 27 位哲学家完整双语补齐数据（含推导链、著作梯度、思想承启、金句、启发）

请将 `src/data/philosophers.ts` 完整更新为以下包含全部 27 位哲学家全字段的数据结构（按主题与 `yearSort` 升序排列）：

### 主题 A：东方哲思与心性之学 (`theme: 'chinese'`)

#### 01. 老子 (Laozi)
- **`id`**: `"phil-laozi"`
- **`sectionNum`**: `"01"`
- **`name`**: `{ zh: "老子", en: "Laozi" }`
- **`era`**: `{ zh: "约前571—前471", en: "c. 571–471 BCE" }`
- **`yearSort`**: `-571`
- **`theme`**: `'chinese'`
- **`tags`**: `[{zh:"道法自然",en:"Tao Follows Nature"}, {zh:"反者道之动",en:"Reversal is the Movement of Tao"}, {zh:"无为而治",en:"Wu Wei (Non-coercive Action)"}]`
- **`oneLiner`**: `{ zh: "揭示“反者道之动，弱者道之用”、超越世俗二元对立的道家哲学本源。", en: "The foundational Taoist sage revealing that reversal is the movement of the Tao and softness overcomes hardness." }`
- **`coreIdeas`**:
  - `{ title: {zh:"道常无为而无不为", en:"Wu Wei & Natural Order"}, desc: {zh:"顺应系统内在规律而不强行妄为，避免人为干预引发的系统反噬。", en:"Acting in accordance with intrinsic systemic laws rather than imposing forceful intervention."} }`
  - `{ title: {zh:"有无相生，反者道之动", en:"Dialectical Reversal"}, desc: {zh:"万物皆在矛盾对立中相互依存并在极点处向对立面转化；作为整体的“无（一）”是区分局部之“有（多）”的前提。", en:"All things exist in interdependent polarity and revert to their opposite at the extreme; the undifferentiated Whole ('Non-being') is the precondition for naming the Many ('Being')."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "周礼崩坏，世人皆执着于仁义名利等表象刚强之争", en: "Collapse of Zhou rituals; society obsessed with rigid norms, fame, and forceful competition" }`
  - `argument`: `{ zh: "洞察宇宙万物遵循“高下相倾、物极必反”的负反馈震荡规律", en: "Observing that the cosmos operates through mutual generation and negative-feedback reversal" }`
  - `conclusion`: `{ zh: "唯有守柔处弱、道法自然，方能实现系统的长久稳态", en: "Only by embracing softness and non-coercive alignment with nature can a system endure" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《道德经》（中华书局导读本）", en:"Tao Te Ching (Annotated Intro)"}, note: {zh:"五千言浓缩宇宙与人生的辩证总纲", en:"5,000 characters condensing cosmic and life dialectics"} }`
  - `advanced`: `{ title: {zh:"《王弼老子注》", en:"Wang Bi's Commentary on Laozi"}, note: {zh:"魏晋玄学本体论高度的哲学阐释", en:"Ontological pinnacle of Xuanxue commentary"} }`
- **`lineage`**:
  - `from`: `{ zh: "上古史官文化与《易》之阴阳观", en: "Ancient historiography & Yin-Yang cosmology" }`
  - `to`: `{ zh: "庄子、孙子兵法、禅宗及现代复杂系统自组织理论", en: "Zhuangzi, Sun Tzu, Zen Buddhism & Complex Self-Organizing Systems" }`
- **`quote`**: `{ zh: "反者道之动，弱者道之用。天下万物生于有，有生于无。", en: "Reversal is the movement of the Tao; softness is the function of the Tao. All things are born of being, and being is born of non-being." }`
- **`modernInsight`**: `{ zh: "在系统阻力极大时（《第五项修炼》你越推系统越反弹），学会收敛强推的控制欲，用“结构顺应”代替“用力过猛”。", en: "When facing systemic resistance, abandon forceful micromanagement and align with structural flows." }`

#### 02. 孙子 (Sun Tzu)
- **`id`**: `"phil-suntzu"`
- **`sectionNum`**: `"02"`
- **`name`**: `{ zh: "孙子", en: "Sun Tzu" }`
- **`era`**: `{ zh: "约前545—前470", en: "c. 545–470 BCE" }`
- **`yearSort`**: `-545`
- **`theme`**: `'chinese'`
- **`tags`**: `[{zh:"全胜辩证",en:"Total Victory Dialectics"}, {zh:"系统博弈",en:"Systemic Game Theory"}, {zh:"兵无常势",en:"Fluid Strategic Form"}]`
- **`oneLiner`**: `{ zh: "将残酷的战争艺术升华为动态系统约束与虚实辩证哲学的古典战略鼻祖。", en: "Classical master elevating warfare into dynamic systems constraint and dialectical strategy." }`
- **`coreIdeas`**:
  - `{ title: {zh:"全国为上，不战而屈人之兵", en:"Winning Without Fighting"}, desc: {zh:"跳出局部厮杀，在更高维度的战略结构上瓦解对手。", en:"Transcending tactical attrition to dissolve the opponent at a higher structural level."} }`
  - `{ title: {zh:"避实击虚，因敌变化而取胜", en:"Fluid Adaptation"}, desc: {zh:"战略无固定模板，能力依附于动态位置与形势差（势）。", en:"Strategy has no fixed template; capability depends on dynamic positioning and momentum."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "战争乃死生之地、存亡之道，直接硬拼损耗极大", en: "War is a matter of life and death; direct attrition carries catastrophic systemic cost" }`
  - `argument`: `{ zh: "通过“五事七计”量化评估双方结构约束，操纵信息不对称（兵者诡道）与奇正虚实转化", en: "Quantifying structural constraints via Five Factors, leveraging information asymmetry and shifting虚/实 dynamics" }`
  - `conclusion`: `{ zh: "先胜而后求战，以最小系统熵增获取确定性全胜", en: "Secure structural victory before engagement, achieving total triumph with minimal entropy" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《孙子兵法》（十三篇白话精解）", en:"The Art of War (13 Chapters)"}, note: {zh:"重点精读〈计篇〉〈谋攻篇〉〈虚实篇〉中的五个辩证思维", en:"Focus on Laying Plans, Attack by Stratagem, and Weak Points & Strong"} }`
  - `advanced`: `{ title: {zh:"《十一家注孙子》", en:"Eleven Commentaries on Sun Tzu"}, note: {zh:"汇集曹操、杜牧等历代战略家实战批注", en:"Compiled strategic annotations by Cao Cao, Du Mu, and historical masters"} }`
- **`lineage`**:
  - `from`: `{ zh: "先秦道家辩证法与齐国兵学传统", en: "Pre-Qin Taoist dialectics & Qi military tradition" }`
  - `to`: `{ zh: "克劳塞维茨《战争论》、现代博弈论与商业护城河理论", en: "Clausewitz, Modern Game Theory & Competitive Strategy" }`
- **`quote`**: `{ zh: "夫兵形象水，水之形，避高而趋下；兵之形，避实而击虚。", en: "Military form is like water: water avoids heights and hastens to the lowlands; an army avoids strength and strikes weakness." }`
- **`modernInsight`**: `{ zh: "呼应 Morris 与芒格：市场不奖励“谁更努力”，只奖励“谁处在更有利的生态位与结构中”——先算胜算（期望值），再挥棒。", en: "Echoing Munger and Morris: reality rewards advantageous structural positioning, not blind effort—calculate expected value before swinging." }`

#### 03. 庄子 (Zhuangzi)
- **`id`**: `"phil-zhuangzi"`
- **`sectionNum`**: `"03"`
- **`name`**: `{ zh: "庄子", en: "Zhuangzi" }`
- **`era`**: `{ zh: "约前369—前286", en: "c. 369–286 BCE" }`
- **`yearSort`**: `-369`
- **`theme`**: `'chinese'`
- **`tags`**: `[{zh:"无用之用",en:"Usefulness of the Useless"}, {zh:"齐物逍遥",en:"Equalizing Things & Free Wandering"}, {zh:"精神自由",en:"Spiritual Liberation"}]`
- **`oneLiner`**: `{ zh: "以“无用之用”刺破世俗功利主义规训、在相对主义视角转换中实现心灵绝对逍遥的哲人。", en: "Shattering utilitarian conditioning through the 'usefulness of the useless' and perspectival freedom." }`
- **`coreIdeas`**:
  - `{ title: {zh:"人皆知有用之用，而莫知无用之用", en:"The Usefulness of the Useless"}, desc: {zh:"世俗所谓的“有用”往往是沦为工具而被损耗的根源，“无用”才是保全生命主体性的大用。", en:"Worldly 'utility' reduces individuals to consumables; 'uselessness' preserves existential subjectivity."} }`
  - `{ title: {zh:"万物一齐，莫之短长", en:"Equalizing Perspectives (Qi Wu)"}, desc: {zh:"打破“自我中心”的认知坐标局限，理解是非大小皆相对于观察位置而成立。", en:"Dissolving egocentric coordinates to recognize that right/wrong and large/small are position-dependent."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "战国乱世，人被世俗功名、工具理性与是非争辩死死捆绑（有待）", en: "Humanity trapped by utilitarian instrumentalism, fame, and binary ideological disputes" }`
  - `argument`: `{ zh: "通过鲲鹏与斥鷃、庄周梦蝶、栎社不材之木等寓言，解构单一视角的独断性", en: "Deconstructing dogmatic single-perspective judgments through allegories like the Butterfly Dream and the Useless Tree" }`
  - `conclusion`: `{ zh: "乘天地之正，御六气之辩，从外在评价体系中彻底解脱（无待逍遥）", en: "Achieving unconditioned spiritual freedom independent of external validation systems" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《庄子·内七篇》（〈逍遥游〉〈齐物论〉）", en:"Zhuangzi: The Inner Chapters"}, note: {zh:"庄子哲学最纯正的核心骨架", en:"The authentic philosophical core of Zhuangzi"} }`
  - `advanced`: `{ title: {zh:"《庄子集释》（郭庆藩）", en:"Collected Explanations of Zhuangzi"}, note: {zh:"融汇郭象注与成玄英疏的学术经典", en:"Definitive scholarly synthesis with Guo Xiang's commentary"} }`
- **`lineage`**:
  - `from`: `{ zh: "老子道家思想与杨朱贵己学说", en: "Laozi's Taoism & Yang Zhu's individualism" }`
  - `to`: `{ zh: "魏晋玄学、禅宗、海德格尔技术批判与当代反内卷思潮", en: "Xuanxue, Zen, Heidegger's critique of technology & anti-involution thought" }`
- **`quote`**: `{ zh: "人皆知有用之用，而莫知无用之用也。", en: "Everyone knows the usefulness of what is useful, but no one knows the usefulness of what is useless." }`
- **`modernInsight`**: `{ zh: "哲学与审美看似“无用”，却是防止你在功绩社会沦为单向度工具的“精神安全边际”。", en: "Philosophy and aesthetics seem 'useless,' yet they serve as the existential margin of safety against becoming a one-dimensional tool." }`

#### 04. 王阳明 (Wang Yangming)
- **`id`**: `"phil-wangyangming"`
- **`sectionNum`**: `"04"`
- **`name`**: `{ zh: "王阳明", en: "Wang Yangming" }`
- **`era`**: `{ zh: "1472—1529", en: "1472–1529" }`
- **`yearSort`**: `1472`
- **`theme`**: `'chinese'`
- **`tags`**: `[{zh:"心即理",en:"Mind is Principle"}, {zh:"知行合一",en:"Unity of Knowledge and Action"}, {zh:"致良知",en:"Extending Innate Moral Knowing"}]`
- **`oneLiner`**: `{ zh: "打破程朱理学外求教条、将认知与价值主体性彻底归还给个体生命体验的心学集大成者。", en: "Master of School of Mind who broke external dogmatism and restored subjectivity to lived unity of knowledge and action." }`
- **`coreIdeas`**:
  - `{ title: {zh:"心外无物，心外无理", en:"Mind is Principle"}, desc: {zh:"事物的意义与价值秩序并非孤立于认知主体之外，而是在心与物的交互关系中显现。", en:"Meaning and order do not exist in a vacuum outside the mind, but emerge through the mind's active engagement."} }`
  - `{ title: {zh:"知行合一，事上磨炼", en:"Unity of Knowledge & Action"}, desc: {zh:"未有知而不行者，知而不行只是未知；必须在具体现实困境与行动反馈中修正心性。", en:"To know and not to act is not yet to know; true cognition is forged through concrete real-world feedback."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "程朱理学主张向外“格竹穷理”，导致学者言行割裂、面对现实危机束手无策", en: "Orthodox Neo-Confucianism sought principles in external objects, causing a split between words and actions" }`
  - `argument`: `{ zh: "龙场悟道洞察“圣人之道，吾性自足”，“格物”实为匡正意念所在之事", en: "Enlightenment at Longchang: innate knowing is self-sufficient; investigating things means rectifying one's intentional actions" }`
  - `conclusion`: `{ zh: "在世俗事功中“事上磨炼、致良知”，实现内在主体性与外在行动闭环的绝对统一", en: "Cultivating innate knowing amidst worldly affairs to achieve a closed loop between inner clarity and outer action" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《传习录》（上卷·徐爱录）", en:"Instructions for Practical Living (Part I)"}, note: {zh:"最直接理解心即理与知行合一的对话录", en:"Accessible dialogues explaining Mind-is-Principle and Unity of Knowledge and Action"} }`
  - `advanced`: `{ title: {zh:"《王阳明全集》（〈大学问〉〈天泉证道记〉）", en:"Complete Works of Wang Yangming"}, note: {zh:"四句教与万物一体之仁的终极体系", en:"The Four Maxims and the ultimate ontology of forming one body with all things"} }`
- **`lineage`**:
  - `from`: `{ zh: "孟子性善论与陆九渊心学", en: "Mencius & Lu Jiuyuan's School of Mind" }`
  - `to`: `{ zh: "黄宗羲、梁启超、近代日本维新思想及现代实用主义行动哲学", en: "Huang Zongxi, Modern East Asian reform thought & Pragmatic action philosophy" }`
- **`quote`**: `{ zh: "知是行的主意，行是知的功夫；知是行之始，行是知之成。", en: "Knowledge is the direction of action, and action is the effort of knowledge; knowledge is the beginning of action, and action is the completion of knowledge." }`
- **`modernInsight`**: `{ zh: "完美印证 CPV 第5章与 Morris 卡片15：没有进入行动闭环与现实反馈的“懂得很多”，只是概念伪跃迁与脑内烟花。", en: "Directly validates CPV Ch.5 and Morris Card 15: 'knowing' without an action-feedback loop is merely conceptual pseudo-transition." }`

---

### 主题 B：西方认识论与语言科学哲学 (`theme: 'epistemology'`)

#### 05. 弗朗西斯·培根 (Francis Bacon)
- **`id`**: `"phil-bacon"`
- **`sectionNum`**: `"05"`
- **`name`**: `{ zh: "弗朗西斯·培根", en: "Francis Bacon" }`
- **`era`**: `{ zh: "1561—1626", en: "1561–1626" }`
- **`yearSort`**: `1561`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"经验主义之父",en:"Father of Empiricism"}, {zh:"四假相说",en:"Four Idols of the Mind"}, {zh:"科学归纳法",en:"Scientific Induction"}]`
- **`oneLiner`**: `{ zh: "剖析人类心智“四大假相”、以实验归纳法开启近代西方经验主义与科学革命的先驱。", en: "Pioneer of modern empiricism who diagnosed the 'Four Idols' of human bias and established scientific induction." }`
- **`coreIdeas`**:
  - `{ title: {zh:"四假相说（种族、洞穴、市场、剧场）", en:"The Four Idols"}, desc: {zh:"系统揭示人类因生物本能、个人位置偏狭、语言概念混乱与权威教条而产生的四大认知遮蔽。", en:"Systematically exposing cognitive distortions caused by human nature, personal cave-vision, linguistic confusion, and dogmatic authority."} }`
  - `{ title: {zh:"科学归纳法（蜜蜂式认知）", en:"True Induction (The Bee Analogy)"}, desc: {zh:"既不作盲目搬运的蚂蚁，也不作凭空吐丝的蜘蛛，而是像蜜蜂一样采集中外经验并用理性消化。", en:"Neither collecting blindly like ants nor spinning cobwebs from within like spiders, but digesting empirical data like bees."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "中世纪经院哲学沉迷于三段论文字游戏，脱离自然观察且无法产生新知识", en: "Medieval scholasticism trapped in sterile syllogisms detached from nature" }`
  - `argument`: `{ zh: "先清除心智中的四假相偏见，再通过三表法（存在表、差异表、程度表）进行受控实验归纳", en: "Purging the Four Idols of bias and applying structured empirical tables of presence, absence, and degree" }`
  - `conclusion`: `{ zh: "要命令自然就必须服从自然，“知识就是力量”", en: "Nature to be commanded must be obeyed; 'Knowledge is Power'" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《培根论说文集》", en:"Bacon's Essays"}, note: {zh:"凝练通透的世事洞察与经验智慧", en:"Incisive aphorisms on human nature, truth, and worldly wisdom"} }`
  - `advanced`: `{ title: {zh:"《新工具》（Novum Organum）", en:"Novum Organum"}, note: {zh:"西方近代认识论与经验主义的开山之作", en:"Foundational text of modern empirical epistemology"} }`
- **`lineage`**:
  - `from`: `{ zh: "批判亚里士多德《工具论》经院传统", en: "Critique of Aristotelian Scholastic Organon" }`
  - `to`: `{ zh: "洛克、贝克莱、休谟经验主义及芒格“人类误判心理学”", en: "Locke, Berkeley, Hume & Munger's Psychology of Human Misjudgment" }`
- **`quote`**: `{ zh: "知识就是力量。人类理解力不是干燥的光，而是受到了意志和情感的浸染。", en: "Knowledge is power. The human understanding is no dry light, but receives an infusion from the will and affections." }`
- **`modernInsight`**: `{ zh: "培根的“洞穴假相”即 CPV 的“位置投影”，“市场假相”即“Token 思维与语言低分辨率陷阱”。", en: "Bacon's 'Idols of the Cave' prefigure CPV's positional projection; 'Idols of the Marketplace' prefigure low-resolution token thinking." }`

#### 06. 勒内·笛卡尔 (René Descartes)
- **`id`**: `"phil-descartes"`
- **`sectionNum`**: `"06"`
- **`name`**: `{ zh: "勒内·笛卡尔", en: "René Descartes" }`
- **`era`**: `{ zh: "1596—1650", en: "1596–1650" }`
- **`yearSort`**: `1596`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"理性主义奠基",en:"Founder of Rationalism"}, {zh:"普遍怀疑",en:"Methodic Doubt"}, {zh:"第一性原理",en:"First Principles"}]`
- **`oneLiner`**: `{ zh: "以“我思故我在”确立现代认识论主体性、奠定近代科学“拆解—重构”方法论的西方近代哲学之父。", en: "Father of modern philosophy establishing epistemic subjectivity ('Cogito, ergo sum') and analytical deduction." }`
- **`coreIdeas`**:
  - `{ title: {zh:"普遍怀疑与我思故我在", en:"Methodic Doubt & The Cogito"}, desc: {zh:"怀疑一切感官经验与既有成见，唯独“正在怀疑/思考的我”这一主体活动不可被怀疑。", en:"Doubting all sensory appearances until reaching the indubitable bedrock of the thinking self."} }`
  - `{ title: {zh:"方法论四准则", en:"Four Rules of Method"}, desc: {zh:"绝不轻信、将复杂问题拆解至最小单元、由简入繁推演、全面检验无遗漏。", en:"Accept only clear truths, divide problems into smallest parts, build from simple to complex, and review completely."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "感官常欺骗我们，梦境与清醒难以绝对区分，传统知识大厦地基松动", en: "Senses deceive, dreams mimic waking life, and traditional knowledge lacks a secure foundation" }`
  - `argument`: `{ zh: "启用极限清零的“普遍怀疑”思想实验，寻找不可被恶魔假说摧毁的绝对阿基米德点", en: "Deploying radical methodic doubt to locate an unshakeable Archimedean point" }`
  - `conclusion`: `{ zh: "确立“我思故我在”的第一性原理，并以清晰分明的理性演绎重建知识体系", en: "Establishing 'I think, therefore I am' and reconstructing science via clear rational deduction" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《谈谈方法》", en:"Discourse on the Method"}, note: {zh:"必读的方法论四步骤，现代拆解思维源头", en:"Essential reading introducing the four rules of analytical inquiry"} }`
  - `advanced`: `{ title: {zh:"《第一哲学沉思集》", en:"Meditations on First Philosophy"}, note: {zh:"认识论转向与心物二元论的核心经典", en:"Core classic of the epistemological turn and mind-body dualism"} }`
- **`lineage`**:
  - `from`: `{ zh: "柏拉图理念论与欧几里得几何公理法", en: "Platonic rationalism & Euclidean geometry" }`
  - `to`: `{ zh: "斯宾诺莎、莱布尼茨、康德及现代“第一性原理”系统工程思维", en: "Spinoza, Leibniz, Kant & modern First-Principles engineering" }`
- **`quote`**: `{ zh: "我思故我在。（Cogito, ergo sum.）", en: "I think, therefore I am. (Cogito, ergo sum.)" }`
- **`modernInsight`**: `{ zh: "当陷入信息过载与低质 KOL 观点轰炸时，启动笛卡尔式的“模型清零”，把复杂问题拆解到不可再分的底层物理与结构约束。", en: "Amidst information overload, apply Cartesian methodic doubt to strip away noise and decompose problems into fundamental structural constraints." }`

#### 07. 巴鲁赫·斯宾诺莎 (Baruch Spinoza)
- **`id`**: `"phil-spinoza"`
- **`sectionNum`**: `"07"`
- **`name`**: `{ zh: "巴鲁赫·斯宾诺莎", en: "Baruch Spinoza" }`
- **`era`**: `{ zh: "1632—1677", en: "1632–1677" }`
- **`yearSort`**: `1632`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"神即自然",en:"Deus sive Natura"}, {zh:"知识通往自由",en:"Freedom through Understanding"}, {zh:"情绪几何学",en:"Geometry of Emotions"}]`
- **`oneLiner`**: `{ zh: "以几何学公理体系统一“神即自然”、揭示“理解情绪生成机制即可摆脱情绪奴役”的纯粹哲人。", en: "The noble rationalist uniting God and Nature, proving that understanding the causal structure of emotions liberates us from bondage." }`
- **`coreIdeas`**:
  - `{ title: {zh:"神即自然（实体一元论）", en:"Deus sive Natura (Substance Monism)"}, desc: {zh:"宇宙间只有一个无限完满的自然实体，万物皆处于严密的因果必然性网络之中。", en:"There is only one infinite Substance (Nature/God), and all things unfold within a deterministic causal network."} }`
  - `{ title: {zh:"从被动情感到主动理性", en:"From Passive Affects to Active Reason"}, desc: {zh:"痛苦与恨源于对原因的无知（被动观念）；当我们形成关于情绪因果结构的清晰观念时，情绪就不再奴役我们。", en:"Suffering stems from inadequate ideas; the moment we form a clear structural understanding of an emotion's cause, it ceases to enslave us."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "人类常因无知而将自然人格化（迷信），并在爱恨恐惧等被动情绪中备受煎熬", en: "Humans project superstitious teleology onto nature and suffer in bondage to passive emotions" }`
  - `argument`: `{ zh: "运用几何学公理演绎法，像研究点线面一样冷静解剖人类爱、恨、嫉妒与权力欲的生成链条", en: "Analyzing human passions—love, hate, envy—with the objective rigor of geometric lines and planes" }`
  - `conclusion`: `{ zh: "自由不是打破因果律的任性，而是对必然性结构的深刻洞察与对神的理智之爱", en: "Freedom is not arbitrary caprice, but the rational comprehension of structural necessity" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《知性改进论》", en:"Treatise on the Emendation of the Intellect"}, note: {zh:"阐述认识四个等级与追寻至善的心路历程", en:"Accessible guide to the four levels of cognition and the pursuit of true good"} }`
  - `advanced`: `{ title: {zh:"《伦理学》（Ethica）", en:"Ethics, Demonstrated in Geometrical Order"}, note: {zh:"以定义、公理、定理写就的理性主义巅峰巨著", en:"Monumental masterpiece written in Euclidean definitions, axioms, and propositions"} }`
- **`lineage`**:
  - `from`: `{ zh: "克服笛卡尔心物二元割裂", en: "Overcoming Cartesian mind-body dualism" }`
  - `to`: `{ zh: "歌德、黑格尔、爱因斯坦、德勒兹及现代认知行为疗法(CBT)", en: "Goethe, Hegel, Einstein, Deleuze & modern Cognitive Behavioral Therapy" }`
- **`quote`**: `{ zh: "不要哭，不要笑，不要诅咒，而是要理解。", en: "Do not weep; do not wax indignant. Understand." }`
- **`modernInsight`**: `{ zh: "这正是 CPV 结构之镜与 Morris 卡片16（情绪稳定是认知能力）的哲学源头：当你逆向恢复出对方为何失控、自己为何焦虑的“结构生成链”时，痛苦当场消散。", en: "The philosophical root of CPV and emotional regulation: once you reverse-engineer the structural generative chain of an emotion, its grip dissolves." }`

#### 08. 乔治·贝克莱 (George Berkeley)
- **`id`**: `"phil-berkeley"`
- **`sectionNum`**: `"08"`
- **`name`**: `{ zh: "乔治·贝克莱", en: "George Berkeley" }`
- **`era`**: `{ zh: "1685—1753", en: "1685–1753" }`
- **`yearSort`**: `1685`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"经验主义",en:"Empiricism"}, {zh:"存在即被感知",en:"Esse est Percipi"}, {zh:"感觉材料",en:"Sense-Data"}]`
- **`oneLiner`**: `{ zh: "将洛克经验主义推向逻辑极致、证明人类永远只接触“感觉材料投影”而非独立物质实体的哲人。", en: "Pushing empiricism to its logical limit: we never encounter raw matter, only bundles of perceptual projections." }`
- **`coreIdeas`**:
  - `{ title: {zh:"存在就是被感知（Esse est percipi）", en:"To Be is to Be Perceived"}, desc: {zh:"我们所谓的“苹果”只是红、圆、甜、香等感觉观念的集合，离开感知主体去谈论不可感知的“物质基质”是自我矛盾的。", en:"What we call an object is a collection of sensory ideas; positing an unperceivable 'material substratum' is a contradiction."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "洛克承认一切知识源于感觉经验，却又保留了不可感知的“客观物质实体（第一性质基质）”", en: "Locke claimed all knowledge comes from experience yet retained an unknowable 'material substratum'" }`
  - `argument`: `{ zh: "严格审视感知过程：形状、大小、运动与颜色冷热一样，皆随观察者位置与感官结构而变", en: "Demonstrating that primary qualities (shape, motion) are just as mind-dependent and position-relative as secondary qualities" }`
  - `conclusion`: `{ zh: "彻底剔除独断的“物质实体”假设，人面对的永远是被感知到的观念投影", en: "Eliminating dogmatic 'matter'—cognition only ever interfaces with perceived projections" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《海拉斯与菲洛诺斯的三篇对话》", en:"Three Dialogues between Hylas and Philonous"}, note: {zh:"以优美辩论体拆解“物质独断论”", en:"Lucid dialogues dismantling naïve materialism"} }`
  - `advanced`: `{ title: {zh:"《人类知识原理》", en:"A Treatise Concerning the Principles of Human Knowledge"}, note: {zh:"经验主义观念论的核心论证体系", en:"Systematic treatise of empirical idealism"} }`
- **`lineage`**:
  - `from`: `{ zh: "推进培根、洛克经验主义", en: "Advancing Bacon and Locke's empiricism" }`
  - `to`: `{ zh: "休谟、康德、马赫要素一元论与 CPV 第一章“投影理论”", en: "Hume, Kant, Ernst Mach & CPV Chapter 1 Projection Theory" }`
- **`quote`**: `{ zh: "存在就是被感知或感知。（Esse est percipi aut percipere.）", en: "To be is to be perceived or to perceive. (Esse est percipi aut percipere.)" }`
- **`modernInsight`**: `{ zh: "直接印证《CPV原理》第一章：人从来没有直接见过“裸现实”，你坚信不疑的“客观事实”，只是现实抵达你感官后的有损投影。", en: "Directly parallels CPV Chapter 1: humans never face 'naked reality'—what we call objective fact is already a lossy sensory projection." }`

#### 09. 大卫·休谟 (David Hume)
- **`id`**: `"phil-hume"`
- **`sectionNum`**: `"09"`
- **`name`**: `{ zh: "大卫·休谟", en: "David Hume" }`
- **`era`**: `{ zh: "1711—1776", en: "1711–1776" }`
- **`yearSort`**: `1711`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"温和怀疑论",en:"Mitigated Skepticism"}, {zh:"因果幻象",en:"Illusion of Causality"}, {zh:"休谟法则",en:"Hume's Guillotine (Is-Ought)"}]`
- **`oneLiner`**: `{ zh: "用剃刀般锋利的怀疑论刺破“必然因果幻象”与“归纳法神话”、严格划开事实与价值的经验主义巨匠。", en: "Skeptical master piercing the illusion of necessary causality, the problem of induction, and the Is-Ought gap." }`
- **`coreIdeas`**:
  - `{ title: {zh:"因果关系只是心理习惯的联想", en:"Causality as Customary Association"}, desc: {zh:"我们在经验中只看到事件A与事件B的“恒常联结（先后发生）”，从未直接观察到“必然因果力”本身。", en:"Experience only shows constant conjunction between A and B, never a necessary causal power."} }`
  - `{ title: {zh:"休谟法则（事实与价值的鸿沟）", en:"Is-Ought Problem (Fact vs. Value)"}, desc: {zh:"从纯描述性的“是（事实判断）”绝不能直接逻辑推导出规范性的“应该（价值判断）”。", en:"One cannot logically deduce an 'ought' (normative value) purely from an 'is' (descriptive fact)."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "如果一切知识严格来源于感官印象，那么普遍必然的科学因果律与归纳法根基何在？", en: "If all knowledge derives strictly from sensory impressions, what justifies universal causal laws and induction?" }`
  - `argument`: `{ zh: "解剖归纳推理：过去太阳每天升起，逻辑上并不能保证明天太阳必然升起（缺乏先验必然性）", en: "Analyzing induction: past regularities cannot logically guarantee future necessity without circularity" }`
  - `conclusion`: `{ zh: "保持温和怀疑论的谦逊，将经验或然性与独断形而上学彻底剥离", en: "Adopt mitigated skepticism, separating empirical probability from dogmatic metaphysics" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《人类理解研究》《道德原则研究》", en:"An Enquiry Concerning Human Understanding"}, note: {zh:"小播推荐新手首选，比《人性论》更精炼易读", en:"Recommended entry text—more concise and accessible than the Treatise"} }`
  - `advanced`: `{ title: {zh:"《人性论》（A Treatise of Human Nature）", en:"A Treatise of Human Nature"}, note: {zh:"休谟认识论、情感论与道德哲学的完整大厦", en:"Comprehensive edifice of Humean epistemology, passions, and morals"} }`
- **`lineage`**:
  - `from`: `{ zh: "洛克、贝克莱经验主义的逻辑终点", en: "Logical culmination of Lockean and Berkeleyan empiricism" }`
  - `to`: `{ zh: "直接唤醒康德，启发波普尔证伪主义、塔勒布《黑天鹅》与芒格概率分布思维", en: "Awakened Kant; inspired Popper's falsificationism, Taleb's Black Swan & Munger's probabilistic thinking" }`
- **`quote`**: `{ zh: "习惯是人生的伟大指南。", en: "Custom, then, is the great guide of human life." }`
- **`modernInsight`**: `{ zh: "对应小播《因果幻象》与《事实判断与价值判断》：警惕把“先后发生”当成“必然因果”（如赚钱了就以为自己方法对），严格剥离事实与情绪立场。", en: "Guard against the illusion of causality (mistaking sequential luck for skill) and rigorously separate factual description from value projection." }`

#### 10. 伊曼努尔·康德 (Immanuel Kant)
- **`id`**: `"phil-kant"`
- **`sectionNum`**: `"10"`
- **`name`**: `{ zh: "伊曼努尔·康德", en: "Immanuel Kant" }`
- **`era`**: `{ zh: "1724—1804", en: "1724–1804" }`
- **`yearSort`**: `1724`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"哥白尼式革命",en:"Copernican Revolution"}, {zh:"先验范畴",en:"Transcendental Categories"}, {zh:"人是目的",en:"Humanity as an End"}]`
- **`oneLiner`**: `{ zh: "完成认识论“哥白尼式革命”、证明人类通过“先验感性直观与知性范畴”主动建构现象界的哲学巅峰。", en: "Architect of the Copernican Revolution in philosophy: the mind actively structures experience through transcendental categories." }`
- **`coreIdeas`**:
  - `{ title: {zh:"认识论的哥白尼式革命（人为自然立法）", en:"Copernican Turn in Epistemology"}, desc: {zh:"不是知识必须符合对象，而是对象必须符合主体的先天认识结构（时空感性直观 + 十二知性范畴）才能成为被我们认识的现象。", en:"Objects must conform to our innate cognitive apparatus (space, time, and categories of understanding) to become knowable phenomena."} }`
  - `{ title: {zh:"现象界与物自体 / 道德绝对命令", en:"Phenomena vs. Thing-in-Itself & Categorical Imperative"}, desc: {zh:"理性只能认识被范畴加工过的“现象”，无法企及“物自体”；在实践理性中，永远把人当作目的而非仅仅当作工具。", en:"Reason knows only structured phenomena, not the Thing-in-Itself; morally, always treat humanity as an end, never merely as a means."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "唯理论有必然性却无新内容（空洞），经验论有新内容却无必然性（休谟怀疑论危机）", en: "Rationalism is necessary but empty; empiricism is informative but lacks necessity (Hume's crisis)" }`
  - `argument`: `{ zh: "提出“先天综合判断如何可能”：后天经验提供杂乱的感觉材料，主体的先天范畴提供整理材料的模具", en: "Synthesizing both: experience supplies raw sensory content, while innate transcendental categories supply the structural form" }`
  - `conclusion`: `{ zh: "感性无知性则盲，知性无感性则空；划定理性边界，为科学奠基并为道德自由留出空间", en: "Thoughts without content are empty, intuitions without concepts are blind; bounding reason to make room for moral freedom" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《道德形而上学基础》《任何一种能够作为科学出现的未来形而上学导论》", en:"Groundwork of the Metaphysics of Morals & Prolegomena"}, note: {zh:"小播剥洋葱式推荐：进入三大批判前的最佳阶梯", en:"Essential stepping stones before tackling the Three Critiques"} }`
  - `advanced`: `{ title: {zh:"“三大批判”（《纯粹理性批判》《实践理性批判》《判断力批判》）", en:"The Three Critiques (Pure Reason, Practical Reason, Judgment)"}, note: {zh:"真、善、美三大哲学领域的划时代巨著", en:"Epoch-making trilogy covering Truth, Goodness, and Beauty/Teleology"} }`
- **`lineage`**:
  - `from`: `{ zh: "综合笛卡尔/莱布尼茨唯理论与洛克/休谟经验论", en: "Synthesizing Continental Rationalism and British Empiricism" }`
  - `to`: `{ zh: "费希特、谢林、黑格尔、罗尔斯正义论及现代建构主义认知心理学（图式理论）", en: "German Idealism, Rawlsian Justice & modern Constructivist Cognitive Schema Theory" }`
- **`quote`**: `{ zh: "有两样东西，人们越是经常持久地对之凝神思索，它们就越是使内心充满常新而日增的惊奇和敬畏：我头上的星空和心中的道德律。", en: "Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me." }`
- **`modernInsight`**: `{ zh: "康德的“先天认识框架”就是 CPV 与芒格所说的“既有认知模型”：你以为你在看客观世界，其实你看到的永远是被你脑内“模具”加工后的输出；同时谨防掠夺型人格将人工具化。", en: "Kant's transcendental apparatus is the philosophical ancestor of mental models: you never see raw reality, only what your cognitive schema formats." }`

#### 11. 费迪南·德·索绪尔 (Ferdinand de Saussure)
- **`id`**: `"phil-saussure"`
- **`sectionNum`**: `"11"`
- **`name`**: `{ zh: "费迪南·德·索绪尔", en: "Ferdinand de Saussure" }`
- **`era`**: `{ zh: "1857—1913", en: "1857–1913" }`
- **`yearSort`**: `1857`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"能指与所指",en:"Signifier & Signified"}, {zh:"结构主义之父",en:"Father of Structuralism"}, {zh:"差分关系",en:"Differential Relations"}]`
- **`oneLiner`**: `{ zh: "解剖语言符号“能指与所指”二元结构、揭示意义并非实体本质而是由系统内部差异网络生成的结构主义之父。", en: "Founder of structuralism revealing that signs consist of arbitrary signifiers and signifieds, and meaning arises purely from systemic relational differences." }`
- **`coreIdeas`**:
  - `{ title: {zh:"能指（Signifier）与所指（Signified）的任意性", en:"Arbitrariness of the Sign"}, desc: {zh:"语言符号由音响形象（能指）和概念（所指）构成，二者的联结没有天然必然性，而是社会约定俗成的产物。", en:"A sign unites a sound-image (signifier) and a concept (signified); their bond is arbitrary and socially constructed."} }`
  - `{ title: {zh:"语言是形式而非实质，意义源于系统差异", en:"Meaning from Systemic Difference"}, desc: {zh:"在语言系统中“只有差异而没有正面的固定项”，一个词的意义取决于它在整个符号结构网络中与其他词的位置关系。", en:"In language there are only differences without positive terms; meaning is a function of structural position."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "传统观念认为世界先有固定独立的事物概念，语言只是给事物贴上的命名标签", en: "Traditional nomenclature view assumed pre-existing concepts to which language merely attaches labels" }`
  - `argument`: `{ zh: "区分“语言（Langue，底层系统结构）”与“言语（Parole，具体表层说话行为）”，采取共时性结构分析", en: "Distinguishing Langue (underlying systemic structure) from Parole (surface speech acts) via synchronic analysis" }`
  - `conclusion`: `{ zh: "是语言的差异结构切分并塑造了人类的思想认知，开启20世纪结构主义革命", en: "Linguistic structure carves up and shapes thought itself, launching the 20th-century Structuralist revolution" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《普通语言学教程》（导论与第一编）", en:"Course in General Linguistics (Part I)"}, note: {zh:"能指、所指、语言与言语的核心定义", en:"Core definitions of signifier, signified, langue, and parole"} }`
  - `advanced`: `{ title: {zh:"《普通语言学教程》全本及手稿", en:"Course in General Linguistics (Complete)"}, note: {zh:"现代语言学、符号学与结构主义的总源头", en:"Fountainhead of modern linguistics, semiotics, and structuralism"} }`
- **`lineage`**:
  - `from`: `{ zh: "超越19世纪历史比较语言学", en: "Transcending 19th-century historical philology" }`
  - `to`: `{ zh: "列维-斯特劳斯、拉康、罗兰·巴特、鲍德里亚及 Nagi Yan“结构理论与语言投影”", en: "Lévi-Strauss, Lacan, Barthes, Baudrillard & Nagi Yan's Structural Projection Theory" }`
- **`quote`**: `{ zh: "在语言里，一切都可以归结为差异，一切也都可以归结为组合。", en: "In language, everything boils down to differences, and everything boils down to combinations." }`
- **`modernInsight`**: `{ zh: "完美对应《思想认知》卡片3、6、11、13：单看表层的“言语行为（Token）”毫无意义，必须看懂底层的“结构语法（Langue）”；实体本身就是关系差异网络的稳定解。", en: "Directly underpins Cognitive Cards 3, 6, 11, and 13: surface speech (tokens) means nothing without decoding the underlying relational structure (Langue)." }`

#### 12. 约翰·杜威 (John Dewey)
- **`id`**: `"phil-dewey"`
- **`sectionNum`**: `"12"`
- **`name`**: `{ zh: "约翰·杜威", en: "John Dewey" }`
- **`era`**: `{ zh: "1859—1952", en: "1859–1952" }`
- **`yearSort`**: `1859`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"实用主义",en:"Pragmatism"}, {zh:"批判旁观者理论",en:"Critique of Spectator Theory"}, {zh:"做中学",en:"Learning by Doing"}]`
- **`oneLiner`**: `{ zh: "批判传统哲学“知识旁观者理论”、将思维与知识重新定义为人类改造环境、解决现实困境之动态工具的实用主义宗师。", en: "Pragmatist master dismantling the 'spectator theory of knowledge' and redefining thought as an active instrument for problem-solving." }`
- **`coreIdeas`**:
  - `{ title: {zh:"告别“知识的旁观者理论”", en:"Rejecting the Spectator Theory of Knowledge"}, desc: {zh:"传统哲学误把认知者当成置身事外的“冷眼旁观者”；实际上人永远嵌在环境互动中，真知源于“行动—承受结果反馈”的闭环。", en:"Knock down the myth of the detached observer; cognition is an active transaction of doing and undergoing consequences."} }`
  - `{ title: {zh:"反省思维五步法（工具主义）", en:"Five Steps of Reflective Thinking"}, desc: {zh:"思维始于真实的困惑情境（旧习惯失效）➔ 界定问题 ➔ 提出假设模型 ➔ 逻辑推演 ➔ 在行动实践中检验修正。", en:"Thought begins in genuine perplexity ➔ locate problem ➔ form hypothesis ➔ reason consequences ➔ test in action."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "古希腊以来的哲学贬低实践行动，妄想在变化的世界之外寻求永恒不变的绝对静态确定性", en: "Classical philosophy disparaged practice, seeking static certainty outside the flux of experience" }`
  - `argument`: `{ zh: "结合达尔文生物演化论，证明心智是有机体与环境持续耦合、解决失衡张力的适应性工具", en: "Integrating Darwinian evolution to show mind as an adaptive organ for resolving organism-environment tensions" }`
  - `conclusion`: `{ zh: "概念与理论不是终极教条，而是作用于现实的假说工具，必须接受实践后果的检验", en: "Theories are operational instruments validated by their real-world consequences, not static dogmas" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《我们如何思维》", en:"How We Think"}, note: {zh:"培养独立批判与反省思维的实操名著", en:"Practical classic on cultivating reflective and critical thinking"} }`
  - `advanced`: `{ title: {zh:"《确定性的寻求》《经验与自然》", en:"The Quest for Certainty & Experience and Nature"}, note: {zh:"深刻解构传统认识论旁观者迷思的哲学巨著", en:"Profound critique of the spectator theory of knowledge"} }`
- **`lineage`**:
  - `from`: `{ zh: "黑格尔过程辩证法、达尔文演化论与皮尔士/詹姆斯实用主义", en: "Hegel, Darwin & Peirce/James Pragmatism" }`
  - `to`: `{ zh: "胡适、现代教育改革、双环学习理论及 Nagi《思维的坍塌》/ DAN KOE“在构建项目中学习”", en: "Hu Shi, Double-Loop Learning, Nagi's 'Understanding is Operational' & DAN KOE's project-based mastery" }`
- **`quote`**: `{ zh: "我们并不是从经验中学习，我们是从对经验的反思中学习。思考始于叉路口。", en: "We do not learn from experience... we learn from reflecting on experience. Thinking begins in what may fairly enough be called a forked-road situation." }`
- **`modernInsight`**: `{ zh: "直接呼应《思想认知》卡片15（Morris：认知的作用性）与卡片17（思维始于旧点子不再管用时）：别做囤积金句的“思想旁观者”，把认知投入现实战场接受反馈。", en: "Echoes Morris Card 15 and Nagi Card 17: stop being a conceptual spectator—true cognition is an operational tool tested in real-world friction." }`

#### 13. 路德维希·维特根斯坦 (Ludwig Wittgenstein)
- **`id`**: `"phil-wittgenstein"`
- **`sectionNum`**: `"13"`
- **`name`**: `{ zh: "路德维希·维特根斯坦", en: "Ludwig Wittgenstein" }`
- **`era`**: `{ zh: "1889—1951", en: "1889–1951" }`
- **`yearSort`**: `1889`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"语言游戏",en:"Language-Games"}, {zh:"家族相似性",en:"Family Resemblance"}, {zh:"遵从规则",en:"Rule-Following"}, {zh:"哲学如治疗",en:"Philosophy as Therapy"}]`
- **`oneLiner`**: `{ zh: "两度重塑20世纪哲学、在《哲学研究》中揭示“意义即使用”与“遵从规则的公共实践性”、致力于消除心智撞上语言界限之“肿块”的哲学奇才。", en: "Genius who reshaped 20th-century thought twice, showing in Philosophical Investigations that meaning is use and curing the 'bumps' caused by running against the limits of language." }`
- **`coreIdeas`**:
  - `{ title: {zh:"意义即使用与语言游戏（《哲学研究》§1, §28, §43, §49）", en:"Meaning is Use & Language-Games (§1, §28, §43, §49)"}, desc: {zh:"为事物命名还什么都没有完成，就像在棋盘上摆好棋子并非走了一步棋（§49）；一个词的含义不是它背后的神秘心理意象，而是它在特定生活形式与“语言游戏”中的具体用法；回到粗糙的地面上来（§107）！", en:"Naming is merely preparation for description, like putting pieces on the board before making a move (§49); the meaning of a word is its use in the language-game (§43)—back to the rough ground (§107)!"} }`
  - `{ title: {zh:"家族相似性（§67-71）与遵从规则（§154, §186, §206-241, §268-309）", en:"Family Resemblance (§67-71) & Rule-Following (§154, §206-241, §309)"}, desc: {zh:"概念如“游戏”并无单一共同本质，而是像家族成员般重叠相似（§69-71）；“理解不是一个心灵过程”（§154），“遵从规则”是一种社会共同行为参照系与生活形式的一致（§206, §219, §241），人不能“私自”遵从规则（右手不能把钱赠给左手 §268）；哲学的目标是给苍蝇指出飞出捕蝇瓶的出路（§309）。", en:"Concepts share overlapping 'family resemblances' rather than a rigid boundary (§69-71); understanding is not a hidden mental process (§154), and rule-following is an agreement in form of life (§219, §241), not a private ceremony (§268); philosophy's aim is to show the fly the way out of the fly-bottle (§309)."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "传统哲学（含其前期《逻辑哲学论》）戴着“理想秩序”的眼镜（§103），迷恋追求如水晶般纯粹的单一本质（§98-105），导致语言脱离日常实践空转（§132）", en: "Traditional philosophy wore the spectacles of an 'ideal crystalline order' (§98-105), causing language to go on holiday and spin in a vacuum (§132)" }`
  - `argument`: `{ zh: "通过“指物定义两个核桃（§28）”“游戏概念边界（§69-71）”“数列+2展开（§146-187）”“右手送钱给左手与私人日记符号E（§268-270）”“疼痛与石头（§284-293）”等思想实验，刺破私有心灵过程神话（§154, §306-314）", en: "Deploying thought experiments—ostensive definition (§28), blurred game boundaries (§69-71), number series (§146-187), private diary 'E' (§268-270), and pain (§284-293)—to dismantle the myth of private mental processes (§154, §308)" }`
  - `conclusion`: `{ zh: "本质在语法中道出自身（§371）；哲学只是把一切摆到那里（§126），诊治问题就像诊治一种疾病（§255），让伪哲学困惑彻底消失（§133）", en: "Essence is expressed by grammar (§371); philosophy simply puts everything before us (§126) and treats a question like an illness (§255) so pseudo-problems completely disappear (§133)" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《蓝皮书和褐皮书》《逻辑哲学论》", en:"The Blue and Brown Books & Tractatus Logico-Philosophicus"}, note: {zh:"前期图像论名言“凡不可说的，应当保持沉默”与后期过渡讲义", en:"Early picture theory ('Whereof one cannot speak, thereof one must be silent') and transitional lectures"} }`
  - `advanced`: `{ title: {zh:"《哲学研究》（上海世纪出版集团·陈嘉映译本）", en:"Philosophical Investigations (Trans. Chen Jiaying / Anscombe)"}, note: {zh:"本站视觉装帧致敬原型！必读 §1-49、§67-133、§146-241、§268-371、§449-592", en:"The visual inspiration of this site! Focus on §§1–49, §§67–133, §§146–241, §§268–371, and §§449–592"} }`
- **`lineage`**:
  - `from`: `{ zh: "继承并颠覆弗雷格、罗素逻辑原子主义与奥古斯丁语言图画论（并受拉姆西与斯拉法启发）", en: "Inheriting and overturning Frege, Russell & Augustine's picture theory (catalyzed by Ramsey and Sraffa)" }`
  - `to`: `{ zh: "日常语言学派、库恩范式论、当代AI大语言模型语义哲学及 Nagi《语言的分辨率与协议》", en: "Ordinary Language Philosophy, Kuhn, LLM semantics & Nagi's 'Resolution of Language & Protocols'" }`
- **`quote`**: `{ zh: "你的哲学目标是什么？——给苍蝇指出飞出捕蝇瓶的出路。（§309） / 根本别把理解想成“心灵过程”！（§154） / 我遵从规则时并不选择。我盲目地遵从规则。（§219）", en: "What is your aim in philosophy?—To港元 show the fly the way out of the fly-bottle. (§309) / Try not to think of understanding as a 'mental process' at all! (§154) / When I obey a rule, I do not choose. I obey the rule blindly. (§219)" }`
- **`modernInsight`**: `{ zh: "直接打通《哲学研究》原典与《思想认知》卡片1/6/11/17：① 维氏“不要把理解想成神秘心灵过程，应用始终是理解的标准（§146, §154）”= Nagi 卡片17“Understanding isn't knowing—it's becoming operational”；② 维氏“语言是工具，概念引导我们进行探索（§569-570）”= 芒格与 CPV 的结构协议观。", en: "Directly bridges Philosophical Investigations (§146, §154, §569) with Nagi Cards 1/6/11/17: understanding is not a private mental state, but an operational capacity tested in public application." }`

#### 14. 卡尔·波普尔 (Karl Popper)
- **`id`**: `"phil-popper"`
- **`sectionNum`**: `"14"`
- **`name`**: `{ zh: "卡尔·波普尔", en: "Karl Popper" }`
- **`era`**: `{ zh: "1902—1994", en: "1902–1994" }`
- **`yearSort`**: `1902`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"证伪主义",en:"Falsificationism"}, {zh:"猜想与反驳",en:"Conjectures & Refutations"}, {zh:"开放社会",en:"The Open Society"}]`
- **`oneLiner`**: `{ zh: "以“可证伪性”划定科学与伪科学边界、警告“能解释一切的理论等于什么都没解释”的批判理性主义巨擘。", en: "Champion of critical rationalism who defined science by falsifiability and warned that a theory explaining everything explains nothing." }`
- **`coreIdeas`**:
  - `{ title: {zh:"可证伪性原则（Falsifiability）", en:"Criterion of Falsifiability"}, desc: {zh:"有限的观察永远无法绝对“证实”一个普遍理论，但一个反例即可将其“证伪”；敢于暴露自己被证伪的条件，才是真科学的标志。", en:"No number of white swans can verify a universal claim, but a single black swan falsifies it; scientific theories must take the risk of being refutable."} }`
  - `{ title: {zh:"猜想与反驳（探照灯理论 vs 水桶理论）", en:"Searchlight Theory of Mind & Trial-and-Error"}, desc: {zh:"大脑不是被动装经验的“水桶”，而是主动投射假设的“探照灯”；知识通过“问题 $P_1 \rightarrow$ 试探性理论 $TT \rightarrow$ 消除错误 $EE \rightarrow$ 新问题 $P_2$”进化。", en:"The mind is not a passive bucket of data, but an active searchlight casting hypotheses tested through error-elimination ($P_1 \rightarrow TT \rightarrow EE \rightarrow P_2$)."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "休谟证明经验归纳法无法保证普遍必然性，同时占星术等伪科学总能从事后找到“证实”自己的案例", en: "Hume proved induction cannot yield certainty, while pseudosciences easily find post-hoc 'confirmations' everywhere" }`
  - `argument`: `{ zh: "利用逻辑上的不对称性（肯定后件无效，否定后件有效 $A \rightarrow B, \neg B \vdash \neg A$），将科学检验重心从“找正面证据”彻底扭转为“严酷证伪测试”", en: "Leveraging logical asymmetry (modus tollens): shifting validation from seeking confirmations to surviving severe refutation tests" }`
  - `conclusion`: `{ zh: "一切人类知识皆是可错的试探性猜想；拒绝历史决定论与封闭独断，捍卫开放社会", en: "All human knowledge is fallible conjecture; reject unfalsifiable dogmas to defend the Open Society" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《猜想与反驳》《无尽的探索》", en:"Conjectures and Refutations"}, note: {zh:"最清晰阐述证伪主义形成史的导论", en:"Lucid account of how falsificationism and critical rationalism emerged"} }`
  - `advanced`: `{ title: {zh:"《科学发现的逻辑》《开放社会及其敌人》", en:"The Logic of Scientific Discovery & The Open Society and Its Enemies"}, note: {zh:"20世纪科学哲学与政治哲学双璧", en:"Twin pillars of 20th-century philosophy of science and political philosophy"} }`
- **`lineage`**:
  - `from`: `{ zh: "解决休谟归纳问题并批判逻辑实证主义", en: "Solving Hume's induction problem & critiquing Logical Positivism" }`
  - `to`: `{ zh: "索罗斯反身性理论、芒格“确认偏误/逆向证伪”及 Nagi 卡片22《争论的原理》", en: "Soros's Reflexivity, Munger's Inversion/Confirmation Bias & Nagi Card 22 'Principles of Argument'" }`
- **`quote`**: `{ zh: "一个能够解释一切可能发生之事的理论，实际上什么也没有解释。错误中可能隐藏着通往真理的道路。", en: "A theory which is not refutable by any conceivable event is non-scientific. Irrefutability is not a virtue of a theory, but a vice." }`
- **`modernInsight`**: `{ zh: "直接构成《思想认知》卡片22（争论的原理）与《芒格》总解析洞见三的理论地基：“一个能解释一切的模型，就是一个永远无法被现实纠正的自洽闭环”。每次下判断前先问：出现什么证据能证明我错了？", en: "The direct bedrock of Nagi Card 22 and Munger's Latticework warning: a model that explains away every counterexample is a self-sealing trap impervious to reality." }`

#### 15. 约翰·卡普托 (John D. Caputo)
- **`id`**: `"phil-caputo"`
- **`sectionNum`**: `"15"`
- **`name`**: `{ zh: "约翰·卡普托", en: "John D. Caputo" }`
- **`era`**: `{ zh: "1940—", en: "1940–" }`
- **`yearSort`**: `1940`
- **`theme`**: `'epistemology'`
- **`tags`**: `[{zh:"后现代真理观",en:"Postmodern Truth"}, {zh:"事件哲学",en:"Philosophy of the Event"}, {zh:"诠释学转向",en:"Hermeneutic Turn"}]`
- **`oneLiner`**: `{ zh: "梳理人类真理观从“前现代上帝、现代理性到后现代事件”的三次跃迁、以诠释学消解绝对教条的当代思想家。", en: "Contemporary thinker mapping the evolution of truth from God and Reason to the open 'Event' and hermeneutic plurality." }`
- **`coreIdeas`**:
  - `{ title: {zh:"人类真理观的三阶段演进", en:"Three Eras of Truth"}, desc: {zh:"前现代（奥古斯丁：上帝即真理）➔ 现代启蒙（笛卡尔/康德：理性与科学法则即真理）➔ 后现代（大写唯一真理崩塌，小写的复数真理与“事件”浮现）。", en:"Pre-modern (God as Truth) ➔ Modern Enlightenment (Universal Reason as Truth) ➔ Postmodern (plurality of truths and the unexpected Event)."} }`
  - `{ title: {zh:"后现代三大转向（诠释学、语言学、范式转向）", en:"Hermeneutic, Linguistic & Paradigm Turns"}, desc: {zh:"我们从来不是在无立场真空里看事实，任何“事实”的呈现都预设了观察者的诠释框架（Hermeneutics）。", en:"Facts never appear in a vacuum; every observation is already mediated by a linguistic and hermeneutic paradigm."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "现代性妄图用单一、普世、绝对的“大写真理（Truth）”抹平世界的复杂性与多元视角", en: "Modernity sought a single, monolithic 'Truth' that erased historical context and perspectival diversity" }`
  - `argument`: `{ zh: "融合海德格尔、伽达默尔诠释学与德里达解构主义，区分僵化的“名字/制度（Name）”与鲜活涌现的“事件（Event）”", en: "Synthesizing Gadamerian hermeneutics and Derridean deconstruction to contrast rigid institutional 'Names' with disruptive 'Events'" }`
  - `conclusion`: `{ zh: "承认人类认知的有限性与诠释性，在“知其不可知”的敬畏中对未来和新事件保持开放", en: "Embrace interpretive humility and remain structurally open to the incoming Event" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《真理：一种后现代导论》", en:"Truth: The Search for Wisdom in the Postmodern Age"}, note: {zh:"小播核心精读文本，30分钟打通事实与真相", en:"Core text in Xiaobo's notebook: a brilliant 30-minute bridge into postmodern truth"} }`
  - `advanced`: `{ title: {zh:"《激进诠释学》《事件的软弱》", en:"Radical Hermeneutics & The Weakness of God"}, note: {zh:"事件哲学与宗教/伦理诠释学代表作", en:"Definitive works on Radical Hermeneutics and the Event"} }`
- **`lineage`**:
  - `from`: `{ zh: "克尔凯郭尔、海德格尔、伽达默尔与德里达", en: "Kierkegaard, Heidegger, Gadamer & Derrida" }`
  - `to`: `{ zh: "当代后现代认识论、多元视角主义与 Nagi 卡片19/21", en: "Contemporary pluralist epistemology & Nagi Cards 19/21" }`
- **`quote`**: `{ zh: "后现代不是否定真理，而是怀疑那些声称自己已经把绝对真理装进口袋的人。", en: "Postmodernism does not mean there is no truth; it means no one has the absolute truth in their pocket." }`
- **`modernInsight`**: `{ zh: "对应小播《事实、观点与立场》及 Morris 卡片15（愤怒的X平台为何产生多种观点）：同一事件之所以在舆论场分裂成无数版本，是因为不同人用各自的诠释学框架切取了现实的不同投影面。", en: "Explains why viral news fractures into polarized narratives: different observers project distinct hermeneutic frameworks onto the same complex reality." }`

---

### 主题 C：存在、人生智慧与社会批判 (`theme: 'critique'`)

#### 16. 苏格拉底 (Socrates)
- **`id`**: `"phil-socrates"`
- **`sectionNum`**: `"16"`
- **`name`**: `{ zh: "苏格拉底", en: "Socrates" }`
- **`era`**: `{ zh: "前469—前399", en: "469–399 BCE" }`
- **`yearSort`**: `-469`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"认识你自己",en:"Know Thyself"}, {zh:"精神助产术",en:"Maieutics (Socratic Method)"}, {zh:"无知之知",en:"Wisdom of Ignorance"}]`
- **`oneLiner`**: `{ zh: "将哲学从自然天穹拉回人类灵魂、以辩证诘问刺穿日常盲目自洽、用生命践行“未经审视的人生不值得过”的西方哲学奠基人。", en: "Founding figure of Western philosophy who brought inquiry down from the heavens to the human soul, piercing false certainty through dialectic." }`
- **`coreIdeas`**:
  - `{ title: {zh:"自知其无知（无知之知）", en:"I Know That I Know Nothing"}, desc: {zh:"世人最大的愚蠢在于“不知道自己不知道”；真正的智慧始于识别自身认知模型的边界（能力圈起点）。", en:"The greatest ignorance is mistaking opinion for knowledge; true wisdom begins by recognizing the boundary of one's cognitive model."} }`
  - `{ title: {zh:"苏格拉底反讽与精神助产术", en:"Socratic Irony & Maieutics"}, desc: {zh:"不直接灌输现成答案，而是通过连续追问“笨问题”暴露对方旧观念的内在矛盾，迫使旧自洽断裂、生出真知。", en:"Rather than lecturing, ask probing questions that expose internal contradictions in dogmatic beliefs, midwifing genuine insight."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "雅典城邦智者学派盛行相对主义诡辩，政客与工匠皆自以为通晓正义与美德，实则活在盲目成见中", en: "Athenian sophists and citizens claimed expertise in virtue and justice while living in unexamined prejudice" }`
  - `argument`: `{ zh: "在街头开展对话诘问（Elenchus），顺着对方的定义推导出自相矛盾的荒谬结论，引发认知震荡", en: "Conducting public cross-examination (elenchus) to show that conventional definitions collapse into contradiction" }`
  - `conclusion`: `{ zh: "唯有持续审视自己的灵魂与底层假设，才能从意见（Token）跃迁至真知（结构）", en: "Only through relentless self-examination can one transition from opinion (doxa) to structural truth (episteme)" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《苏格拉底的申辩》《克里同篇》（柏拉图著）", en:"Apology & Crito (by Plato)"}, note: {zh:"见证苏格拉底直面死刑审判时的精神高度", en:"Immortal courtroom defense of the examined life"} }`
  - `advanced`: `{ title: {zh:"《理想国》（第一卷）《美诺篇》《斐多篇》", en:"Republic (Book I), Meno & Phaedo"}, note: {zh:"精神助产术与灵魂不朽的经典对话", en:"Classic dialogues demonstrating maieutics and dialectical inquiry"} }`
- **`lineage`**:
  - `from`: `{ zh: "批判古希腊自然哲学与智者派诡辩", en: "Critiquing Pre-Socratic naturalism and Sophistry" }`
  - `to`: `{ zh: "柏拉图、亚里士多德、斯多葛学派、芒格“能力圈”与佐伊卡片24《笨问题比正确答案更重要》", en: "Plato, Aristotle, Stoicism, Munger's Circle of Competence & Zuoyi Card 24 'Courage to Ask Dumb Questions'" }`
- **`quote`**: `{ zh: "未经审视的人生是不值得过的。我唯一知道的，就是我一无所知。", en: "The unexamined life is not worth living. I know one thing: that I know nothing." }`
- **`modernInsight`**: `{ zh: "直接赋能佐伊卡片24（笨问题比正确答案更重要）与芒格能力圈：在所有人都蒙着眼跟风的时代，敢于问出那个“把天聊死”的底层笨问题，是对抗盲目自洽的第一把手术刀。", en: "Directly empowers Zuoyi Card 24 and Munger's Circle of Competence: asking the 'awkward foundational question' is the sharpest scalpel against collective delusion." }`

#### 17. 伊壁鸠鲁 (Epicurus)
- **`id`**: `"phil-epicurus"`
- **`sectionNum`**: `"17"`
- **`name`**: `{ zh: "伊壁鸠鲁", en: "Epicurus" }`
- **`era`**: `{ zh: "前341—前270", en: "341–270 BCE" }`
- **`yearSort`**: `-341`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"身体无痛灵魂无扰",en:"Aponia & Ataraxia"}, {zh:"欲望三分法",en:"Tripartite Classification of Desires"}, {zh:"祛魅死亡",en:"Demystifying Death"}]`
- **`oneLiner`**: `{ zh: "被世人误解最深的“花园哲人”——以理性裁剪虚荣欲望、消解死亡恐惧，在简朴、独立与友谊中构筑心灵绝对宁静。", en: "The Garden philosopher who demystified death and pruned vain desires to achieve bodily health (aponia) and mental tranquility (ataraxia)." }`
- **`coreIdeas`**:
  - `{ title: {zh:"快乐的真谛：身体的无痛苦与灵魂的无纷扰", en:"True Pleasure: Aponia and Ataraxia"}, desc: {zh:"真正的享乐主义绝非声色犬马的放纵，而是摆脱肉体疼痛（Aponia）与精神焦虑（Ataraxia）后的宁静自足状态。", en:"Authentic pleasure is not sensual indulgence, but the absence of physical pain and the freedom of the soul from turmoil."} }`
  - `{ title: {zh:"欲望三分法与死亡祛魅", en:"Tripartite Desires & No Fear of Death"}, desc: {zh:"将欲望分为：①自然且必要（温饱健康、友谊哲学）、②自然但不必要（奢华美食）、③既不自然也不必要（权力、名声、虚荣攀比）；“死亡与我们无关，我们存在时死亡尚未来临，死亡来临时我们已不存在”。", en:"Divide desires into natural/necessary, natural/unnecessary, and vain/empty; 'Death is nothing to us: when we exist, death is not; when death exists, we are not.'"} }`
- **`logicChain`**:
  - `premise`: `{ zh: "古希腊城邦衰落，世人陷入对神灵惩罚、死亡终结的恐惧以及对无尽财富名望的焦虑追逐", en: "Hellenistic anxiety driven by fear of gods, dread of death, and endless chasing of status" }`
  - `argument`: `{ zh: "以原子唯物论证明灵魂随肉体消散而无死后地狱，以欲望审计砍掉由“社会意见”制造的虚假欲望", en: "Using atomism to dispel afterlife terrors and auditing desires to sever socially manufactured vanity" }`
  - `conclusion`: `{ zh: "隐退于花园共同体，靠极低物质门槛、哲学沉思与真挚友谊即可获得媲美神明的稳固幸福", en: "Living simply with philosophical friends yields unshakeable tranquility with minimal external dependency" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《致美诺西斯的信》（论幸福生活）", en:"Letter to Menoeceus"}, note: {zh:"短短数千字道尽死亡、欲望与幸福的终极解法", en:"A concise masterpiece on death, desire, and the art of happiness"} }`
  - `advanced`: `{ title: {zh:"《主要教义》《梵蒂冈语录》及卢克莱修《物性论》", en:"Principal Doctrines & Lucretius's De Rerum Natura"}, note: {zh:"伊壁鸠鲁学派完整自然观与伦理纲领", en:"Complete ethical maxims and atomic philosophy of nature"} }`
- **`lineage`**:
  - `from`: `{ zh: "德谟克利特原子论与昔兰尼学派改造", en: "Democritean atomism" }`
  - `to`: `{ zh: "近代启蒙唯物主义、马克思博士论文、叔本华及当代极简主义/反消费主义", en: "Enlightenment materialism, Karl Marx's doctoral thesis & modern anti-consumerism" }`
- **`quote`**: `{ zh: "如果一件事没有让你身体不再疼痛、灵魂不再纷扰，那你为什么还需要它？", en: "Nothing is enough for the man to whom enough is too little. Death is nothing to us." }`
- **`modernInsight`**: `{ zh: "结合佐伊卡片7（穷人与富人的距离与安静）与卡片25（配得感与自身身体逻辑连接）：用伊壁鸠鲁的“欲望三分法”砍掉一切为了演给别人看的虚荣消费（第三类欲望），把资源集中在能带来“安静、健康、边界与自由”的第一类核心需求上。", en: "Use Epicurus's desire audit to slash vain status consumption and invest in what truly secures quiet, boundaries, bodily health, and autonomy." }`

#### 18. 让-雅克·卢梭 (Jean-Jacques Rousseau)
- **`id`**: `"phil-rousseau"`
- **`sectionNum`**: `"18"`
- **`name`**: `{ zh: "让-雅克·卢梭", en: "Jean-Jacques Rousseau" }`
- **`era`**: `{ zh: "1712—1778", en: "1712–1778" }`
- **`yearSort`**: `1712`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"人生而自由",en:"Man is Born Free"}, {zh:"社会契约",en:"The Social Contract"}, {zh:"自爱与虚荣",en:"Amour de soi vs. Amour-propre"}]`
- **`oneLiner`**: `{ zh: "在启蒙理性高歌猛进时率先敲响“文明异化”警钟、剖析私有制与“社会比较（虚荣）”如何为自由套上精神枷锁的思想巨匠。", en: "Prophetic critic of Enlightenment hubris who exposed how private property and social comparison ('amour-propre') forged the chains of modern alienation." }`
- **`coreIdeas`**:
  - `{ title: {zh:"自爱（Amour de soi）与自私/虚荣（Amour-propre）的异化", en:"Amour de soi vs. Amour-propre"}, desc: {zh:"自然状态的人只有健康的生存本能“自爱”与同情心；进入社会后，人开始活在别人的评价眼光中，滋生出必须比别人优越的“比较性自恋/虚荣（Amour-propre）”，沦为嫉妒与奴役的囚徒。", en:"Natural self-love (amour de soi) is healthy self-preservation; society breeds comparative vanity (amour-propre), trapping humans in envy and the gaze of others."} }`
  - `{ title: {zh:"公意（General Will）与社会契约", en:"The General Will & Social Contract"}, desc: {zh:"“人生而自由，却无往不在枷锁之中”；唯有缔结主权在民、人人服从共同体“公意（即服从自己为自己立的法）”的契约，才能将自然自由升华为道德与公民自由。", en:"'Man is born free, and everywhere he is in chains'; true civic freedom is recovered only when citizens obey laws they prescribe to themselves through the General Will."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "近代科学艺术与物质文明高度繁荣，但人的心灵却愈发虚伪、不平等且丧失了自由本真", en: "Modern arts, sciences, and wealth progressed, yet human souls grew more deceitful, unequal, and enslaved" }`
  - `argument`: `{ zh: "追溯不平等的起源：第一个圈地宣称“这是我的”的人开启了私有制 ➔ 分工与比较催生虚荣与依附 ➔ 富人用欺骗性法律将不平等永久合法化", en: "Tracing inequality: enclosure of private property ➔ social comparison and dependency ➔ deceptive laws locking in elite privilege" }`
  - `conclusion`: `{ zh: "对内通过自然主义教育（《爱弥儿》）守护本真主体性，对外通过基于公意的《社会契约论》重建平等政治结构", en: "Cultivate authentic subjectivity inwardly (Emile) and reconstruct legitimate egalitarian protocols outwardly (The Social Contract)" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《论人类不平等的起源和基础》（小播100位哲学家加长版首推）", en:"Discourse on the Origin and Basis of Inequality Among Men"}, note: {zh:"小播优先精读No.1！解剖阶层分化与心理异化的手术刀", en:"Xiaobo Priority #1! A surgical dissection of inequality and psychological alienation"} }`
  - `advanced`: `{ title: {zh:"《社会契约论》《爱弥儿》《忏悔录》", en:"The Social Contract & Emile"}, note: {zh:"现代政治哲学、教育哲学与自我剖析文学的三座丰碑", en:"Three monuments of political philosophy, educational philosophy, and modern autobiography"} }`
- **`lineage`**:
  - `from`: `{ zh: "批判霍布斯、洛克自然法传统与伏尔泰启蒙乐观主义", en: "Critiquing Hobbes, Locke & Voltaire's Enlightenment optimism" }`
  - `to`: `{ zh: "康德“人是目的”、马克思异化理论、罗尔斯正义论、霍耐特承认理论与芒格“8.嫉妒倾向/16.对比误判”", en: "Kant, Marx, Rawls, Honneth & Munger's Envy/Contrast Misjudgment tendencies" }`
- **`quote`**: `{ zh: "人生而自由，却无往不在枷锁之中。自以为是其他一切的主人的人，反而比其他一切更是奴隶。", en: "Man is born free, and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they." }`
- **`modernInsight`**: `{ zh: "卢梭关于“自爱 vs 比较性虚荣（Amour-propre）”的区分，一针见血地解释了佐伊卡片4（雌竞/赢学）、Morris 卡片13（停止研究别人专注自己）与芒格第8条“嫉妒倾向”：你90%的痛苦都源于把自我价值建立在“与身边人的相对位置比较”上。", en: "Rousseau's distinction between authentic self-love and comparative vanity (amour-propre) explains why 90% of modern misery stems from outsourcing self-worth to relative status comparison." }`

#### 19. 格奥尔格·黑格尔 (G.W.F. Hegel)
- **`id`**: `"phil-hegel"`
- **`sectionNum`**: `"19"`
- **`name`**: `{ zh: "格奥尔格·黑格尔", en: "G.W.F. Hegel" }`
- **`era`**: `{ zh: "1770—1831", en: "1770–1831" }`
- **`yearSort`**: `1770`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"辩证法",en:"Dialectics (Aufhebung)"}, {zh:"主奴辩证法",en:"Master-Slave Dialectic"}, {zh:"绝对精神",en:"Absolute Spirit"}]`
- **`oneLiner`**: `{ zh: "打破非黑即白的静态知性思维、以“正—反—合”矛盾扬弃（Aufhebung）与主奴承认辩证法统摄人类精神演化的体系巨匠。", en: "Grand architect of dialectics showing that truth is a dynamic process of contradiction and sublation (Aufhebung), and self-consciousness requires mutual recognition." }`
- **`coreIdeas`**:
  - `{ title: {zh:"辩证法与“扬弃（Aufhebung）”", en:"Dialectical Sublation (Aufhebung)"}, desc: {zh:"“真理是全体”，任何孤立静态的知性概念（正题）都会暴露出内在矛盾并走向其对立面（反题），最终在保留合理内核、克服片面性的更高结构（合题）中实现螺旋跃迁（如把擅长之事做到极致从而统一“擅长”与“喜欢”）。", en:"Truth is the whole; every static concept (thesis) generates internal contradiction (antithesis), driving a leap into a higher integrative structure (synthesis/sublation)."} }`
  - `{ title: {zh:"精神现象学三阶段与主奴辩证法", en:"Phenomenology of Spirit & Master-Slave Dialectic"}, desc: {zh:"精神历经主观精神（意识、自我意识、理性）、客观精神与绝对精神；自我意识只有通过“被另一个自我意识所承认”才能确立，奴隶在对畏惧的克服与改造事物的劳动实践中获得了真正的独立主体性。", en:"Spirit unfolds through Subjective, Objective, and Absolute stages; self-consciousness requires recognition by another, and through formative labor the bondsman achieves genuine autonomy."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "康德留下“现象与物自体、理性与现实”的二元割裂，普通知性思维习惯于将对立面视为水火不容的静态死局", en: "Kant left a dualistic split between phenomenon and noumenon, while ordinary understanding treats opposites as rigid deadlocks" }`
  - `argument`: `{ zh: "将否定性与矛盾引入本体论核心：矛盾不是思维的错误，而是推动一切生命、意识与文明历史自我运动、自我超越的内在张力引擎", en: "Placing negativity and contradiction at the heart of reality: contradiction is not a logical error, but the engine of all historical and cognitive evolution" }`
  - `conclusion`: `{ zh: "绝对精神通过逻辑阶段、自然阶段与精神阶段自我展开，世界历史即是自由意识的进展史", en: "Spirit evolves through alienation and sublation toward self-knowing freedom across world history" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《小逻辑》（贺麟译本）《历史哲学》", en:"Shorter Logic & Philosophy of History"}, note: {zh:"小播优先精读No.4/7/8！理解辩证法与绝对精神的最佳入口", en:"Xiaobo Priority #4/7/8! Best gateway into dialectical logic and historical spirit"} }`
  - `advanced`: `{ title: {zh:"《精神现象学》（邓晓芒句读/译本）《法哲学原理》", en:"Phenomenology of Spirit & Elements of the Philosophy of Right"}, note: {zh:"主奴辩证法、意识发展史与现代伦理国家理论巅峰", en:"Master-Slave dialectic and the pinnacle of modern social philosophy"} }`
- **`lineage`**:
  - `from`: `{ zh: "古希腊赫拉克利特流变说与康德、费希特、谢林德国古典哲学", en: "Heraclitus, Kant, Fichte & Schelling" }`
  - `to`: `{ zh: "马克思、霍耐特、齐泽克、Nagi 卡片5/9（张力是演化原动力/旧自洽断裂）及 DAN KOE 卡片10（容纳矛盾观点）", en: "Marx, Honneth, Žižek, Nagi's Tension-Driven Evolution & DAN KOE's holding contradictory ideas" }`
- **`quote`**: `{ zh: "密涅瓦的猫头鹰要等黄昏到来，才会起飞。凡是合乎理性的东西都是现实的，凡是现实的东西都是合乎理性的。", en: "The owl of Minerva spreads its wings only with the falling of the dusk. What is rational is actual and what is actual is rational." }`
- **`modernInsight`**: `{ zh: "黑格尔的“正—反—合”就是《CPV原理》第5章“旧自洽（正）➔ 现实冲突坍塌（反）➔ 新协议闭环（合）”的哲学母体；同时注意 Morris 卡片15指出的误区：黑格尔名言绝非让你美化现状的“存在即合理（即正确）”，而是指事物背后必有其生成的必然结构链条。", en: "Hegel's dialectic is the mother of CPV's transition loop (Old Coherence ➔ Collapse ➔ New Structural Loop); also corrects the popular misreading of 'what is actual is rational'—it means every phenomenon has an underlying structural generative chain, not that every existing flaw is morally right." }`

#### 20. 卡尔·马克思 (Karl Marx)
- **`id`**: `"phil-marx"`
- **`sectionNum`**: `"20"`
- **`name`**: `{ zh: "卡尔·马克思", en: "Karl Marx" }`
- **`era`**: `{ zh: "1818—1883", en: "1818–1883" }`
- **`yearSort`**: `1818`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"历史唯物主义",en:"Historical Materialism"}, {zh:"异化劳动",en:"Alienated Labor"}, {zh:"改变世界",en:"Transforming the World"}]`
- **`oneLiner`**: `{ zh: "将黑格尔辩证法扎根于物质生产关系、深刻解剖资本结构如何造成“人的异化”与商品拜物教的批判哲学巨擘。", en: "Revolutionary thinker grounding dialectics in material production relations and exposing alienated labor and commodity fetishism." }`
- **`coreIdeas`**:
  - `{ title: {zh:"历史唯物主义（生产力与生产关系结构）", en:"Historical Materialism"}, desc: {zh:"“不是人们的意识决定人们的存在，相反，是人们的社会存在决定人们的意识”；人的本质不是单个人所固有的抽象物，在其现实性上，它是一切社会关系的总和。", en:"It is not consciousness that determines social being, but social being that determines consciousness; the human essence is the ensemble of social relations."} }`
  - `{ title: {zh:"异化劳动与商品拜物教", en:"Alienated Labor & Commodity Fetishism"}, desc: {zh:"在资本分工结构下，劳动者同自己的劳动产品、生命活动、类本质以及他人相异化；人与人之间的社会关系被颠倒掩盖为“物与物（金钱、商品符号）”的统治关系。", en:"Under capitalist division of labor, workers are alienated from their product, act of production, species-being, and each other, while social relations masquerade as relations between commodities."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "德国唯心主义把历史看作纯粹观念的运动，费尔巴哈旧唯物主义则把人看作脱离社会实践的被动直观客体", en: "Idealism reduced history to pure thought, while Feuerbach's materialism treated humans as passive, ahistorical objects" }`
  - `argument`: `{ zh: "以“感性物质实践”为基石，深入政治经济学解剖剩余价值生产机制、资本积累回路与阶级位置结构", en: "Taking material praxis as bedrock to dissect surplus value extraction, capital accumulation loops, and class structure" }`
  - `conclusion`: `{ zh: "揭穿资产阶级意识形态的永恒自然假象，呼吁从解释世界走向通过改变结构来实现人的自由全面发展", en: "Piercing ideological illusions to transform structural relations toward the free and full development of every individual" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《关于费尔巴哈的提纲》《1844年经济学哲学手稿》（小播精读No.2/9）", en:"Theses on Feuerbach & Economic and Philosophic Manuscripts of 1844"}, note: {zh:"小播优先精读No.2/9！短短十一提纲与异化劳动理论精华", en:"Xiaobo Priority #2/9! Eleven explosive theses and the core theory of alienation"} }`
  - `advanced`: `{ title: {zh:"《德意志意识形态》《资本论》（第一卷）", en:"The German Ideology & Capital (Vol. I)"}, note: {zh:"历史唯物主义与资本主义系统结构解剖的巅峰之作", en:"Definitive works on historical materialism and the structural anatomy of capital"} }`
- **`lineage`**:
  - `from`: `{ zh: "批判性扬弃黑格尔辩证法、费尔巴哈唯物论与英国古典政治经济学", en: "Sublating Hegel, Feuerbach & British Classical Political Economy" }`
  - `to`: `{ zh: "法兰克福学派（阿多诺、马尔库塞、霍耐特）、鲍德里亚、齐泽克及本库《人是关系的涌现》《认知的作用性》《母亲角色的异化》", en: "Frankfurt School, Baudrillard, Žižek, Lifesinger Card 13, Morris Card 15 & Zuoyi Card 2" }`
- **`quote`**: `{ zh: "哲学家们只是用不同的方式解释世界，问题在于改变世界。", en: "The philosophers have only interpreted the world, in various ways; the point, however, is to change it." }`
- **`modernInsight`**: `{ zh: "马克思《提纲》第6条（人是社会关系的总和）与第11条（解释世界 vs 改变世界），直接构成了《思想认知》卡片13（玉伯：人是关系的涌现）与卡片15（Morris：真正的认知不只是解释世界，更是作用于世界）的哲学总根！", en: "Marx's Theses 6 and 11 directly anchor Cognitive Card 13 ('Humans as Emergence of Relations') and Card 15 ('Cognition Must Act Upon the World, Not Merely Explain It')." }`

#### 21. 弗里德里希·尼采 (Friedrich Nietzsche)
- **`id`**: `"phil-nietzsche"`
- **`sectionNum`**: `"21"`
- **`name`**: `{ zh: "弗里德里希·尼采", en: "Friedrich Nietzsche" }`
- **`era`**: `{ zh: "1844—1900", en: "1844–1900" }`
- **`yearSort`**: `1844`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"视角主义",en:"Perspectivism"}, {zh:"重估一切价值",en:"Transvaluation of All Values"}, {zh:"酒神精神",en:"Dionysian Affirmation"}]`
- **`oneLiner`**: `{ zh: "率先诊断现代性“上帝已死”后的虚无主义危机、提出“没有事实只有阐释（视角主义）”、呼唤以生命力创造自身价值的哲学锤子。", en: "Prophet diagnosing modern nihilism after the 'death of God,' proclaiming perspectivism ('no facts, only interpretations') and self-overcoming." }`
- **`coreIdeas`**:
  - `{ title: {zh:"视角主义（Perspectivism）", en:"Perspectivism"}, desc: {zh:"“没有事实，只有阐释”；不存在脱离认知主体位置与生命意志驱动的“无立场绝对观察”，每一次认知都是特定视角下的结构投射。", en:"'There are no facts, only interpretations'; all knowing is perspectival, rooted in a specific life-position and drive."} }`
  - `{ title: {zh:"主人道德 vs 奴隶道德 / 积极虚无主义", en:"Master vs. Slave Morality & Amor Fati"}, desc: {zh:"弱者因现实无力而通过“怨恨（Ressentiment）”发明出把软弱、贫穷包装成“善良美德”的奴隶道德；强者直面生命无常与荒谬，热爱命运（Amor Fati），亲手创造价值。", en:"Resentment (ressentiment) disguises weakness and poverty as 'moral virtue'; true vitality affirms life's tragic flux and creates its own values."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "柏拉图与基督教编造的“彼岸世界/终极目的”在科学启蒙下崩塌（上帝已死），现代人陷入“活着没意思”的虚无主义深渊", en: "Collapse of metaphysical/religious teleology ('God is dead') plunges modern humanity into meaninglessness and nihilism" }`
  - `argument`: `{ zh: "以谱系学锤子敲击传统道德偶像，揭穿“怨恨心理”如何将逃避竞争美化为道德高尚，同时批判叔本华式的消极退缩", en: "Using genealogical critique to expose how ressentiment moralizes impotence, while rejecting Schopenhauerian pessimism" }`
  - `conclusion`: `{ zh: "从“你应当（骆驼）”走向“我要（狮子）”再到“生命游戏与创造（婴儿）”，在酒神式的生命体验中完成自我超越", en: "Evolving from the Camel ('Thou shalt') to the Lion ('I will') to the Child (creative play), affirming life as an aesthetic process" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《悲剧的诞生》《偶像的黄昏》", en:"The Birth of Tragedy & Twilight of the Idols"}, note: {zh:"理解日神/酒神精神与锤子式哲学批判的最佳起点", en:"Best entry into Apollonian/Dionysian aesthetics and genealogical critique"} }`
  - `advanced`: `{ title: {zh:"《查拉图斯特拉如是说》《论道德的谱系》《权力意志》", en:"Thus Spoke Zarathustra & On the Genealogy of Morality"}, note: {zh:"精神三变、怨恨谱系学与视角主义的核心原典", en:"Core texts on the Three Metamorphoses, ressentiment, and perspectivism"} }`
- **`lineage`**:
  - `from`: `{ zh: "古希腊悲剧精神与对苏格拉底、叔本华的批判性超越", en: "Pre-Socratic tragic vitality & critique of Socrates and Schopenhauer" }`
  - `to`: `{ zh: "存在主义（海德格尔、萨特、加缪）、福柯权力谱系学、Nagi 卡片1/21（位置投影）与 Morris 卡片14/15/16", en: "Existentialism, Foucault, Nagi's Positional Projection & Morris Cards 14/15/16" }`
- **`quote`**: `{ zh: "没有事实，只有阐释。每一个不曾起舞的日子，都是对生命的辜负。知道为什么而活的人，便能生存。", en: "There are no facts, only interpretations. He who has a why to live for can bear almost any how." }`
- **`modernInsight`**: `{ zh: "三重跨库共振：① 尼采视角主义 = CPV“位置决定投影”；② 尼采对“奴隶道德怨恨”的剖析 = Morris 卡片14/15“把贫穷解释成善良、把对金钱竞争的不屑包装成精神超越，实则是替能力不足找理由”；③ 佐伊卡片3提醒：汲取尼采的思想锋芒，但切勿浪漫化他晚年的精神崩溃代价。", en: "Triple resonance: (1) Perspectivism = CPV positional projection; (2) Ressentiment = Morris's critique of disguising incompetence as moral superiority; (3) Zuoyi Card 3's warning: value Nietzsche's insight without romanticizing his mental breakdown." }`

#### 22. 赫伯特·马尔库塞 (Herbert Marcuse)
- **`id`**: `"phil-marcuse"`
- **`sectionNum`**: `"22"`
- **`name`**: `{ zh: "赫伯特·马尔库塞", en: "Herbert Marcuse" }`
- **`era`**: `{ zh: "1898—1979", en: "1898–1979" }`
- **`yearSort`**: `1898`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"单向度的人",en:"One-Dimensional Man"}, {zh:"虚假需求",en:"False Needs"}, {zh:"消费主义规训",en:"Consumerist Pacification"}]`
- **`oneLiner`**: `{ zh: "揭露现代技术与消费社会如何通过制造“虚假需求”与“操作性语言”消解人的批判否定能力、将人驯化为快乐奴隶的法兰克福学派巨匠。", en: "Frankfurt School critic exposing how affluent technological society manufactures 'false needs' and operational language to pacify critical thought." }`
- **`coreIdeas`**:
  - `{ title: {zh:"真实需求 vs 虚假需求（False Needs）", en:"True vs. False Needs"}, desc: {zh:"发达工业社会通过广告、娱乐与算法将统治利益内化为个体的“虚假需求”（按照广告去放松、去爱、去恨、去消费），让人在买买买与刷屏的快感中丧失反抗与独立思考的“第二向度（否定与超越向度）”。", en:"Affluent society implants 'false needs' via media and advertising—relaxing, loving, and consuming as prescribed—erasing the second dimension of critical negation."} }`
  - `{ title: {zh:"单向度的语言（语言的闭合）", en:"Closing of the Universe of Discourse"}, desc: {zh:"公共语言被简化为口号、缩写与情绪标签，概念丧失了历史张力与思辨深度，使人无法用语言去思考现有结构之外的可能性。", en:"Language is flattened into operational slogans and emotional tokens, preventing minds from conceiving alternatives to the status quo."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "现代资本主义不再仅靠暴力贫困压迫工人，反而提供丰裕物质与感官娱乐，但人却更加同质化与顺从", en: "Advanced industrial society no longer relies solely on brute poverty, yet individuals grow increasingly conformist amidst material abundance" }`
  - `argument`: `{ zh: "结合马克思异化论与弗洛伊德精神分析，解剖技术理性与大众传媒如何实施“压抑性去升华”，收编一切反叛力量", en: "Synthesizing Marx and Freud to show how technological rationality and mass media enact 'repressive desublimation'" }`
  - `conclusion`: `{ zh: "唤醒“大拒绝（Great Refusal）”，冲破虚假需求与单向度语言的意识形态闭环，夺回人的批判主体性", en: "Enact the 'Great Refusal' against false needs and flattened discourse to reclaim critical subjectivity" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《单向度的人》（导言与第1、4章，小播精读No.5/100/219）", en:"One-Dimensional Man (Intro, Ch. 1 & 4)"}, note: {zh:"小播消费主义与语言陷阱系列核心必读原典！", en:"Core text for Xiaobo's series on consumerism and linguistic traps!"} }`
  - `advanced`: `{ title: {zh:"《爱欲与文明》《理性与革命》", en:"Eros and Civilization & Reason and Revolution"}, note: {zh:"弗洛伊德马克思主义与黑格尔否定辩证法经典", en:"Synthesis of Freudian psychoanalysis and Hegelian critical theory"} }`
- **`lineage`**:
  - `from`: `{ zh: "黑格尔、马克思、胡塞尔、海德格尔与弗洛伊德", en: "Hegel, Marx, Heidegger & Freud" }`
  - `to`: `{ zh: "鲍德里亚《消费社会》、德波《景观社会》、Nagi 卡片6/18（广告微型诈骗与低分辨率语言）及佐伊卡片16/19", en: "Baudrillard, Debord, Nagi Cards 6/18 & Zuoyi Cards 16/19" }`
- **`quote`**: `{ zh: "自由的选择主人，这并没有消除主人和奴隶。在虚假的需求中，人们在毁灭中认出自己的灵魂，在商品中认出自己的生命。", en: "Free election of masters does not abolish the masters or the slaves. The people recognize themselves in their commodities; they find their soul in their automobile, hi-fi set, split-level home." }`
- **`modernInsight`**: `{ zh: "马尔库塞对“虚假需求与单向度语言”的批判，与 Nagi 卡片6（广告是L1-L7认知剥削链）、卡片11（Token思维）、Morris 卡片15（被算法爆款改造形状）及小播《网络语言正在驯化我们的大脑》《Labubu情绪消费》严丝合缝。", en: "Directly illuminates Nagi's critique of advertising exploitation and token thinking, Morris's critique of algorithmic conditioning, and Xiaobo's analysis of emotional consumption." }`

#### 23. 约翰·罗尔斯 (John Rawls)
- **`id`**: `"phil-rawls"`
- **`sectionNum`**: `"23"`
- **`name`**: `{ zh: "约翰·罗尔斯", en: "John Rawls" }`
- **`era`**: `{ zh: "1921—2002", en: "1921–2002" }`
- **`yearSort`**: `1921`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"无知之幕",en:"Veil of Ignorance"}, {zh:"作为公平的正义",en:"Justice as Fairness"}, {zh:"差异原则",en:"Difference Principle"}]`
- **`oneLiner`**: `{ zh: "设计“无知之幕”思想实验、以程序正义与“差异原则”刺破优绩主义傲慢、重塑20世纪当代政治哲学的泰斗。", en: "Giant of political philosophy who designed the 'Veil of Ignorance' to establish Justice as Fairness and pierce meritocratic hubris." }`
- **`coreIdeas`**:
  - `{ title: {zh:"原初状态与“无知之幕（Veil of Ignorance）”", en:"Original Position & Veil of Ignorance"}, desc: {zh:"要想制定真正公平的社会规则（协议），所有立法参与者必须站在“无知之幕”背后——暂时屏蔽掉自己现实中的阶层、财富、天赋智商、性别与家庭背景，因为不知道自己揭开幕布后会沦为最底层还是最顶层，理性人必然会选择保护最弱者底线的规则。", en:"To design fair rules, parties must stand behind a 'Veil of Ignorance'—blind to their own class, wealth, intelligence, and birth—ensuring no one tailors the protocol to favor their personal position."} }`
  - `{ title: {zh:"正义二原则（平等自由优先 + 机会公平与差异原则）", en:"Two Principles of Justice & Difference Principle"}, desc: {zh:"① 每个人享有平等的基本自由；② 社会经济不平等只有在满足“职务向所有人公平开放”且“必须使社会中最不利地位者的利益最大化（差异原则/最大最小规则 Maximin）”时才具有正当性——因为天生的智商与优渥家境也是“自然与社会的偶然彩票”，不具备道德上的天然独占权。", en:"Basic liberties must be equal; inequalities are permissible only if attached to offices open to all and if they work to the maximum benefit of the least advantaged (Difference Principle), since natural talent and birth are morally arbitrary lotteries."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "功利主义为了“最大多数人的总利益最大化”可以牺牲少数弱者的基本权利，而放任自由主义（诺齐克）则忽视了起点天赋与家庭的巨大不公", en: "Utilitarianism sacrifices minorities for aggregate utility, while laissez-faire libertarianism ignores the arbitrary lottery of birth and talent" }`
  - `argument`: `{ zh: "升级卢梭、康德社会契约论，引入博弈论“无知之幕”思想实验，强制剥离参与者因自身“位置（Position）”产生的自利偏见", en: "Upgrading the social contract via the Veil of Ignorance thought experiment to neutralize positional self-serving bias" }`
  - `conclusion`: `{ zh: "正义是社会制度的首要美德；构建兼顾自由效率与底层托底的现代宪政协议", en: "Justice is the first virtue of social institutions; establishing a structural protocol that balances liberty with a floor for the vulnerable" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《作为公平的正义：正义新论》", en:"Justice as Fairness: A Restatement"}, note: {zh:"罗尔斯晚年亲自浓缩的精华讲义，最适合入门", en:"Rawls's own concise restatement of his core framework—ideal for beginners"} }`
  - `advanced`: `{ title: {zh:"《正义论》（A Theory of Justice）《政治自由主义》", en:"A Theory of Justice & Political Liberalism"}, note: {zh:"小播高频人物Top3（10期专题）！20世纪政治哲学圣经", en:"Xiaobo Top-3 featured philosopher (10 episodes)! The bible of 20th-century political philosophy"} }`
- **`lineage`**:
  - `from`: `{ zh: "继承洛克、卢梭、康德社会契约论并批判功利主义", en: "Locke, Rousseau & Kantian social contract; critiquing Utilitarianism" }`
  - `to`: `{ zh: "诺齐克、桑德尔《优绩主义的陷阱》、芒格“7.康德公平倾向/12.过度自我评价”与 Nagi 卡片20/23（结构伦理托底协议）", en: "Nozick, Sandel's Tyranny of Merit, Munger's Fairness/Over-Appraisal tendencies & Nagi's Structural Ethical Floor Protocol" }`
- **`quote`**: `{ zh: "正义是社会制度的首要价值，正像真理是思想体系的首要价值一样。天赋的分布是一种自然的彩票，从道德角度看是任意的。", en: "Justice is the first virtue of social institutions, as truth is of systems of thought. The natural distribution is neither just nor unjust; these are simply natural facts." }`
- **`modernInsight`**: `{ zh: "四重核心联动：① 解答小播《优绩主义的陷阱》；② 呼应芒格第12条“过度自我评价（高估能力低估运气）”与 Morris 卡片12（赚到大钱离不开时代、机会和运气）；③ 赋能 Nagi 卡片20/22（不要为了证明自己正确，把别人承受的代价从认知中抹掉；高认知要有伦理托底协议）。", en: "Quadruple linkage: (1) Pierces the Tyranny of Merit; (2) Echoes Munger's Over-Appraisal bias and Morris on luck/timing; (3) Grounds Nagi's Structural Ethical Floor—never erase the cost borne by others to prove yourself right." }`

#### 24. 米歇尔·福柯 (Michel Foucault)
- **`id`**: `"phil-foucault"`
- **`sectionNum`**: `"24"`
- **`name`**: `{ zh: "米歇尔·福柯", en: "Michel Foucault" }`
- **`era`**: `{ zh: "1926—1984", en: "1926–1984" }`
- **`yearSort`**: `1926`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"知识即权力",en:"Power-Knowledge"}, {zh:"规训与惩罚",en:"Discipline & Punish"}, {zh:"全景敞视主义",en:"Panopticism"}]`
- **`oneLiner`**: `{ zh: "解剖“知识与权力共生共谋”、揭示现代教育、医疗与考核制度如何通过“全景敞视”将外在权力转化为个体自我规训的思想考古学家。", en: "Archaeologist of thought exposing how Power-Knowledge networks and Panoptic institutions train individuals into self-surveillance and docility." }`
- **`coreIdeas`**:
  - `{ title: {zh:"知识—权力共生体（Power/Knowledge）", en:"Power-Knowledge Nexus"}, desc: {zh:"不存在脱离权力的“纯粹中立知识”；权力生产知识（定义什么是正常、理性、合格），而知识反过来使权力的分类与控制合法化。", en:"Power and knowledge directly imply one another: power produces regimes of 'truth' and 'normality,' while knowledge legitimizes disciplinary control."} }`
  - `{ title: {zh:"规训社会与全景敞视监狱（Panopticon）", en:"Disciplinary Society & The Panopticon"}, desc: {zh:"现代权力不再靠公开酷刑，而是通过学校、工厂、医院、科层考核的“时间表、标准化排名与不可见的凝视”，制造出驯服、有用且主动自我审查的“驯顺肉体（Docile Bodies）”。", en:"Modern power operates not by spectacle torture, but through timetables, rankings, and invisible surveillance (the Panopticon), producing self-policing 'docile bodies.'"} }`
- **`logicChain`**:
  - `premise`: `{ zh: "现代启蒙叙事宣称科学、医学、教育与现代监狱的诞生代表了人道主义进步与理性解放", en: "Enlightenment narratives portrayed modern psychiatry, schooling, and prisons as pure humanitarian progress" }`
  - `argument`: `{ zh: "运用知识考古学与尼采谱系学，挖掘疯人院、临床医学与监狱档案，追踪微观权力技术如何渗入日常毛细血管", en: "Applying archaeology and genealogy to archives of asylums, clinics, and prisons to trace capillary micro-power" }`
  - `conclusion`: `{ zh: "揭穿“正常化标准”背后的规训本质，倡导通过批判性反思与“自我技术”抵抗同质化驯化", en: "Unmasking normalization as disciplinary control and practicing 'technologies of the self' to resist homogenization" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《规训与惩罚》（第三部分：规训与全景敞视主义，小播精读No.85）", en:"Discipline and Punish (Part III: Discipline & Panopticism)"}, note: {zh:"读懂现代教育、职场KPI与社会规训的必读神作", en:"Essential masterpiece for decoding modern schooling, KPIs, and institutional discipline"} }`
  - `advanced`: `{ title: {zh:"《疯癫与文明》《词与物》《性经验史》", en:"Madness and Civilization, The Order of Things & History of Sexuality"}, note: {zh:"知识型（Episteme）变迁、生命政治与自我技术三部曲", en:"Monumental works on epistemes, biopolitics, and technologies of the self"} }`
- **`lineage`**:
  - `from`: `{ zh: "尼采谱系学、康德批判哲学与法国科学史传统", en: "Nietzschean genealogy & French history of science" }`
  - `to`: `{ zh: "韩炳哲《功绩社会》、巴特勒、Nagi 卡片2/4/7（幻觉教育制造秩序/权力是信息流控制）及佐伊卡片1/5/23", en: "Byung-Chul Han, Nagi Cards 2/4/7 ('Education as Order-Manufacturing') & Zuoyi Cards 1/5/23" }`
- **`quote`**: `{ zh: "权力无处不在；不是因为它有着把一切都整合在自己周围的特权，而是因为它每时每刻、在每一点上、在一切关系中产生出来。", en: "Visibility is a trap. Power is everywhere; not because it embraces everything, but because it comes from everywhere." }`
- **`modernInsight`**: `{ zh: "直接打通 Nagi 卡片4/7（教育不是启蒙而是执行宏大的秩序工程；外部评价取代真实反馈导致职场认知退化）与 DAN KOE 卡片9（教育体系制造顺从者而非自由思考者）。", en: "Directly connects Nagi Cards 4/7 ('Education manufactures predictable order; external evaluation degrades workplace cognition') and DAN KOE's critique of industrial schooling." }`

#### 25. 阿克塞尔·霍耐特 (Axel Honneth)
- **`id`**: `"phil-honneth"`
- **`sectionNum`**: `"25"`
- **`name`**: `{ zh: "阿克塞尔·霍耐特", en: "Axel Honneth" }`
- **`era`**: `{ zh: "1949—", en: "1949–" }`
- **`yearSort`**: `1949`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"为承认而斗争",en:"Struggle for Recognition"}, {zh:"三重承认模式",en:"Three Spheres of Recognition"}, {zh:"主体性与自尊",en:"Subjectivity & Self-worth"}]`
- **`oneLiner`**: `{ zh: "法兰克福学派第三代掌门人，揭示人类“基本自信、法律自尊与社会自豪”源于“爱、权利与社会贡献”三重相互承认的当代社会哲学家。", en: "Third-generation Frankfurt School leader showing that human self-confidence, self-respect, and self-esteem depend on three spheres of intersubjective recognition." }`
- **`coreIdeas`**:
  - `{ title: {zh:"三重承认模式（爱、法律、社会团结）", en:"Three Spheres of Recognition (Love, Law, Solidarity)"}, desc: {zh:"健康的主体性不是闭门造车的产物，而是在关系中通过三种承认生成的：① 家庭与亲密关系的“爱”赋予身体与情感安全，生成**基本自信**；② 法律权利的平等赋予道德责任主体地位，生成**自尊**；③ 社会共同体对个体独特能力与贡献的认可，生成**自豪（自我价值感/配得感）**。", en:"Authentic subjectivity is forged through three relational modes of recognition: (1) Love in intimate relations builds basic **self-confidence**; (2) Equal legal rights build **self-respect**; (3) Social esteem for one's contributions builds **self-worth**."} }`
  - `{ title: {zh:"蔑视（Disrespect）与主体性创伤", en:"Forms of Disrespect & Trauma"}, desc: {zh:"与之对应的三种蔑视——身体虐待/情感忽视（摧毁自信）、剥夺权利/排斥（摧毁自尊）、贬低生活方式与价值否定（摧毁自豪），是导致主体性脆弱、讨好型人格与社会抗争的深层病灶。", en:"Corresponding forms of disrespect—abuse/neglect, exclusion from rights, and denigration of value—fracture subjectivity, breeding trauma, people-pleasing, and social struggle."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "传统批判理论或局限于纯经济分配（马克思），或陷入抽象程序话语（哈贝马斯），未能解释人类精神屈辱感与主体性脆弱的形成机制", en: "Earlier critical theory focused on economic redistribution or formal discourse, overlooking the lived psychological wounds of disrespect" }`
  - `argument`: `{ zh: "结合黑格尔早期“为承认而斗争”辩证法与温尼科特客体关系心理学，实证剖析个体从婴儿依恋到社会公民的自我意识生成链", en: "Synthesizing early Hegelian recognition with Winnicottian object-relations psychology to trace the formation of self-consciousness" }`
  - `conclusion`: `{ zh: "良好的社会与健康的自我，必须建立在“既能独立分化、又能相互承认”的伦理关系结构之上", en: "A just society and resilient self require relational structures that balance autonomous differentiation with mutual recognition" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《为承认而斗争》（导言与第5章，小播精读No.123/282/283）", en:"The Struggle for Recognition (Ch. 5: Patterns of Intersubjective Recognition)"}, note: {zh:"小播高频专题（5期）！彻底读懂主体性、自我意识与自尊敏感", en:"Xiaobo featured 5-part series! Definitive guide to subjectivity, self-consciousness, and fragile self-esteem"} }`
  - `advanced`: `{ title: {zh:"《自由的权利》《物化：承认理论探析》", en:"Freedom's Right & Reification"}, note: {zh:"将承认理论扩展至现代家庭、市场与民主制度的宏大巨著", en:"Expanding recognition theory across modern family, market, and democratic institutions"} }`
- **`lineage`**:
  - `from`: `{ zh: "黑格尔主奴承认辩证法、米德社会心理学与哈贝马斯交往理性", en: "Hegel, G.H. Mead & Habermas" }`
  - `to`: `{ zh: "当代心理学、创伤修复及本库 Morris 卡片14/16（缺爱攻击性/否定毁人）与佐伊卡片1/5/25（分化/配得感）", en: "Contemporary trauma psychology, Morris Cards 14/16 & Zuoyi Cards 1/5/25" }`
- **`quote`**: `{ zh: "个体的自我实现，依赖于由爱、法权和团结共同构成的相互承认关系的前提。", en: "The reproduction of social life is governed by the imperative of mutual recognition, through which individuals acquire self-confidence, self-respect, and self-esteem." }`
- **`modernInsight`**: `{ zh: "霍耐特的承认理论是连接全站三大版块的超级枢纽：① 完美解释小播《害怕冲突、自尊敏感是因为主体性脆弱》；② 对应 Morris 卡片16《毁掉一个人最好的方法就是否定》与卡片14《缺爱的人更具攻击性》；③ 给出佐伊卡片25《配得感》的终极重建路径。", en: "A super-hub connecting all three pillars: explains why chronic negation destroys executive function (Morris Card 16), why fragile subjectivity fears conflict, and how to rebuild deep self-worth (Zuoyi Card 25)." }`

#### 26. 斯拉沃热·齐泽克 (Slavoj Žižek)
- **`id`**: `"phil-zizek"`
- **`sectionNum`**: `"26"`
- **`name`**: `{ zh: "斯拉沃热·齐泽克", en: "Slavoj Žižek" }`
- **`era`**: `{ zh: "1949—", en: "1949–" }`
- **`yearSort`**: `1949`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"拉康三界",en:"Lacanian Triad (Imaginary/Symbolic/Real)"}, {zh:"事件是实在界的裂缝",en:"Event as Crack in the Real"}, {zh:"意识形态幻象",en:"Ideological Fantasy"}]`
- **`oneLiner`**: `{ zh: "将拉康“想象界—象征界—实在界”精神分析与黑格尔辩证法熔于一炉、将社会热点“事件”定义为窥探底层结构真相之裂缝的当代批判奇才。", en: "Dialectic virtuoso fusing Lacan and Hegel to show that disruptive 'Events' are cracks in the Imaginary/Symbolic facade exposing the structural Real." }`
- **`coreIdeas`**:
  - `{ title: {zh:"拉康三界：想象界、象征界与实在界", en:"The Imaginary, the Symbolic, and the Real"}, desc: {zh:"人类栖息在三个维度：① **想象界（Imaginary）**：我们日常看到的表面经验世界、完美人设与温情幻梦；② **象征界（Symbolic）**：潜藏在表象之下的社会规则、法律、语言、权力与意识形态符号网络（大他者）；③ **实在界（The Real）**：无法被语言和符号彻底驯化、一旦暴露就会引发系统创伤与震荡的残酷结构内核。", en:"Human reality operates across three registers: (1) **The Imaginary**: surface appearances, ego-images, and comforting illusions; (2) **The Symbolic**: the underlying network of language, laws, rules, and ideological protocols; (3) **The Real**: the traumatic structural core that resists symbolization."} }`
  - `{ title: {zh:"事件哲学：超出原因的结果（裂缝）", en:"Event: An Effect That Exceeds Its Causes"}, desc: {zh:"大众习惯把丑闻或危机（如特权争议）视为“正常秩序下的偶然异常”；齐泽克指出，**事件不是对正常秩序的偶然破坏，而是底层结构矛盾（实在界）撕开想象界温情面纱的一道裂缝**，它改变了我们评估现实本身的尺度。", en:"Conventional thinking treats scandals as accidental glitches in a normal order; Žižek shows an **Event is a structural crack** through which the repressed Real shatters the Imaginary illusion and reconfigures the Symbolic frame itself."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "后现代人自以为已经看穿一切、不再相信宏大教条（犬儒主义：“他们清楚知道自己在做什么，但依然照做”）", en: "Postmodern cynicism claims to see through ideology ('they know very well what they are doing, yet they are doing it')" }`
  - `argument`: `{ zh: "揭示意识形态幻象并非蒙蔽我们的认知，而是直接嵌入在我们的日常行为与欲望结构（客体小a）之中；通过“斜目而视”剖析突发事件与流行文化", en: "Showing that ideological fantasy structures our actual social reality and desire; looking awry at disruptive events to expose systemic contradictions" }`
  - `conclusion`: `{ zh: "拒绝用修补表象来掩盖裂缝，穿过幻象（Traverse the Fantasy），直面实在界的结构真相并重构象征界协议", en: "Refuse cosmetic patches; traverse the fantasy, confront the structural Real, and rewrite the Symbolic protocol" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《事件》（Event）《斜目而视》（小播精读No.172/216/294）", en:"Event: A Philosophical Journey Through a Concept & Looking Awry"}, note: {zh:"小播分析“董小姐事件”与“梦境与现实”的直接理论来源！", en:"Direct theoretical source for Xiaobo's analysis of viral privilege scandals and dreams vs. reality!"} }`
  - `advanced`: `{ title: {zh:"《意识形态的崇高客体》《视差之见》", en:"The Sublime Object of Ideology & The Parallax View"}, note: {zh:"拉康精神分析与黑格尔唯物主义结合的巅峰代表作", en:"Masterpieces uniting Lacanian psychoanalysis and Hegelian dialectics"} }`
- **`lineage`**:
  - `from`: `{ zh: "黑格尔、马克思与雅克·拉康精神分析", en: "Hegel, Marx & Jacques Lacan" }`
  - `to`: `{ zh: "巴迪欧事件哲学、当代意识形态批判及本站版块三“现实透镜”三层解剖算法", en: "Badiou, contemporary cultural critique & this site's Reality Lens 3-layer dissection engine" }`
- **`quote`**: `{ zh: "事件是超出了其原因的结果；它是窥视真实世界（实在界）的一道裂缝。", en: "An event is an effect that seems to exceed its causes—a crack in the surface of appearance through which we glimpse the Real." }`
- **`modernInsight`**: `{ zh: "齐泽克与拉康的“三界理论”与 Nagi 的 CPV 框架完美同构：**想象界 = 有损表象投影（L1/L2）**，**象征界 = 符号规则与协议结构（L3-L5）**，**实在界 = 无法靠讲理抹平的底层约束与现实代价（卡片14/22）**。", en: "Žižek's Lacanian triad maps isomorphically onto CPV: **Imaginary = Surface Projection (L1/L2)**, **Symbolic = Protocol & Rule Structure (L3–L5)**, **The Real = Hard Structural Constraints & Real-World Costs (Cards 14/22)**." }`

#### 27. 韩炳哲 (Byung-Chul Han)
- **`id`**: `"phil-han"`
- **`sectionNum`**: `"27"`
- **`name`**: `{ zh: "韩炳哲", en: "Byung-Chul Han" }`
- **`era`**: `{ zh: "1959—", en: "1959–" }`
- **`yearSort`**: `1959`
- **`theme`**: `'critique'`
- **`tags`**: `[{zh:"功绩社会",en:"Achievement Society"}, {zh:"自我剥削",en:"Self-Exploitation"}, {zh:"他者的消失",en:"Expulsion of the Other"}]`
- **`oneLiner`**: `{ zh: "诊断21世纪从福柯“规训社会（你不应该）”滑向“功绩社会（你什么都能做到）”、导致个体在“自我剥削”中陷入抑郁倦怠与爱欲消亡的当代哲人。", en: "Contemporary philosopher diagnosing the shift from Foucault's disciplinary 'You Should' to the neoliberal achievement society's 'Yes We Can,' breeding self-exploitation and burnout." }`
- **`coreIdeas`**:
  - `{ title: {zh:"从规训社会到功绩社会（自我剥削）", en:"From Disciplinary Society to Achievement Society"}, desc: {zh:"21世纪的统治不再靠外在禁止（“你不应该”），而是靠过度的积极性（“Yes, we can / 只要努力就能成功”）；人沦为“自己剥削自己的功绩主体”，施暴者与受害者合二为一，这种披着自由外衣的剥削效率最高，也最容易导致抑郁与倦怠。", en:"Today's domination operates through excessive positivity ('nothing is impossible') rather than prohibition; individuals become self-exploiting 'achievement-subjects' where perpetrator and victim are one, culminating in burnout."} }`
  - `{ title: {zh:"他者的消失、信息疲劳与光晕的丧失", en:"Expulsion of the Other & Information Fatigue"}, desc: {zh:"算法与数字媒介制造了“同质化的回音室”，消灭了需要冒风险去碰撞的“真实他者（使得爱情与深度承诺消亡）”；海量碎片信息摧毁了需要时间沉淀的“沉思力（Vita Contemplativa）”与事物的神圣光晕。", en:"Algorithms trap us in narcissistic echo chambers of the Same, expelling the 'Other' required for real love and commitment, while information tsunami destroys contemplative depth."} }`
- **`logicChain`**:
  - `premise`: `{ zh: "数字与新自由主义时代，外在强权压迫减少、信息极度丰裕，但全球抑郁症、注意力溃散与亲密关系虚无却全面爆发", en: "In the digital neoliberal age, external coercion has receded and information is infinite, yet depression, ADHD, and relational emptiness are epidemic" }`
  - `argument`: `{ zh: "更新福柯微观权力理论：剖析“积极性暴力（过量激励、过量信息、过量绩效比较）”如何引发精神免疫系统的自我攻击", en: "Updating Foucault: analyzing how the 'violence of positivity' (hyper-performance, hyper-information, hyper-visibility) triggers psychic auto-aggression" }`
  - `conclusion`: `{ zh: "学会“否定性的停顿（有能力对刺激说不）”，重拾深度无聊、哲学沉思、审美仪式与对真实他者的倾听", en: "Reclaim 'negative potency' (the power to say no to stimuli), deep contemplation, aesthetic ritual, and openness to the Other" }`
- **`works`**:
  - `entry`: `{ title: {zh:"《倦怠社会》《爱欲之死》（小播精读No.16/187）", en:"The Burnout Society & The Agony of Eros"}, note: {zh:"小播高赞解读！一小时看透当代人内卷、倦怠与不相信爱情的病根", en:"Xiaobo featured specials! Essential diagnosis of modern burnout and the crisis of love"} }`
  - `advanced`: `{ title: {zh:"《他者的消失》《透明社会》《非物：生活世界的剧变》", en:"The Expulsion of the Other, The Transparency Society & Non-things"}, note: {zh:"数字算法批判、信息认识论与现代性反思全集", en:"Critique of algorithmic echo chambers, dataism, and the loss of tactile reality"} }`
- **`lineage`**:
  - `from`: `{ zh: "海德格尔、本雅明、阿伦特、福柯与列维纳斯", en: "Heidegger, Benjamin, Arendt, Foucault & Levinas" }`
  - `to`: `{ zh: "本库 Nagi 卡片3/8/10/19（高认知独处是结构折叠/当算力不再伺候情绪）与佐伊卡片16/17/19/22", en: "Nagi Cards 3/8/10/19 ('Solitude as Structural Folding') & Zuoyi Cards 16/17/19/22" }`
- **`quote`**: `{ zh: "功绩主体与自身作战。自我剥削比他者剥削更有效率，因为它伴随着一种自由的感觉。抑郁症就爆发于‘能够做一切’的时刻。", en: "The achievement-subject stands at war with itself. Self-exploitation is more efficient than allo-exploitation because it goes hand in hand with a feeling of freedom." }`
- **`modernInsight`**: `{ zh: "韩炳哲的思想串联了全库多张现实卡片：① 解释小播《爱欲之死：为什么今天我们都不相信爱情了》与佐伊卡片17《承诺的消解》、卡片22《AI时代的情感博弈》；② 呼应佐伊卡片19《每天要能感觉到自己（具身觉醒对抗数字化抽离）》与 Nagi 卡片3《高认知者独处是结构折叠与内部结构维护》。", en: "Ties together Xiaobo's 'Agony of Eros,' Zuoyi Cards 17/19/22 (dissolution of promises & embodied awakening against digital alienation), and Nagi Card 3 (solitude as structural maintenance)." }`

---

## Part 3: 全局 EN/BI 双语一致性与跨页锚点规范 (Global i18n & Anchor Specification)

针对审查发现的 **“EN/BI 模式对正文、表格、筛选器与跨页锚点覆盖不一致”** 问题，必须统一执行以下 4 条硬性工程准则：

### 1. 统一 DOM 双语渲染辅助组件 (`src/components/I18nText.astro` & `src/components/I18nBlock.astro`)
禁止在任何页面或组件中直接写裸中文或只传单一字符串。所有文本、表格表头、表格单元格、筛选按钮必须统一通过 `<I18nText />` 或 `data-i18n-*` 属性渲染：
- 当全局状态 `data-lang="zh"` 时：仅显示 `.lang-zh` 节点。
- 当全局状态 `data-lang="en"` 时：仅显示 `.lang-en` 节点（使用西文衬线/无衬线排版）。
- 当全局状态 `data-lang="bi"`（双语对照模式）时：
  - **短标签/导航/筛选器/表头**：显示为 `中文 / English` 并排格式。
  - **腰封金句/正文段落/核心命题/表格内容**：显示为“上行中文主字号 + 下行英文次级衬线斜体（`text-sm opacity-80 font-serif italic mt-1`）”的世纪文库学术对照格式！

### 2. 筛选器 (Filters) 与多元模型表格 (Tables) 的完整双语字典 (`src/data/uiDictionary.ts`)
必须将所有版块的筛选器按钮、表格列头全部纳入双语字典：
- **版块 I 筛选器**：
  - `all`: `{ zh: "全部源流 (27)", en: "All Philosophers (27)" }`
  - `chinese`: `{ zh: "东方哲思与心性 (4)", en: "Chinese Philosophy (4)" }`
  - `epistemology`: `{ zh: "西方认识论与语言科学 (11)", en: "Epistemology & Language (11)" }`
  - `critique`: `{ zh: "存在、伦理与社会批判 (12)", en: "Existence, Ethics & Critique (12)" }`
- **版块 II 子视图与表格列头**：
  - 子视图 Tab：`cpv` (`{ zh: "壹 · CPV 原理全书问题链", en: "I · CPV Principles Chain" }`) | `cards` (`{ zh: "贰 · 思想认知 23 卡片", en: "II · 23 Cognitive Cards" }`) | `munger` (`{ zh: "叁 · 芒格 52 模型格栅", en: "III · Munger 52-Model Latticework" }`)
  - 多元模型解读表列头：`dimension` (`{ zh: "分析维度", en: "Dimension" }`) | `corePoint` (`{ zh: "核心结构要点", en: "Structural Core Point" }`) | `theory` (`{ zh: "关联理论与学科", en: "Associated Theory" }`)
  - 芒格模型清单表列头：`modelName` (`{ zh: "模型名称", en: "Mental Model" }`) | `definition` (`{ zh: "一句话定义", en: "One-Line Definition" }`) | `application` (`{ zh: "结构视角与现实应用", en: "Structural View & Application" }`)
- **版块 III 作者与 8 大跨库串联主题筛选器**：
  - 作者筛选：`all` (`{ zh: "全部透镜 (25)", en: "All Lenses (25)" }`) | `zuoyi` (`{ zh: "佐伊 · 社会与主体性 (18)", en: "Zuoyi · Society & Subjectivity (18)" }`) | `dankoe` (`{ zh: "THEdankoe · 数字杠杆与效能 (3)", en: "THEdankoe · Leverage & Agency (3)" }`) | `morris` (`{ zh: "Morris · 财富结构与边界 (4)", en: "Morris · Wealth & Boundaries (4)" }`)
  - 8 大跨库串联主题标签：
    1. `struct-vs-act`: `{ zh: "结构 vs 行为", en: "Structure vs. Behavior" }`
    2. `disenchantment`: `{ zh: "祛魅与慈悲", en: "Disenchantment" }`
    3. `education-order`: `{ zh: "教育与代际创伤", en: "Education & Intergenerational Loop" }`
    4. `pain-feedback`: `{ zh: "痛苦与现实反馈", en: "Pain & Market Feedback" }`
    5. `awake-vs-auto`: `{ zh: "清醒 vs 自动化驯化", en: "Agency vs. Algorithmic Automation" }`
    6. `leverage-shift`: `{ zh: "杠杆构建与模式切换", en: "Leverage & Regime Shift" }`
    7. `coherence-vs-valid`: `{ zh: "模型自洽 vs 现实有效", en: "Self-Coherence vs. Validity" }`
    8. `lollapalooza`: `{ zh: "误判清单与叠加机制", en: "Misjudgment & Lollapalooza" }`

### 3. 跨页与同页锚点路由规范 (Cross-Page Anchor Standardization)
确保三大版块之间的双向链接（如从“现实透镜”右侧古籍眉批点击跳转到某位哲学家、某个 CPV 章节或某个芒格模型）在任何语言模式下都 100% 精准定位并自动展开目标卡片：
- **版块 I 哲学家锚点**：统一为 `/philosophy#phil-{slug}`（例如 `/philosophy#phil-wittgenstein`, `/philosophy#phil-honneth`）。当 URL 带有 hash 进入 `/philosophy` 时，客户端脚本必须自动将主题筛选器切为 `all`（或对应主题），平滑滚动至该卡片并高亮朱砂红边框。
- **版块 II 思想认知锚点**：
  - CPV 章节锚点：`/cognition#cpv-ch-{0..9}`（自动激活 Tab 1 并滚动至对应章节）。
  - 思想认知 23 卡锚点：`/cognition#cog-card-{01..23}`（自动激活 Tab 2 并滚动至对应卡片）。
  - 芒格 6 大类与 52 模型锚点：`/cognition#munger-cat-{1..6}` 或 `/cognition#munger-model-{id}`（自动激活 Tab 3，展开对应的折叠模型表格并高亮对应行）。
- **版块 III 现实透镜锚点**：统一为 `/reality-lens#lens-card-{01..25}`。
- **语言状态保持**：所有跨页跳转无需依赖 URL 路径前缀（因为语言状态存储在 `localStorage('rayman_lang')` 并由 `MainLayout.astro` 顶层同步挂载到 `<html data-lang="...">`），从而保证跨页锚点跳转后依然维持用户当前选择的 `ZH` / `EN` / `BI` 模式！