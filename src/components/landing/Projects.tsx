'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/lib/constants/projects';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (projects.length === 0) return null;

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="05"
          label="selectedWork"
          title="Things I've built."
          kicker="A curated list. Click any entry to expand the details."
        />

        <ol className="border-t border-border">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={project.title} className="border-b border-border">
                <button
                  className="w-full text-left py-6 group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-start">
                    <span className="font-mono text-sm text-subtle pt-1 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
                          isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="chip pointer-events-none">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      className={`mt-1 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors flex items-center gap-1 ${
                        isOpen ? 'text-accent' : 'text-subtle group-hover:text-accent'
                      }`}
                    >
                      {isOpen ? 'Close' : 'Explore'}
                      <span
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-10 md:pl-14 border-t border-border pt-5">
                      <p className="text-muted leading-relaxed mb-5 max-w-2xl">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
                      >
                        {project.linkLabel} →
                      </a>
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
