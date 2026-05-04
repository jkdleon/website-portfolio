import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { personal } from '@/lib/constants/personal';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <SectionLabel label="letsChat" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Working on something interesting?
        </h2>
        <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
          Cloud migration, network refresh, or anything that needs an operator&apos;s eye — my inbox
          is open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-mono text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Send Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
