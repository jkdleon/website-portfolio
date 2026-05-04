import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/lib/constants/projects';

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="05"
          label="selectedWork"
          title="Things I've built."
          kicker="A curated list. Each entry shipped, ran, or taught me something."
        />

        <ol className="divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 py-7 group"
            >
              <span className="font-mono text-sm text-subtle pt-1 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-mono text-xs uppercase tracking-widest text-accent whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {project.linkLabel} →
              </a>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
