import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { experience } from '@/lib/constants/experience';

export default function Experience() {
  const total = experience.length;

  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="02"
          label="professionalHistory"
          title="Where I've operated."
          kicker="Reverse-chronological. Each entry is a real environment with real outages, audits, and rollouts behind it."
        />

        <ol className="space-y-10">
          {experience.map((entry, i) => {
            const num = String(total - i).padStart(2, '0');
            return (
              <li
                key={`${entry.company}-${entry.title}`}
                className="grid grid-cols-[auto_1fr] gap-5 md:gap-8"
              >
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[11px] tracking-widest text-subtle">
                    {num}
                  </span>
                  <span className="mt-2 w-px flex-1 bg-border" />
                </div>

                <div className="border border-border rounded-lg bg-surface p-5 md:p-6 hover:border-border-strong transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                      {entry.company}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-subtle whitespace-nowrap">
                      {entry.startDate} – {entry.endDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-mono text-xs text-accent">{entry.title}</span>
                    <span className="text-subtle">·</span>
                    <span className="chip">{entry.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted text-sm flex gap-3 leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0 text-[10px]">▮</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionWrapper>
  );
}
