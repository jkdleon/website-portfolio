interface SectionLabelProps {
  index: string;
  label: string;
  title: string;
  kicker?: string;
}

export function SectionLabel({ index, label, title, kicker }: SectionLabelProps) {
  return (
    <header className="mb-10">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="gutter-num text-xs">{`// ${index}`}</span>
        <span className="font-mono text-xs text-accent label-block tracking-wide">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {kicker && (
        <p className="mt-3 text-muted max-w-2xl leading-relaxed">{kicker}</p>
      )}
    </header>
  );
}
