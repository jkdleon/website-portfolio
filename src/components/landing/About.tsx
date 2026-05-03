import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { personal } from '@/lib/constants/personal';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          01. About Me
        </p>
        <h2 className="text-3xl font-bold mb-8">Background</h2>
        <div className="space-y-4 text-muted leading-relaxed max-w-2xl">
          {personal.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
