import { SectionHeading } from '@/components/ui/SectionHeading';
import { personal } from '@/lib/constants/personal';

const LINK_CLASS =
  'focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-line-strong px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition-colors hover:border-accent hover:text-accent';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="06" label="contact" title="Let's talk." id="contact-title" />
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${personal.email}`} className={`${LINK_CLASS} bg-fg text-bg hover:border-fg hover:text-bg hover:opacity-85`}>
            Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
