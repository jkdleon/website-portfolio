import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { certifications } from '@/lib/constants/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="04"
          label="verifiedCredentials"
          title="Certifications on record."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <article
              key={cert.name}
              className="lift relative border border-border rounded-lg bg-surface p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-solid pointer-events-none">{cert.issuer}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent flex items-center gap-1">
                  <span aria-hidden="true">✓</span> Verified
                </span>
              </div>
              <p className="font-medium text-sm text-foreground leading-snug pr-2">
                {cert.name}
              </p>
              <span className="absolute bottom-3 right-4 font-mono text-[10px] text-subtle">
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
