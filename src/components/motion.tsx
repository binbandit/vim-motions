import type { ReactNode } from 'react';
import Link from 'next/link';
import { motionId } from '@/lib/motion-id';
import { hrefForKeys, splitLinkedKeys } from '@/lib/motion-links';

function splitKeys(keys: string): string[] {
  if (keys.includes(' / ')) {
    return keys.split(/\s*\/\s*/).map((s) => s.trim()).filter(Boolean);
  }
  if (keys.startsWith('Ctrl') || keys.startsWith('Alt')) {
    return [keys];
  }
  if (keys.includes(' ')) {
    return keys.split(/\s+/).filter(Boolean);
  }
  return [keys];
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="kbd">{children}</kbd>;
}

function KeyCap({ keys }: { keys: string }) {
  const parts = splitKeys(keys);
  return (
    <span className="kbd-seq" aria-label={keys}>
      {parts.map((part, i) => (
        <Kbd key={`${part}-${i}`}>{part}</Kbd>
      ))}
    </span>
  );
}

export function Keys({
  keys,
  href,
  link = false,
}: {
  keys: string;
  href?: string;
  link?: boolean;
}) {
  if (!link && !href) {
    return <KeyCap keys={keys} />;
  }

  const compound = !href ? splitLinkedKeys(keys) : null;
  if (compound) {
    return (
      <span className="kbd-seq" aria-label={keys}>
        {compound.map((part) => (
          <Keys key={part} keys={part} link />
        ))}
      </span>
    );
  }

  const target = href ?? hrefForKeys(keys);
  const body = <KeyCap keys={keys} />;
  if (!target) return body;

  return (
    <Link
      href={target}
      className="motion-ref inline-flex no-underline hover:opacity-90"
      title={`Open ${keys}`}
    >
      {body}
    </Link>
  );
}

/** “Like &lt;keys&gt;” with clickable key link(s). */
export function SameAs({
  keys,
  label = 'Like',
  then: thenKeys,
}: {
  keys: string;
  label?: string;
  then?: string;
}) {
  return (
    <span className="same-as inline-flex flex-wrap items-center gap-1.5 text-[0.92em] text-fd-muted-foreground">
      <span>{label}</span>
      <Keys keys={keys} link />
      {thenKeys ? (
        <>
          <span>then</span>
          <Keys keys={thenKeys} link />
        </>
      ) : null}
    </span>
  );
}

export function Motion({
  keys,
  name,
  children,
  example,
  sameAs,
  sameAsThen,
  sameAsLabel,
  also,
  id,
}: {
  keys: string;
  name: string;
  children?: ReactNode;
  example?: string;
  sameAs?: string;
  sameAsThen?: string;
  sameAsLabel?: string;
  also?: string[];
  id?: string;
}) {
  const anchor = id ?? motionId(keys);

  return (
    <div id={anchor} className="motion-row not-prose scroll-mt-24">
      <div className="pt-0.5">
        <Keys keys={keys} />
      </div>
      <div>
        <div className="motion-title">
          <a
            href={`#${anchor}`}
            className="text-inherit no-underline hover:text-[color:var(--vim-accent)]"
          >
            {name}
          </a>
        </div>
        {children ? <div className="motion-desc">{children}</div> : null}
        {sameAs ? (
          <div className="mt-2">
            <SameAs keys={sameAs} then={sameAsThen} label={sameAsLabel ?? 'Like'} />
          </div>
        ) : null}
        {also && also.length > 0 ? (
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[0.92em] text-fd-muted-foreground">
            <span>Also</span>
            {also.map((k) => (
              <Keys key={k} keys={k} link />
            ))}
          </div>
        ) : null}
        {example ? <div className="example-block">{example}</div> : null}
      </div>
    </div>
  );
}

export function MotionList({ children }: { children: ReactNode }) {
  return <div className="my-4 not-prose">{children}</div>;
}
