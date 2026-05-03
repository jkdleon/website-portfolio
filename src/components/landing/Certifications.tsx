import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { certifications } from '@/lib/constants/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          04. Certifications
        </p>
        <h2 className="text-3xl font-bold mb-10">Credentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-border rounded-lg p-5 hover:border-accent transition-colors"
            >
              <p className="font-mono text-xs text-accent mb-2 uppercase tracking-wider">
                {cert.issuer}
              </p>
              <p className="font-medium text-sm text-foreground">{cert.name}</p>
              {cert.year && (
                <p className="font-mono text-xs text-muted mt-2">{cert.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
