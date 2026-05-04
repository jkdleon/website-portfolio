import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { experience } from '@/lib/constants/experience';

export default function Experience({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id ?? 'history'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="professionalHistory" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Where I&apos;ve operated.
        </h2>

        <div className="space-y-10">
          {experience.map((entry) => (
            <div
              key={`${entry.company}-${entry.title}`}
              className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8"
            >
              {/* Dates column */}
              <div className="shrink-0">
                <p className="font-mono text-[11px] text-subtle uppercase tracking-widest leading-relaxed">
                  {entry.startDate}
                  <br />
                  {entry.endDate}
                </p>
              </div>

              {/* Content column */}
              <div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {entry.title}
                </h3>
                <p className="font-mono text-xs text-accent mt-0.5 mb-4">
                  {entry.company} · {entry.location}
                </p>
                <ul className="space-y-2">
                  {entry.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-accent shrink-0 mt-1.5 text-[10px]">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
