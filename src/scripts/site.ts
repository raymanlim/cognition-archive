/**
 * site.ts — single client bundle for the whole static archive.
 * Driven entirely by data-* attributes + event delegation; no framework island.
 * All language/appearance state lives in localStorage and is never reset by
 * cross-page hash navigation (the inline anti-FOUC script restores it first).
 */
import { routeForAnchor } from '../utils/anchors';

type Lang = 'zh' | 'en' | 'bi';
type Theme = 'paper' | 'dark' | 'crisp';

const root = document.documentElement;
const LANGS: Lang[] = ['zh', 'en', 'bi'];
const THEMES: Theme[] = ['paper', 'dark', 'crisp'];

const get = (k: string): string | null => { try { return localStorage.getItem(k); } catch { return null; } };
const set = (k: string, v: string): void => { try { localStorage.setItem(k, v); } catch { /* private mode */ } };

/* -------------------------------------------------------------------------- */
/* Language + theme (never written during initial restore)                    */
/* -------------------------------------------------------------------------- */
function applyLang(l: Lang, persist = true): void {
  root.dataset.lang = l;
  root.lang = l === 'en' ? 'en' : 'zh';
  document.querySelectorAll<HTMLElement>('[data-lang-set]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.langSet === l));
  });
  if (persist) set('rayman_lang', l);
}

function applyTheme(t: Theme, persist = true): void {
  root.dataset.theme = t;
  document.querySelectorAll<HTMLElement>('[data-theme-set]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.themeSet === t));
  });
  if (persist) set('rayman_theme', t);
}

const initialLang = root.dataset.lang as Lang;
const initialTheme = root.dataset.theme as Theme;
applyLang(LANGS.includes(initialLang) ? initialLang : 'zh', false);
applyTheme(THEMES.includes(initialTheme) ? initialTheme : 'paper', false);

const pressedStyle = document.createElement('style');
pressedStyle.textContent = `
  [data-lang-set][aria-pressed="true"],[data-theme-set][aria-pressed="true"],
  [data-filter-value][aria-pressed="true"],[data-sort-set][aria-pressed="true"] {
    background: var(--obi); color: var(--obi-ink); border-color: var(--obi);
  }
  [data-check-id][aria-pressed="true"] { color: var(--pine); border-color: var(--pine); }
  [hidden] { display: none !important; }
  tr.hash-highlight { background: var(--card-2); }
`;
document.head.appendChild(pressedStyle);

/* -------------------------------------------------------------------------- */
/* Tabs                                                                       */
/* -------------------------------------------------------------------------- */
function activateTab(group: string, id: string): void {
  document.querySelectorAll<HTMLElement>(`[data-tab-group="${group}"][data-tab-set]`).forEach((b) => {
    const on = b.dataset.tabSet === id;
    b.setAttribute('aria-selected', String(on));
    b.classList.toggle('is-active', on);
  });
  document.querySelectorAll<HTMLElement>(`[data-tab-panel][data-tab-group="${group}"]`).forEach((p) => {
    p.hidden = p.dataset.tabPanel !== id;
  });
}

/* -------------------------------------------------------------------------- */
/* Filters (multi-group AND)                                                  */
/* -------------------------------------------------------------------------- */
const filterState: Record<string, string> = {};
function runFilters(): void {
  document.querySelectorAll<HTMLElement>('[data-filter-scope]').forEach((scope) => {
    const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-filter-item]'));
    let visible = 0;
    items.forEach((item) => {
      const tags = (item.dataset.tags ?? '').split(/\s+/).filter(Boolean);
      const ok = Object.entries(filterState).every(([, value]) => value === 'all' || tags.includes(value));
      item.hidden = !ok;
      if (ok) visible += 1;
    });
    document.querySelectorAll<HTMLElement>('[data-filter-count]').forEach((el) => {
      el.textContent = String(visible);
    });
  });
}

/** Cross-page hash targets must never be hidden by an active filter. */
function resetFilters(): void {
  document.querySelectorAll<HTMLElement>('[data-filter-group][data-filter-value]').forEach((b) => {
    const group = b.dataset.filterGroup ?? 'default';
    const value = b.dataset.filterValue ?? 'all';
    if (value === 'all') filterState[group] = 'all';
    b.setAttribute('aria-pressed', String(value === 'all'));
  });
  runFilters();
}

/* -------------------------------------------------------------------------- */
/* Philosopher ordering                                                       */
/* -------------------------------------------------------------------------- */
function applySort(mode: 'number' | 'year'): void {
  const scope = document.querySelector<HTMLElement>('[data-sort-scope]');
  if (!scope) return;
  const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-sort-item]'));
  items.sort((a, b) => mode === 'year'
    ? Number(a.dataset.yearSort) - Number(b.dataset.yearSort)
    : Number(a.dataset.sectionNum) - Number(b.dataset.sectionNum));
  items.forEach((el) => scope.appendChild(el));
  document.querySelectorAll<HTMLElement>('[data-sort-set]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.sortSet === mode));
  });
}

/* -------------------------------------------------------------------------- */
/* Checklist                                                                  */
/* -------------------------------------------------------------------------- */
function checklist(): Set<string> {
  try { return new Set<string>(JSON.parse(get('rayman_checklist') ?? '[]')); } catch { return new Set(); }
}
function restoreChecklist(): void {
  const saved = checklist();
  document.querySelectorAll<HTMLElement>('[data-check-id]').forEach((b) => {
    b.setAttribute('aria-pressed', String(saved.has(b.dataset.checkId ?? '')));
  });
}
restoreChecklist();

/* -------------------------------------------------------------------------- */
/* Cross-page / in-page hash router                                           */
/* -------------------------------------------------------------------------- */
function openAncestorCollapsibles(el: HTMLElement): void {
  let node: HTMLElement | null = el.parentElement;
  while (node && node !== document.body) {
    if (node.hasAttribute('data-collapsible')) node.dataset.open = 'true';
    node = node.parentElement;
  }
}

function highlight(el: HTMLElement): void {
  document.querySelectorAll('.hash-highlight').forEach((n) => n.classList.remove('hash-highlight'));
  // restart the CSS animation reliably
  void el.offsetWidth;
  el.classList.add('hash-highlight');
  window.setTimeout(() => el.classList.remove('hash-highlight'), 3200);
}

function handleHashRoute(): void {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (!hash) return;
  const route = routeForAnchor(hash);

  if (route?.tab) activateTab('cognition', route.tab);
  if (route?.needsFilterReset) resetFilters();

  const target = document.getElementById(hash);
  if (!target) return;

  // Reveal the card: unhide any hidden ancestor tab panel and expand accordions.
  let p: HTMLElement | null = target.parentElement;
  while (p && p !== document.body) {
    if (p.hidden) p.hidden = false;
    if (p.hasAttribute('data-tab-panel')) p.hidden = false;
    p = p.parentElement;
  }
  openAncestorCollapsibles(target);

  // Munger model rows live inside a per-discipline collapsed table.
  if (hash.startsWith('munger-model-')) {
    const table = target.closest<HTMLElement>('[data-model-table]');
    if (table) table.dataset.open = 'true';
  }

  requestAnimationFrame(() => requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    highlight(target);
  }));
}

/* -------------------------------------------------------------------------- */
/* Delegated click handler                                                    */
/* -------------------------------------------------------------------------- */
document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLElement;
  if (!target || !target.closest) return;

  const langBtn = target.closest<HTMLElement>('[data-lang-set]');
  if (langBtn) { const l = langBtn.dataset.langSet as Lang; if (LANGS.includes(l)) applyLang(l); return; }

  const themeBtn = target.closest<HTMLElement>('[data-theme-set]');
  if (themeBtn) { const t = themeBtn.dataset.themeSet as Theme; if (THEMES.includes(t)) applyTheme(t); return; }

  const tabBtn = target.closest<HTMLElement>('[data-tab-set]');
  if (tabBtn) { activateTab(tabBtn.dataset.tabGroup ?? 'default', tabBtn.dataset.tabSet ?? ''); return; }

  const sortBtn = target.closest<HTMLElement>('[data-sort-set]');
  if (sortBtn) { const m = sortBtn.dataset.sortSet; if (m === 'year' || m === 'number') applySort(m); return; }

  const filterBtn = target.closest<HTMLElement>('[data-filter-value]');
  if (filterBtn) {
    const group = filterBtn.dataset.filterGroup ?? 'default';
    const value = filterBtn.dataset.filterValue ?? 'all';
    filterState[group] = value;
    document.querySelectorAll<HTMLElement>(`[data-filter-group="${group}"][data-filter-value]`).forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.filterValue === value));
    });
    runFilters();
    return;
  }

  // Opt-in verbatim Chinese source (EN mode).
  const origToggle = target.closest<HTMLElement>('[data-original-source-toggle]');
  if (origToggle) {
    const box = origToggle.closest<HTMLElement>('[data-orig-source]');
    const body = box?.querySelector<HTMLElement>('.orig-body');
    if (body) {
      body.hidden = !body.hidden;
      origToggle.setAttribute('aria-expanded', String(!body.hidden));
    }
    return;
  }

  const toggle = target.closest<HTMLElement>('[data-collapsible-toggle]');
  if (toggle) {
    const box = toggle.closest<HTMLElement>('[data-collapsible]');
    if (box) box.dataset.open = box.dataset.open === 'true' ? 'false' : 'true';
    return;
  }

  const check = target.closest<HTMLElement>('[data-check-id]');
  if (check) {
    const id = check.dataset.checkId ?? '';
    const saved = checklist();
    if (saved.has(id)) saved.delete(id); else saved.add(id);
    set('rayman_checklist', JSON.stringify([...saved]));
    check.setAttribute('aria-pressed', String(saved.has(id)));
    return;
  }

  if (target.closest('[data-back-to-top]')) {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

/* Same-document anchor clicks must re-run the router (tabs / filters / highlight). */
document.addEventListener('click', (ev) => {
  const a = (ev.target as HTMLElement)?.closest<HTMLAnchorElement>('a[href*="#"]');
  if (!a) return;
  const url = new URL(a.href, location.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  window.setTimeout(handleHashRoute, 0);
});

window.addEventListener('hashchange', handleHashRoute);
window.addEventListener('DOMContentLoaded', () => { handleHashRoute(); runFilters(); });
if (document.readyState !== 'loading') { handleHashRoute(); runFilters(); }

declare global { interface Window { __archive?: Record<string, unknown> } }
window.__archive = { applyLang, applyTheme, activateTab, runFilters, resetFilters, applySort, handleHashRoute };
