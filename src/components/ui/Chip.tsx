import { ReactNode } from 'react';

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[4px] border border-line-strong bg-panel px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
