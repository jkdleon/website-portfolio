import { certifications } from './certifications';
import { Stat } from './types';

export const stats: Stat[] = [
  { value: 8, label: 'years in infra' },
  { value: 60, display: '50–60', label: 'client companies' },
  { value: 500, display: '500+', label: 'endpoints managed' },
  { value: certifications.length, label: 'certifications' },
];
