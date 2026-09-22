import { MonoLabel } from '@/components/ui/MonoLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personal } from '@/lib/constants/personal';

export function Summary({ id }: { id?: string }) {
  return (
    <section id={id ?? 'summary'} aria-labelledby="summary-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="01" label="summary" title="Operations discipline, network depth, cloud trajectory." id="summary-title" />
        <div className="max-w-[68ch] space-y-5">
          {personal.bio.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted md:text-[17px]">
              {paragraph}
            </p>
          ))}
        </div>
        <MonoLabel as="p" tone="accent" className="mt-8">
          currently · {personal.currently}
        </MonoLabel>
      </div>
    </section>
  );
}
