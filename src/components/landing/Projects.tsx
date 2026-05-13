'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/lib/constants/projects';
import { Project } from '@/lib/constants/types';

export default function Projects({ id }: { id?: string }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  if (projects.length === 0) return null;

  return (
    <SectionWrapper id={id ?? 'projects'}>
      <div className="max-w-6xl mx-auto px-5">
        <div
          className={`transition-opacity duration-300 ${
            hoverIndex !== null ? 'opacity-35' : 'opacity-100'
          }`}
        >
          <div className="flex justify-center">
            <SectionLabel label="selected work" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-center">
          Projects
          </h2>
          <p className="text-muted text-sm md:text-base mt-4 mb-14 max-w-3xl mx-auto text-center">
            A few projects that highlight how I approach problems end-to-end.
          </p>
        </div>

        <div className="space-y-7 md:space-y-10">
          {projects.map((project, i) => {
            const isHovered = hoverIndex === i;
            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProject(project)}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onFocus={() => setHoverIndex(i)}
                onBlur={() => setHoverIndex(null)}
                className={`group block text-left rounded-3xl border overflow-hidden bg-surface/70 backdrop-blur-sm ${
                  isHovered
                    ? 'w-full border-accent shadow-[0_28px_90px_-36px_rgba(56,189,248,0.55)] transition-[width,border-color,box-shadow,transform] duration-300 ease-out md:-translate-x-6'
                    : 'w-full md:w-[82%] border-border transition-[border-color,box-shadow] duration-150'
                }`}
              >
                <div
                  className="grid overflow-hidden"
                  style={{
                    gridTemplateColumns: isHovered
                      ? 'minmax(0, 55fr) minmax(min(280px, 45vw), 45fr)'
                      : 'minmax(0, 1fr) minmax(0, 0fr)',
                    transition: isHovered
                      ? 'grid-template-columns 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      : 'none',
                  }}
                >
                  <div className="flex flex-col min-h-[300px] p-6 md:p-10">
                    <div>
                      {project.category && (
                        <span className="chip-mono">{project.category}</span>
                      )}
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight max-w-xl">
                          {project.title}
                        </h3>
                        <div
                          className="grid overflow-hidden"
                          style={{
                            gridTemplateRows: isHovered ? '1fr' : '0fr',
                            transition: isHovered
                              ? 'grid-template-rows 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                              : 'none',
                          }}
                        >
                          <div className="overflow-hidden">
                            <p className="mt-3 text-muted text-sm md:text-base leading-relaxed max-w-md">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-end gap-3 font-mono text-[11px] tracking-widest uppercase transition-opacity duration-300 ${
                        isHovered ? 'opacity-100 text-accent' : 'opacity-100 text-subtle'
                      }`}
                    >
                      Explore
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-opacity ${
                      isHovered ? 'opacity-100 duration-300' : 'opacity-0 duration-0'
                    }`}
                  >
                    <div className="h-full min-w-0 p-6 md:p-10 border-l border-border bg-background/35 flex flex-col gap-6">
                      {project.challenge && (
                        <div>
                          <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4">
                            ◇ Challenge
                          </p>
                          <p className="text-muted text-sm md:text-base leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                      )}
                      {project.tools.length > 0 && (
                        <div>
                          <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4">
                            ◇ Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <span key={tool} className="chip pointer-events-none">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent text-background font-mono text-[11px] tracking-widest uppercase">
                          View Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </SectionWrapper>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:py-16"
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl max-h-[78vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} details`}
          className="absolute top-5 right-5 w-8 h-8 inline-flex items-center justify-center rounded-full text-subtle hover:text-foreground hover:bg-border/40 transition-colors"
        >
          ×
        </button>
        <div className="p-6 md:p-9">
          {project.category && (
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4 text-center">
              ◇ {project.category}
            </p>
          )}
          <h3 id="modal-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-center mb-8">
            {project.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-7 md:gap-9 mb-8">
            {project.challenge && (
              <div>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
                  The Challenge
                </p>
                <p className="text-muted text-sm leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
                  The Solution
                </p>
                <p className="text-muted text-sm leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
          {project.tools.length > 0 && (
            <div className="mb-10">
              <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
                Tools &amp; Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="chip pointer-events-none">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.businessImpact && (
            <div className="rounded-xl border border-border bg-background/60 p-6 mb-8">
              <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
                ◇ Impact
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {project.businessImpact}
              </p>
            </div>
          )}
          {(project.caseStudyHref ?? project.link) && (
            <div className="flex flex-wrap gap-3">
              <a
                href={project.caseStudyHref ?? project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-[11px] tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                {project.linkLabel} →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
