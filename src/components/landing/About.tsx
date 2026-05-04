import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StatCard } from '@/components/ui/StatCard';
import { experience } from '@/lib/constants/experience';
import { certifications } from '@/lib/constants/certifications';
import { skills } from '@/lib/constants/skills';

const totalSkills = skills.reduce((sum, cat) => sum + cat.skills.length, 0);

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="processExcellence" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Operations discipline, network depth, cloud trajectory.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={7} suffix="+" label="Years Experience" />
          <StatCard value={experience.length} suffix="" label="Roles Held" />
          <StatCard value={certifications.length} suffix="" label="Certifications" />
          <StatCard value={totalSkills} suffix="+" label="Skills" />
        </div>
      </div>
    </SectionWrapper>
  );
}
