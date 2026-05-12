import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { personal } from '@/lib/constants/personal';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <SectionLabel label="let's chat" />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-mono text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Send Email
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
