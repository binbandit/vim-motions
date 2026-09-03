import type { ReactNode } from 'react';

function splitKeys(keys: string): string[] {
  // Support sequences like "g~", "Ctrl-d", "diw", "f{char}"
  if (keys.includes(' ') || keys.includes('+') || keys.startsWith('Ctrl') || keys.startsWith('Alt')) {
    return keys.split(/\s*\+\s*|\s+/).filter(Boolean);
  }
  if (keys.length <= 3 || /[{}]/.test(keys)) {
    return [keys];
  }
  return [keys];
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="kbd">{children}</kbd>;
}

export function Keys({ keys }: { keys: string }) {
  const parts = splitKeys(keys);
  return (
    <span className="kbd-seq" aria-label={keys}>
      {parts.map((part, i) => (
        <Kbd key={`${part}-${i}`}>{part}</Kbd>
      ))}
    </span>
  );
}

export function Motion({
  keys,
  name,
  children,
  example,
}: {
  keys: string;
  name: string;
  children: ReactNode;
  example?: string;
}) {
  return (
    <div className="motion-row not-prose">
      <div className="pt-0.5">
        <Keys keys={keys} />
      </div>
      <div>
        <div className="motion-title">{name}</div>
        <div className="motion-desc">{children}</div>
        {example ? <div className="example-block">{example}</div> : null}
      </div>
    </div>
  );
}

export function MotionList({ children }: { children: ReactNode }) {
  return <div className="my-4 not-prose">{children}</div>;
}
