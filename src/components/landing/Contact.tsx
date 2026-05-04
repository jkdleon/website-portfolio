import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { personal } from '@/lib/constants/personal';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel
          index="06"
          label="letsChat"
          title="Working on something interesting?"
          kicker="Cloud migration, network refresh, or anything that needs an operator's eye — my inbox is open."
        />

        <div className="border border-border rounded-lg bg-surface p-6 md:p-8">
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-lg md:text-2xl text-accent hover:underline break-all"
          >
            {personal.email}
          </a>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Send Email →
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
            <a href="/resume.pdf" download className="chip">
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
