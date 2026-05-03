import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { skills } from '@/lib/constants/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          03. Skills
        </p>
        <h2 className="text-3xl font-bold mb-10">Technical Expertise</h2>
        <div className="space-y-6">
          {skills.map((category) => (
            <div key={category.name}>
              <h3 className="font-mono text-sm text-muted mb-3 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
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
