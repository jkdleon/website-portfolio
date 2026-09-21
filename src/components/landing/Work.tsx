'use client';

import { useState } from 'react';

import { Expandable } from '@/components/ui/Expandable';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/lib/constants/experience';

export function Work({ id }: { id?: string }) {
  const [openKey, setOpenKey] = useState<string | null>('0:0');

  return (
    <section id={id ?? 'work'} aria-labelledby="work-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="02" label="work log" title="Work" id="work-title" />

        <div className="space-y-4">
          {experience.map((entry, ci) => {
            const first = entry.roles[entry.roles.length - 1];
            const last = entry.roles[0];
            return (
              <article key={entry.company} className="rounded-[10px] border border-line bg-panel">
                <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line px-5 py-4 md:px-6">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-fg">{entry.company}</h3>
                    <MonoLabel as="p" className="mt-1">
                      {entry.location}
                    </MonoLabel>
                  </div>
                  <MonoLabel as="p">
                    {first.startDate} — {last.endDate}
                  </MonoLabel>
                  {entry.description && (
                    <p className="basis-full pt-2 text-sm leading-relaxed text-muted">{entry.description}</p>
                  )}
                </header>

                <div className="divide-y divide-line px-5 md:px-6">
                  {entry.roles.map((role, ri) => {
                    const key = `${ci}:${ri}`;
                    const open = openKey === key;
                    return (
                      <Expandable
                        key={key}
                        id={`role-${ci}-${ri}`}
                        open={open}
                        onToggle={() => setOpenKey(open ? null : key)}
                        summary={
                          <span className="grid min-w-0 gap-1 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-6">
                            <MonoLabel as="span" className="pt-1">
                              {role.startDate} — {role.endDate}
                            </MonoLabel>
                            <span className="min-w-0">
                              <span className={`block text-base font-semibold ${open ? 'text-accent' : 'text-fg'}`}>
                                {role.title}
                              </span>
                              {role.scope && (
                                <span className="mt-1 block text-sm leading-relaxed text-muted">{role.scope}</span>
                              )}
                            </span>
                          </span>
                        }
                      >
                        <ul className="space-y-2.5 pb-6 md:ml-[calc(9.5rem+1.5rem)]">
                          {role.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted">
                              <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </Expandable>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
