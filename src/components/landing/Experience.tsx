'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { experience } from '@/lib/constants/experience';

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Experience() {
  const total = experience.length;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="02"
          label="professionalHistory"
          title="Where I've operated."
          kicker="Reverse-chronological. Each entry is a real environment with real outages, audits, and rollouts behind it."
        />

        <ol className="space-y-3">
          {experience.map((entry, i) => {
            const num = String(total - i).padStart(2, '0');
            const isOpen = openIndex === i;

            return (
              <li
                key={`${entry.company}-${entry.title}`}
                className="grid grid-cols-[auto_1fr] gap-5 md:gap-8"
              >
                <div className="flex flex-col items-center pt-5">
                  <span className="gutter-num text-[11px] tracking-widest">{num}</span>
                  <span className="mt-2 w-px flex-1 bg-border" />
                </div>

                <div
                  className={`border rounded-lg bg-surface overflow-hidden transition-all duration-200 cursor-pointer ${
                    isOpen
                      ? 'border-border-strong shadow-lg shadow-accent/5'
                      : 'border-border hover:border-border-strong hover:-translate-y-0.5'
                  }`}
                  style={{ transitionProperty: 'border-color, transform, box-shadow' }}
                >
                  <button
                    className="w-full text-left p-5 md:p-6"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                            {entry.company}
                          </h3>
                          <span className="font-mono text-[11px] uppercase tracking-widest text-subtle whitespace-nowrap">
                            {entry.startDate} – {entry.endDate}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-accent">{entry.title}</span>
                          <span className="text-subtle text-xs">·</span>
                          <span className="chip pointer-events-none">{entry.location}</span>
                        </div>
                      </div>
                      <span className={`mt-1 flex-shrink-0 transition-colors ${isOpen ? 'text-accent' : 'text-subtle'}`}>
                        <ChevronDown open={isOpen} />
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 px-5 md:px-6 pb-5 md:pb-6 pt-1 border-t border-border">
                        {entry.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-muted text-sm flex gap-3 leading-relaxed"
                            style={{
                              transitionDelay: isOpen ? `${j * 40}ms` : '0ms',
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen ? 'none' : 'translateY(4px)',
                              transition: 'opacity 0.25s ease, transform 0.25s ease',
                            }}
                          >
                            <span className="text-accent mt-1.5 flex-shrink-0 text-[10px]">▮</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionWrapper>
  );
}
