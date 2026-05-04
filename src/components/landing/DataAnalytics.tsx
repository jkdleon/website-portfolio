import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { skills } from '@/lib/constants/skills';

const targetCategories = ['Monitoring', 'Security Tools'];

export default function DataAnalytics() {
  const categories = skills.filter((c) => targetCategories.includes(c.name));

  return (
    <SectionWrapper id="data-analytics">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="dataAndAnalytics" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Observability &amp; security tooling.
        </h2>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.name}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle mb-3">
                {category.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
