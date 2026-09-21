import { describe, expect, it } from 'vitest';

import { projects } from '@/lib/constants/projects';

describe('projects', () => {
  it('lists exactly eight projects', () => {
    expect(projects).toHaveLength(8);
  });

  it('gives every project a narrative and a status with text', () => {
    for (const project of projects) {
      expect(project.narrative.length).toBeGreaterThan(40);
      expect(project.status.label.length).toBeGreaterThan(0);
      expect(['success', 'pending', 'neutral']).toContain(project.status.tone);
    }
  });

  it('marks the Terraform stack as pending, not deployed', () => {
    const terraform = projects.find((p) => p.title.includes('Terraform'));
    expect(terraform?.status.tone).toBe('pending');
    expect(terraform?.status.label).toMatch(/pending/i);
  });
});
