/**
 * reflections.ts — Division V「伍 · AI时代省思录」数据层（离线整理成果）
 * ---------------------------------------------------------------------------
 * §0.2 / A.6 云端铁律：本文件为纯数据 + 常量，零绝对路径、零 vault 依赖。
 * L1 = _存档/lijigang_ai_learning100.md（100 条逐字原文 / 日期 / X 链接）
 * L2 = 认知素材库 - 李继刚/（思想体系总览 / 系列导航 / 思想卡片范本 / 模板 / RAG 框架）
 *
 * 产权边界（§A.4）：
 *  - quotes 为 L1 原文逐字摘录，不得改写；sourceText / links 保留 @lijigang + 日期 + X 直达。
 *  - relation / conclusion / editorial / thoughtMap / deepDive 均为「本站结构化整理 /
 *    Editorial annotation」，以 L2 为骨架改写，绝不冒称作者原话。
 *  - Tier 1（ref-01）按 L2 思想卡片范本完整落地 R/W/C + Steelman + 思想透镜 + 微小行动；
 *    Tier 2 仅提供原文 + 本站导读，不伪造 R/W/C / Steelman / 透镜 / 行动清单。
 */
import type { ReflectionCard, ReflectionIndexItem, ReflectionSegment } from './types';

export const reflectionCards: ReflectionCard[] = [
  {
    "id": "ref-01",
    "num": 1,
    "sourceNum": 1,
    "title": "Prompt 工程会不会被模型能力吞掉",
    "titleEn": "Will Prompt Engineering Be Absorbed by Model Capability?",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #1；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2024-09-21 · x/02 归档 _存档/lijigang_ai_learning100.md #1",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 提示词即理念 · 主体性介入",
    "quotes": [
      {
        "source": "",
        "text": "prompt engineer 是否会与模型能力此消彼长？",
        "html": "prompt engineer 是否会与模型能力此消彼长？"
      },
      {
        "source": "",
        "text": "取决于你是如何定义的prompt engineer。",
        "html": "取决于你是如何定义的prompt engineer。"
      },
      {
        "source": "",
        "text": "如果是盯着llm和task看，prompt就是task的代名词，那答案是yes",
        "html": "如果是盯着llm和task看，prompt就是task的代名词，那答案是yes"
      },
      {
        "source": "",
        "text": "如果是 (llm，task，你的理解)三者的结合，那答案是no",
        "html": "如果是 (llm，task，你的理解)三者的结合，那答案是no"
      },
      {
        "source": "",
        "text": "task本身无意识，需要人的主体性介入，没有你的思考理解，写出来的prompt就没有你的味道 https://t.co/1y16M67m3M",
        "html": "task本身无意识，需要人的主体性介入，没有你的思考理解，写出来的prompt就没有你的味道 https://t.co/1y16M67m3M"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：把「对着任务写指令」改写为「模型、任务与你的理解」三者的结合——这是 AI 原生实践里常人不易触达的角度：当执行门槛被抹平，剩余的变量恰恰是人的理解结构。",
    "relationText": "本站结构化整理：把「对着任务写指令」改写为「模型、任务与你的理解」三者的结合——这是 AI 原生实践里常人不易触达的角度：当执行门槛被抹平，剩余的变量恰恰是人的理解结构。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：判断一个 prompt 是否属于你，只需问——去掉「我」，它还能成立吗？此卡按 L2 思想卡片范本完整展开 R/W/C、深层追问、思想透镜与微小行动。",
    "conclusionText": "判断一个 prompt 是否属于你，只需问——去掉「我」，它还能成立吗？此卡按 L2 思想卡片范本完整展开 R/W/C、深层追问、思想透镜与微小行动。",
    "obiEn": "A prompt is not a task label but the conjunction of model, task and your own understanding; without subjective involvement it carries no trace of you.",
    "links": [
      "https://x.com/lijigang/status/1837516470034878862"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "coherence-vs-valid"
    ],
    "tier": "tier1",
    "segment": "S1",
    "editorial": {
      "zh": "他的思考不是答案，而是把你带到一个位置：那里衡量提示词的尺度不是技巧，而是你作为主体的不可替代性。",
      "en": "His reflection is not an answer but a place to stand: where a prompt is measured not by technique but by your irreplaceability as a subject."
    },
    "deepDive": {
      "rwc": [
        {
          "key": "R",
          "labelZh": "认知 · 认识论 / 世界观",
          "labelEn": "Cognition · Epistemology / Worldview",
          "pointsZh": [
            "Prompt Engineering 不是简单的任务指令，而是 (llm, task, 你的理解) 的结合。",
            "主体性介入：没有人的理解，Prompt 就没有「你的味道」。",
            "思维升级：从「技术技巧」升级为「认知能力」——无论模型多强，都需要人的独特理解。"
          ],
          "pointsEn": [
            "Prompt engineering is not a task instruction but the conjunction of (model, task, your understanding).",
            "Subjective involvement: without human understanding a prompt carries no trace of you.",
            "Upgrade: from technique to cognitive capacity — however strong the model, a distinct human understanding is still required."
          ]
        },
        {
          "key": "W",
          "labelZh": "方法 · 工具 / 流程",
          "labelEn": "Method · Tools / Process",
          "pointsZh": [
            "三体对齐模型：模型能力 × 任务需求 × 人类理解。",
            "主体性检验：你的理解是否独特？你的味道是否存在？",
            "操作步骤：识别核心需求 → 注入自己的理解与经验 → 测试是否带有个人特色。",
            "检验 Prompt：「如果去掉『我』，这个 Prompt 还能工作吗？」"
          ],
          "pointsEn": [
            "Three-body alignment: model capability × task requirement × human understanding.",
            "Subjectivity test: is your understanding distinct; is your trace present?",
            "Steps: identify the core need → inject your own understanding and experience → test for personal character.",
            "Test prompt: \"If I remove `I`, does this prompt still work?\""
          ]
        },
        {
          "key": "C",
          "labelZh": "行动 · 实践 / 选择",
          "labelEn": "Practice · Action / Choice",
          "pointsZh": [
            "决策影响：不追求「完美 Prompt」，而追求「有你的味道」。",
            "明天就做：写 Prompt 前先问——我的独特理解是什么？",
            "本周尝试：为经典任务写两个版本，技术版 vs 个人版。",
            "每月复盘：哪些技能因过于标准化而可能被外包？",
            "需警惕：不要过度优化技术指标；避免为通用化而失去个人特色。"
          ],
          "pointsEn": [
            "Decision impact: pursue not a \"perfect prompt\" but one that carries your trace.",
            "Tomorrow: before writing a prompt, ask what your distinct understanding is.",
            "This week: write two versions of a classic task — technical vs personal.",
            "Monthly review: which skills became standardised enough to be outsourced?",
            "Pitfalls: do not over-optimise technical metrics; do not lose character to generality."
          ]
        }
      ],
      "steelmanZh": [
        "如果这个观点是错的？反例：当模型足够智能时可能自动理解所有任务，不需要人类的独特注入。",
        "边界条件：对高度重复、标准化的任务，模型可能独立完成。",
        "替代解释：Prompt Engineering 的边界会随模型能力动态调整。",
        "作者没说出的部分——隐含假设：存在某种无法被模型复制的人类理解深度。",
        "盲区：未讨论小任务是否真的需要这种整合；利益立场：深度实践者可能高估自身独特性。"
      ],
      "steelmanEn": [
        "If this is wrong? Counter-example: a sufficiently capable model may understand every task without human injection.",
        "Boundary: for highly repetitive, standardised tasks the model may work alone.",
        "Alternative: the boundary of prompt engineering shifts dynamically with model capability.",
        "Unspoken assumption: there exists a depth of human understanding no model can replicate.",
        "Blind spot: whether small tasks need this integration at all; stance: a deep practitioner may overestimate his own uniqueness."
      ],
      "lensesZh": [
        "第一性原理：模型基于概率，人类基于意义；独特体验与理解无法被完全外部化。",
        "时间尺度：短期带着独特理解编写 Prompt → 中期建立个人化 Prompt Library → 长期形成独特的 AI 协作哲学。",
        "系统层级：个体——每个 Prompt 是思维的延伸；组织——独特 Prompt 构成知识护城河；社会——集体理解构成信息压缩器。"
      ],
      "lensesEn": [
        "First principles: models run on probability, humans on meaning; distinct experience cannot be fully externalised.",
        "Time scale: short term, write prompts with distinct understanding → medium, build a personal prompt library → long term, form a personal AI-collaboration philosophy.",
        "System levels: individual, each prompt extends thinking; organisation, distinctive prompts form a knowledge moat; society, collective understanding acts as the compressor of information."
      ],
      "actionsZh": [
        "明天就做：在写 Prompt 前先问自己——我的独特理解是什么？",
        "本周尝试：为经典任务写两个版本：技术版 vs 个人版。",
        "每月复盘：哪些技能因过于标准化而可能被外包？"
      ],
      "actionsEn": [
        "Tomorrow: before writing a prompt, ask what your distinct understanding is.",
        "This week: two versions of a classic task — technical vs personal.",
        "Monthly: which skills became standardised enough to be outsourced?"
      ]
    }
  },
  {
    "id": "ref-02",
    "num": 2,
    "sourceNum": 5,
    "title": "技术进步是在还原人类，而非增强人类",
    "titleEn": "Technology Restores the Human Rather Than Augmenting It",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #5；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2025-09-18 · x/02 归档 _存档/lijigang_ai_learning100.md #5",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 外包与不可外包的内核",
    "quotes": [
      {
        "source": "",
        "text": "技术进步不是在增强人类，而是在还原人类。",
        "html": "技术进步不是在增强人类，而是在还原人类。"
      },
      {
        "source": "",
        "text": "每一次我们把某种能力外包给工具，就更接近那个无法再被外包的内核：纯粹的主体性。",
        "html": "每一次我们把某种能力外包给工具，就更接近那个无法再被外包的内核：纯粹的主体性。"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：反直觉的高认知视角：技术进步不是加法而是减法——每外包一种能力，就更逼近那个无法再被外包的内核。这是对「增强」叙事的一次结构反转。",
    "relationText": "本站结构化整理：反直觉的高认知视角：技术进步不是加法而是减法——每外包一种能力，就更逼近那个无法再被外包的内核。这是对「增强」叙事的一次结构反转。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：把「哪些能力已交给工具」列成清单，剩下的不是缺陷，而是主体性的地形图。",
    "conclusionText": "把「哪些能力已交给工具」列成清单，剩下的不是缺陷，而是主体性的地形图。",
    "obiEn": "Every capacity we outsource to a tool brings us closer to the kernel that cannot be outsourced: pure subjectivity.",
    "links": [
      "https://x.com/lijigang/status/1968721767033106562"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "leverage-shift"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "若外包终将触底，那么值得问的不是「AI 还能做什么」，而是「到最后什么仍必须由我来做」。",
      "en": "If outsourcing must bottom out, the question is not \"what else can AI do\" but \"what, in the end, only I can do\"."
    }
  },
  {
    "id": "ref-03",
    "num": 3,
    "sourceNum": 8,
    "title": "Agent 负责做，人要练习「想」",
    "titleEn": "The Agent Does; the Human Must Practise Thinking",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #8；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-02-03 · x/02 归档 _存档/lijigang_ai_learning100.md #8",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 人机分工 · 意图训练",
    "quotes": [
      {
        "source": "",
        "text": "agent ≈ doing",
        "html": "agent ≈ doing"
      },
      {
        "source": "",
        "text": "human ≈ intent",
        "html": "human ≈ intent"
      },
      {
        "source": "",
        "text": "如何才能提升自己“想”的能力呢？最近试了一条路：读科幻小说。",
        "html": "如何才能提升自己“想”的能力呢？最近试了一条路：读科幻小说。"
      },
      {
        "source": "",
        "text": "大家可以试试，天马行空的想象力结合 agent 使命必达的执行力。",
        "html": "大家可以试试，天马行空的想象力结合 agent 使命必达的执行力。"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：doing / intent 的切分把「能力」重新定位：当执行变得使命必达，稀缺项上移到想象与意愿。读科幻小说训练想象力，是一条 AI 时代独有的认知实践。",
    "relationText": "本站结构化整理：doing / intent 的切分把「能力」重新定位：当执行变得使命必达，稀缺项上移到想象与意愿。读科幻小说训练想象力，是一条 AI 时代独有的认知实践。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：分工不是效率问题，而是结构问题——执行越可靠，意图的质量越决定结果的上限。",
    "conclusionText": "分工不是效率问题，而是结构问题——执行越可靠，意图的质量越决定结果的上限。",
    "obiEn": "Agent ≈ doing, human ≈ intent; when execution is guaranteed, imagination becomes the trainable bottleneck.",
    "links": [
      "https://x.com/lijigang/status/2018893566102347882"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "struct-vs-act"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "他给的不是方法清单，而是一个反问：既然做已不再稀缺，你每天花了多少时间练习「想」。",
      "en": "Not a checklist but a question: if doing is no longer scarce, how much of your day is spent practising thinking?"
    }
  },
  {
    "id": "ref-04",
    "num": 4,
    "sourceNum": 10,
    "title": "在 AI 面前，人成了压缩包",
    "titleEn": "Before AI, a Person Becomes a Compressed Archive",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #10；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-04-06 · x/02 归档 _存档/lijigang_ai_learning100.md #10",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 独特性作为可调用结构",
    "quotes": [
      {
        "source": "",
        "text": "在 AI 面前，人成了压缩包。",
        "html": "在 AI 面前，人成了压缩包。"
      },
      {
        "source": "",
        "text": "费曼这样的人，名字输进去，思维方式、表达风格、行为习惯全解压出来了，是一个巨大的压缩包。",
        "html": "费曼这样的人，名字输进去，思维方式、表达风格、行为习惯全解压出来了，是一个巨大的压缩包。"
      },
      {
        "source": "",
        "text": "有的人，AI 得现场搜索、调研、拼凑，勉强攒出一个小压缩包。",
        "html": "有的人，AI 得现场搜索、调研、拼凑，勉强攒出一个小压缩包。"
      },
      {
        "source": "",
        "text": "还有的人，名字进去，就是一个 token。",
        "html": "还有的人，名字进去，就是一个 token。"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：用「压缩包大小」度量一个人能否被模型调用出独特结构——这是把主体性转译成信息结构的高认知视角，常人很少以这个尺度审视自己。",
    "relationText": "本站结构化整理：用「压缩包大小」度量一个人能否被模型调用出独特结构——这是把主体性转译成信息结构的高认知视角，常人很少以这个尺度审视自己。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：可被调用的不是知识量，而是思维方式、表达风格与行为习惯之间的一致性结构。",
    "conclusionText": "可被调用的不是知识量，而是思维方式、表达风格与行为习惯之间的一致性结构。",
    "obiEn": "Some names decompress a whole way of thinking; others return a single token — the size of your archive decides whether a model can call forth a distinct structure.",
    "links": [
      "https://x.com/lijigang/status/2041324946669150572"
    ],
    "group": "ai-age",
    "topics": [
      "leverage-shift",
      "coherence-vs-valid"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "把名字输进去会解压出什么——这个提问把你带到一个独自难以抵达的位置：从外部审视自己结构的可读性。",
      "en": "What decompresses when your name is entered — a question that carries you to a place hard to reach alone: examining your own structural legibility from outside."
    }
  },
  {
    "id": "ref-05",
    "num": 5,
    "sourceNum": 18,
    "title": "印刷术、互联网之后，信息正在离开人类认知",
    "titleEn": "After Print and the Internet, Information Is Leaving Human Cognition",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #18；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2025-08-25 · x/02 归档 _存档/lijigang_ai_learning100.md #18",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 信息的本体论位移",
    "quotes": [
      {
        "source": "",
        "text": "印刷术：信息获得了独立于个体记忆的存在",
        "html": "印刷术：信息获得了独立于个体记忆的存在"
      },
      {
        "source": "",
        "text": "互联网：信息获得了独立于物理空间的流动",
        "html": "互联网：信息获得了独立于物理空间的流动"
      },
      {
        "source": "",
        "text": "大模型：信息获得了独立于人类认知的生成",
        "html": "大模型：信息获得了独立于人类认知的生成"
      },
      {
        "source": "",
        "text": "信息，好像正在完成自身的本体论解放？",
        "html": "信息，好像正在完成自身的本体论解放？"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：三句对照把技术史收成一条本体论线索：信息依次脱离记忆、空间，最终脱离人类认知而自行生成。这是导师级思想者才惯用的时间尺度。",
    "relationText": "本站结构化整理：三句对照把技术史收成一条本体论线索：信息依次脱离记忆、空间，最终脱离人类认知而自行生成。这是导师级思想者才惯用的时间尺度。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：若生成不再需要人参与，那么「理解」的位置从生产端转移到判断端。",
    "conclusionText": "若生成不再需要人参与，那么「理解」的位置从生产端转移到判断端。",
    "obiEn": "Print freed information from individual memory, the internet from physical space, and large models from human cognition — is information completing its ontological liberation?",
    "links": [
      "https://x.com/lijigang/status/1960029796597199075"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "struct-vs-act"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "他没有下结论，只留一个问号——正是这个问号把你带到独自到不了的地方：信息不再以人为中心意味着什么。",
      "en": "He offers no verdict, only a question mark — and that mark carries you to a place unreached alone: what it means for information to no longer be human-centred."
    }
  },
  {
    "id": "ref-06",
    "num": 6,
    "sourceNum": 20,
    "title": "AI 同时当膨胀器和压缩器，你在哪",
    "titleEn": "AI as Both Expander and Compressor — Where Are You?",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #20；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-03-17 · x/02 归档 _存档/lijigang_ai_learning100.md #20",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 写作与阅读双双外包",
    "quotes": [
      {
        "source": "",
        "text": "A: 脑中有 1，2，3 三句话冒了出来，借助 AI，形成了一篇几千字的文章发布出去。",
        "html": "A: 脑中有 1，2，3 三句话冒了出来，借助 AI，形成了一篇几千字的文章发布出去。"
      },
      {
        "source": "",
        "text": "B: 看到 A 发布的文章，借助 AI，压缩提炼其思想，结晶出了 1，2，3.",
        "html": "B: 看到 A 发布的文章，借助 AI，压缩提炼其思想，结晶出了 1，2，3."
      },
      {
        "source": "",
        "text": "当 AI 同时充当「膨胀器」和「压缩器」，你在哪？",
        "html": "当 AI 同时充当「膨胀器」和「压缩器」，你在哪？"
      },
      {
        "source": "",
        "text": "对 A 而言，写作本应是思考的机制，不是思考的记录。现在外包给 AI 之后，思考何在？",
        "html": "对 A 而言，写作本应是思考的机制，不是思考的记录。现在外包给 AI 之后，思考何在？"
      },
      {
        "source": "",
        "text": "对 B 而言，在读的过程中，本应用自己的经验去碰撞、质疑、重组。现在外包给 AI 之后，理解何在？",
        "html": "对 B 而言，在读的过程中，本应用自己的经验去碰撞、质疑、重组。现在外包给 AI 之后，理解何在？"
      },
      {
        "source": "",
        "text": "A 没有想，B没有读。中间隔了一篇谁都不需要的文章。",
        "html": "A 没有想，B没有读。中间隔了一篇谁都不需要的文章。"
      },
      {
        "source": "",
        "text": "这篇文章的唯一功能是社交性的: 它让 A 看起来像一个有深度的思考者（毕竟写了几千字），让 B 看起来像一个高效的学习者（毕竟提炼出了要点）。",
        "html": "这篇文章的唯一功能是社交性的: 它让 A 看起来像一个有深度的思考者（毕竟写了几千字），让 B 看起来像一个高效的学习者（毕竟提炼出了要点）。"
      },
      {
        "source": "",
        "text": "请问，你在哪？",
        "html": "请问，你在哪？"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：把写作与阅读同时外包后的闭环写成一则结构诊断：文章只剩社交功能。这是「高认知人群反思」的典型——看到的不是工具利弊，而是系统里人的位置消失。",
    "relationText": "本站结构化整理：把写作与阅读同时外包后的闭环写成一则结构诊断：文章只剩社交功能。这是「高认知人群反思」的典型——看到的不是工具利弊，而是系统里人的位置消失。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：写作是思考的机制而非记录，阅读是用经验碰撞而非提炼要点；两者外包后，中间产物无人需要。",
    "conclusionText": "写作是思考的机制而非记录，阅读是用经验碰撞而非提炼要点；两者外包后，中间产物无人需要。",
    "obiEn": "A expands three thoughts into an article, B compresses it back into three; A did not think, B did not read, and between them lies an article nobody needed.",
    "links": [
      "https://x.com/lijigang/status/2033809042599219691"
    ],
    "group": "ai-age",
    "topics": [
      "coherence-vs-valid",
      "awake-vs-auto"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "「请问，你在哪？」——他不替你回答，而是把你放进图里，让你自己发现坐标已经空了。",
      "en": "\"Where are you?\" — he does not answer for you; he places you inside the diagram so you notice the coordinate is empty."
    }
  },
  {
    "id": "ref-07",
    "num": 7,
    "sourceNum": 21,
    "title": "人+AI 在变强，单纯的「我」在变弱",
    "titleEn": "Human + AI Grows Stronger While the Mere \"I\" Grows Weaker",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #21；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-03-06 · x/02 归档 _存档/lijigang_ai_learning100.md #21",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 协作增强与个体退化并行",
    "quotes": [
      {
        "source": "",
        "text": "最近一段时间，明显感受到自己记忆力在下降。",
        "html": "最近一段时间，明显感受到自己记忆力在下降。"
      },
      {
        "source": "",
        "text": "应该是给模型让渡了一部分的记忆存储和提取能力。与它同在时，像是穿上了机甲，记忆超群，指哪打哪。",
        "html": "应该是给模型让渡了一部分的记忆存储和提取能力。与它同在时，像是穿上了机甲，记忆超群，指哪打哪。"
      },
      {
        "source": "",
        "text": "线下与人交流，放下手机，纯粹在场，总会出现“有个东西，好像是那个…记不太清楚了”。",
        "html": "线下与人交流，放下手机，纯粹在场，总会出现“有个东西，好像是那个…记不太清楚了”。"
      },
      {
        "source": "",
        "text": "人+ai，在变强。",
        "html": "人+ai，在变强。"
      },
      {
        "source": "",
        "text": "单纯的“我”，在变弱。",
        "html": "单纯的“我”，在变弱。"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：以自身记忆力下降为样本，坦陈让渡记忆存储与提取的代价：机甲里超群，放下手机却想不起词。高认知者的反思常从自我观察切入，而非抽象论断。",
    "relationText": "本站结构化整理：以自身记忆力下降为样本，坦陈让渡记忆存储与提取的代价：机甲里超群，放下手机却想不起词。高认知者的反思常从自我观察切入，而非抽象论断。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：能力的总量与个体的能力是两个变量；协作系统的增强可以掩盖后者的萎缩。",
    "conclusionText": "能力的总量与个体的能力是两个变量；协作系统的增强可以掩盖后者的萎缩。",
    "obiEn": "With the model one wears a mecha of perfect recall; set the phone down and a word goes missing — augmentation of the pair and atrophy of the individual run in parallel.",
    "links": [
      "https://x.com/lijigang/status/2029802656991228129"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "pain-feedback"
    ],
    "tier": "tier2",
    "segment": "S1",
    "editorial": {
      "zh": "他没有给解决方案，只把「人+ai 在变强」与「我在变弱」并置——这个并置本身就是抛砖引玉。",
      "en": "No remedy is offered, only the juxtaposition of \"human + AI grows stronger\" and \"I grow weaker\" — the juxtaposition itself is the brick offered for jade."
    }
  },
  {
    "id": "ref-08",
    "num": 8,
    "sourceNum": 72,
    "title": "赵汀阳：不是对 AI 说不，是对「想要一切」的自己说不",
    "titleEn": "Not Saying No to AI, but to the Self That Wants Everything",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #72；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-05-14 · x/02 归档 _存档/lijigang_ai_learning100.md #72",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 存在论与「不」的能力",
    "quotes": [
      {
        "source": "",
        "text": "赵汀阳《人工智能的神话或悲歌》，这本书有三个开关：",
        "html": "赵汀阳《人工智能的神话或悲歌》，这本书有三个开关："
      },
      {
        "source": "",
        "text": "第一个开关在最底下，是存在论。",
        "html": "第一个开关在最底下，是存在论。"
      },
      {
        "source": "",
        "text": "赵汀阳说，西方哲学几千年都把存在当名词处理——\"什么是 X\"、\"X 的本质\"——仿佛事物已经在那里等着被认出来。他要把这个翻过来：*存在不是名词，是动词*。事物不只是它现在所是的样子，还内在地带着\"可以不是这样\"的可能。必然性不是世界的全部，可能性也是。这一翻，就翻出了 AI 怎么也跨不过的那条河。AI 跑在图灵机里，处理的是已经被定下来的真值，再快也只是在名词的层面上扑腾；可能性不是它能开出来的东西。所以赵汀阳一面承认 AI 厉害，一面坚持它还不算主体——它还在名词里，没踏进动词。",
        "html": "赵汀阳说，西方哲学几千年都把存在当名词处理——&quot;什么是 X&quot;、&quot;X 的本质&quot;——仿佛事物已经在那里等着被认出来。他要把这个翻过来：*存在不是名词，是动词*。事物不只是它现在所是的样子，还内在地带着&quot;可以不是这样&quot;的可能。必然性不是世界的全部，可能性也是。这一翻，就翻出了 AI 怎么也跨不过的那条河。AI 跑在图灵机里，处理的是已经被定下来的真值，再快也只是在名词的层面上扑腾；可能性不是它能开出来的东西。所以赵汀阳一面承认 AI 厉害，一面坚持它还不算主体——它还在名词里，没踏进动词。"
      },
      {
        "source": "",
        "text": "第二个开关搁在中间，是人。",
        "html": "第二个开关搁在中间，是人。"
      },
      {
        "source": "",
        "text": "存在既然是动词，那人是怎么把握住这个动词的？赵汀阳给的答案是一个特别朴素的字：*不*。\"不\"字一发明出来，人就从\"只能看见 是\"升级到\"能看见 不是、能想象 别的样子\"。否定一打开，可能性就涌进来；可能性一涌进来，未来才从此分叉，选择才有意义，自由意志才长得出来。所以反思的核心动作根本不是想得多深、算得多快，是能在心里立起一个\"不\"——能把当下的自己当成对象审视。这就是他敢说 GPT 处理数据再快人类百万倍也不构成自我意识的原因：它没有\"不\"。它学得很多，但学不到自己——*学而不思*。意识的判据从来不在外向的算力，而在内向的反身。",
        "html": "存在既然是动词，那人是怎么把握住这个动词的？赵汀阳给的答案是一个特别朴素的字：*不*。&quot;不&quot;字一发明出来，人就从&quot;只能看见 是&quot;升级到&quot;能看见 不是、能想象 别的样子&quot;。否定一打开，可能性就涌进来；可能性一涌进来，未来才从此分叉，选择才有意义，自由意志才长得出来。所以反思的核心动作根本不是想得多深、算得多快，是能在心里立起一个&quot;不&quot;——能把当下的自己当成对象审视。这就是他敢说 GPT 处理数据再快人类百万倍也不构成自我意识的原因：它没有&quot;不&quot;。它学得很多，但学不到自己——*学而不思*。意识的判据从来不在外向的算力，而在内向的反身。"
      },
      {
        "source": "",
        "text": "第三个开关搁在最上面，是现代性。",
        "html": "第三个开关搁在最上面，是现代性。"
      },
      {
        "source": "",
        "text": "前两个在讲\"人本来是怎么回事\"，这一个讲\"现代人活成了什么样子\"。赵汀阳的诊断很硬：现代性的内核是一个神话——*把人当神，要一切，不许给自己设边界*。无限欲望本身成了主体的本质，凡是说\"少要点\"的伦理批判，在这台发动机面前都软弱无力。为什么好事比坏事致命？因为坏事激起反抗——反抗是\"说不\"的本能，是反思的触发器。好事不激起反抗，\"不\"字就用不上，反思的肌肉慢慢萎缩，再加上现代性催着继续要更多，整个人就在最舒服的状态里慢慢凋零。为什么禁不住 AI？因为伦理要的是\"少\"，现代性要的是\"无限\"，两边方向是反的。",
        "html": "前两个在讲&quot;人本来是怎么回事&quot;，这一个讲&quot;现代人活成了什么样子&quot;。赵汀阳的诊断很硬：现代性的内核是一个神话——*把人当神，要一切，不许给自己设边界*。无限欲望本身成了主体的本质，凡是说&quot;少要点&quot;的伦理批判，在这台发动机面前都软弱无力。为什么好事比坏事致命？因为坏事激起反抗——反抗是&quot;说不&quot;的本能，是反思的触发器。好事不激起反抗，&quot;不&quot;字就用不上，反思的肌肉慢慢萎缩，再加上现代性催着继续要更多，整个人就在最舒服的状态里慢慢凋零。为什么禁不住 AI？因为伦理要的是&quot;少&quot;，现代性要的是&quot;无限&quot;，两边方向是反的。"
      },
      {
        "source": "",
        "text": "这三根线之间不是平行的，是托着的。底下一根托着上一根：存在的动词性是地基，托起人作为能说\"不\"的存在物；人这种存在物再被现代性扭一下，就变成了\"忘了怎么说不\"的疯狂的现代人。",
        "html": "这三根线之间不是平行的，是托着的。底下一根托着上一根：存在的动词性是地基，托起人作为能说&quot;不&quot;的存在物；人这种存在物再被现代性扭一下，就变成了&quot;忘了怎么说不&quot;的疯狂的现代人。"
      },
      {
        "source": "",
        "text": "但有一处特别有意思——这三根不只是从下往上托，最上面那根还反过来咬下面那根。现代性不是中性的发动机，它会主动抑制人的\"不\"字功能。它告诉你不能不要、不能停下、不能拒绝——所有\"不\"都成了过时的抱怨、跟不上时代、思想反动。第二根开关本来就是用来制约第一根的盲动力——人发明\"不\"字就是为了从盲目的存在里抬头一看；可现代性把这个制动器拆了，于是发动机就一路油门到底。AI 不是这场失控的肇事者，是它的发明物、放大器，是它面前那个最完美的诱惑——一个能替你做完一切的助手，让你彻底再也用不上\"不\"字。",
        "html": "但有一处特别有意思——这三根不只是从下往上托，最上面那根还反过来咬下面那根。现代性不是中性的发动机，它会主动抑制人的&quot;不&quot;字功能。它告诉你不能不要、不能停下、不能拒绝——所有&quot;不&quot;都成了过时的抱怨、跟不上时代、思想反动。第二根开关本来就是用来制约第一根的盲动力——人发明&quot;不&quot;字就是为了从盲目的存在里抬头一看；可现代性把这个制动器拆了，于是发动机就一路油门到底。AI 不是这场失控的肇事者，是它的发明物、放大器，是它面前那个最完美的诱惑——一个能替你做完一切的助手，让你彻底再也用不上&quot;不&quot;字。"
      },
      {
        "source": "",
        "text": "所以这本书真正讲的不是 AI。是讲一个故事：人本来有个动词性的世界，本来有\"不\"这把钥匙打开未来，但现代性把钥匙丢了；丢了以后造出 AI，AI 又把\"不再需要这把钥匙\"的舒适感推到了极致。文明的死法不是 AI 杀我们，是我们自愿把那把钥匙交出去了——交得很愉快，因为换来的是再也不用劳累的生活。",
        "html": "所以这本书真正讲的不是 AI。是讲一个故事：人本来有个动词性的世界，本来有&quot;不&quot;这把钥匙打开未来，但现代性把钥匙丢了；丢了以后造出 AI，AI 又把&quot;不再需要这把钥匙&quot;的舒适感推到了极致。文明的死法不是 AI 杀我们，是我们自愿把那把钥匙交出去了——交得很愉快，因为换来的是再也不用劳累的生活。"
      },
      {
        "source": "",
        "text": "赵汀阳的解药就藏在书名的\"或\"字里：是神话还是悲歌，还没有定下来。如果还能把第二根开关重新打开，把\"不\"字从废柴堆里捡回来——*不是对 AI 说不，是对那个\"想要一切\"的自己说不*——故事就还能有另一种写法。",
        "html": "赵汀阳的解药就藏在书名的&quot;或&quot;字里：是神话还是悲歌，还没有定下来。如果还能把第二根开关重新打开，把&quot;不&quot;字从废柴堆里捡回来——*不是对 AI 说不，是对那个&quot;想要一切&quot;的自己说不*——故事就还能有另一种写法。"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：借赵汀阳把「存在是动词 / 人因『不』而有自由 / 现代性拆掉这把钥匙」三层托起，再反转：AI 不是肇事者，是让人再也用不上「不」的放大器。这是常人独自难以抵达的哲学层位。",
    "relationText": "本站结构化整理：借赵汀阳把「存在是动词 / 人因『不』而有自由 / 现代性拆掉这把钥匙」三层托起，再反转：AI 不是肇事者，是让人再也用不上「不」的放大器。这是常人独自难以抵达的哲学层位。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：文明的危险不在 AI 的能力，而在人自愿交出否定能力时换来的舒适；解药仍藏在「或」字里。",
    "conclusionText": "文明的危险不在 AI 的能力，而在人自愿交出否定能力时换来的舒适；解药仍藏在「或」字里。",
    "obiEn": "Modernity removed the human capacity to say \"no\"; AI is not the culprit but the amplifier that makes the key unnecessary — and we handed it over willingly.",
    "links": [
      "https://x.com/lijigang/status/2055123684516651238"
    ],
    "group": "ai-age",
    "topics": [
      "awake-vs-auto",
      "disenchantment"
    ],
    "tier": "tier2",
    "segment": "S4",
    "editorial": {
      "zh": "他把一本书读成一个关于你我的故事——不是答案，而是把「说不」这把钥匙重新放回你手里。",
      "en": "He reads a book into a story about us — not an answer, but placing the key of \"no\" back into your hand."
    }
  },
  {
    "id": "ref-09",
    "num": 9,
    "sourceNum": 76,
    "title": "大多数时候你不是你，你是「人们」",
    "titleEn": "Most of the Time You Are Not You, but \"They\"",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #76；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-04-18 · x/02 归档 _存档/lijigang_ai_learning100.md #76",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 借来的存在与本真决断",
    "quotes": [
      {
        "source": "",
        "text": "「大多数时候，你不是你——你是\"人们\"。你穿大家穿的衣服，说大家说的话，关心大家关心的事，对大家厌恶的东西厌恶。你看新闻，是因为大家看；你升职加薪，是因为大家以为这是好的；你结婚生子，是因为时间到了大家都这么做。这不全是坏事，这是人之所以是社会动物的方式。但代价是：你的存在不是你的，是借来的。你随时可以把它还回去，因为你从一开始就没真正拿过它。",
        "html": "「大多数时候，你不是你——你是&quot;人们&quot;。你穿大家穿的衣服，说大家说的话，关心大家关心的事，对大家厌恶的东西厌恶。你看新闻，是因为大家看；你升职加薪，是因为大家以为这是好的；你结婚生子，是因为时间到了大家都这么做。这不全是坏事，这是人之所以是社会动物的方式。但代价是：你的存在不是你的，是借来的。你随时可以把它还回去，因为你从一开始就没真正拿过它。"
      },
      {
        "source": "",
        "text": "直到有一天——通常是被某个事件砸中，比如一场重病、一个亲人的死、一次破产、一段关系的崩塌——某种深层的焦虑（不是怕某个具体的东西，是莫名地焦虑，海德格尔叫 Angst）涌上来，你突然看见：我有一天会死，而且死的是我，没有任何人能替我死。这一刻，那个借来的\"人们\"维度突然崩了，剩下你赤裸地面对自己的可能性。",
        "html": "直到有一天——通常是被某个事件砸中，比如一场重病、一个亲人的死、一次破产、一段关系的崩塌——某种深层的焦虑（不是怕某个具体的东西，是莫名地焦虑，海德格尔叫 Angst）涌上来，你突然看见：我有一天会死，而且死的是我，没有任何人能替我死。这一刻，那个借来的&quot;人们&quot;维度突然崩了，剩下你赤裸地面对自己的可能性。"
      },
      {
        "source": "",
        "text": "这个赤裸时刻，海德格尔叫\"本真\"。不是道德上的高尚，不是修行人的境界——是一种结构上的\"领会自己\"。从这里你可以选择真正属于自己的活法——他叫\"决断\"。」",
        "html": "这个赤裸时刻，海德格尔叫&quot;本真&quot;。不是道德上的高尚，不是修行人的境界——是一种结构上的&quot;领会自己&quot;。从这里你可以选择真正属于自己的活法——他叫&quot;决断&quot;。」"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：以海德格尔的常人、Angst 与决断重述「自我」：存在往往是借来的，直到赤裸面对自己的有限性才开始本真选择。在算法趋同的时代，这一追问更显锋利。",
    "relationText": "本站结构化整理：以海德格尔的常人、Angst 与决断重述「自我」：存在往往是借来的，直到赤裸面对自己的有限性才开始本真选择。在算法趋同的时代，这一追问更显锋利。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：所谓「做自己」不是道德要求，而是结构上的领会自己；前提是先看见哪部分存在是借来的。",
    "conclusionText": "所谓「做自己」不是道德要求，而是结构上的领会自己；前提是先看见哪部分存在是借来的。",
    "obiEn": "Existence is borrowed from the anonymous \"they\" until Angst strips it away, leaving you naked before your own finite possibility — the structural moment of authenticity.",
    "links": [
      "https://x.com/lijigang/status/2045393546950352914"
    ],
    "group": "ai-age",
    "topics": [
      "disenchantment",
      "awake-vs-auto"
    ],
    "tier": "tier2",
    "segment": "S4",
    "editorial": {
      "zh": "他把「你是谁」这个问题拆到无处可借的位置——不是为了给答案，而是让你站到那个赤裸时刻。",
      "en": "He dismantles \"who are you\" down to a place where nothing can be borrowed — not to answer, but to place you at that naked moment."
    }
  },
  {
    "id": "ref-10",
    "num": 10,
    "sourceNum": 77,
    "title": "人是开端：AI 时代问的是「你到底想要什么」",
    "titleEn": "The Human Is a Beginning: the AI Age Asks \"What Do You Actually Want?\"",
    "sourcePool": "L1 原文层：_存档/lijigang_ai_learning100.md #77；L2 分析层：认知素材库 - 李继刚/（思想体系总览 · 系列导航 01 · RAG 框架）",
    "sourceText": "@lijigang（李继刚） · 2026-03-25 · x/02 归档 _存档/lijigang_ai_learning100.md #77",
    "author": {
      "id": "lijigang",
      "zh": "李继刚",
      "en": "Li Jigang",
      "handle": "@lijigang"
    },
    "theme": "AI 时代 · 人是开端与意愿",
    "quotes": [
      {
        "source": "",
        "text": "汉娜 阿伦特说人是「开端」。",
        "html": "汉娜 阿伦特说人是「开端」。"
      },
      {
        "source": "",
        "text": "宇宙里大部分东西都是因果链条。台球 A 撞台球 B，B 的方向和速度完全可以从 A 的运动算出来。给你足够的数据，你能预测一切。",
        "html": "宇宙里大部分东西都是因果链条。台球 A 撞台球 B，B 的方向和速度完全可以从 A 的运动算出来。给你足够的数据，你能预测一切。"
      },
      {
        "source": "",
        "text": "石头不会突然决定往左飞。河水不会忽然改主意倒着流。物理世界的下一秒，永远是上一秒的结果。",
        "html": "石头不会突然决定往左飞。河水不会忽然改主意倒着流。物理世界的下一秒，永远是上一秒的结果。"
      },
      {
        "source": "",
        "text": "但人出生了。",
        "html": "但人出生了。"
      },
      {
        "source": "",
        "text": "一个婴儿来到世界上，他父母的基因可以解释他的眼睛颜色，但解释不了他三十岁时会写出什么诗、爱上什么人、做出什么决定。",
        "html": "一个婴儿来到世界上，他父母的基因可以解释他的眼睛颜色，但解释不了他三十岁时会写出什么诗、爱上什么人、做出什么决定。"
      },
      {
        "source": "",
        "text": "他是一个因果链条的断裂点。",
        "html": "他是一个因果链条的断裂点。"
      },
      {
        "source": "",
        "text": "从他出现的那一刻起，世界上就多了一条因果链没法预测的线索。他可以做出一件从来没有人做过的事。不是因为他特别厉害，而是因为他是新的。他的组合方式、他经历的具体事情、他在某个下午突然冒出来的念头，这些东西在他出生之前不存在于宇宙中的任何地方。",
        "html": "从他出现的那一刻起，世界上就多了一条因果链没法预测的线索。他可以做出一件从来没有人做过的事。不是因为他特别厉害，而是因为他是新的。他的组合方式、他经历的具体事情、他在某个下午突然冒出来的念头，这些东西在他出生之前不存在于宇宙中的任何地方。"
      },
      {
        "source": "",
        "text": "乔布斯做出 iPhone。你可以事后分析触摸屏技术成熟了、iPod 的经验积累了、移动互联网的时机到了，所有条件都能一一解释。但在 iPhone 出现之前，没有任何人从这些条件中预测出它。条件是必要的，但从条件到结果之间，有一个跳跃。",
        "html": "乔布斯做出 iPhone。你可以事后分析触摸屏技术成熟了、iPod 的经验积累了、移动互联网的时机到了，所有条件都能一一解释。但在 iPhone 出现之前，没有任何人从这些条件中预测出它。条件是必要的，但从条件到结果之间，有一个跳跃。"
      },
      {
        "source": "",
        "text": "那个跳跃，就是阿伦特说的\"开端\"。",
        "html": "那个跳跃，就是阿伦特说的&quot;开端&quot;。"
      },
      {
        "source": "",
        "text": "因为人会出生，世界上才有了\"从未有过的事情可以发生\"这件事。每个人都是一个小小的奇迹。不是因为我们多了不起，而是因为我们的存在本身就是因果链上的一个意外。",
        "html": "因为人会出生，世界上才有了&quot;从未有过的事情可以发生&quot;这件事。每个人都是一个小小的奇迹。不是因为我们多了不起，而是因为我们的存在本身就是因果链上的一个意外。"
      },
      {
        "source": "",
        "text": "人的新，在网络世界里，就是「创造」。",
        "html": "人的新，在网络世界里，就是「创造」。"
      },
      {
        "source": "",
        "text": "互联网时代，受限于编写代码的门槛，大多数人只能停留在「观点表达」。",
        "html": "互联网时代，受限于编写代码的门槛，大多数人只能停留在「观点表达」。"
      },
      {
        "source": "",
        "text": "AI 时代，这个门槛已经消失，我们往前跨了一步，一个趔趄，突然发现，我们竟然进入了一个「如你所愿」的世界。",
        "html": "AI 时代，这个门槛已经消失，我们往前跨了一步，一个趔趄，突然发现，我们竟然进入了一个「如你所愿」的世界。"
      },
      {
        "source": "",
        "text": "这个时代对我们发出的提问是：「你，到底想要什么呢？」",
        "html": "这个时代对我们发出的提问是：「你，到底想要什么呢？」"
      }
    ],
    "relation": "<strong>本站结构化整理 · Editorial annotation</strong>：借阿伦特把人解释为因果链上的断裂点，再推进到 AI 时代：实现门槛消失后，提问从「能不能」变成「到底想要什么」。这是把技术判断转成存在论追问的高认知视角。",
    "relationText": "本站结构化整理：借阿伦特把人解释为因果链上的断裂点，再推进到 AI 时代：实现门槛消失后，提问从「能不能」变成「到底想要什么」。这是把技术判断转成存在论追问的高认知视角。",
    "interpretations": [],
    "conclusion": "<strong>本站结构化整理 · Editorial annotation</strong>：当条件足以解释一切结果，唯一不可被条件推出的，是那个发起跳跃的意愿。",
    "conclusionText": "当条件足以解释一切结果，唯一不可被条件推出的，是那个发起跳跃的意愿。",
    "obiEn": "A person is a rupture in the causal chain; when the cost of realising an idea falls to zero, the only remaining question is the will itself.",
    "links": [
      "https://x.com/lijigang/status/2036832726758916259"
    ],
    "group": "ai-age",
    "topics": [
      "struct-vs-act",
      "leverage-shift"
    ],
    "tier": "tier2",
    "segment": "S4",
    "editorial": {
      "zh": "他停在「你，到底想要什么呢？」——把最难的问题留给你，因为那个位置本来就只有你能站。",
      "en": "He stops at \"what do you actually want?\" — leaving the hardest question to you, because that position can only ever be occupied by you."
    }
  }
];

export const reflectionById: Map<string, ReflectionCard> = new Map(
  reflectionCards.map((c) => [c.id, c])
);

/** 5 段分区（L1 实测边界），供思想地图与全量索引用。 */
export const reflectionSegments: ReflectionSegment[] = [
  {
    "key": "S1",
    "range": "01–21",
    "zh": "人机协作与主体性",
    "en": "Human–AI Collaboration & Subjectivity",
    "questionZh": "与模型共处时，什么仍必须由「我」来做？",
    "questionEn": "In working with models, what must still be done by \"I\"?"
  },
  {
    "key": "S2",
    "range": "22–40",
    "zh": "阅读、知识内化与读书法",
    "en": "Reading, Internalisation & Study Methods",
    "questionZh": "当信息可被无限提炼，深度阅读如何可能？",
    "questionEn": "When information can be refined infinitely, how is deep reading possible?"
  },
  {
    "key": "S3",
    "range": "41–64",
    "zh": "提问、思考与认知模型",
    "en": "Questioning, Thinking & Cognitive Models",
    "questionZh": "答案唾手可得时，提问的能力去哪了？",
    "questionEn": "When answers are on tap, where does the capacity to question go?"
  },
  {
    "key": "S4",
    "range": "65–79",
    "zh": "学习的原理：论文精读与哲学对照",
    "en": "Learning Principles: Papers & Philosophical Parallels",
    "questionZh": "理解即压缩、学习即遗忘——什么值得留下？",
    "questionEn": "Understanding as compression, learning as forgetting — what is worth keeping?"
  },
  {
    "key": "S5",
    "range": "80–100",
    "zh": "成长、实践与自我修养",
    "en": "Growth, Practice & Self-Cultivation",
    "questionZh": "在「如你所愿」的世界里，你到底想要什么？",
    "questionEn": "In a world that grants wishes, what do you actually want?"
  }
];

/** 思想地图：5 段 + L2 四象限主线 + 4 条哲学宣言（全部双语，标注结构化整理视角）。 */
export const thoughtMap = {
  "segments": [
    {
      "key": "S1",
      "range": "01–21",
      "zh": "人机协作与主体性",
      "en": "Human–AI Collaboration & Subjectivity",
      "questionZh": "与模型共处时，什么仍必须由「我」来做？",
      "questionEn": "In working with models, what must still be done by \"I\"?"
    },
    {
      "key": "S2",
      "range": "22–40",
      "zh": "阅读、知识内化与读书法",
      "en": "Reading, Internalisation & Study Methods",
      "questionZh": "当信息可被无限提炼，深度阅读如何可能？",
      "questionEn": "When information can be refined infinitely, how is deep reading possible?"
    },
    {
      "key": "S3",
      "range": "41–64",
      "zh": "提问、思考与认知模型",
      "en": "Questioning, Thinking & Cognitive Models",
      "questionZh": "答案唾手可得时，提问的能力去哪了？",
      "questionEn": "When answers are on tap, where does the capacity to question go?"
    },
    {
      "key": "S4",
      "range": "65–79",
      "zh": "学习的原理：论文精读与哲学对照",
      "en": "Learning Principles: Papers & Philosophical Parallels",
      "questionZh": "理解即压缩、学习即遗忘——什么值得留下？",
      "questionEn": "Understanding as compression, learning as forgetting — what is worth keeping?"
    },
    {
      "key": "S5",
      "range": "80–100",
      "zh": "成长、实践与自我修养",
      "en": "Growth, Practice & Self-Cultivation",
      "questionZh": "在「如你所愿」的世界里，你到底想要什么？",
      "questionEn": "In a world that grants wishes, what do you actually want?"
    }
  ],
  "mainline": {
    "stepsZh": [
      "AI 时代的技术变革",
      "人的独特价值是什么？ (R · 认知重塑)",
      "如何保持人的主体性？ (W · 方法论)",
      "如何在实践中验证？ (C · 行动)"
    ],
    "stepsEn": [
      "Technological change of the AI age",
      "What is uniquely human? (R · Cognition)",
      "How is subjectivity preserved? (W · Method)",
      "How is it verified in practice? (C · Action)"
    ]
  },
  "declarations": [
    {
      "labelZh": "存在论 · 存在不是名词，是动词",
      "labelEn": "Ontology · Being is a verb, not a noun",
      "zh": "事物不只是它现在所是的样子，还内在地带着「可以不是这样」的可能。",
      "en": "A thing is not only what it currently is; it carries within it the possibility of being otherwise."
    },
    {
      "labelZh": "认识论 · 理解即压缩，学习即遗忘",
      "labelEn": "Epistemology · Understanding is compression, learning is forgetting",
      "zh": "专家和新手的差别不在知识量——在于专家知道什么可以忘。",
      "en": "The expert differs from the novice not in the volume of knowledge but in knowing what can be forgotten."
    },
    {
      "labelZh": "伦理学 · 诚实是生存策略",
      "labelEn": "Ethics · Honesty is a survival strategy",
      "zh": "你不能系统地欺骗，因为你的系统就是建立在谎言上的。",
      "en": "You cannot deceive systematically, because your system would then be built on a lie."
    },
    {
      "labelZh": "方法论 · 人是大模型，AI 是 Tool",
      "labelEn": "Method · The human is the model, AI the tool",
      "zh": "个体的价值是知识的结构与品味。",
      "en": "The value of an individual lies in the structure and taste of their knowledge."
    }
  ],
  "note": {
    "zh": "思想地图为本站结构化整理视角：四象限为 L2 分析框架；原文档（L1）另将 65–79 单列为第 5 段「学习的原理：论文精读与哲学对照」。索引事实以 L1 为准，分析视角以 L2 为准，并存不互相覆盖。",
    "en": "The thought map is an editorial (structured-reading) view: the four quadrants come from the L2 analytic framework, while the L1 source additionally lists 65–79 as a fifth segment, \"Learning Principles\". Index facts follow L1; the analytic lens follows L2; both coexist."
  }
};

/** 100 条全量索引（编号 / 标题 / 日期 / X 链接 / 5 段分区），不进交叉矩阵。 */
export const reflectionIndex: ReflectionIndexItem[] = [
  {
    "num": 1,
    "title": "Prompt 工程会不会被模型能力吞掉",
    "date": "2024-09-21",
    "url": "https://x.com/lijigang/status/1837516470034878862",
    "segment": "S1"
  },
  {
    "num": 2,
    "title": "使用 AI 的三条路",
    "date": "2025-06-13",
    "url": "https://x.com/lijigang/status/1933733323266011483",
    "segment": "S1"
  },
  {
    "num": 3,
    "title": "写 Prompt 的结构、压缩、共振与故事",
    "date": "2025-05-13",
    "url": "https://x.com/lijigang/status/1922298775768571913",
    "segment": "S1"
  },
  {
    "num": 4,
    "title": "把 AI 当工具、助手，还是舞伴",
    "date": "2025-07-09",
    "url": "https://x.com/lijigang/status/1943114164677022176",
    "segment": "S1"
  },
  {
    "num": 5,
    "title": "技术进步是在还原人类，而非增强人类",
    "date": "2025-09-18",
    "url": "https://x.com/lijigang/status/1968721767033106562",
    "segment": "S1"
  },
  {
    "num": 6,
    "title": "人机指令的三类：放开、约束、约束边界",
    "date": "2026-03-18",
    "url": "https://x.com/lijigang/status/2034476523194098034",
    "segment": "S1"
  },
  {
    "num": 7,
    "title": "判断、要性和品味会不会也被交出去",
    "date": "2026-05-05",
    "url": "https://x.com/lijigang/status/2051665843625627713",
    "segment": "S1"
  },
  {
    "num": 8,
    "title": "Agent 负责做，人要练习「想」",
    "date": "2026-02-03",
    "url": "https://x.com/lijigang/status/2018893566102347882",
    "segment": "S1"
  },
  {
    "num": 9,
    "title": "复杂性下沉之后，关键变成 What",
    "date": "2025-05-21",
    "url": "https://x.com/lijigang/status/1925395670967738777",
    "segment": "S1"
  },
  {
    "num": 10,
    "title": "在 AI 面前，人成了压缩包",
    "date": "2026-04-06",
    "url": "https://x.com/lijigang/status/2041324946669150572",
    "segment": "S1"
  },
  {
    "num": 11,
    "title": "面对无限供给，靠加速获取是死路",
    "date": "2025-12-13",
    "url": "https://x.com/lijigang/status/1999803827403563240",
    "segment": "S1"
  },
  {
    "num": 12,
    "title": "锯齿状能力、脚手架，以及会被冲掉的房子",
    "date": "2026-04-09",
    "url": "https://x.com/lijigang/status/2042151153270661366",
    "segment": "S1"
  },
  {
    "num": 13,
    "title": "脚手架的全部价值在于被拆掉",
    "date": "2026-04-03",
    "url": "https://x.com/lijigang/status/2040006145847525426",
    "segment": "S1"
  },
  {
    "num": 14,
    "title": "Skills 会被模型内化，就像 Prompt 一样",
    "date": "2026-05-08",
    "url": "https://x.com/lijigang/status/2052660445786587313",
    "segment": "S1"
  },
  {
    "num": 15,
    "title": "通用问题找轮子，私有问题向内搓",
    "date": "2026-03-28",
    "url": "https://x.com/lijigang/status/2038090572800606262",
    "segment": "S1"
  },
  {
    "num": 16,
    "title": "Agent 一路补短板，也会被模型再吞回去",
    "date": "2026-10-03",
    "url": "https://x.com/lijigang/status/2106580939489054978",
    "segment": "S1"
  },
  {
    "num": 17,
    "title": "产品原子：连续性沉淀在谁身上",
    "date": "2026-11-09",
    "url": "https://x.com/lijigang/status/2120013746974212464",
    "segment": "S1"
  },
  {
    "num": 18,
    "title": "印刷术、互联网之后，信息正在离开人类认知",
    "date": "2025-08-25",
    "url": "https://x.com/lijigang/status/1960029796597199075",
    "segment": "S1"
  },
  {
    "num": 19,
    "title": "开会把裁决交给模型，人变成血肉 API",
    "date": "2025-11-24",
    "url": "https://x.com/lijigang/status/1992903167877804289",
    "segment": "S1"
  },
  {
    "num": 20,
    "title": "AI 同时当膨胀器和压缩器，你在哪",
    "date": "2026-03-17",
    "url": "https://x.com/lijigang/status/2033809042599219691",
    "segment": "S1"
  },
  {
    "num": 21,
    "title": "人+AI 在变强，单纯的「我」在变弱",
    "date": "2026-03-06",
    "url": "https://x.com/lijigang/status/2029802656991228129",
    "segment": "S1"
  },
  {
    "num": 22,
    "title": "AI 提炼脉络，不等于完成阅读",
    "date": "2025-12-03",
    "url": "https://x.com/lijigang/status/1996423083335590030",
    "segment": "S2"
  },
  {
    "num": 23,
    "title": "AI 不该简化阅读，而该提升复杂度",
    "date": "2025-12-03",
    "url": "https://x.com/lijigang/status/1996427958861639680",
    "segment": "S2"
  },
  {
    "num": 24,
    "title": "阅读等于读前的你与读后的你之差",
    "date": "2026-06-10",
    "url": "https://x.com/lijigang/status/2064591615369617607",
    "segment": "S2"
  },
  {
    "num": 25,
    "title": "影子之书：把作者没写下的也读出来",
    "date": "2026-06-02",
    "url": "https://x.com/lijigang/status/2061831560220082524",
    "segment": "S2"
  },
  {
    "num": 26,
    "title": "杠铃阅读：一头经典，一头论文",
    "date": "2026-04-19",
    "url": "https://x.com/lijigang/status/2046069932555899175",
    "segment": "S2"
  },
  {
    "num": 27,
    "title": "AI 时代的读书法：一窗读厚，一窗读薄",
    "date": "2025-12-31",
    "url": "https://x.com/lijigang/status/2006258106016342197",
    "segment": "S2"
  },
  {
    "num": 28,
    "title": "为正在读的每一本书单写一个伴读 Prompt",
    "date": "2025-12-24",
    "url": "https://x.com/lijigang/status/2004012176567423188",
    "segment": "S2"
  },
  {
    "num": 29,
    "title": "读书的要义是冲刷神经网络，不是默写知识点",
    "date": "2025-09-02",
    "url": "https://x.com/lijigang/status/1963049805221187868",
    "segment": "S2"
  },
  {
    "num": 30,
    "title": "读书时常用的四个基本问题",
    "date": "2025-09-11",
    "url": "https://x.com/lijigang/status/1966048874709266522",
    "segment": "S2"
  },
  {
    "num": 31,
    "title": "筛、读、问、记、图：我现在的读书过程",
    "date": "2025-11-23",
    "url": "https://x.com/lijigang/status/1992800308008018423",
    "segment": "S2"
  },
  {
    "num": 32,
    "title": "知识应该液态化",
    "date": "2025-09-28",
    "url": "https://x.com/lijigang/status/1972263920829182109",
    "segment": "S2"
  },
  {
    "num": 33,
    "title": "书架是你大脑的训练语料",
    "date": "2026-07-04",
    "url": "https://x.com/lijigang/status/2073257106657116186",
    "segment": "S2"
  },
  {
    "num": 34,
    "title": "让 agent 按当天盲区推荐一章来读",
    "date": "2026-05-17",
    "url": "https://x.com/lijigang/status/2056199909137961118",
    "segment": "S2"
  },
  {
    "num": 35,
    "title": "认知闭环很爽，但借来的终究不是自己的",
    "date": "2025-12-11",
    "url": "https://x.com/lijigang/status/1999324013651460576",
    "segment": "S2"
  },
  {
    "num": 36,
    "title": "面面俱到的 AI 长文令人抗拒",
    "date": "2026-05-21",
    "url": "https://x.com/lijigang/status/2057326873034797315",
    "segment": "S2"
  },
  {
    "num": 37,
    "title": "用 100 个好问题拼起一个陌生领域",
    "date": "2025-08-24",
    "url": "https://x.com/lijigang/status/1959784534809133209",
    "segment": "S2"
  },
  {
    "num": 38,
    "title": "一本书的价值，在于它在回答什么",
    "date": "2025-05-27",
    "url": "https://x.com/lijigang/status/1927311376499749167",
    "segment": "S2"
  },
  {
    "num": 39,
    "title": "AI 替我读还是陪我读：跑鞋、哑铃与滑雪板",
    "date": "2026-10-20",
    "url": "https://x.com/lijigang/status/2112745933108850944",
    "segment": "S2"
  },
  {
    "num": 40,
    "title": "浅尝辄止读书法",
    "date": "2025-06-10",
    "url": "https://x.com/lijigang/status/1932475102756778362",
    "segment": "S2"
  },
  {
    "num": 41,
    "title": "提问是意识对自身边界的觉察",
    "date": "2025-09-10",
    "url": "https://x.com/lijigang/status/1965825179919204643",
    "segment": "S3"
  },
  {
    "num": 42,
    "title": "先建 Problems 文件，再谈内化提问",
    "date": "2026-03-22",
    "url": "https://x.com/lijigang/status/2035630193357025668",
    "segment": "S3"
  },
  {
    "num": 43,
    "title": "看一个人的困惑，就看到他的思想边界",
    "date": "2025-09-11",
    "url": "https://x.com/lijigang/status/1966000349724225604",
    "segment": "S3"
  },
  {
    "num": 44,
    "title": "根源追问者：我们可能一直在问错问题",
    "date": "2025-07-12",
    "url": "https://x.com/lijigang/status/1944224482987848068",
    "segment": "S3"
  },
  {
    "num": 45,
    "title": "追本之箭：对一个观点纵向挖到底",
    "date": "2025-07-05",
    "url": "https://x.com/lijigang/status/1941413233832890760",
    "segment": "S3"
  },
  {
    "num": 46,
    "title": "讨论前先在白纸上画一个圆",
    "date": "2025-09-29",
    "url": "https://x.com/lijigang/status/1972735641055269048",
    "segment": "S3"
  },
  {
    "num": 47,
    "title": "先把一个概念快速顶到 60 分",
    "date": "2026-03-30",
    "url": "https://x.com/lijigang/status/2038470203496149218",
    "segment": "S3"
  },
  {
    "num": 48,
    "title": "人人应拥有自己的概念表",
    "date": "2025-12-18",
    "url": "https://x.com/lijigang/status/2001877663414390923",
    "segment": "S3"
  },
  {
    "num": 49,
    "title": "一天打磨一枚概念基石",
    "date": "2026-03-26",
    "url": "https://x.com/lijigang/status/2037378715014012946",
    "segment": "S3"
  },
  {
    "num": 50,
    "title": "人脑过度简化现实的四类错误",
    "date": "2025-05-11",
    "url": "https://x.com/lijigang/status/1921583551205855265",
    "segment": "S3"
  },
  {
    "num": 51,
    "title": "一个定性的「思考公式」",
    "date": "2025-05-16",
    "url": "https://x.com/lijigang/status/1923406673231892799",
    "segment": "S3"
  },
  {
    "num": 52,
    "title": "二轴思维：窗口有力，但只是片面",
    "date": "2025-05-29",
    "url": "https://x.com/lijigang/status/1928017063051940104",
    "segment": "S3"
  },
  {
    "num": 53,
    "title": "用 AI 练习思维模型的反馈循环",
    "date": "2025-05-25",
    "url": "https://x.com/lijigang/status/1926578383925747754",
    "segment": "S3"
  },
  {
    "num": 54,
    "title": "借大模型把「思考深度」拆成两个维度",
    "date": "2026-02-02",
    "url": "https://x.com/lijigang/status/2018549357306654932",
    "segment": "S3"
  },
  {
    "num": 55,
    "title": "独特视角来自你的局限性",
    "date": "2025-10-08",
    "url": "https://x.com/lijigang/status/1975811757865345356",
    "segment": "S3"
  },
  {
    "num": 56,
    "title": "用八个思想实验重新面对 LLM",
    "date": "2025-09-09",
    "url": "https://x.com/lijigang/status/1965340669528129977",
    "segment": "S3"
  },
  {
    "num": 57,
    "title": "做思想实验的四步",
    "date": "2025-12-12",
    "url": "https://x.com/lijigang/status/1999667336119538125",
    "segment": "S3"
  },
  {
    "num": 58,
    "title": "加满限定词就变成正确的废话",
    "date": "2025-06-04",
    "url": "https://x.com/lijigang/status/1930432831315951805",
    "segment": "S3"
  },
  {
    "num": 59,
    "title": "写 Prompt 之后，才感到文字有重量",
    "date": "2025-03-24",
    "url": "https://x.com/lijigang/status/1904206718088962489",
    "segment": "S3"
  },
  {
    "num": 60,
    "title": "圆桌思想家：搞懂一个观点的五阶段",
    "date": "2025-10-13",
    "url": "https://x.com/lijigang/status/1977598274006864272",
    "segment": "S3"
  },
  {
    "num": 61,
    "title": "概念三问：Why、How、What",
    "date": "2025-10-11",
    "url": "https://x.com/lijigang/status/1976876670247485537",
    "segment": "S3"
  },
  {
    "num": 62,
    "title": "Prompt 十戒",
    "date": "2025-07-18",
    "url": "https://x.com/lijigang/status/1946068222039712103",
    "segment": "S3"
  },
  {
    "num": 63,
    "title": "请一位 AI 诤友来拆你的自我欺骗",
    "date": "2025-11-21",
    "url": "https://x.com/lijigang/status/1991825886329368635",
    "segment": "S3"
  },
  {
    "num": 64,
    "title": "用图尔敏模型拆论证的隐含假设",
    "date": "2025-05-24",
    "url": "https://x.com/lijigang/status/1926130523945984196",
    "segment": "S3"
  },
  {
    "num": 65,
    "title": "能力不在模型里，在模型与环境的协议中",
    "date": "2026-04-14",
    "url": "https://x.com/lijigang/status/2044259907374067770",
    "segment": "S4"
  },
  {
    "num": 66,
    "title": "学习即遗忘，理解即压缩",
    "date": "2026-04-13",
    "url": "https://x.com/lijigang/status/2043886141712273591",
    "segment": "S4"
  },
  {
    "num": 67,
    "title": "组织学习中的探索与利用，对照人被 AI 同化",
    "date": "2026-11-03",
    "url": "https://x.com/lijigang/status/2117823012468646029",
    "segment": "S4"
  },
  {
    "num": 68,
    "title": "斯蒂格勒的「第三记忆」",
    "date": "2026-04-20",
    "url": "https://x.com/lijigang/status/2046410860672012353",
    "segment": "S4"
  },
  {
    "num": 69,
    "title": "我们从来不是从空白出发的",
    "date": "2026-04-20",
    "url": "https://x.com/lijigang/status/2046418049985851764",
    "segment": "S4"
  },
  {
    "num": 70,
    "title": "思考的本质不是语言，语言是有损压缩",
    "date": "2026-04-03",
    "url": "https://x.com/lijigang/status/2040016803917930623",
    "segment": "S4"
  },
  {
    "num": 71,
    "title": "升华学习：共享的起点比共享的内容更危险",
    "date": "2026-04-19",
    "url": "https://x.com/lijigang/status/2046067932413968741",
    "segment": "S4"
  },
  {
    "num": 72,
    "title": "赵汀阳：不是对 AI 说不，是对「想要一切」的自己说不",
    "date": "2026-05-14",
    "url": "https://x.com/lijigang/status/2055123684516651238",
    "segment": "S4"
  },
  {
    "num": 73,
    "title": "千脑智能：认识就是给事物画地图",
    "date": "2026-06-02",
    "url": "https://x.com/lijigang/status/2061687657776992279",
    "segment": "S4"
  },
  {
    "num": 74,
    "title": "用柯氏复杂度想象 Prompt 的有效性",
    "date": "2025-09-27",
    "url": "https://x.com/lijigang/status/1971835248930705532",
    "segment": "S4"
  },
  {
    "num": 75,
    "title": "智慧是「明智推理」的六条",
    "date": "2025-09-09",
    "url": "https://x.com/lijigang/status/1965287963841135035",
    "segment": "S4"
  },
  {
    "num": 76,
    "title": "大多数时候你不是你，你是「人们」",
    "date": "2026-04-18",
    "url": "https://x.com/lijigang/status/2045393546950352914",
    "segment": "S4"
  },
  {
    "num": 77,
    "title": "人是开端：AI 时代问的是「你到底想要什么」",
    "date": "2026-03-25",
    "url": "https://x.com/lijigang/status/2036832726758916259",
    "segment": "S4"
  },
  {
    "num": 78,
    "title": "鱼利用漩涡游泳，人利用语言思考",
    "date": "2026-10-17",
    "url": "https://x.com/lijigang/status/2111474484624695523",
    "segment": "S4"
  },
  {
    "num": 79,
    "title": "信息处理可否在人脑之外发生",
    "date": "2025-08-25",
    "url": "https://x.com/lijigang/status/1960165995924042081",
    "segment": "S4"
  },
  {
    "num": 80,
    "title": "从零到一，先找出学习资源的最小原子",
    "date": "2025-06-01",
    "url": "https://x.com/lijigang/status/1929240420854399068",
    "segment": "S5"
  },
  {
    "num": 81,
    "title": "每学一个新概念，就创造一个小作品",
    "date": "2025-06-02",
    "url": "https://x.com/lijigang/status/1929481213053730903",
    "segment": "S5"
  },
  {
    "num": 82,
    "title": "人脑是小模型，价值在结构与品味",
    "date": "2025-06-30",
    "url": "https://x.com/lijigang/status/1939630830504321204",
    "segment": "S5"
  },
  {
    "num": 83,
    "title": "学得越多越累，是因为在放电",
    "date": "2026-02-02",
    "url": "https://x.com/lijigang/status/2018356409772220751",
    "segment": "S5"
  },
  {
    "num": 84,
    "title": "成长之所以痛，是因为要杀死所是的自己",
    "date": "2025-10-07",
    "url": "https://x.com/lijigang/status/1975417846374203730",
    "segment": "S5"
  },
  {
    "num": 85,
    "title": "批评带来陌生感，才构成成长的拐点",
    "date": "2025-08-27",
    "url": "https://x.com/lijigang/status/1960569858116215143",
    "segment": "S5"
  },
  {
    "num": 86,
    "title": "建议都可能是「何不食肉糜」",
    "date": "2026-03-23",
    "url": "https://x.com/lijigang/status/2036104374817357904",
    "segment": "S5"
  },
  {
    "num": 87,
    "title": "经验预测不如模型预测经得起世界多变",
    "date": "2026-09-17",
    "url": "https://x.com/lijigang/status/2100451096431071736",
    "segment": "S5"
  },
  {
    "num": 88,
    "title": "当 AI 震动「学习—工作—意义」这条链",
    "date": "2026-09-18",
    "url": "https://x.com/lijigang/status/2100886693390045387",
    "segment": "S5"
  },
  {
    "num": 89,
    "title": "AI 帮孩子学习的三个立刻可落地的角度",
    "date": "2026-06-17",
    "url": "https://x.com/lijigang/status/2067429581762740235",
    "segment": "S5"
  },
  {
    "num": 90,
    "title": "除了提效，能否做成以前不可想象的事",
    "date": "2026-05-01",
    "url": "https://x.com/lijigang/status/2050070174674677864",
    "segment": "S5"
  },
  {
    "num": 91,
    "title": "和 AI 相处，第一件事是下水",
    "date": "2025-03-24",
    "url": "https://x.com/lijigang/status/1904378615783211452",
    "segment": "S5"
  },
  {
    "num": 92,
    "title": "无法逃离自我，但可以扩大引力场半径",
    "date": "2025-03-10",
    "url": "https://x.com/lijigang/status/1899136258515095568",
    "segment": "S5"
  },
  {
    "num": 93,
    "title": "AI 时代会不会出现「健脑房」",
    "date": "2025-07-27",
    "url": "https://x.com/lijigang/status/1949400681171050608",
    "segment": "S5"
  },
  {
    "num": 94,
    "title": "与其精明地评判，不如笨拙地创造",
    "date": "2025-07-31",
    "url": "https://x.com/lijigang/status/1950873616557772806",
    "segment": "S5"
  },
  {
    "num": 95,
    "title": "人生的奖励函数与损失函数",
    "date": "2025-12-21",
    "url": "https://x.com/lijigang/status/2002762521548304705",
    "segment": "S5"
  },
  {
    "num": 96,
    "title": "每个人都是一个独特的过滤器",
    "date": "2025-10-08",
    "url": "https://x.com/lijigang/status/1975812269419470896",
    "segment": "S5"
  },
  {
    "num": 97,
    "title": "我的思考是画面式的",
    "date": "2025-06-09",
    "url": "https://x.com/lijigang/status/1932277950021321142",
    "segment": "S5"
  },
  {
    "num": 98,
    "title": "真对话、空对话和假对话",
    "date": "2025-06-03",
    "url": "https://x.com/lijigang/status/1930093817488687178",
    "segment": "S5"
  },
  {
    "num": 99,
    "title": "爹味就是把认知结构强套到别人身上",
    "date": "2025-08-09",
    "url": "https://x.com/lijigang/status/1954030709255156182",
    "segment": "S5"
  },
  {
    "num": 100,
    "title": "和 AI 玩到兔子洞里，会忘掉最初的问题",
    "date": "2026-04-17",
    "url": "https://x.com/lijigang/status/2045010119185043752",
    "segment": "S5"
  }
];
