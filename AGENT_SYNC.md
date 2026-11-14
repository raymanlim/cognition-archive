# Agent Alignment Ledger / 双方对齐记录

本文件是 Codex 与 CLAUDE 的**强制共享对齐文档**。无论哪一方更新代码、数据、文案、发布脚本，或向线上上传内容，都必须在 `CURRENT ENTRY` 写入一条记录；没有更新本文件的 publish 会被 `scripts/check-alignment.mjs` 拒绝。

## Rule / 规则

1. 改动方先更新 `CURRENT ENTRY`：`base_head` 填**本次改动的父提交 HEAD**，不是提交后的新 HEAD；`files` 必须与本次暂存集**完全一致**；`publisher` 必须与发布命令的 `-Publisher` 一致；`reviewer` 必须是另一方（Codex ↔ CLAUDE）。Rayman 是批准者，不填 `reviewer` 字段。
2. 内容发布前，另一方审 diff 后把 `pre_review` 与 `review_status` 都写成 `pre_reviewed_by_<reviewer>`；工具 commit 可写 `pending_<reviewer>_review_after_tool_commit` / `pending_other_agent`，但另一方事后必须在 Review Log 补 `ACCEPTED` / `REJECTED`。
3. `expected_visible_change` 必须写清线上能否看到变化；纯工具/文档改动写 `none` 并说明原因。
4. 内容 publish 必须暂存本文件；工具 commit 也必须暂存本文件，并在 commit 前跑 `node scripts/check-alignment.mjs --mode tooling --publisher <who> --base-head <parent HEAD>`。
5. 发布后由非发布方在 Review Log 记录 `ACCEPTED_BY=<other> <timestamp> <commit>` 或 `REJECTED <reason>`。写的人不给自己发合格证。
6. `CURRENT ENTRY` 是一次性条目：对应 commit 推送后即失效；下一次任何代码、数据、文案、发布工具、上传内容或纯文档修正，都必须用新的 `entry_id`、新的 `base_head` 和新的精确 `files` 覆盖它，不得复用旧条目。
7. 静态文档不得把某个 commit hash 写成永久的「当前 HEAD / origin/main」。如需记录指针，必须写明 `as of <timestamp>` 且明确它只是历史快照；权威来源是 `git rev-parse HEAD` 与 `git ls-remote origin refs/heads/main`。后续 commit 推进指针时，不为了更新 hash 单独制造文档 commit，除非规约语义本身发生变化。`scripts/check-alignment.mjs` 会禁止 `RELEASE_PROTOCOL.md` 再出现静态实时指针，也会禁止 `deploy-to-cf.ps1` 残留旧版硬编码 commit message。

<!-- CURRENT ENTRY BEGIN -->
entry_id: 2026-11-14-baseline-pointer-correction
base_head: 73325f0a1df4fbf19ba61b763c86435bb63d6840
publisher: codex
reviewer: claude
change_type: tooling-docs-correction
files:
  - AGENT_SYNC.md
  - RELEASE_PROTOCOL.md
  - deploy-to-cf.ps1
  - scripts/check-alignment.mjs
summary: Convert RELEASE_PROTOCOL section 8 into a historical baseline, define git refs as the only live pointer, enforce Rule 7 in the checker, and replace the hardcoded publish commit message with a generated or -CommitMessage value.
expected_visible_change: none for site visitors because only the alignment ledger, protocol, deploy script and checker changed; future publish commit messages and both agents' baseline wording are now rule-checked.
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

可选 `-CommitMessage "..."` 覆盖默认 `chore(site): publish <publisher> release <timestamp>`；禁止再把某次具体改动的标题硬编码进发布脚本。

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
| 2026-11-14 | `73325f0` | `2026-11-14-add-agent-alignment-rule` | claude | `ISSUE_FOUND` | CLAUDE read a d4f0992 snapshot and found section 8 still named 4165b46 as current baseline. Codex adjudicates: finding valid for that snapshot; pointer later advanced to 73325f0. Root cause is static baseline wording; checker at that time did not yet forbid it. |
| 2026-11-14 | see `git log -1` | `2026-11-14-baseline-pointer-correction` | claude | `PENDING_REVIEW` | Adds Rule 7, checker guards for static pointer / legacy commit message, historical section 8, and dynamic publish commit message. Commit hash intentionally not hardcoded to avoid recursive baseline edits. |

Append one row for every subsequent content or tooling commit. Use `ACCEPTED_BY=<agent>` only after checking `git ls-remote`, the live HTML, and (for publish) the release evidence card. Review-log-only corrections may use `see git log -1` for the current commit to avoid recursive hash updates.
