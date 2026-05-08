import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/lib/constants/projects';

export default function FeaturedVenture({ id }: { id?: string }) {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <SectionWrapper id={id ?? 'venture'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="featuredVenture" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Featured project.
        </h2>

        <div className="lift border border-border rounded-2xl bg-surface p-8 md:p-10">
          {featured.category && (
            <span className="chip-mono mb-4 inline-block">{featured.category}</span>
          )}
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-4">
            {featured.title}
          </h3>
          <p className="text-muted leading-relaxed max-w-2xl mb-6">{featured.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {featured.tools.map((tool) => (
              <span key={tool} className="chip pointer-events-none">
                {tool}
              </span>
            ))}
          </div>

          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-mono text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            {featured.linkLabel} →
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
