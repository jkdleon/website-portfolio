'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/lib/constants/projects';
import { Project } from '@/lib/constants/types';

export default function Projects({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const activePreview = projects[activeIndex ?? 0] ?? projects[0];
  const hasPreviewIntent = activeIndex !== null;

  return (
    <SectionWrapper id={id ?? 'projects'}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 md:mb-16">
          <div>
            <SectionLabel label="selected work" />
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-none">
              Projects
            </h2>
          </div>
        </div>

        <div
          onPointerLeave={() => setActiveIndex(null)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setActiveIndex(null);
            }
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start"
        >
          <div className="border-t border-border-strong">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              const projectNumber = String(index + 1).padStart(2, '0');
              const href = project.caseStudyHref ?? project.link;

              return (
                <article
                  key={project.title}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocusCapture={() => setActiveIndex(index)}
                  className="group border-b border-border transition-colors duration-150 hover:border-accent/60 focus-within:border-accent/60"
                >
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    aria-expanded={isActive}
                    aria-controls={`project-peek-${index}`}
                    className="w-full text-left grid gap-5 py-7 md:grid-cols-[4rem_minmax(0,1fr)_7.5rem] md:gap-6"
                  >
                    <span className="gutter-num pt-1">{projectNumber}</span>

                    <span className="min-w-0">
                      {project.category && (
                        <span className="chip-mono mb-4">{project.category}</span>
                      )}
                      <span
                        className={`block text-2xl md:text-4xl font-semibold tracking-tight leading-tight transition-colors duration-150 group-hover:text-accent group-focus-within:text-accent ${
                          isActive ? 'text-accent' : 'text-foreground'
                        }`}
                      >
                        {project.title}
                      </span>
                      <span className="block mt-3 text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                        {project.description}
                      </span>
                    </span>

                    <span
                      className={`hidden md:flex items-center justify-end gap-2 self-center font-mono text-[11px] tracking-widest uppercase transition-all duration-150 group-hover:translate-x-1 group-hover:text-accent group-focus-within:translate-x-1 group-focus-within:text-accent ${
                        isActive ? 'translate-x-1 text-accent' : 'text-subtle'
                      }`}
                    >
                      Explore
                      <span aria-hidden="true">-&gt;</span>
                    </span>
                  </button>

                  <div
                    id={`project-peek-${index}`}
                    aria-hidden={!isActive}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 md:ml-[5.5rem]">
                        <div className="grid gap-5 rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_auto]">
                          <div>
                            {project.challenge && (
                              <>
                                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">
                                  Quick Brief
                                </p>
                                <p className="text-muted text-sm leading-relaxed max-w-2xl">
                                  {project.challenge}
                                </p>
                              </>
                            )}
                          </div>

                          {project.tools.length > 0 && (
                            <div className="md:max-w-[17rem]">
                              <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">
                                Tech Stack
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tools.slice(0, 5).map((tool) => (
                                  <span key={tool} className="chip pointer-events-none">
                                    {tool}
                                  </span>
                                ))}
                                {project.tools.length > 5 && (
                                  <span className="chip pointer-events-none">
                                    +{project.tools.length - 5}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          {href && (
                            <span className="md:col-span-2 font-mono text-[11px] tracking-widest uppercase text-subtle">
                              Click to read the case study
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside
            aria-hidden={!hasPreviewIntent}
            className={`lg:sticky lg:top-24 rounded-lg border border-border-strong bg-surface/85 overflow-hidden shadow-[0_24px_90px_-50px_rgba(56,189,248,0.75)] backdrop-blur-sm transition-all duration-300 ease-out ${
              hasPreviewIntent
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="font-mono text-[11px] text-muted tracking-widest uppercase">
                Case File
              </p>
              <p className="gutter-num">
                {String((activeIndex ?? 0) + 1).padStart(2, '0')} /{' '}
                {String(projects.length).padStart(2, '0')}
              </p>
            </div>
            <div className="p-5 md:p-6">
              {activePreview?.category && (
                <span className="chip-mono mb-5">{activePreview.category}</span>
              )}
              <h3 className="text-2xl font-semibold tracking-tight text-foreground leading-tight mb-4">
                {activePreview?.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {activePreview?.solution ?? activePreview?.description}
              </p>
              {activePreview?.businessImpact && (
                <div className="border-l-2 border-accent pl-4 mb-6">
                  <p className="text-foreground text-sm leading-relaxed">
                    {activePreview.businessImpact}
                  </p>
                </div>
              )}
              <button
                type="button"
                tabIndex={hasPreviewIntent ? 0 : -1}
                onClick={() => setActiveProject(activePreview)}
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-4 py-2.5 font-mono text-[11px] tracking-widest uppercase text-accent transition-colors hover:bg-accent hover:text-background"
              >
                View Case Study
                <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </aside>
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
  const href = project.caseStudyHref ?? project.link;

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
      <div className="relative w-full max-w-3xl max-h-[82vh] overflow-y-auto rounded-lg border border-border bg-surface shadow-2xl">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} details`}
          className="absolute top-5 right-5 w-8 h-8 inline-flex items-center justify-center rounded-full text-subtle hover:text-foreground hover:bg-border/40 transition-colors"
        >
          X
        </button>

        <div className="p-6 md:p-9">
          {project.category && (
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4">
              {project.category}
            </p>
          )}
          <h3
            id="modal-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-8 pr-10"
          >
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
            <div className="mb-8">
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
            <div className="rounded-lg border border-border bg-background/60 p-6 mb-8">
              <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
                Impact
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {project.businessImpact}
              </p>
            </div>
          )}

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase text-background transition-opacity hover:opacity-90"
            >
              {project.linkLabel || 'View Project'}
              <span aria-hidden="true">-&gt;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
