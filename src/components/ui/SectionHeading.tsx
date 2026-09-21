import { MonoLabel } from '@/components/ui/MonoLabel';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  id?: string;
}

export function SectionHeading({ index, label, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-10">
      <MonoLabel as="p" tone="accent" className="mb-3">
        {index} · {label}
      </MonoLabel>
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
