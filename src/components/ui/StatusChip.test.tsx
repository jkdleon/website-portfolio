import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StatusChip } from '@/components/ui/StatusChip';

describe('StatusChip', () => {
  it('always shows the label text alongside the tone', () => {
    render(<StatusChip label="authored · deployment pending" tone="pending" />);
    const chip = screen.getByText(/authored · deployment pending/);
    expect(chip.closest('[data-tone]')).toHaveAttribute('data-tone', 'pending');
  });
});
