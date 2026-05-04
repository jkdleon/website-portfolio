import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { skills } from '@/lib/constants/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="03"
          label="technicalCommandCenter"
          title="The stack I run with."
          kicker="Grouped by domain. Heavier on networking and observability — sharpening on the cloud and DevOps side."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((category) => (
            <div
              key={category.name}
              className="lift border border-border rounded-lg bg-surface p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  {category.name}
                </h3>
                <span className="font-mono text-[10px] text-accent">
                  +{category.skills.length}
                </span>
              </div>
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
