import Link from 'next/link';

const categories = [
  {
    href: '/docs/motions/basic',
    label: 'hjkl & words',
    detail: 'Everyday cursor movement',
  },
  {
    href: '/docs/motions/text-objects',
    label: 'Text objects',
    detail: 'iw, ap, i", at, and friends',
  },
  {
    href: '/docs/operators',
    label: 'Operators',
    detail: 'd, c, y, >, g~, and more',
  },
  {
    href: '/docs/cheatsheet',
    label: 'Cheatsheet',
    detail: 'Dense lookup while you code',
  },
];

export default function HomePage() {
  return (
    <main className="landing-shell flex flex-1 flex-col">
      <div className="landing-grid" aria-hidden />

      <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pb-16 pt-10 md:pt-16">
        <p className="animate-rise font-mono text-sm tracking-[0.18em] text-[color:var(--vim-accent)] uppercase">
          developer reference
        </p>

        <h1 className="animate-rise-delay-1 mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-fd-foreground md:text-7xl">
          <span className="text-[color:var(--vim-accent)]">Vim Motions</span>
          <span className="vim-cursor" aria-hidden />
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-fd-muted-foreground md:text-xl">
          Every motion, operator, and text object in one dark, searchable
          place — keep it open while you code and get faster every day.
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-md bg-[color:var(--vim-accent)] px-5 py-2.5 font-medium text-[color:var(--vim-ink)] transition hover:brightness-110"
          >
            Open the reference
          </Link>
          <Link
            href="/docs/cheatsheet"
            className="inline-flex items-center rounded-md border border-[color:var(--vim-border)] bg-[color:var(--vim-panel)] px-5 py-2.5 text-fd-foreground transition hover:border-[color:var(--vim-accent)]"
          >
            Jump to cheatsheet
          </Link>
          <span className="ms-1 hidden font-mono text-xs text-fd-muted-foreground sm:inline">
            Press <kbd className="kbd">⌘</kbd>
            <kbd className="kbd">K</kbd> to search
          </span>
        </div>
      </section>

      <section className="relative border-t border-[color:var(--vim-border)] bg-[color:color-mix(in_oklab,var(--vim-panel)_80%,transparent)]">
        <div className="hero-glow pointer-events-none absolute -top-24 left-1/2 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-[color:color-mix(in_oklab,var(--vim-accent)_18%,transparent)] blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 md:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block transition hover:translate-y-[-2px]"
            >
              <div className="font-mono text-xs tracking-wider text-[color:var(--vim-accent)] uppercase">
                {item.label}
              </div>
              <div className="mt-2 text-sm text-fd-muted-foreground group-hover:text-fd-foreground">
                {item.detail}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
