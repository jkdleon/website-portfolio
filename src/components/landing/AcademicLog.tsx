import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { education } from '@/lib/constants/education';

export default function AcademicLog({ id }: { id?: string }) {
  if (education.length === 0) return null;

  return (
    <SectionWrapper id={id ?? 'education'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="academicLog" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Academic background.
        </h2>

        <div className="space-y-8">
          {education.map((entry) => (
            <div
              key={`${entry.institution}-${entry.degree}`}
              className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8"
            >
              <p className="font-mono text-[11px] text-subtle uppercase tracking-widest">
                {entry.dates}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{entry.degree}</h3>
                <p className="font-mono text-xs text-accent mt-0.5">{entry.institution}</p>
                {entry.details && (
                  <ul className="mt-3 space-y-1">
                    {entry.details.map((d, i) => (
                      <li key={i} className="text-muted text-sm flex gap-2">
                        <span className="text-accent shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
