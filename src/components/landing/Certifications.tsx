import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { certifications } from '@/lib/constants/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="verifiedCredentials" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Certifications on record.
        </h2>

        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="lift border border-border rounded-xl bg-surface px-6 py-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-medium text-foreground">{cert.name}</p>
                <p className="font-mono text-xs text-subtle mt-1">{cert.issuer}</p>
              </div>
              <span className="chip-authorized shrink-0">Authorized</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
