const CHAR_MAP: Record<string, string> = {
  $: 'dollar',
  '|': 'bar',
  '^': 'caret',
  '+': 'plus',
  '*': 'star',
  '#': 'hash',
  '(': 'lparen',
  ')': 'rparen',
  '{': 'lbrace',
  '}': 'rbrace',
  '[': 'lbracket',
  ']': 'rbracket',
  '.': 'dot',
  ',': 'comma',
  ';': 'semi',
  "'": 'squote',
  '`': 'btick',
  '"': 'dquote',
  '%': 'percent',
  _: 'under',
  ':': 'colon',
  '<': 'lt',
  '>': 'gt',
  '/': 'slash',
  '?': 'qmark',
  '!': 'bang',
  '@': 'at',
  '=': 'eq',
  '~': 'tilde',
  '-': 'dash',
};

/** Stable HTML id for a motion/operator key sequence. */
export function motionId(keys: string): string {
  // Placeholders like f{char} → fchar for readable anchors
  const normalized = keys.trim().replace(/\{([^}]+)\}/g, '$1');
  let out = '';
  for (const ch of normalized) {
    if (/[A-Z]/.test(ch)) {
      out += `u${ch.toLowerCase()}`;
      continue;
    }
    if (/[a-z0-9]/.test(ch)) {
      out += ch;
      continue;
    }
    if (ch === ' ') {
      out += ' ';
      continue;
    }
    out += CHAR_MAP[ch] ?? 'x';
  }

  return out
    .replace(/\s*\/\s*/g, '--')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}
