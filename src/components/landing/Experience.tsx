'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { experience } from '@/lib/constants/experience';

export default function Experience({ id }: { id?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id={id ?? 'history'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="professionalHistory" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Where I&apos;ve operated.
        </h2>

        <div className="divide-y divide-border">
          {experience.map((entry, i) => {
            const isOpen = open === i;
            return (
              <div key={`${entry.company}-${i}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-5 text-left group"
                >
                  {/* Number */}
                  <span className="font-mono text-[11px] text-subtle tracking-widest shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Company + title */}
                  <div className="flex-1 min-w-0">
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {entry.company}
                    </span>
                    <span className="hidden sm:inline font-mono text-xs text-subtle ml-3">
                      {entry.title}
                    </span>
                  </div>

                  {/* Dates */}
                  <span className="hidden md:block font-mono text-[11px] text-subtle shrink-0">
                    {entry.startDate} — {entry.endDate}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`shrink-0 text-subtle transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </button>

                {/* Expandable content */}
                <div className={`row-grid ${isOpen ? 'open' : ''}`}>
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-14">
                      <p className="font-mono text-xs text-accent mb-4 sm:hidden">
                        {entry.title}
                      </p>
                      <p className="font-mono text-xs text-accent mb-4 hidden sm:block">
                        {entry.location} · {entry.startDate} — {entry.endDate}
                      </p>
                      <ul className="space-y-2.5">
                        {entry.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-muted text-sm leading-relaxed">
                            <span className="text-accent shrink-0 mt-1 text-[10px]">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
