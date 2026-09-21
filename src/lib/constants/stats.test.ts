import { describe, expect, it } from 'vitest';

import { certifications } from '@/lib/constants/certifications';
import { stats } from '@/lib/constants/stats';

describe('stats', () => {
  it('has four tiles', () => {
    expect(stats).toHaveLength(4);
  });

  it('derives the certification count from the certifications list', () => {
    const certs = stats.find((s) => s.label === 'certifications');
    expect(certs?.value).toBe(certifications.filter((c) => !c.expired).length);
  });
});
