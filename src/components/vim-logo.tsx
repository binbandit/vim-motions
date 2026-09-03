export function VimLogo() {
  return (
    <span className="inline-flex items-center gap-2 font-display text-base tracking-tight">
      <span
        aria-hidden
        className="flex size-7 items-center justify-center rounded-md border border-[color:var(--vim-border)] bg-[color:var(--vim-panel)] font-mono text-sm text-[color:var(--vim-accent)] shadow-[0_0_24px_color-mix(in_oklab,var(--vim-accent)_25%,transparent)]"
      >
        :
      </span>
      <span>
        <span className="text-[color:var(--vim-accent)]">vim</span>
        <span className="text-fd-muted-foreground">/</span>
        motions
      </span>
    </span>
  );
}
