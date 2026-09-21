import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Stack } from '@/components/landing/Stack';
import { skills } from '@/lib/constants/skills';

describe('Stack', () => {
  it('shows every group and every skill without any tabs', () => {
    render(<Stack id="stack" />);
    for (const group of skills) {
      expect(screen.getByText(group.name)).toBeInTheDocument();
      for (const skill of group.skills) expect(screen.getByText(skill)).toBeInTheDocument();
    }
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });
});
