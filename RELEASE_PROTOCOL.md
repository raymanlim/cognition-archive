# 双 AI 协作发布规约 / Dual-Agent Release Protocol

适用范围：`D:\03_Work_Projects\Cognition`。参与方：CLAUDE、Codex、Rayman。
唯一发布入口：`deploy-to-cf.ps1`（默认 `verify`，显式 `-Mode publish` 才上线）。

## 1. 角色

| 角色 | 主要职责 | 可否发布 |
|---|---|---|
| CLAUDE | 改码、文案改写、只读预检、修自己引入的回归 | 可 |
| Codex | 架构/QA：审 diff、审脚本、复验承重结论、审线上产物、定验收门槛 | 可 |
| Rayman | 定方向、批准上线、冲突裁决 | 最终批准 |

任何一方都可以发布，但**写的人不能自己给自己发合格证**：发布前必须由另一方审过 diff，发布后必须由另一方复验证据卡。

## 2. 唯一发布链

```text
改码 → 对方审 diff → verify → Rayman 批准 → publish -Publisher <who>
     → 对方复核证据卡 + git ls-remote + 线上 HTML → 标记 ACCEPTED
```

命令：

```powershell
# 验证（默认，任何一方可跑；不 commit / 不 push）
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode verify

# 发布（必须 Rayman 明确批准）
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher codex
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher claude
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher rayman
```

`deploy-to-cf.cmd` 是无参启动器，**永远只跑 verify**。

## 3. 发布前门禁（脚本已固化，不得绕过）

1. 并发护栏：`git ls-remote origin refs/heads/main` 与本地 HEAD 比对；publish 模式下不一致即 abort，不暂存、不提交、不推送。
2. 数据解析：`parse-sources.mjs` + `parse-patch.mjs`（分开跑，不链式嵌套 npm）。
3. 类型：`npx.cmd astro check` 必须 0 errors / 0 warnings / 0 hints；`npx.cmd tsc --noEmit` 通过。
4. 构建：`npx.cmd astro build` 生成 6 个页面；不写死 `node_modules/astro/bin/astro.js`。
5. 无障碍：`npm.cmd run check:contrast` 全过。
6. 产物：6 个 `dist/**/index.html` 全部存在。
7. 暂存：只用显式 allowlist；硬排除 `optimization-recommendations.md`、`rewrite_plan.md`、`design.md`、`astro.config.mjs`、`RELEASE_PROTOCOL.md`、`deploy-to-cf.ps1`、`deploy-to-cf.cmd`、`dist/`、`node_modules/`、`.astro/`、`.workbuddy-ai/`。发布资产 `RELEASE_PROTOCOL.md`、`deploy-to-cf.ps1`、`deploy-to-cf.cmd` 由专门的「工具 commit」管理；日常内容 publish 的 `$Deny` 硬排除它们。任何发布链改动都单独提工具 commit 并由另一方复核。禁止 `git add -A`；`optimization-recommendations.md` 不发布。任何既不在 Allow 也不在 Deny 的路径会触发硬失败，防止新源码被静默漏提。
8. 云端铁律：`src/`、`scripts/` 不得出现 `D:\Obsidian` 绝对路径；项目不自持 vault 依赖。

任一失败：停在 commit/push 之前。若已 push 后失败，证据卡标记 `PUSHED_BUT_FAILED_POSTCHECK`，禁止盲目重试，先查远端 HEAD 与 Cloudflare Pages 日志。

## 4. 发布证据卡

每次运行（含 verify）都会把 `RELEASE EVIDENCE CARD` 写入 `%TEMP%\cognition-deploy.log`：
`timestamp`、`publisher`、`mode`、`status`、`commit`、`remote_head`、7 项 gates、`local_css`、`live_css`、`css_state`、`content`、`marker`、`routes`、改动文件、`log` 路径。

文案/数据改动常常不改 CSS 哈希，因此发布判定额外使用**内容指纹**：`-ContentMarker`（默认首句「我做这个网站，不是因为你不懂思想」）。`PUBLISHED_LIVE_VERIFIED` 要求三者同时成立：远端 HEAD == 新 commit、CSS 哈希一致、线上首页出现该 marker。任何一项 pending 只算 `PUSHED_LIVE_UNVERIFIED`。

编码约定：Windows PowerShell 5.1 的 `Get-Content -Raw` 与 `Invoke-WebRequest.Content` 会按系统 ANSI 代码页解码，导致中文 marker 乱码。脚本对本地 `dist/index.html` 与线上响应都显式按 UTF-8 字节解码；改动这段代码时必须保留，否则内容指纹会假阴性。

状态含义：

- `VERIFY_ONLY_NO_PUSH`：只验证，没上线。
- `ABORTED_BEFORE_PUSH`：publish 失败且未推送，可修复后重跑。
- `PUBLISHED_LIVE_VERIFIED`：远端 HEAD == 新 commit、线上 CSS 哈希 == 本地 dist 哈希、线上首页出现内容 marker。
- `PUSHED_LIVE_UNVERIFIED`：推送成功但线上 CSS 或内容 marker 未刷新，不算上线完成。
- `PUSHED_BUT_FAILED_POSTCHECK`：推送后校验失败，先排查再动。

## 5. 对方复核（发布后必做）

非发布方独立执行，不采信发布方自述：

1. `git ls-remote origin refs/heads/main` 是否等于证据卡 `commit`。
2. 抓线上首页 HTML，确认 `/_astro/index.*.css` 等于证据卡 `local_css`。
3. 六条路由均 200。
4. 抽查改动是否真生效（例如新文案在 ZH/EN/BI 三态可见，署名 handle 未丢）。
5. 在证据卡后追加一行 `ACCEPTED_BY=<other-agent> <timestamp>`；不一致则 `REJECTED` + 原因，交 Rayman 裁决。

## 6. 冲突与回滚

- 两边同时改：后发者会被并发护栏拦下，执行 `git pull --ff-only` 后重新 verify，禁止 force push。
- 线上回归：优先在 Cloudflare Pages 后台回滚到上一成功 deployment；需要代码回滚时用 `git revert HEAD` + 正常 publish，由另一方复核。
- 证据卡冲突：以 `git ls-remote` 与线上 HTML 为准，不以对话结论为准。

## 7. 不变约定（改动时不得破坏）

- 三态语言 ZH / EN / BI 由 `html[data-lang]` 驱动；`uiDictionary.ts` 与 `i18n.ts` 两套字典都要同步。
- 三态外观 Paper / Dark / Crisp 由 `global.css` CSS 变量 + `BaseLayout.astro` head 防闪烁脚本驱动。
- X 博主 handle 在 ZH/EN/BI 三态必须可见；外链 `rel="noopener noreferrer"`。
- 锚点命名空间：`C01–C23`、`d01–d18`（num 101–118）、`ref-01..ref-10`（`sourceNum` 存 L1 编号）、`R01–R25`。
- 中文大写数字「壹 贰 叁 肆 伍」，非日式「壱 弐 参」。

## 8. 当前基线（2026-11-14）

- 内容发布已完成并上线；Codex 以 `-Publisher claude` 代执行 `-Mode publish`。HEAD / origin/main：`13f19ff72f0956bc4a06e7dfc60653993ff9f926`。旧基线 `95319b1` 已过期。
- 证据卡：`status=PUBLISHED_LIVE_VERIFIED`、`publisher=claude`、`local_css=live_css=/_astro/index.pfPcvcDK.css`、`css_state=MATCH`、`content=MATCH`、marker=`我做这个网站，不是因为你不懂思想`、六页 HTTP 200；Codex 已按第 5 节独立复核并标记 `ACCEPTED`。
- 最新 `deploy-to-cf.ps1` 已在内容 publish 中完整跑过 8 道门禁：`astro check` 53 文件 0/0/0、`tsc --noEmit`、6 页 build、WCAG AA 对比度全过。今后若再改发布脚本，先 `verify` 再单独工具 commit。
- 本次分两步：内容发布已完成；工具入库 commit 待执行（仅 `RELEASE_PROTOCOL.md` + `deploy-to-cf.ps1` + `deploy-to-cf.cmd`）。工具入库 commit 见 git log；发布资产由专门工具 commit 管理，日常内容 publish 不暂存它们。
- `optimization-recommendations.md` 保持未追踪、不提交、不删除、不改 `.gitignore`；`astro.config.mjs` 的 `site` 字段本轮不动，线上主域仍是 `https://cognition.raymanlim.us.ci/`。
