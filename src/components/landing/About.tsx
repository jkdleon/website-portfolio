import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { personal } from '@/lib/constants/personal';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="01"
          label="processExcellence"
          title="Operations discipline, network depth, cloud trajectory."
        />

        <div className="grid md:grid-cols-[1fr_auto] gap-10">
          <div className="space-y-5 text-muted leading-relaxed max-w-2xl">
            {personal.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <aside className="md:w-64 border border-border rounded-lg bg-surface p-5 h-fit">
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle mb-3">
              focus areas
            </p>
            <ul className="space-y-2 font-mono text-xs">
              {[
                'Network engineering',
                'Cloud infrastructure',
                'CI/CD pipelines',
                'Container orchestration',
                'Infrastructure as code',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted">
                  <span className="text-accent">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </SectionWrapper>
  );
}
