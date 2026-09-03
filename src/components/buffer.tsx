import type { ReactNode } from 'react';
import { Keys } from '@/components/motion';

type Line = {
  text: string;
  /** 0-based column of the cursor (character under cursor). */
  cursor?: number;
  /** Inclusive highlight range [start, end) for selection/change. */
  mark?: [number, number];
};

/**
 * Parse a buffer line.
 * - `|` alone marks the cursor (before the char under it).
 * - Two pipes `|region|` mark a highlight; cursor sits at the start of the region.
 */
function parseCursorString(raw: string): Line[] {
  return raw.replace(/\r\n/g, '\n').split('\n').map((line) => {
    const first = line.indexOf('|');
    if (first === -1) return { text: line };

    const second = line.indexOf('|', first + 1);
    if (second === -1) {
      return { text: line.slice(0, first) + line.slice(first + 1), cursor: first };
    }

    const text =
      line.slice(0, first) +
      line.slice(first + 1, second) +
      line.slice(second + 1);
    const end = second - 1; // exclusive end after removing first pipe
    return {
      text,
      cursor: first,
      mark: end > first ? ([first, end] as [number, number]) : undefined,
    };
  });
}

function BufferPane({
  label,
  lines,
}: {
  label: string;
  lines: Line[];
}) {
  return (
    <div className="buffer-pane">
      <div className="buffer-pane-label">{label}</div>
      <pre className="buffer-pre">
        {lines.map((line, i) => (
          <div key={i} className="buffer-line">
            <span className="buffer-gutter">{i + 1}</span>
            <code className="buffer-code">
              <LineText line={line} />
            </code>
          </div>
        ))}
      </pre>
    </div>
  );
}

function LineText({ line }: { line: Line }) {
  const { text, cursor, mark } = line;
  if (cursor == null && !mark) {
    return <>{text || ' '}</>;
  }

  const parts: ReactNode[] = [];
  for (let i = 0; i <= text.length; i++) {
    const ch = text[i] ?? '';
    const inMark = mark && i >= mark[0] && i < mark[1];
    if (cursor === i) {
      parts.push(
        <span key={`c-${i}`} className="buffer-cursor" title="cursor">
          {ch || ' '}
        </span>,
      );
      continue;
    }
    if (ch) {
      parts.push(
        inMark ? (
          <span key={i} className="buffer-mark">
            {ch}
          </span>
        ) : (
          <span key={i}>{ch}</span>
        ),
      );
    }
  }
  return <>{parts}</>;
}

/**
 * Before/after buffer demo.
 *
 * Put `|` where the cursor sits (before the char under cursor):
 * `const |name = 1` → cursor on `n`.
 * Two pipes highlight a region: `const |name| = 1` → `name` marked, cursor on `n`.
 */
export function Buffer({
  keys,
  before,
  after,
  note,
}: {
  keys?: string;
  before: string;
  after: string;
  note?: ReactNode;
}) {
  const beforeLines = parseCursorString(before);
  const afterLines = parseCursorString(after);

  return (
    <div className="buffer-demo not-prose my-4">
      {keys ? (
        <div className="buffer-cmd">
          <span className="text-fd-muted-foreground">press</span> <Keys keys={keys} />
        </div>
      ) : null}
      <div className="buffer-grid">
        <BufferPane label="before" lines={beforeLines} />
        <BufferPane label="after" lines={afterLines} />
      </div>
      {note ? <div className="buffer-note">{note}</div> : null}
    </div>
  );
}
