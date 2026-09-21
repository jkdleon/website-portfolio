'use client';

import { ReactNode } from 'react';

interface ExpandableProps {
  id: string;
  open: boolean;
  onToggle: () => void;
  summary: ReactNode;
  label?: string;
  className?: string;
  children: ReactNode;
}

export function Expandable({ id, open, onToggle, summary, label, className = '', children }: ExpandableProps) {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="focus-ring group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 text-left"
      >
        {summary}
        <span
          aria-hidden="true"
          className={`mono-label shrink-0 text-subtle transition-colors group-hover:text-accent ${open ? 'text-accent' : ''}`}
        >
          {open ? 'close −' : 'expand +'}
        </span>
      </button>
      <div
        id={id}
        role="region"
        aria-label={label}
        aria-hidden={!open}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-250 ease-out-soft motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
