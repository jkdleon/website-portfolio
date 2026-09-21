import { SectionHeading } from '@/components/ui/SectionHeading';
import { personal } from '@/lib/constants/personal';

const LINK_BASE =
  'focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors';
const LINK_SOLID = `${LINK_BASE} bg-fg text-bg hover:opacity-85`;
const LINK_GHOST = `${LINK_BASE} border border-line-strong text-fg hover:border-accent hover:text-accent`;

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="06" label="contact" title="Let's talk." id="contact-title" />
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${personal.email}`} className={LINK_SOLID}>
            Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={LINK_GHOST}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={LINK_GHOST}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
