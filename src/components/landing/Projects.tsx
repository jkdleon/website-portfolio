'use client';

import { useState } from 'react';

import { Chip } from '@/components/ui/Chip';
import { Expandable } from '@/components/ui/Expandable';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusChip } from '@/components/ui/StatusChip';
import { projects } from '@/lib/constants/projects';

const total = String(projects.length).padStart(2, '0');

export default function Projects({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id ?? 'projects'} aria-labelledby="projects-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="03" label="change records" title="Projects" id="projects-title" />

        <div className="divide-y divide-line border-y border-line">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0');
            const open = openIndex === index;
            const meta = [project.category, project.year].filter(Boolean).join(' · ');
            return (
              <Expandable
                key={project.title}
                id={`project-${index}`}
                open={open}
                onToggle={() => setOpenIndex(open ? null : index)}
                summary={
                  <span className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-4 md:grid-cols-[2.5rem_minmax(0,1fr)_auto] md:items-center md:gap-6">
                    <MonoLabel as="span" className="pt-1 tabular-nums">
                      {number}
                    </MonoLabel>
                    <span className="min-w-0">
                      <span className={`block text-lg font-semibold tracking-tight ${open ? 'text-accent' : 'text-fg'}`}>
                        {project.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{project.description}</span>
                    </span>
                    <span className="hidden md:block">
                      <StatusChip label={project.status.label} tone={project.status.tone} />
                    </span>
                  </span>
                }
              >
                <div className="mb-6 rounded-[10px] border border-line bg-panel md:ml-[4rem]">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3">
                    <MonoLabel as="span">
                      {number} / {total}
                      {meta ? ` · ${meta}` : ''}
                    </MonoLabel>
                    <StatusChip label={project.status.label} tone={project.status.tone} />
                  </div>

                  <div className="px-5 py-5">
                    <p className="max-w-[70ch] text-[15px] leading-relaxed text-muted">{project.narrative}</p>

                    {project.businessImpact && (
                      <div className="mt-5 grid gap-2 border-t border-line pt-4 md:grid-cols-[5.5rem_minmax(0,1fr)]">
                        <MonoLabel as="span" className="pt-0.5">
                          result
                        </MonoLabel>
                        <p
                          className={`font-mono text-xs leading-relaxed ${
                            project.status.tone === 'success' ? 'text-ok' : 'text-muted'
                          }`}
                        >
                          {project.businessImpact}
                        </p>
                      </div>
                    )}

                    <div className="mt-4 grid gap-2 border-t border-line pt-4 md:grid-cols-[5.5rem_minmax(0,1fr)]">
                      <MonoLabel as="span" className="pt-0.5">
                        stack
                      </MonoLabel>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <Chip key={tool}>{tool}</Chip>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-5 inline-flex h-11 items-center gap-2 rounded-[6px] border border-line-strong px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition-colors hover:border-accent hover:text-accent"
                      >
                        {project.linkLabel || 'View project'} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </Expandable>
            );
          })}
        </div>
      </div>
    </section>
  );
}
