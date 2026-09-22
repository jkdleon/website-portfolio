import { Chip } from '@/components/ui/Chip';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/lib/constants/skills';

export function Stack({ id }: { id?: string }) {
  return (
    <section id={id ?? 'stack'} aria-labelledby="stack-title" className="scroll-mt-14 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeading index="04" label="stack" title="Stack" id="stack-title" />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group) => (
            <div key={group.name} className="bg-panel p-5">
              <MonoLabel as="h3" tone="accent" className="mb-4">
                {group.name}
              </MonoLabel>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
