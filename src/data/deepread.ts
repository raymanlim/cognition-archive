/**
 * deepread.ts — Division II sub-group「深读笔记 / Deep Read」
 * ---------------------------------------------------------------------------
 * 18 篇深读笔记的结构化卡片。源文件位于 Obsidian vault 的 深读/ 目录，
 * 已离线整理进本文件（构建期不依赖 vault，遵循 §0.2 云端铁律）。
 *
 * 字段约定：
 *  - title / coreInsight / rwc.pointsZh：来自原文，忠实照录不改写。
 *  - titleEn / obiEn / rwc.pointsEn：人工英译。
 *  - noteZh / noteEn：「你的深读笔记」显式署名，区别于原始素材卡。
 *  - num 取 101–118，与既有 C01–C23 的锚点命名空间互不冲突；
 *    页面显示用 d01–d18（numeral 传入 id）。
 */
import type { CognitionCard } from './types';

export const deepReadCards: CognitionCard[] = [
  {
    "id": "d01",
    "num": 101,
    "title": "为什么聪明人会一起犯错",
    "titleEn": "Why Smart People Err Together",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-05",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "认知偏差 / 群体决策 / 共识陷阱",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：聪明人集体犯错，不是智力的失败，而是社会过程的失败——当共识成为判断的替代品，纠错机制就消失了",
    "conclusionText": "聪明人集体犯错，不是智力的失败，而是社会过程的失败——当共识成为判断的替代品，纠错机制就消失了",
    "obiEn": "Smart people fail collectively not through a failure of intelligence but through a failure of social process — when consensus replaces judgement, the error-correction mechanism disappears.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "认知偏差",
      "群体决策",
      "共识陷阱"
    ],
    "coreInsight": "聪明人集体犯错，不是智力的失败，而是社会过程的失败——当共识成为判断的替代品，纠错机制就消失了",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "共识的本质: 共识不是许多人同时想对了一件事，而是许多人同时停止了对这件事的怀疑",
          "社会传递的陷阱: 信息的社会传递减少不确定性，同时也减少独立信息量",
          "相关性幻觉: 独立判断的幻觉导致系统性风险累积"
        ],
        "pointsEn": [
          "Nature of consensus: not many people thinking the same correct thing, but many people simultaneously ceasing to doubt it.",
          "The trap of social transmission: it reduces uncertainty while also reducing the amount of independent information.",
          "The illusion of independence: believing judgements are independent lets systemic risk accumulate."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "共识可靠性诊断: 看允许多少反对 + 看相关性结构",
          "独立判断维护: 识别社会传递路径，保留独立验证间隔",
          "相关性检测: 寻找共享的信息源、模型、利益结构"
        ],
        "pointsEn": [
          "Diagnosing consensus reliability: how much dissent is allowed, and how correlated the sources are.",
          "Maintaining independent judgement: map the transmission path and keep intervals for independent verification.",
          "Correlation check: look for shared information sources, models and interest structures."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在关键决策中识别社会传递链",
          "主动避免过度依赖权威认可",
          "建立个人独立验证机制"
        ],
        "pointsEn": [
          "Identify the chain of social transmission in key decisions.",
          "Actively avoid over-relying on authority approval.",
          "Build a personal independent-verification mechanism."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "lollapalooza",
      "coherence-vs-valid"
    ]
  },
  {
    "id": "d02",
    "num": 102,
    "title": "隐性知识的重量：为什么流程取代不了手艺",
    "titleEn": "The Weight of Tacit Knowledge: Why Process Cannot Replace Craft",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-06",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "隐性知识 / 实践智慧 / 制度设计",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：隐性知识无法被完全编码，它的传递需要足够近的距离、足够长的时间，和允许失败的空间",
    "conclusionText": "隐性知识无法被完全编码，它的传递需要足够近的距离、足够长的时间，和允许失败的空间",
    "obiEn": "Tacit knowledge cannot be fully encoded; passing it on requires enough proximity, enough time, and room to fail.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "隐性知识",
      "实践智慧",
      "制度设计"
    ],
    "coreInsight": "隐性知识无法被完全编码，它的传递需要足够近的距离、足够长的时间，和允许失败的空间",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "隐性知识: 我们知道的比能说出的多，它是技能性的、只能在外显中起作用",
          "编码的边际收益: 编码在稳定领域收益极高，在漂移环境收益递减",
          "手艺的本质: 手艺是在具体情境中做题并得出答案的能力，而非答案本身"
        ],
        "pointsEn": [
          "Tacit knowledge: we know more than we can say; it is skill-like and works only through enactment.",
          "Marginal return of codification: very high in stable domains, diminishing in drifting ones.",
          "Craft is the ability to work out an answer in a concrete situation, not the answer itself."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "知识分层评估: 稳定可重复 → 编码优先；环境漂移 → 判断优先",
          "隐性知识传递三要素: 距离足够近、时间足够长、允许失败",
          "判断力再生产机制: 必须经历「做错-被纠正-再试一次」循环"
        ],
        "pointsEn": [
          "Stratify knowledge: codify when stable and repeatable; prioritise judgement when the environment drifts.",
          "Three requirements for transmission: close enough, long enough, and permission to fail.",
          "Judgement reproduces only through the loop of erring, being corrected, and trying again."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在组织设计中平衡流程与判断空间",
          "在个人发展中重视亲手操作",
          "在 AI 时代选择「必须亲自做过」的能力领域"
        ],
        "pointsEn": [
          "Balance process and room for judgement in organisational design.",
          "Value hands-on work in personal development.",
          "In the AI age, choose capabilities that can only be earned by doing."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "coherence-vs-valid"
    ]
  },
  {
    "id": "d03",
    "num": 103,
    "title": "复杂的代价：为什么系统不是越大越稳",
    "titleEn": "The Price of Complexity: Why Bigger Systems Are Not Safer",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-07",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "复杂系统 / 系统思维 / 脆弱性",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：脆弱性不来自复杂度的绝对水平，而来自复杂度与维护能力之间的失衡",
    "conclusionText": "脆弱性不来自复杂度的绝对水平，而来自复杂度与维护能力之间的失衡",
    "obiEn": "Fragility comes not from complexity at its absolute level but from the imbalance between complexity and the capacity to maintain it.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "复杂系统",
      "系统思维",
      "脆弱性"
    ],
    "coreInsight": "脆弱性不来自复杂度的绝对水平，而来自复杂度与维护能力之间的失衡",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "复杂度的投资属性: 复杂度是收益递减的投资，回报率随层级累积而下降",
          "三种脆弱机制: 紧耦合、隐藏依赖、维护赤字",
          "复杂度的保留性: 对过度复杂的结构，简化在系统层面可能是理性的"
        ],
        "pointsEn": [
          "Complexity as investment: returns diminish as layers accumulate.",
          "Three fragility mechanisms: tight coupling, hidden dependencies, maintenance deficit.",
          "Retaining simplicity: for over-complex structures, simplification can be rational at system level."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "复杂度类型诊断: 承载型 vs 装饰型 vs 伪装型",
          "复杂度健康测试: 移除测试、模块测试、维护归属测试",
          "维护能力评估: 现有系统的可持续性时间"
        ],
        "pointsEn": [
          "Diagnose complexity type: load-bearing, ornamental, or disguised.",
          "Health tests: removal, modularity, and ownership of maintenance.",
          "Assess maintenance capacity: how long the current system can be sustained."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在系统设计时优先承载型复杂度",
          "在预算中明确维护线，而非砍掉它",
          "选择理解失效方式的系统"
        ],
        "pointsEn": [
          "Prefer load-bearing complexity in system design.",
          "Ring-fence the maintenance line in budgets instead of cutting it.",
          "Choose systems whose failure modes you understand."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "pain-feedback"
    ]
  },
  {
    "id": "d04",
    "num": 104,
    "title": "注意力的稀缺：当信息不再昂贵之后",
    "titleEn": "The Scarcity of Attention: When Information Stops Being Expensive",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-08",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "注意力经济 / 时间管理 / 媒介理论",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：注意力稀缺不是因为人变弱了，而是因为环境被设计成要消耗它",
    "conclusionText": "注意力稀缺不是因为人变弱了，而是因为环境被设计成要消耗它",
    "obiEn": "Attention is scarce not because people weakened but because the environment is engineered to consume it.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "注意力经济",
      "时间管理",
      "媒介理论"
    ],
    "coreInsight": "注意力稀缺不是因为人变弱了，而是因为环境被设计成要消耗它",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "结构性不对称: 信息可以无限复制而注意力固定",
          "媒介即模具: 媒介改变感知尺度、节奏和比例，不是中性容器",
          "注意力开采: 当注意力成为稀缺品，它会被系统性地定价、交易和开采"
        ],
        "pointsEn": [
          "Structural asymmetry: information can be copied without limit, attention is fixed.",
          "The medium is a mould: it reshapes scale, rhythm and proportion; it is not a neutral container.",
          "Attention mining: once scarce, attention is systematically priced, traded and extracted."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "注意力健康评估: 停留时长 vs 投入质量",
          "环境设计策略: 改默认值而非加意志",
          "媒介影响分析: 识别媒介对感知的重塑"
        ],
        "pointsEn": [
          "Attention health: dwell time versus quality of investment.",
          "Design the environment: change defaults rather than adding willpower.",
          "Medium analysis: identify how a medium reshapes perception."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "将注意力管理视为基础设施问题，而非道德问题",
          "设计结构性的注意力保护机制",
          "选择支持深度投入的数字环境"
        ],
        "pointsEn": [
          "Treat attention management as infrastructure, not morality.",
          "Design structural protections for attention.",
          "Choose digital environments that support deep engagement."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "awake-vs-auto",
      "leverage-shift"
    ]
  },
  {
    "id": "d05",
    "num": 105,
    "title": "当度量变成目标：为什么把一切量化之后，反而看不清了",
    "titleEn": "When Measurement Becomes the Target: Why Quantifying Everything Blurs the Picture",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-09",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "度量失真 / 目标置换 / 系统思维",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：度量失真不是道德问题，而是结构性后果——当一个数字同时被用来描述现实和分配奖惩，失真就会自发产生",
    "conclusionText": "度量失真不是道德问题，而是结构性后果——当一个数字同时被用来描述现实和分配奖惩，失真就会自发产生",
    "obiEn": "Metric distortion is a structural consequence, not a moral failing — when one number both describes reality and allocates reward, distortion arises on its own.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "度量失真",
      "目标置换",
      "系统思维"
    ],
    "coreInsight": "度量失真不是道德问题，而是结构性后果——当一个数字同时被用来描述现实和分配奖惩，失真就会自发产生",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "古德哈特定律: 当一个度量变成目标，它就不再是一个好的度量",
          "代理变量裂缝: 代理变量与真实目标之间永远存在裂缝，奖惩会把所有能量导向裂缝",
          "度量双重身份: 描述现实 vs 分配奖惩，两种角色要求相反"
        ],
        "pointsEn": [
          "Goodhart's law: once a measure becomes a target, it ceases to be a good measure.",
          "The proxy gap: a permanent gap between proxy and true goal; incentives channel all energy into it.",
          "Dual role: describing reality versus allocating reward demand opposite designs."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "度量健康诊断: 离真实目标的距离、反馈速度、利益一致性",
          "仪表与方向盘分离: 用于考核 vs 用于观察的指标应分开",
          "组合度量策略: 主指标 + 不同维度的辅助指标"
        ],
        "pointsEn": [
          "Metric health: distance from the true goal, feedback speed, alignment of interests.",
          "Separate the dashboard from the steering wheel: assessment metrics versus observation metrics.",
          "Composite measurement: a primary metric plus supporting metrics from other dimensions."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在关键决策中不依赖单一指标",
          "优先选择有明确边界的度量系统",
          "警惕那些「所有人都知道在说谎但不停使用」的信号"
        ],
        "pointsEn": [
          "Never rely on a single metric in key decisions.",
          "Prefer measurement systems with explicit boundaries.",
          "Distrust signals that everyone knows are lying yet nobody stops using."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "coherence-vs-valid",
      "lollapalooza"
    ]
  },
  {
    "id": "d06",
    "num": 106,
    "title": "当利益变成一种激情：一个四百年前的社会设计，以及它没做完的那一半",
    "titleEn": "When Interest Becomes a Passion: A Four-Hundred-Year-Old Design and the Half It Left Undone",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-10",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "资本主义哲学 / 制度设计 / 激情理论",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：资本主义的设计没有失败，它在原始任务上成功了，然后被范畴错误困住——把逐利当作激情的对立面，而它本身就是一种激情",
    "conclusionText": "资本主义的设计没有失败，它在原始任务上成功了，然后被范畴错误困住——把逐利当作激情的对立面，而它本身就是一种激情",
    "obiEn": "Capitalism did not fail; it succeeded at its original task and then got trapped by a category error — treating profit-seeking as the opposite of passion when it is itself a passion.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "资本主义哲学",
      "制度设计",
      "激情理论"
    ],
    "coreInsight": "资本主义的设计没有失败，它在原始任务上成功了，然后被范畴错误困住——把逐利当作激情的对立面，而它本身就是一种激情",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "利益的重新分类: 把物质利益追求从罪过改写为制衡其他激情的砝码",
          "精巧的设计: 利益的可预测性、可分割性、可跨国性",
          "范畴错误: 把「逐利」当作激情的对立面，而逐利是「记账记得较好的激情」"
        ],
        "pointsEn": [
          "Reclassifying interest: recasting the pursuit of material gain from sin into a counterweight to other passions.",
          "The elegance of the design: interest is predictable, divisible and transnational.",
          "Category error: treating profit-seeking as passion's opposite when it is simply better-bookkept passion."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "设计有效性评估: 用激情制衡激情，而非消灭激情",
          "制度延续性分析: 找出未完成的 half 任务",
          "非市场承诺重建: 为市场引入非市场约束"
        ],
        "pointsEn": [
          "Evaluate the design: counter passion with passion rather than eliminating it.",
          "Analyse continuity: locate the unfinished half of the task.",
          "Rebuild non-market commitments: introduce non-market constraints into markets."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在设计制度时考虑激情的制衡而非消除",
          "为市场体系引入必要的非市场约束",
          "理解资本主义需要持续的政治维护"
        ],
        "pointsEn": [
          "Design institutions to balance passions, not to erase them.",
          "Introduce necessary non-market constraints into market systems.",
          "Recognise that capitalism requires continuous political maintenance."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "leverage-shift",
      "struct-vs-act"
    ]
  },
  {
    "id": "d07",
    "num": 107,
    "title": "等待的建筑学：当「以后」变成「现在」的豁免凭证",
    "titleEn": "The Architecture of Waiting: When \"Later\" Becomes a Waiver for \"Now\"",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-11",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "时间哲学 / 存在思考 / 制度分析",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：有毒的不是漫长与重复，而是未经审视的期待——等待本身不是陷阱，但无期限、有仪式、可辩护的等待会变成房间",
    "conclusionText": "有毒的不是漫长与重复，而是未经审视的期待——等待本身不是陷阱，但无期限、有仪式、可辩护的等待会变成房间",
    "obiEn": "What is toxic is not duration or repetition but unexamined expectation — waiting is not a trap in itself, but an open-ended, ritualised, defensible wait becomes a room.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "时间哲学",
      "存在思考",
      "制度分析"
    ],
    "coreInsight": "有毒的不是漫长与重复，而是未经审视的期待——等待本身不是陷阱，但无期限、有仪式、可辩护的等待会变成房间",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "等待的建筑学: 等待一旦被仪式化，就会自己长出意义",
          "走廊与房间的转换: 有日期的等待是走廊，无期限的等待是房间",
          "抵押的当下: \"让人难以承受的不是当下，而是当下被抵押给了不确定的未来\""
        ],
        "pointsEn": [
          "The architecture of waiting: once ritualised, waiting grows its own meaning.",
          "Corridor and room: a wait with a date is a corridor; a wait without one is a room.",
          "The mortgaged present: what is unbearable is not the present but its being mortgaged to an uncertain future."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "等待结构诊断: 无期限 + 有仪式 + 可辩护",
          "三个判别: 有日期、可独立描述、永远不来还做不做",
          "未来删除测试: 如果把未来删掉，当下是否依然可居住"
        ],
        "pointsEn": [
          "Diagnose the structure of a wait: open-ended, ritualised, defensible.",
          "Three tests: does it have a date, can it be described on its own, would you still do it if it never arrived.",
          "Delete-the-future test: remove the future; is the present still habitable."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "主动审视个人与社会中的等待结构",
          "避免让等待变成自我合法化的房间",
          "重建当下的独立价值"
        ],
        "pointsEn": [
          "Examine the structures of waiting in your life and in society.",
          "Keep waiting from becoming a self-justifying room.",
          "Restore the present's independent worth."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "pain-feedback",
      "awake-vs-auto"
    ]
  },
  {
    "id": "d08",
    "num": 108,
    "title": "分工的账本：当能力从人身上搬到系统里",
    "titleEn": "The Ledger of Division: When Capability Moves from People into Systems",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-10-12",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "分工理论 / 能力转移 / 系统风险",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：分工把能力从人身上搬到了系统里；产出记在社会的账上，而人的能力与风险，记在一本没有管理员的账上",
    "conclusionText": "分工把能力从人身上搬到了系统里；产出记在社会的账上，而人的能力与风险，记在一本没有管理员的账上",
    "obiEn": "Division of labour moves capability off people and into systems; output is booked to society's ledger while capability and risk are booked to a ledger with no keeper.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "分工理论",
      "能力转移",
      "系统风险"
    ],
    "coreInsight": "分工把能力从人身上搬到了系统里；产出记在社会的账上，而人的能力与风险，记在一本没有管理员的账上",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "能力位置转移: 从「在人身上」到「在系统中」的精确交换",
          "账本分离: 产出记社会账，能力记个人账，无自动转账机制",
          "回路闭合断裂: 看不见后果的人无法学习，学习在哪里断裂"
        ],
        "pointsEn": [
          "Relocation of capability: a precise swap from \"in people\" to \"in systems\".",
          "Split ledgers: output goes to society's books, capability to the individual's, with no automatic transfer.",
          "Broken feedback loops: whoever cannot see the consequence cannot learn."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "分工账本审计: 产出、能力、风险三账本",
          "回路闭合度评估: 能否看见工作结果？",
          "重组能力维护: 把跨职能思考当资产维护"
        ],
        "pointsEn": [
          "Audit the ledgers: output, capability, risk.",
          "Assess loop closure: can the worker see the result of the work.",
          "Maintain recombination capability: treat cross-functional thinking as an asset."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在设计分工时考虑能力代价",
          "优先选择有回路闭合的工作",
          "维护个人跨职能能力"
        ],
        "pointsEn": [
          "Account for the capability cost when designing division of labour.",
          "Prefer work with closed feedback loops.",
          "Maintain your own cross-functional capability."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "leverage-shift"
    ]
  },
  {
    "id": "d09",
    "num": 109,
    "title": "研究的收益递减：为什么投入越多，突破越少",
    "titleEn": "Diminishing Returns in Research: Why More Input Yields Fewer Breakthroughs",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-01",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "创新研究 / 范式",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：研究生产率下降的主因，不在「想法变少」，而在「容许异常的制度空间变窄」",
    "conclusionText": "研究生产率下降的主因，不在「想法变少」，而在「容许异常的制度空间变窄」",
    "obiEn": "Falling research productivity stems less from a shortage of ideas than from the narrowing institutional room that tolerates anomaly.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "创新研究",
      "范式"
    ],
    "coreInsight": "研究生产率下降的主因，不在「想法变少」，而在「容许异常的制度空间变窄」",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "进步价格上升论：进步没有停滞，只是变贵了",
          "知识负担与低垂果实：知识的积累推高了前沿距离",
          "搜索空间动态性：可发现的事物随工具扩张，非固定存量"
        ],
        "pointsEn": [
          "Progress has not stalled; it has become more expensive.",
          "Knowledge burden and low-hanging fruit: accumulated knowledge pushes the frontier further away.",
          "The search space is dynamic: what is discoverable expands with tools; it is not a fixed stock."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "双 regime 诊断框架: 搜索空间扩张型 vs 物理极限型",
          "时间结构分析: 资助周期 vs 问题周期",
          "制度空间识别: 容许异常存在的空间大小"
        ],
        "pointsEn": [
          "Two-regime diagnosis: expanding search space versus physical limits.",
          "Time structure: funding cycles versus problem cycles.",
          "Institutional room: how much space exists for anomaly."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "对 research funding: 从「多投钱」转向「拉长周期」",
          "对个人研究: 寻找容许异常的组织环境",
          "对职业选择: 避开过度 KPI 化的研究岗位"
        ],
        "pointsEn": [
          "For funding: shift from more money to longer horizons.",
          "For personal research: seek environments that tolerate anomaly.",
          "For careers: avoid research roles saturated with KPIs."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "leverage-shift",
      "coherence-vs-valid"
    ]
  },
  {
    "id": "d10",
    "num": 110,
    "title": "第二手的心智：为什么我们几乎从不亲自核实自己「知道」的事",
    "titleEn": "Second-Hand Minds: Why We Almost Never Verify What We \"Know\"",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-02",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "认知 / 知识来源 / 验证",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：我们不是「知道」，而是「相信中介说我们知道」——第二手心智的机制决定了我们几乎不亲自核实任何事",
    "conclusionText": "我们不是「知道」，而是「相信中介说我们知道」——第二手心智的机制决定了我们几乎不亲自核实任何事",
    "obiEn": "We do not know; we believe an intermediary told us we know — the machinery of the second-hand mind makes personal verification almost never happen.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "认知",
      "知识来源",
      "验证"
    ],
    "coreInsight": "我们不是「知道」，而是「相信中介说我们知道」——第二手心智的机制决定了我们几乎不亲自核实任何事",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "第二手心智：我们依赖的绝大多数知识来自间接来源",
          "认知经济性：亲自核实成本太高，理性选择是信任",
          "知识信用分层：社会分工下知识的传递链条"
        ],
        "pointsEn": [
          "Second-hand mind: the overwhelming majority of our knowledge arrives indirectly.",
          "Cognitive economy: verifying in person is too costly, so trusting is the rational choice.",
          "Layers of epistemic credit: chains of transmission under division of knowledge."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "知识溯源三角：来源信用 × 交叉验证 × 逻辑自洽",
          "信用层级评估: 一对一验证 → 一级中介 → 二级中介",
          "资本最小化策略: 只在关键节点投入验证成本"
        ],
        "pointsEn": [
          "Traceability triangle: source credit × cross-validation × internal coherence.",
          "Grade the credit: first-hand verification, first-order intermediary, second-order.",
          "Minimise cost: spend verification effort only at critical nodes."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "从「追求绝对真理」转向「管理信用风险」",
          "在关键决策点投入验证成本，非关键处保持开放",
          "重新设计个人知识获取的验证策略"
        ],
        "pointsEn": [
          "Move from pursuing absolute truth to managing epistemic risk.",
          "Verify at decision-critical points; stay open elsewhere.",
          "Redesign your personal verification strategy for acquiring knowledge."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "coherence-vs-valid",
      "awake-vs-auto"
    ]
  },
  {
    "id": "d11",
    "num": 111,
    "title": "判断的噪声：为什么同一个问题，会得到不同的答案",
    "titleEn": "The Noise in Judgement: Why the Same Question Gets Different Answers",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-03",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "认知偏差 / 决策理论 / 系统思考",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：噪声是实现一致性的系统缺陷，而偏差只是系统性的错误方向——消除噪声比纠正偏差更需要系统设计",
    "conclusionText": "噪声是实现一致性的系统缺陷，而偏差只是系统性的错误方向——消除噪声比纠正偏差更需要系统设计",
    "obiEn": "Noise is a systemic defect in consistency while bias is merely a systematic direction of error — removing noise demands more system design than correcting bias.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "认知偏差",
      "决策理论",
      "系统思考"
    ],
    "coreInsight": "噪声是实现一致性的系统缺陷，而偏差只是系统性的错误方向——消除噪声比纠正偏差更需要系统设计",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "噪声（Noise）vs 偏差（Bias）: 噪声是随机波动，偏差是系统性偏移",
          "判断一致性：理想判断系统的核心品质是稳定性",
          "系统性缺陷: 噪声反映的系统问题是「不可预测的随机性」"
        ],
        "pointsEn": [
          "Noise versus bias: noise is random scatter, bias is systematic offset.",
          "Consistency: stability is the core virtue of a good judgement system.",
          "Systemic defect: noise reveals unpredictable randomness."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "噪声诊断框架: 识别噪声来源 → 量化噪声水平 → 设计降噪系统",
          "一致性提升策略: 标准化 → 模块化 → 自动化",
          "决策系统重构: 从个体判断转向系统判断"
        ],
        "pointsEn": [
          "Noise diagnosis: identify sources, quantify levels, design for reduction.",
          "Consistency strategy: standardise, modularise, automate.",
          "Rebuild the decision system: from individual judgement to system judgement."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "从「优化个体」转向「优化系统」",
          "在关键决策中引入一致性设计",
          "建立噪声监测与控制系统"
        ],
        "pointsEn": [
          "Shift from optimising individuals to optimising systems.",
          "Build consistency into key decisions.",
          "Establish noise monitoring and control."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "coherence-vs-valid",
      "lollapalooza"
    ]
  },
  {
    "id": "d12",
    "num": 112,
    "title": "看得见的证据：为什么照片越多，我们越难相信",
    "titleEn": "Visible Evidence: Why More Photographs Make Us Trust Less",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-04",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "证据 / 信任 / 视觉认知",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：照片并未增加真实性，反而因泛滥和可篡改性消解了证据的价值——眼见为实的神话在数字时代终结",
    "conclusionText": "照片并未增加真实性，反而因泛滥和可篡改性消解了证据的价值——眼见为实的神话在数字时代终结",
    "obiEn": "Photographs did not add truth; their abundance and editability dissolved the value of evidence — the myth of seeing-is-believing ends in the digital age.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "证据",
      "信任",
      "视觉认知"
    ],
    "coreInsight": "照片并未增加真实性，反而因泛滥和可篡改性消解了证据的价值——眼见为实的神话在数字时代终结",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "证据的悖论: 可视证据越多，信任反而越少",
          "真实性的消解: 可复制与可编辑性削弱了证据的权威性",
          "信任的转移: 从「证据本身」转向「证据链与来源」"
        ],
        "pointsEn": [
          "The paradox of evidence: the more visible evidence, the less trust.",
          "Dissolution of authenticity: reproducibility and editability erode authority.",
          "Trust migrates: from the evidence itself to its chain and provenance."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "证据评估三角: 来源可信度 × 上下文完整性 × 技术可验证性",
          "视觉证据链: 相机参数 → 原始文件 → 发布链条",
          "真实性验证流程: 反向搜索 → 技术检测 → 交叉验证"
        ],
        "pointsEn": [
          "Evidence triangle: source credibility × contextual completeness × technical verifiability.",
          "Visual chain: camera parameters, original file, publication path.",
          "Verification flow: reverse search, technical inspection, cross-check."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "对视觉信息保持批判距离",
          "在关键判断中不依赖单一证据",
          "建立个人视觉证据验证机制"
        ],
        "pointsEn": [
          "Keep critical distance from visual information.",
          "Never rest a key judgement on a single piece of evidence.",
          "Build a personal routine for verifying visual evidence."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "disenchantment",
      "coherence-vs-valid"
    ]
  },
  {
    "id": "d13",
    "num": 113,
    "title": "预设的答案：为什么最有效的安排不需要说服任何人",
    "titleEn": "The Pre-Set Answer: Why the Most Effective Arrangement Needs No Persuasion",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-05",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "系统设计 / 选择架构 / 影响力",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：最佳的影响力不是说服，而是设计——通过预设环境引导行为，让正确的事成为阻力最小的选择",
    "conclusionText": "最佳的影响力不是说服，而是设计——通过预设环境引导行为，让正确的事成为阻力最小的选择",
    "obiEn": "The strongest influence is not persuasion but design — shaping the environment so the right action becomes the path of least resistance.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "系统设计",
      "选择架构",
      "影响力"
    ],
    "coreInsight": "最佳的影响力不是说服，而是设计——通过预设环境引导行为，让正确的事成为阻力最小的选择",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "预设答案的选择架构：设计决定行为，而非说服",
          "阻力最小路径：人类行为遵循阻力最小原则",
          "非暴力影响力：通过结构设计引导而非强制"
        ],
        "pointsEn": [
          "Choice architecture: design determines behaviour, not persuasion.",
          "Path of least resistance: human behaviour follows minimum friction.",
          "Non-coercive influence: guide through structure rather than force."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "选择架构设计框架: 行为目标 → 阻力分析 → 预设设计",
          "默认选项power: 识别哪些可设为默认",
          "阻力工程学: 增加错误阻力，减少正确阻力"
        ],
        "pointsEn": [
          "Design frame: behavioural goal, friction analysis, default design.",
          "The power of defaults: identify what can be defaulted.",
          "Friction engineering: raise friction for errors, lower it for correct action."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在产品设计中重视默认选项设置",
          "在组织管理中优化流程和系统",
          "在个人生活中设计环境支持目标"
        ],
        "pointsEn": [
          "Treat default settings as a first-class product decision.",
          "Optimise processes and systems in organisational management.",
          "Design your environment to support your goals."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "awake-vs-auto"
    ]
  },
  {
    "id": "d14",
    "num": 114,
    "title": "豁免的成本：为什么规则最怕的不是被违反，而是被例外",
    "titleEn": "The Cost of Exemption: Why Rules Fear Exception More Than Violation",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-06",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "系统思维 / 组织理论 / 规则设计",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：例外侵蚀规则的权威，违反挑战规则的存在——例外是规则的慢性自杀，违反是规则的急性抗议",
    "conclusionText": "例外侵蚀规则的权威，违反挑战规则的存在——例外是规则的慢性自杀，违反是规则的急性抗议",
    "obiEn": "Exception erodes a rule's authority while violation merely challenges its existence — exception is chronic suicide, violation an acute protest.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "系统思维",
      "组织理论",
      "规则设计"
    ],
    "coreInsight": "例外侵蚀规则的权威，违反挑战规则的存在——例外是规则的慢性自杀，违反是规则的急性抗议",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "例外成本: 破坏规则一致性的隐性代价",
          "规则权威消解: 例外比违反更能瓦解规则系统",
          "系统性腐败: 例外机制如何缓慢摧毁制度"
        ],
        "pointsEn": [
          "The cost of exception: the hidden price of broken consistency.",
          "Erosion of authority: exception dismantles a rule system more than violation does.",
          "Systemic corruption: how exemption mechanisms slowly destroy institutions."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "例外管理框架: 识别例外 → 分析成本 → 设计约束",
          "规则系统健康诊断: 权威度、一致性、可预测性",
          "例外控制机制: 透明度、频率、决策链条"
        ],
        "pointsEn": [
          "Exception management: identify, cost, constrain.",
          "Rule-system health: authority, consistency, predictability.",
          "Exception control: transparency, frequency, decision chain."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在组织设计中重视例外控制机制",
          "在规则制定时考虑人性的例外冲动",
          "在系统演化中保护规则的一致性"
        ],
        "pointsEn": [
          "Treat exception control as a design concern.",
          "Anticipate the human appetite for exception when writing rules.",
          "Protect consistency as the system evolves."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "lollapalooza"
    ]
  },
  {
    "id": "d15",
    "num": 115,
    "title": "造出来才算懂：为什么有些知识只能从试制中得到",
    "titleEn": "Only What You Build Do You Understand: Why Some Knowledge Comes Only from Prototyping",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-07",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "知识论 / 实践 / 技能习得",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：真正的理解需要「做」的循环：理论知识是地图，动手实践是疆域本身，造出来才是知识内化的完成式",
    "conclusionText": "真正的理解需要「做」的循环：理论知识是地图，动手实践是疆域本身，造出来才是知识内化的完成式",
    "obiEn": "Real understanding needs a loop of doing: theory is the map, hands-on practice is the territory, and building is how knowledge is finally internalised.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "知识论",
      "实践",
      "技能习得"
    ],
    "coreInsight": "真正的理解需要「做」的循环：理论知识是地图，动手实践是疆域本身，造出来才是知识内化的完成式",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "具身知识：知识不仅是概念，更是肌肉记忆与直觉",
          "试制即学习：制造过程是知识内化的核心机制",
          "理解边界：有些知识只有身体参与才能掌握"
        ],
        "pointsEn": [
          "Embodied knowledge: not only concepts but muscle memory and intuition.",
          "Prototyping as learning: making is the core mechanism of internalisation.",
          "The boundary of understanding: some knowledge yields only to bodily participation."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "学习-实践螺旋: 概念学习 → 原型试制 → 反馈迭代 → 深度理解",
          "具身认知训练: 多样化手部实践 → 身体直觉 → 自动化技能",
          "最小可造单元: 设计最小可制作项目，快速完成闭环"
        ],
        "pointsEn": [
          "Learning spiral: concept, prototype, feedback, deep understanding.",
          "Embodied training: varied handwork, bodily intuition, automatic skill.",
          "Minimum buildable unit: the smallest project that closes the loop fast."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在学习任何技能时，立即开始实践",
          "选择「做中学」而非「学后用」",
          "重视身体体验与直觉培养"
        ],
        "pointsEn": [
          "Start practising immediately when learning any skill.",
          "Choose learning-by-doing over learn-then-apply.",
          "Value bodily experience and the cultivation of intuition."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "coherence-vs-valid",
      "pain-feedback"
    ]
  },
  {
    "id": "d16",
    "num": 116,
    "title": "部件之间：为什么每个零件都合格，整体仍会失败",
    "titleEn": "Between the Parts: Why Every Component Can Pass and the Whole Still Fail",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-08",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "系统思维 / 复杂系统 / 整体论",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：系统的本质不在部件，而在连接——最危险的失败发生在部件完美但连接失效之处",
    "conclusionText": "系统的本质不在部件，而在连接——最危险的失败发生在部件完美但连接失效之处",
    "obiEn": "A system's essence lies not in its parts but in its connections — the most dangerous failures happen where components are perfect and connections are not.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "系统思维",
      "复杂系统",
      "整体论"
    ],
    "coreInsight": "系统的本质不在部件，而在连接——最危险的失败发生在部件完美但连接失效之处",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "涌现性：整体行为无法从部件行为简单推演",
          "连接第一：系统性能取决于连接质量而非部件质量",
          "层级失效：局部最优可能导致全局次优"
        ],
        "pointsEn": [
          "Emergence: whole-system behaviour cannot be inferred from part behaviour.",
          "Connections first: performance depends on connection quality, not part quality.",
          "Hierarchical failure: a local optimum can produce a global sub-optimum."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "系统诊断框架: 部件分析 → 连接分析 → 涌现行为分析",
          "连接质量评估: 信息流、能量流、控制流",
          "层级优化策略: 局部优化 vs 全局优化"
        ],
        "pointsEn": [
          "Diagnostic frame: parts, connections, emergent behaviour.",
          "Connection quality: information, energy, control flows.",
          "Optimisation level: local versus global."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在系统设计中优先关注连接与接口",
          "在团队管理中强调协作与沟通",
          "在个人发展中重视系统与整体视角"
        ],
        "pointsEn": [
          "Prioritise connections and interfaces in system design.",
          "Emphasise collaboration and communication in teams.",
          "Cultivate a systemic, whole-view perspective."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "lollapalooza"
    ]
  },
  {
    "id": "d17",
    "num": 117,
    "title": "价格之外：配给从未被取消，只是换了账单",
    "titleEn": "Beyond Price: Rationing Was Never Abolished, Only Re-Billed",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-09",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "经济学 / 制度设计 / 社会行为",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：配给从未消失，只是从显性的数量限制变为隐性的价格、时间、资格等成本——资源分配的底层逻辑不变",
    "conclusionText": "配给从未消失，只是从显性的数量限制变为隐性的价格、时间、资格等成本——资源分配的底层逻辑不变",
    "obiEn": "Rationing never disappeared; it moved from explicit quantity limits to implicit costs in price, time and eligibility — the underlying logic of allocation is unchanged.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "经济学",
      "制度设计",
      "社会行为"
    ],
    "coreInsight": "配给从未消失，只是从显性的数量限制变为隐性的价格、时间、资格等成本——资源分配的底层逻辑不变",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "显性 vs 隐性配给: 分配机制从数量管制转向价格筛选",
          "替代成本: 配给形式转变背后的社会适应",
          "资源稀缺性: 稀缺性驱动分配机制的演变"
        ],
        "pointsEn": [
          "Explicit versus implicit rationing: allocation shifts from quotas to price screening.",
          "Substitution cost: social adaptation behind the change of form.",
          "Scarcity drives the evolution of allocation mechanisms."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "分配机制识别框架: 显性配额 → 价格筛选 → 时间排队 → 资格审核",
          "隐性成本识别: 时间成本、机会成本、关系成本",
          "制度演变分析: 管制放松 → 市场适应 → 新管制"
        ],
        "pointsEn": [
          "Allocation frame: quotas, price screening, queuing, eligibility review.",
          "Hidden costs: time, opportunity, relationships.",
          "Institutional evolution: deregulation, market adaptation, new regulation."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在消费时识别隐性配给机制",
          "在政策分析中超越价格视角",
          "在个人决策中平衡显性与隐性成本"
        ],
        "pointsEn": [
          "Spot implicit rationing when you consume.",
          "Look past price when analysing policy.",
          "Balance explicit and implicit costs in personal decisions."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "leverage-shift",
      "struct-vs-act"
    ]
  },
  {
    "id": "d18",
    "num": 118,
    "title": "未签署的契约：我们向过去借来的秩序",
    "titleEn": "The Unsigned Contract: The Order We Borrowed from the Past",
    "sourcePool": "经典书库 · 深读笔记",
    "sourceText": "经典书库 · 深读笔记 · 2026-11-10",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "社会契约 / 历史遗产 / 制度演化",
    "quotes": [],
    "relation": "<strong>本站深读 · Your deep-read note</strong>：以下 R/W/C 三维为深读后的结构化整理，非原文照录。",
    "relationText": "本站深读：R/W/C 三维为深读后的结构化整理，非原文照录。",
    "interpretations": [],
    "conclusion": "<strong>核心洞见</strong>：今天的秩序是未经同意的历史馈赠——我们生来就背负着前人的契约，既有红利也有债务",
    "conclusionText": "今天的秩序是未经同意的历史馈赠——我们生来就背负着前人的契约，既有红利也有债务",
    "obiEn": "Today's order is an unconsented inheritance — we are born owing our predecessors' contracts, entitled to their gains and liable for their debts.",
    "links": [],
    "group": "deepread",
    "year": 2026,
    "tags": [
      "社会契约",
      "历史遗产",
      "制度演化"
    ],
    "coreInsight": "今天的秩序是未经同意的历史馈赠——我们生来就背负着前人的契约，既有红利也有债务",
    "rwc": [
      {
        "key": "R",
        "labelZh": "认知 · 认识论 / 世界观",
        "labelEn": "Cognition · Epistemology / Worldview",
        "pointsZh": [
          "代际契约：跨越时间的隐性社会契约",
          "历史负债：享受前人成果的同时承担历史遗留问题",
          "非自愿继承：我们被动接受而非主动选择社会秩序"
        ],
        "pointsEn": [
          "The intergenerational contract: an implicit social contract across time.",
          "Historical liability: enjoying predecessors' gains while carrying their unresolved problems.",
          "Involuntary inheritance: we receive the social order passively rather than choosing it."
        ]
      },
      {
        "key": "W",
        "labelZh": "方法 · 工具 / 流程",
        "labelEn": "Method · Tools / Process",
        "pointsZh": [
          "历史分层分析: 识别不同历史层叠的秩序规则",
          "代际债务评估: 分析前人的贡献与遗留问题",
          "契约修订思考: 思考如何重新协商代际契约"
        ],
        "pointsEn": [
          "Layered history: identify the order-rules sedimented by different eras.",
          "Intergenerational audit: weigh predecessors' contributions against inherited problems.",
          "Renegotiation: consider how the intergenerational contract might be revised."
        ]
      },
      {
        "key": "C",
        "labelZh": "行动 · 实践 / 选择",
        "labelEn": "Practice · Action / Choice",
        "pointsZh": [
          "在政策制定中考虑代际影响",
          "在个人生活中平衡继承与创新",
          "在社会认知中建立历史责任感"
        ],
        "pointsEn": [
          "Consider intergenerational effects in policy.",
          "Balance inheritance and innovation in personal life.",
          "Build a sense of historical responsibility in public understanding."
        ]
      }
    ],
    "noteZh": "你的深读笔记",
    "noteEn": "Your deep-read note",
    "topics": [
      "struct-vs-act",
      "education-order"
    ]
  }
];

/** Lookup by card id ('d01'..'d18'). */
export const deepReadById: Map<string, CognitionCard> = new Map(
  deepReadCards.map((c) => [c.id, c]),
);

/** Grouped by `group` value — currently the single 'deepread' bucket. */
export const deepReadByGroup: Map<string, CognitionCard[]> = new Map(
  [...new Set(deepReadCards.map((c) => c.group ?? 'deepread'))].map((g) => [
    g,
    deepReadCards.filter((c) => (c.group ?? 'deepread') === g),
  ]),
);
