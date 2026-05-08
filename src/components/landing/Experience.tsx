'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { experience } from '@/lib/constants/experience';

type RoleKey = `${number}:${number}`;

export default function Experience({ id }: { id?: string }) {
  const initialOpen: RoleKey | null = experience[0]?.roles[0] ? '0:0' : null;
  const [openRole, setOpenRole] = useState<RoleKey | null>(initialOpen);

  return (
    <SectionWrapper id={id ?? 'history'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="professionalHistory" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Professional History
        </h2>
        <p className="text-muted text-sm md:text-base mt-3 mb-12 max-w-2xl">
          A chronological record of roles, responsibilities, and key achievements.
        </p>

        <div className="space-y-3">
          {experience.map((entry, ci) => {
            const reverseNum = experience.length - ci;
            const earliestStart = entry.roles[entry.roles.length - 1]?.startDate;
            const latestEnd = entry.roles[0]?.endDate;

            return (
              <div
                key={`${entry.company}-${ci}`}
                className="rounded-2xl border border-border bg-surface/40 overflow-hidden"
              >
                {/* Company header */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 px-5 md:px-8 py-6 border-b border-border">
                  <span className="font-mono text-2xl md:text-3xl text-subtle tabular-nums shrink-0">
                    {String(reverseNum).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                      {entry.company}
                    </h3>
                    <p className="font-mono text-[11px] text-subtle tracking-widest uppercase mt-1">
                      {entry.location}
                    </p>
                  </div>
                  <span className="hidden md:block font-mono text-[11px] text-subtle tracking-widest uppercase whitespace-nowrap">
                    {earliestStart} — {latestEnd}
                  </span>
                </div>

                {/* Roles */}
                <ul>
                  {entry.roles.map((role, ri) => {
                    const key: RoleKey = `${ci}:${ri}`;
                    const isOpen = openRole === key;
                    return (
                      <li
                        key={`${role.title}-${ri}`}
                        className={ri > 0 ? 'border-t border-border' : ''}
                      >
                        <button
                          onClick={() => setOpenRole(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          className="w-full grid grid-cols-[1fr_auto_auto] items-center gap-4 md:gap-6 px-5 md:px-8 py-4 text-left group"
                        >
                          <span
                            className={`font-medium text-sm md:text-base transition-colors ${
                              isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'
                            }`}
                          >
                            {role.title}
                          </span>
                          <span className="hidden md:block font-mono text-[11px] text-subtle tracking-widest uppercase whitespace-nowrap">
                            {role.startDate} — {role.endDate}
                          </span>
                          <span
                            className={`shrink-0 text-subtle text-lg leading-none transition-transform duration-300 ${
                              isOpen ? 'rotate-45 text-accent' : 'rotate-0'
                            }`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </button>

                        <div className={`row-grid ${isOpen ? 'open' : ''}`}>
                          <div className="overflow-hidden">
                            <div className="px-5 md:px-8 pb-6 pt-1">
                              <span className="chip-mono mb-4 inline-flex">Position</span>
                              <p className="md:hidden font-mono text-[11px] text-subtle tracking-widest uppercase mb-4">
                                {role.startDate} — {role.endDate}
                              </p>
                              <ul className="space-y-2.5">
                                {role.bullets.map((bullet, bi) => (
                                  <li
                                    key={bi}
                                    className="flex gap-3 text-muted text-sm leading-relaxed"
                                  >
                                    <span className="text-accent shrink-0 mt-2 text-[6px]">●</span>
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
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
