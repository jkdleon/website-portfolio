import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { experience } from '@/lib/constants/experience';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          02. Experience
        </p>
        <h2 className="text-3xl font-bold mb-10">Work History</h2>
        <div className="space-y-10">
          {experience.map((entry, i) => (
            <div key={i} className="border-l-2 border-border pl-6 relative">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <span className="font-mono text-sm text-muted whitespace-nowrap">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="font-mono text-sm text-accent mb-3">
                {entry.company} · {entry.location}
              </p>
              <ul className="space-y-2">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="text-muted text-sm flex gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
