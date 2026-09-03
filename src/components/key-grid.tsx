import Link from 'next/link';

const KEYS: { keys: string; href: string; label?: string }[] = [
  { keys: 'h', href: '/docs/motions/basic#h' },
  { keys: 'j', href: '/docs/motions/basic#j' },
  { keys: 'k', href: '/docs/motions/basic#k' },
  { keys: 'l', href: '/docs/motions/basic#l' },
  { keys: 'w', href: '/docs/motions/words#w' },
  { keys: 'e', href: '/docs/motions/words#e' },
  { keys: 'b', href: '/docs/motions/words#b' },
  { keys: '0', href: '/docs/motions/lines#0' },
  { keys: '^', href: '/docs/motions/lines#caret' },
  { keys: '$', href: '/docs/motions/lines#dollar' },
  { keys: 'gg', href: '/docs/motions/lines#gg' },
  { keys: 'G', href: '/docs/motions/lines#ug' },
  { keys: 'f', href: '/docs/motions/search#fchar' },
  { keys: 't', href: '/docs/motions/search#tchar' },
  { keys: '*', href: '/docs/motions/search#star', label: 'star' },
  { keys: '#', href: '/docs/motions/search#hash', label: 'hash' },
  { keys: '/', href: '/docs/motions/search#slash' },
  { keys: '?', href: '/docs/motions/search#qmark' },
  { keys: '%', href: '/docs/motions/matching#percent' },
  { keys: '|', href: '/docs/motions/lines#bar' },
  { keys: '{', href: '/docs/motions/sentences#lbrace' },
  { keys: '}', href: '/docs/motions/sentences#rbrace' },
  { keys: '(', href: '/docs/motions/sentences#lparen' },
  { keys: ')', href: '/docs/motions/sentences#rparen' },
  { keys: 'H', href: '/docs/motions/scrolling#uh' },
  { keys: 'M', href: '/docs/motions/scrolling#um' },
  { keys: 'L', href: '/docs/motions/scrolling#ul' },
  { keys: 'iw', href: '/docs/motions/text-objects#iw' },
  { keys: 'ap', href: '/docs/motions/text-objects#ap' },
  { keys: 'gn', href: '/docs/motions/search#gn' },
  { keys: '[[', href: '/docs/motions/sections#lbracketlbracket' },
  { keys: ']]', href: '/docs/motions/sections#rbracketrbracket' },
];

export function KeyGrid() {
  return (
    <div className="not-prose my-6 grid grid-cols-3 gap-2 sm:grid-cols-6 md:grid-cols-8">
      {KEYS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          title={item.label ? `${item.keys} (${item.label})` : item.keys}
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-[color:var(--vim-border)] bg-[color:var(--vim-panel)] px-2 py-2 font-mono text-sm text-[color:var(--vim-accent)] transition hover:border-[color:var(--vim-accent)]"
        >
          {item.keys}
        </Link>
      ))}
    </div>
  );
}
