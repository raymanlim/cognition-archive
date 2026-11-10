# 思想文库 · The Editorial Archive

Rayman Lim 的个人思想认知网站 —— 「世纪文库·极简典藏风」。

- 站点：`https://cognition.raymanlim.us.ci`
- 预览域：`https://cognition-archive.pages.dev`
- 构建：Astro 5 + Tailwind CSS + TypeScript，静态输出（`output: 'static'`）
- 部署：GitHub (`raymanlim/cognition-archive`, main) → Cloudflare Pages（Framework preset: Astro；Build command: `npm run build`；Output: `dist`），push main 自动重新部署

## 三大版块 + 交叉图谱

| 版块 | 路由 | 内容 |
|---|---|---|
| 壱 · 哲学源流 | `/philosophy/` | 27 位中西哲学家，全字段双语档案（核心命题 / 三步推导链 / 著作梯度 / 思想承启 / 金句 / 现代启发），按主题分组、组内按 `yearSort` 升序 |
| 弐 · 思想认知 | `/cognition/` | Tab1《CPV 原理》全书交互式问题链（导论 + 9 章 + 系统桥接）；Tab2 思想认知 23 张综合卡片；Tab3 芒格 6 大学科 / 52 模型格栅 + 决策前 7 问 / 复盘 5 问检查表 |
| 叁 · 现实透镜 | `/reality-lens/` | 25 张现实拆解卡片（佐伊 / THEdankoe / Morris），按作者与 8 大跨库串联主题过滤 |
| 肆 · 交叉图谱 | `/atlas/` | 8 大跨库串联公理 + 25 × 3 层认知交叉矩阵 |

## 三态切换

- **语言**：`ZH` 中文 / `EN` 英文 / `BI` 中英对照（顶栏右侧，`localStorage('rayman_lang')`）
- **外观**：`宣纸典藏 Paper` / `暗夜书斋 Dark` / `纯白极简 Crisp`（`localStorage('rayman_theme')`，防闪烁内联脚本）

## 数据管线（零第三方依赖，构建期解析）

素材是唯一数据源，位于仓库根目录的 5 份 Obsidian Markdown：

```
认知素材库.md · 认知素材库-思想认知.md · 认知素材库-现实透镜.md · 认知素材库-芒格.md · CPV原理-完整版.md
PATCH_DATA_AND_I18N.md（27 位哲学家完整双语补齐数据 + 全局 i18n / 锚点规范）
```

- `scripts/parse-sources.mjs` → 解析 5 份素材，输出 `src/data/generated/{cognition,reality-lens,munger,cpv,meta}.json`
- `scripts/parse-patch.mjs` → 解析 `PATCH_DATA_AND_I18N.md` Part 2，输出 `src/data/generated/philosophers.json`
- `npm run parse` 串联两者；`predev` / `prebuild` 自动触发，素材更新后站点自动同步，不会漏卡。
- `src/utils/cognitiveEngine.ts`：`buildCrossLibraryMatrix(realityCardId)` 三层交叉解剖（哲学底座 + CPV 诊断 + 芒格模型），策展映射 + 8 公理关键词加权自动补全。

## 锚点规范（跨页跳转统一）

- 哲学家：`/philosophy#phil-{slug}`
- CPV 章节：`/cognition#cpv-ch-{0..9}`
- 认知卡：`/cognition#cog-card-{01..23}`
- 芒格：`/cognition#munger-cat-{1..6}` / `#munger-model-{cat}-{index}`
- 现实透镜：`/reality-lens#lens-card-{01..25}`

客户端 hash 路由（`src/scripts/site.ts`）会自动激活对应 Tab、重置筛选器、展开折叠面板、平滑滚动并加朱砂红高亮。

## 本地开发

```bash
npm install
npm run dev          # http://127.0.0.1:4321
npm run parse        # 重新解析素材
npx astro check      # TypeScript 类型检查（0 errors / 0 warnings / 0 hints）
npm run build        # 静态构建到 dist/
```

## 产权署名

全部 48 张认知 / 现实透镜卡片及芒格卡片均在底部「来源与出处」区块保留原作者 X 账号
（`@naki2012` Nagi Yan、`@zuoyi153917761` 佐伊、`@thedankoe` Dan Koe、`@Morris_LT` Morris、
`@lifesinger` 玉伯、`x/02 归档`）与原文链接。X 账号为专有名词，ZH / EN / BI 三态下原样展示，
不做翻译、不退化为通用占位。
