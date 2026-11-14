#!/usr/bin/env node
/**
 * Fail-closed gate for AGENT_SYNC.md.
 *
 * Both Codex and Claude must update the shared CURRENT ENTRY before any code,
 * content, data, release-tooling or upload change. deploy-to-cf.ps1 calls this
 * in verify mode and again after staging in publish mode; tooling commits call
 * it manually with --mode tooling.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i += 1) {
  const key = args[i];
  if (!key.startsWith('--')) fail(`Unexpected argument: ${key}`);
  const name = key.slice(2);
  const value = args[i + 1];
  if (value === undefined || value.startsWith('--')) fail(`Missing value for --${name}`);
  opts[name] = value;
  i += 1;
}

const mode = opts.mode || 'content';
if (!['verify', 'content', 'tooling'].includes(mode)) fail(`Invalid --mode: ${mode}`);

function fail(message) {
  console.error(`[alignment] FAILED: ${message}`);
  process.exit(1);
}

function normaliseFile(p) {
  return String(p).trim().replace(/^['"]|['"]$/g, '').replace(/\\/g, '/').replace(/^\.\//, '');
}

function git(argsForGit) {
  return execFileSync('git', ['-c', 'core.quotepath=false', ...argsForGit], {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function readCurrentEntry() {
  const file = path.join(process.cwd(), 'AGENT_SYNC.md');
  if (!fs.existsSync(file)) fail('AGENT_SYNC.md is missing');
  const text = fs.readFileSync(file, 'utf8');
  const block = text.match(/<!-- CURRENT ENTRY BEGIN -->([\s\S]*?)<!-- CURRENT ENTRY END -->/);
  if (!block) fail('CURRENT ENTRY markers are missing');

  const entry = { files: [] };
  let inFiles = false;
  for (const rawLine of block[1].split(/\r?\n/)) {
    const line = rawLine.replace(/\s+$/, '');
    if (/^files:\s*$/.test(line)) {
      inFiles = true;
      continue;
    }
    const listItem = line.match(/^\s+-\s+(.+?)\s*$/);
    if (inFiles && listItem) {
      entry.files.push(normaliseFile(listItem[1]));
      continue;
    }
    inFiles = false;
    const field = line.match(/^([a-z_]+):\s*(.*)$/);
    if (field) entry[field[1]] = field[2].trim();
  }
  return entry;
}

function validateCommon(entry, strict) {
  const required = ['entry_id', 'base_head', 'publisher', 'reviewer', 'change_type', 'summary', 'expected_visible_change', 'pre_review', 'content_marker', 'review_status'];
  for (const key of required) {
    if (!entry[key]) fail(`CURRENT ENTRY.${key} is empty`);
  }
  if (!/^[A-Za-z0-9._-]+$/.test(entry.entry_id)) fail('entry_id must use letters, digits, dot, underscore or hyphen only');
  if (!Array.isArray(entry.files) || entry.files.length === 0) fail('CURRENT ENTRY.files is empty');
  if (!entry.files.includes('AGENT_SYNC.md')) fail('CURRENT ENTRY.files must include AGENT_SYNC.md');
  if (!['codex', 'claude', 'rayman'].includes(entry.publisher)) fail('publisher must be codex, claude or rayman');
  if (!['codex', 'claude'].includes(entry.reviewer)) fail('reviewer must be codex or claude');
  if (entry.reviewer === entry.publisher) fail('reviewer must be the other agent, not the publisher');
  if (strict && !/^[0-9a-f]{40}$/.test(entry.base_head)) fail('base_head must be a 40-character commit hash');
}

const entry = readCurrentEntry();
validateCommon(entry, mode !== 'verify');

// Rule 7: static docs cannot claim a live HEAD, and the release script cannot
// reuse a one-off commit title. These guards run even in lightweight verify mode.
function validateProtocolAssets() {
  const protocolPath = path.join(process.cwd(), 'RELEASE_PROTOCOL.md');
  const deployPath = path.join(process.cwd(), 'deploy-to-cf.ps1');
  if (!fs.existsSync(protocolPath)) fail('RELEASE_PROTOCOL.md is missing');
  if (!fs.existsSync(deployPath)) fail('deploy-to-cf.ps1 is missing');

  const protocol = fs.readFileSync(protocolPath, 'utf8');
  const staticPointer = protocol
    .split(/\r?\n/)
    .find((line) =>
      /(?:当前|实时)/.test(line) &&
      /(?:HEAD|origin\/main)/.test(line) &&
      /\b[0-9a-f]{7,40}\b/i.test(line)
    );
  if (staticPointer) {
    fail(`RELEASE_PROTOCOL.md contains a static live-pointer claim: ${staticPointer.trim()}`);
  }

  const deploy = fs.readFileSync(deployPath, 'utf8');
  const legacyMessage = 'Humanizing rewrites: curator voice + 25 curator notes + bilingual labels';
  if (deploy.includes(legacyMessage)) {
    fail('deploy-to-cf.ps1 still contains the legacy hardcoded commit message');
  }
}

validateProtocolAssets();

if (mode === 'verify') {
  console.log(`ALIGNMENT_VERIFY_OK entry=${entry.entry_id}`);
  process.exit(0);
}

if (!opts.publisher) fail('--publisher is required');
if (entry.publisher !== opts.publisher) fail(`CURRENT ENTRY.publisher=${entry.publisher} does not match --publisher=${opts.publisher}`);

const currentHead = git(['rev-parse', 'HEAD']).trim();
const cliBaseHead = opts['base-head'] || currentHead;
if (entry.base_head !== currentHead) fail(`base_head=${entry.base_head} does not match current HEAD=${currentHead}`);
if (cliBaseHead !== currentHead) fail(`--base-head=${cliBaseHead} does not match current HEAD=${currentHead}`);

if (mode === 'content') {
  const approved = `pre_reviewed_by_${entry.reviewer}`;
  if (entry.pre_review !== approved) fail(`content publish requires pre_review=${approved}`);
  if (entry.review_status !== approved) fail(`content publish requires review_status=${approved}`);
  if (entry.change_type === 'tooling-rule') fail('tooling-rule entry cannot be reused for content publish');
  if (opts['content-marker'] && entry.content_marker !== opts['content-marker']) {
    fail(`content_marker does not match -ContentMarker: ${entry.content_marker} != ${opts['content-marker']}`);
  }
}

if (mode === 'tooling') {
  const approved = `pre_reviewed_by_${entry.reviewer}`;
  const pendingPre = `pending_${entry.reviewer}_review_after_tool_commit`;
  if (![approved, pendingPre].includes(entry.pre_review)) {
    fail(`tooling commit requires pre_review=${approved} or ${pendingPre}`);
  }
  if (![approved, 'pending_other_agent'].includes(entry.review_status)) {
    fail(`tooling commit requires review_status=${approved} or pending_other_agent`);
  }
  if (opts['content-marker'] && entry.content_marker !== opts['content-marker']) {
    fail(`content_marker does not match -ContentMarker: ${entry.content_marker} != ${opts['content-marker']}`);
  }
}

const staged = git(['diff', '--cached', '--name-only', '-z'])
  .split('\0')
  .filter(Boolean)
  .map(normaliseFile)
  .sort();
const declared = entry.files.slice().sort();
if (staged.length === 0) fail('no staged files to validate');
if (!staged.includes('AGENT_SYNC.md')) fail('AGENT_SYNC.md is not staged');
if (JSON.stringify(staged) !== JSON.stringify(declared)) {
  fail(`staged set does not exactly match CURRENT ENTRY.files\nstaged:   ${staged.join(', ')}\ndeclared: ${declared.join(', ')}`);
}

console.log(`ALIGNMENT_OK mode=${mode} entry=${entry.entry_id} publisher=${entry.publisher} reviewer=${entry.reviewer} files=${entry.files.length}`);
