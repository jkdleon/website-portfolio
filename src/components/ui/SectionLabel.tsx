interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6 label-block">
      {`>_${label}`}
    </p>
  );
}
