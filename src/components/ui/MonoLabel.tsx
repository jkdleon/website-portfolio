import { ReactNode } from 'react';

type MonoTone = 'subtle' | 'muted' | 'accent';

const TONE_CLASS: Record<MonoTone, string> = {
  subtle: 'text-subtle',
  muted: 'text-muted',
  accent: 'text-accent',
};

interface MonoLabelProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div' | 'h3';
  tone?: MonoTone;
}

export function MonoLabel({ children, className = '', as: Tag = 'span', tone = 'subtle' }: MonoLabelProps) {
  return <Tag className={`mono-label ${TONE_CLASS[tone]} ${className}`}>{children}</Tag>;
}
