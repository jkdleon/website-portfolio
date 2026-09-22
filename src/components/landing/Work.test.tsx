import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Work } from '@/components/landing/Work';

describe('Work', () => {
  it('renders the full Snoonu title and its scope line', () => {
    render(<Work id="work" />);
    expect(screen.getByText('IT Executive (Infrastructure & Operations)')).toBeInTheDocument();
    expect(screen.getByText(/Hands-on infrastructure and operations role/)).toBeInTheDocument();
  });

  it('opens the first role by default and only one at a time', async () => {
    render(<Work id="work" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true');
  });
});
