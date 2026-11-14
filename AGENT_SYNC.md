# Agent Alignment Ledger / 双方对齐记录

本文件是 Codex 与 CLAUDE 的**强制共享对齐文档**。无论哪一方更新代码、数据、文案、发布脚本，或向线上上传内容，都必须在 `CURRENT ENTRY` 写入一条记录；没有更新本文件的 publish 会被 `scripts/check-alignment.mjs` 拒绝。

## Rule / 规则

1. 改动方先更新 `CURRENT ENTRY`：`base_head` 填改动前的本地 HEAD；`files` 必须与本次暂存集**完全一致**；`publisher` 必须与发布命令的 `-Publisher` 一致；`reviewer` 必须是另一方或 Rayman。
2. 内容发布前，另一方审 diff 后把 `pre_review` 与 `review_status` 都写成 `pre_reviewed_by_<reviewer>`；工具 commit 可写 `pending_other_agent`，但另一方事后必须在 Review Log 补 `ACCEPTED` / `REJECTED`。
3. `expected_visible_change` 必须写清线上能否看到变化；纯工具/文档改栋写 `none` 并说明原因。
4. 内容 publish 必须暂存本文件；工具 commit 也必须暂存本文件，并在 commit 前跑 `node scripts/check-alignment.mjs --mode tooling --publisher <who> --base-head <parent HEAD>`。
5. 发布后由非发布方在 Review Log 记录 `ACCEPTED_BY=<other> <timestamp> <commit>` 或 `REJECTED <reason>`。写的人不给自己发合格证。

<!-- CURRENT ENTRY BEGIN -->
entry_id: 2026-11-14-add-agent-alignment-rule
base_head: d4f0992bbf43e91120db3ccd37946bf46a46c153
publisher: codex
reviewer: claude
change_type: tooling-rule
files:
  - AGENT_SYNC.md
  - RELEASE_PROTOCOL.md
  - deploy-to-cf.ps1
  - scripts/check-alignment.mjs
summary: Add a mandatory shared alignment ledger and fail-closed publish gate for both agents.
expected_visible_change: none for site visitors because only release protocol, deploy script, checker, and ledger changed; future content publish must include AGENT_SYNC.md and pass the alignment gate.
pre_review: pending_claude_review_after_tool_commit
content_marker: 我做这个网站，不是因为你不懂思想
review_status: pending_other_agent
<!-- CURRENT ENTRY END -->

## Commands / 命令

内容发布前（对方已审 diff 并更新本文件后）：

```powershell
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher codex
powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher claude
```

工具 commit 前（由改动方手动暂存后执行；`--base-head` 是暂存前的 HEAD）：

```powershell
node scripts/check-alignment.mjs --mode tooling --publisher codex --base-head <parent HEAD>
```

`deploy-to-cf.ps1` 在 `-Mode publish` 时会自动调用同一个 checker；`verify` 只检查文档存在与当前条目可读，不要求预审核。

## Review Log / 复核记录

| Timestamp | Commit | Entry | Reviewer | Result | Note |
|---|---|---|---|---|---|
| 2026-11-14 | `13f19ff` | `humanizing-rewrites` | codex | `ACCEPTED_BY=codex` | Content release verified: `PUBLISHED_LIVE_VERIFIED`, CSS and content marker matched, six pages 200. |
| 2026-11-14 | `4165b46` | `tooling-initial` | codex | `ACCEPTED_BY=codex` | Tooling commit staged exactly three release assets; remote HEAD matched. |
| 2026-11-14 | `d4f0992` | `protocol-baseline` | codex | `ACCEPTED_BY=codex` | Protocol baseline recorded; final verify green. |

Append one row for every subsequent content or tooling commit. Use `ACCEPTED_BY=<agent>` only after checking `git ls-remote`, the live HTML, and (for publish) the release evidence card.
