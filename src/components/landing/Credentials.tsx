import { MonoLabel } from '@/components/ui/MonoLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusChip } from '@/components/ui/StatusChip';
import { certifications } from '@/lib/constants/certifications';
import { education } from '@/lib/constants/education';

export function Credentials({ id }: { id?: string }) {
  return (
    <section id={id ?? 'credentials'} aria-labelledby="credentials-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="05" label="credentials" title="Certifications & education" id="credentials-title" />

        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div>
            <MonoLabel as="h3" tone="accent" className="mb-4">
              certifications
            </MonoLabel>
            <ul className="divide-y divide-line border-y border-line">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
                  <div className="min-w-0">
                    <p className="font-medium text-fg">{cert.name}</p>
                    <MonoLabel as="p" className="mt-1">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ''}
                    </MonoLabel>
                  </div>
                  {cert.expired ? (
                    <StatusChip label="expired" tone="neutral" />
                  ) : (
                    <StatusChip label="active" tone="success" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <MonoLabel as="h3" tone="accent" className="mb-4">
              education
            </MonoLabel>
            <ul className="divide-y divide-line border-y border-line">
              {education.map((entry) => (
                <li key={entry.degree} className="py-4">
                  <MonoLabel as="p" className="mb-1">
                    {entry.dates}
                  </MonoLabel>
                  <p className="font-medium text-fg">{entry.degree}</p>
                  <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                  {entry.details?.map((detail) => (
                    <p key={detail} className="mt-2 text-sm leading-relaxed text-subtle">
                      {detail}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
