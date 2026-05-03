import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { projects } from '@/lib/constants/projects';

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <SectionWrapper id="projects">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          05. Projects
        </p>
        <h2 className="text-3xl font-bold mb-10">Things I&apos;ve Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-6 hover:border-accent transition-colors flex flex-col"
            >
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-muted text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent hover:underline"
              >
                {project.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
