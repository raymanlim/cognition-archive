/**
 * anchors.ts — SINGLE SOURCE OF TRUTH for every cross-page anchor id.
 * PATCH_DATA_AND_I18N.md Part 3 §3.
 */
export const pad2 = (n: number | string): string => String(n).padStart(2, '0');

/** Division I: /philosophy#phil-{slug} */
export const philAnchor = (canonicalId: string): string => canonicalId;

/** Division II: /cognition#cpv-ch-{0..9} */
export const cpvAnchor = (n: number | string): string => `cpv-ch-${n}`;

/** Division II: /cognition#cog-card-{01..23} */
export const cogCardAnchor = (n: number | string): string => `cog-card-${pad2(n)}`;

/** Division II: /cognition#munger-cat-{1..6} */
export const mungerCatAnchor = (n: number | string): string => `munger-cat-${n}`;

/** Division II: /cognition#munger-model-{cat}-{index} */
export const mungerModelAnchor = (cat: number | string, index: number | string): string =>
  `munger-model-${cat}-${index}`;

/** Division III: /reality-lens#lens-card-{01..25} */
export const lensCardAnchor = (n: number | string): string => `lens-card-${pad2(n)}`;

export const lensItemAnchor = (n: number | string): string => `lens-item-${pad2(n)}`;

/** Route any canonical anchor to its owning page + tab. */
export interface AnchorRoute {
  page: 'philosophy' | 'cognition' | 'reality-lens' | 'atlas';
  tab?: 'cpv' | 'cards' | 'munger';
  needsFilterReset?: boolean;
}
export function routeForAnchor(hash: string): AnchorRoute | null {
  if (hash.startsWith('phil-')) return { page: 'philosophy', needsFilterReset: true };
  if (hash.startsWith('cpv-ch-')) return { page: 'cognition', tab: 'cpv' };
  if (hash.startsWith('cog-card-')) return { page: 'cognition', tab: 'cards' };
  if (hash.startsWith('munger-cat-') || hash.startsWith('munger-model-') ||
      hash.startsWith('six-') || hash.startsWith('tool-')) return { page: 'cognition', tab: 'munger' };
  if (hash.startsWith('lens-card-')) return { page: 'reality-lens', needsFilterReset: true };
  if (hash.startsWith('axiom-') || hash.startsWith('atlas-')) return { page: 'atlas' };
  if (hash.startsWith('level-') || hash.startsWith('system-') || hash.startsWith('axis-') ||
      hash.startsWith('chain-')) return { page: 'cognition', tab: 'cpv' };
  return null;
}
