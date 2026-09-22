import { StatusTone } from '@/lib/constants/types';

const TONE_CLASS: Record<StatusTone, string> = {
  success: 'text-ok border-ok/30',
  pending: 'text-warn border-warn/30',
  neutral: 'text-muted border-line-strong',
};

export function StatusChip({ label, tone }: { label: string; tone: StatusTone }) {
  return (
    <span
      data-tone={tone}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-[4px] border px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] ${TONE_CLASS[tone]}`}
    >
      <span aria-hidden="true">●</span>
      {label}
    </span>
  );
}
