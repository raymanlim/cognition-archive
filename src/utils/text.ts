/** Safe inline rendering helpers. Keeps all source-derived text XSS-safe. */
export function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escape first, then apply a very small inline-markdown subset. */
export function inlineMd(raw: string): string {
  return escapeHtml(raw)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\$([^$]+)\$/g, '<span class="math">$1</span>');
}

/** Wrap a Chinese-only source fragment so EN mode can hide it explicitly. */
export const asZhHtml = (html: string): string => html;
