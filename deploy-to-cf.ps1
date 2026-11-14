# ============================================================================
#  deploy-to-cf.ps1 — Cognition Archive release pipeline
#  UTF-8 with BOM (U+FEFF at byte 0): PowerShell 5.1 needs it to read the
#  Chinese source paths such as 认知素材库.md without garbling.
# ----------------------------------------------------------------------------
#  v2 — shared release entry for Codex / Claude / Rayman.
#  DEFAULT = VERIFY (deploy-to-cf.cmd calls it with no arguments):
#    remote-HEAD guard -> alignment ledger read check -> parse-sources -> parse-patch
#    -> astro check -> tsc --noEmit -> astro build -> check:contrast
#    -> dist 6-page sanity -> git reports -> live CSS hash + six-page HTTP
#    NO git add / commit / push.
#  ANY failing step stops the run.
#
#  PUBLISH (only after Rayman says go):
#    powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher codex
#    (-Publisher accepts codex | claude | rayman; defaults to rayman)
#  Adds: remote-HEAD equality guard -> strict unknown-path guard
#    -> git add <explicit allowlist> -> strict alignment gate -> commit
#    -> push -> remote HEAD == new commit -> bounded live-CSS poll -> evidence card.
#  If another publisher advanced origin/main, publish aborts before staging.
#  AGENT_SYNC.md is mandatory in every release set: both agents must read the
#  same current entry before code/content/tooling changes or uploads.
#
#  Log / evidence card: %TEMP%\cognition-deploy.log
# ============================================================================

param(
  [ValidateSet('verify', 'publish')]
  [string]$Mode = 'verify',
  [ValidateSet('codex', 'claude', 'rayman')]
  [string]$Publisher = 'rayman',
  [string]$ContentMarker = '我做这个网站，不是因为你不懂思想'
)

$ErrorActionPreference = 'Continue'
$LogPath = Join-Path $env:TEMP 'cognition-deploy.log'
$Root = $PSScriptRoot
$LiveBase = 'https://cognition.raymanlim.us.ci'
$GitQ = @('-c', 'core.quotepath=false')
$TranscriptOn = $false

try {
  Start-Transcript -Path $LogPath -Force | Out-Null
  $TranscriptOn = $true
} catch {
  Set-Content -Path $LogPath -Value '[deploy] transcript unavailable; manual log' -Encoding UTF8
}

function Write-Log {
  param([string]$Message)
  Write-Host $Message
  if (-not $TranscriptOn) { Add-Content -Path $LogPath -Value $Message -Encoding UTF8 }
}

function Assert-Step {
  param([string]$Name, [int]$Code)
  if ($Code -ne 0) {
    throw "FAILED: $Name (exit code $Code) — stopping before commit/push"
  }
  Write-Log "OK: $Name"
}

function Write-ReleaseCard {
  param(
    [string]$Status,
    [string]$Commit,
    [string]$RemoteHead,
    [string]$LocalCss,
    [string]$LiveCss,
    [string]$CssState,
    [string]$ContentState,
    [string]$ContentMarker,
    [string]$AlignmentState,
    [string]$RoutesState,
    [string[]]$Files
  )
  Write-Log '==== RELEASE EVIDENCE CARD ===='
  Write-Log ('timestamp  : ' + (Get-Date -Format 'o'))
  Write-Log ("publisher  : $Publisher")
  Write-Log ("mode       : $Mode")
  Write-Log ("status     : $Status")
  Write-Log ("commit     : $Commit")
  Write-Log ("remote_head: $RemoteHead")
  Write-Log ('gates      : alignment-ledger | parse-sources | parse-patch | astro check | tsc --noEmit | astro build | check:contrast | dist-6-pages')
  Write-Log ("local_css  : $LocalCss")
  Write-Log ("live_css   : $LiveCss")
  Write-Log ("css_state  : $CssState")
  Write-Log ("content    : $ContentState")
  Write-Log ("marker     : $ContentMarker")
  Write-Log ("alignment  : $AlignmentState")
  Write-Log ("routes     : $RoutesState")
  Write-Log ('files      : ' + (($Files | Where-Object { $_ }) -join ', '))
  Write-Log ("log        : $LogPath")
  Write-Log 'next       : the OTHER agent must re-check this card against git ls-remote and the live HTML before calling the release accepted.'
  Write-Log '==== END RELEASE EVIDENCE CARD ===='
}

# Only these paths may ever be staged by a routine content publish.
# Release tooling was committed separately in the tooling commit; it is now in
# $Deny so everyday releases cannot silently re-stage script edits.
$Allow = @(
  'AGENT_SYNC.md',
  '认知素材库.md',
  'PATCH_DATA_AND_I18N.md',
  'scripts/parse-sources.mjs',
  'src/components/SourceText.astro',
  'src/data/uiDictionary.ts',
  'src/data/i18n.ts',
  'src/data/curatorNotes.ts',
  'src/data/types.ts',
  'src/data/generated/meta.json',
  'src/data/generated/philosophers.json',
  'src/utils/cognitiveEngine.ts',
  'src/pages/atlas/index.astro',
  'src/pages/index.astro',
  'src/pages/reflections/index.astro',
  'src/pages/reality-lens/index.astro',
  'src/layouts/BaseLayout.astro'
)

# Hard exclusions — restated so no future edit can silently widen the scope.
$Deny = @(
  'optimization-recommendations.md',
  'rewrite_plan.md',
  'design.md',
  'astro.config.mjs',
  'RELEASE_PROTOCOL.md',
  'deploy-to-cf.ps1',
  'deploy-to-cf.cmd',
  'scripts/check-alignment.mjs'
)

$Fatal = $false
$Pushed = $false
$ReleaseStatus = 'NOT_STARTED'
$ReleaseCommit = ''
$ReleaseRemoteHead = ''
$ReleaseFiles = @()
$CardLocalCss = ''
$CardLiveCss = ''
$CardCssState = 'NOT_CHECKED'
$CardContentState = 'NOT_CHECKED'
$CardAlignmentState = 'NOT_CHECKED'
$CardRoutesState = 'NOT_CHECKED'

try {
  Set-Location -Path $Root
  Write-Log "[deploy] mode=$Mode  publisher=$Publisher  root=$Root  log=$LogPath"
  Write-Log ("[deploy] node=" + (& node --version 2>&1))
  Write-Log ("[deploy] git=" + (& git --version 2>&1))
  $env:NODE_OPTIONS = ''

  # ---- 0. concurrency guard: read the REAL remote head before doing anything ----
  # Both agents may publish. If another publisher advanced origin/main after our
  # local HEAD, abort before staging rather than creating a non-fast-forward.
  $remoteLine = & git ls-remote origin refs/heads/main 2>&1
  Assert-Step 'git ls-remote origin refs/heads/main (pre-flight)' $LASTEXITCODE
  $ReleaseRemoteHead = ([string]($remoteLine | Select-Object -First 1) -split '\s+')[0]
  $ReleaseCommit = (& git rev-parse HEAD).Trim()
  Write-Log "[guard] local HEAD  : $ReleaseCommit"
  Write-Log "[guard] remote HEAD : $ReleaseRemoteHead"
  if ($Mode -eq 'publish' -and $ReleaseRemoteHead -and $ReleaseRemoteHead -ne $ReleaseCommit) {
    throw "FAILED: origin/main ($ReleaseRemoteHead) differs from local HEAD ($ReleaseCommit). Another publisher went first — rebase/merge and re-verify before publishing."
  }

  # ---- 0b. shared alignment ledger must exist and be readable in all modes ----
  Write-Log '[align] node scripts/check-alignment.mjs --mode verify'
  & node scripts/check-alignment.mjs --mode verify
  Assert-Step 'alignment ledger readable' $LASTEXITCODE
  $CardAlignmentState = 'VERIFY_OK'

  # ---- 1. parse (unchained: one process each, never nested inside npm) ----
  Write-Log '[1/8] node scripts/parse-sources.mjs'
  & node scripts/parse-sources.mjs
  Assert-Step 'parse-sources.mjs' $LASTEXITCODE

  Write-Log '[2/8] node scripts/parse-patch.mjs'
  & node scripts/parse-patch.mjs
  Assert-Step 'parse-patch.mjs' $LASTEXITCODE

  # ---- 2. static analysis ----
  Write-Log '[3/8] npx.cmd astro check'
  & npx.cmd astro check
  Assert-Step 'astro check' $LASTEXITCODE

  Write-Log '[4/8] npx.cmd tsc --noEmit'
  & npx.cmd tsc --noEmit
  Assert-Step 'tsc --noEmit' $LASTEXITCODE

  # ---- 3. build (npx.cmd, NOT npm run build: avoids nested prebuild->parse) ----
  Write-Log '[5/8] npx.cmd astro build'
  & npx.cmd astro build
  Assert-Step 'astro build' $LASTEXITCODE

  # ---- 4. contrast guard ----
  Write-Log '[6/8] npm.cmd run check:contrast'
  & npm.cmd run check:contrast
  Assert-Step 'check:contrast' $LASTEXITCODE

  # ---- 5. dist sanity: six pages ----
  $Pages = @('', 'philosophy', 'cognition', 'reality-lens', 'atlas', 'reflections')
  foreach ($p in $Pages) {
    $target = if ($p -eq '') { 'dist/index.html' } else { "dist/$p/index.html" }
    if (-not (Test-Path $target)) { throw "FAILED: missing build output $target" }
    Write-Log "OK: $target"
  }
  Write-Log '[7/8] dist: 6 pages present'

  # ---- 6. git reports (always read-only first) ----
  Write-Log '---- git status --short ----'
  & git @GitQ status --short
  Write-Log '---- git diff --cached --name-only (before staging) ----'
  & git @GitQ diff --cached --name-only

  if ($Mode -eq 'publish') {
    Write-Log '==== PUBLISH MODE ===='

    $preStaged = & git @GitQ diff --cached --name-only
    foreach ($s in $preStaged) {
      if ($s -and ($Allow -notcontains $s)) {
        throw "FAILED: unexpected pre-staged file '$s' — resolve the index first, no commit/push performed"
      }
    }

    $statusLines = & git @GitQ status --porcelain --untracked-files=all
    $candidates = @()
    foreach ($line in $statusLines) {
      if ($line -match '^(.)(.)\s(.+)$') {
        $path = $Matches[3].Trim()
        if ($path -match '\s->\s') { $path = ($path -split '\s->\s')[-1] }
        $path = $path.Trim('"').Replace([char]92, '/')
        if ($path) { $candidates += $path }
      }
    }

    foreach ($path in $candidates) {
      $excluded = $false
      foreach ($d in $Deny) { if ($path -eq $d) { $excluded = $true } }
      if ($path -like 'dist/*' -or $path -like 'node_modules/*' -or
          $path -like '.astro/*' -or $path -like '.workbuddy-ai/*') { $excluded = $true }
      if ($excluded) {
        Write-Log "SKIP (excluded): $path"
      } elseif ($Allow -notcontains $path) {
        # A new source file must be classified deliberately. Silent SKIP would
        # let one agent publish while forgetting to commit its own new module.
        throw "FAILED: path '$path' is neither in Allow nor Deny. Add it to Allow (source) or Deny (non-release) first; no commit/push performed."
      }
    }

    # Stage straight from the BOM-correct allowlist, NOT from parsed porcelain:
    # PowerShell 5.1 can mangle 认知素材库.md from native output even at chcp 65001.
    # `git add` on an unchanged path is a no-op, so this stays minimal.
    $toStage = @()
    foreach ($a in $Allow) {
      if (Test-Path -LiteralPath $a) { $toStage += $a }
      else { Write-Log "SKIP (file absent): $a" }
    }
    if ($toStage.Count -eq 0) {
      throw 'FAILED: nothing to stage — no commit/push performed'
    }
    foreach ($f in $toStage) {
      & git add -- $f
      Assert-Step "git add $f" $LASTEXITCODE
    }

    Write-Log '---- git diff --cached --name-only (final staged set) ----'
    $finalStaged = & git @GitQ diff --cached --name-only
    foreach ($s in $finalStaged) {
      if ($s -and ($Allow -notcontains $s)) {
        throw "FAILED: unexpected staged file '$s' — stopping before commit/push"
      }
    }
    $finalStaged

    # Strict alignment gate runs after staging: CURRENT ENTRY.files must equal
    # the exact staged set, publisher/reviewer/base-head must match, and the
    # other agent must have pre-reviewed content changes.
    Write-Log '[align] node scripts/check-alignment.mjs --mode content'
    & node scripts/check-alignment.mjs --mode content --publisher $Publisher --base-head $ReleaseCommit --content-marker $ContentMarker
    Assert-Step 'alignment gate (content publish)' $LASTEXITCODE
    $CardAlignmentState = 'MATCH'

    Write-Log '[8/8] git commit'
    & git commit -m 'Humanizing rewrites: curator voice + 25 curator notes + bilingual labels'
    Assert-Step 'git commit' $LASTEXITCODE
    $ReleaseCommit = (& git rev-parse HEAD).Trim()
    $ReleaseFiles = @($finalStaged | Where-Object { $_ })
    Write-Log ('[8/8] new commit: ' + $ReleaseCommit)

    Write-Log '[8/8] git push origin main'
    & git push origin main
    Assert-Step 'git push origin main' $LASTEXITCODE
    $Pushed = $true

    $postLine = & git ls-remote origin refs/heads/main 2>&1
    Assert-Step 'git ls-remote origin refs/heads/main (post-push)' $LASTEXITCODE
    $ReleaseRemoteHead = ([string]($postLine | Select-Object -First 1) -split '\s+')[0]
    Write-Log ("[guard] remote HEAD after push: $ReleaseRemoteHead")
    & git ls-remote origin
    if ($ReleaseRemoteHead -ne $ReleaseCommit) {
      throw "FAILED: remote HEAD ($ReleaseRemoteHead) does not match new commit ($ReleaseCommit). Push succeeded but verification failed — inspect before declaring online."
    }
    Write-Log '---- git status --short (post-push) ----'
    & git @GitQ status --short
  } else {
    Write-Log '==== VERIFY MODE: no git add / commit / push performed ===='
    Write-Log ('current HEAD: ' + $ReleaseCommit)
    Write-Log ('remote HEAD : ' + $ReleaseRemoteHead)
    & git ls-remote origin
    Write-Log 'To publish: powershell -ExecutionPolicy Bypass -File .\deploy-to-cf.ps1 -Mode publish -Publisher codex|claude|rayman'
  }

  # ---- 7. live CSS hash + six-page HTTP status (read-only) ----
  Write-Log "---- live checks @ $LiveBase ----"
  try {
    # PS 5.1 Get-Content -Raw defaults to the ANSI code page and garbles UTF-8
    # Chinese; read bytes explicitly so the content marker comparison is real.
    $distIndex = [System.IO.File]::ReadAllText((Join-Path $Root 'dist/index.html'), [System.Text.Encoding]::UTF8)
    $CardLocalCss = [regex]::Match($distIndex, '/_astro/[^"'' ]+\.css').Value
    $CardLiveCss = ''
    $liveHtml = ''
    $attempts = if ($Mode -eq 'publish') { 24 } else { 1 }
    for ($i = 0; $i -lt $attempts; $i++) {
      try {
        $resp = Invoke-WebRequest -Uri "$LiveBase/?cb=$ReleaseCommit-$i" -UseBasicParsing -TimeoutSec 25
        # PS 5.1 .Content uses the ANSI code page for text/html without charset;
        # decode the raw response bytes as UTF-8 so Chinese markers are reliable.
        $buf = $resp.RawContentStream.ToArray()
        $liveHtml = [System.Text.Encoding]::UTF8.GetString($buf)
        $CardLiveCss = [regex]::Match($liveHtml, '/_astro/[^"'' ]+\.css').Value
        # Content marker is the real proof for copy/data-only releases: the CSS
        # hash can stay identical when only text changed.
        $contentOk = $liveHtml.Contains($ContentMarker)
        $cssOk = $CardLocalCss -and $CardLiveCss -eq $CardLocalCss
        if ($Mode -eq 'verify') { break }
        if ($cssOk -and $contentOk) { break }
      } catch {
        # Cloudflare Pages may still be rebuilding.
      }
      if ($i -lt $attempts - 1) { Start-Sleep -Seconds 5 }
    }
    Write-Log "local dist CSS : $CardLocalCss"
    Write-Log "live HTML CSS  : $CardLiveCss"
    $localContentOk = $distIndex.Contains($ContentMarker)
    $liveContentOk = $liveHtml.Contains($ContentMarker)
    if ($localContentOk) { Write-Log "local dist marker: PRESENT" } else { Write-Log "local dist marker: MISSING (check -ContentMarker)" }
    if ($liveContentOk) { Write-Log "live HTML marker : PRESENT" } else { Write-Log "live HTML marker : ABSENT" }
    if ($liveContentOk) { $CardContentState = 'MATCH' } else { $CardContentState = 'PENDING' }
    if ($CardLocalCss -and $CardLiveCss -eq $CardLocalCss) {
      $CardCssState = 'MATCH'
      Write-Log 'CSS HASH MATCH — new build appears deployed (still verify HEAD above)'
    } else {
      $CardCssState = 'PENDING'
      Write-Log 'CSS HASH PENDING — Cloudflare rebuild/cache not refreshed; NOT counted as online'
    }
    $routeResults = @()
    foreach ($p in $Pages) {
      $url = if ($p -eq '') { "$LiveBase/" } else { "$LiveBase/$p/" }
      try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 25
        $status = [int]$r.StatusCode
        $routeResults += "$url=$status"
        Write-Log ("HTTP {0}  {1}" -f $status, $url)
        if ($status -ne 200) { throw "route $url returned $status" }
      } catch {
        $routeResults += "$url=ERROR"
        Write-Log ("HTTP ERROR  {0}  {1}" -f $url, $_.Exception.Message)
      }
    }
    $CardRoutesState = ($routeResults -join '; ')
  } catch {
    Write-Log "live checks skipped: $($_.Exception.Message)"
  }

  if ($Mode -eq 'publish') {
    if ($CardCssState -eq 'MATCH' -and $CardContentState -eq 'MATCH' -and $CardAlignmentState -eq 'MATCH' -and $ReleaseRemoteHead -eq $ReleaseCommit) {
      $ReleaseStatus = 'PUBLISHED_LIVE_VERIFIED'
    } else {
      $ReleaseStatus = 'PUSHED_LIVE_UNVERIFIED'
    }
  } else {
    $ReleaseStatus = 'VERIFY_ONLY_NO_PUSH'
    if (-not $ReleaseFiles.Count) {
      $ReleaseFiles = @(& git @GitQ diff --name-only HEAD)
    }
  }
  Write-ReleaseCard -Status $ReleaseStatus -Commit $ReleaseCommit -RemoteHead $ReleaseRemoteHead -LocalCss $CardLocalCss -LiveCss $CardLiveCss -CssState $CardCssState -ContentState $CardContentState -ContentMarker $ContentMarker -AlignmentState $CardAlignmentState -RoutesState $CardRoutesState -Files $ReleaseFiles

  Write-Log "---- deploy finished OK (mode=$Mode) ----"
  Write-Log "log: $LogPath"
} catch {
  $Fatal = $true
  if ($Pushed) { $ReleaseStatus = 'PUSHED_BUT_FAILED_POSTCHECK' }
  elseif ($Mode -eq 'publish') { $ReleaseStatus = 'ABORTED_BEFORE_PUSH' }
  else { $ReleaseStatus = 'VERIFY_FAILED' }
  Write-Log "---- deploy STOPPED: $($_.Exception.Message) ----"
  if (-not $Pushed) { Write-Log 'No commit/push was performed after the failing step.' }
  else { Write-Log 'Push already happened; do NOT retry blindly — inspect remote HEAD and Cloudflare Pages log.' }
  Write-ReleaseCard -Status $ReleaseStatus -Commit $ReleaseCommit -RemoteHead $ReleaseRemoteHead -LocalCss $CardLocalCss -LiveCss $CardLiveCss -CssState $CardCssState -ContentState $CardContentState -ContentMarker $ContentMarker -AlignmentState $CardAlignmentState -RoutesState $CardRoutesState -Files $ReleaseFiles
  Write-Log "log: $LogPath"
} finally {
  if ($TranscriptOn) { try { Stop-Transcript | Out-Null } catch { } }
  Write-Host "log: $LogPath"
}

if ($Fatal) { exit 1 } else { exit 0 }
