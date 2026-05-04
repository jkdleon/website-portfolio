'use client';

import { ReactNode, useState } from 'react';

interface ExpandableRowProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export function ExpandableRow({ trigger, children, className = '' }: ExpandableRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-border ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        {trigger}
        <span className="shrink-0 mt-1 font-mono text-xs text-subtle group-hover:text-accent transition-colors">
          {open ? '−' : '+'}
        </span>
      </button>
      <div className={`row-grid ${open ? 'open' : ''}`}>
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
