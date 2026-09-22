import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TopBar } from '@/components/ui/TopBar';

describe('TopBar', () => {
  it('links to the five sections', () => {
    render(<TopBar />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    const hrefs = Array.from(nav.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['#overview', '#work', '#projects', '#stack', '#contact']);
  });

  it('shows the status chip text', () => {
    render(<TopBar />);
    expect(screen.getByText(/Doha, QA/)).toBeInTheDocument();
  });

  it('toggles the mobile menu with aria-expanded', async () => {
    render(<TopBar />);
    const toggle = screen.getByRole('button', { name: /menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('topbar-menu')).not.toHaveAttribute('hidden');
  });
});
