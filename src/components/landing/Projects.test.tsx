import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Projects from '@/components/landing/Projects';
import { projects } from '@/lib/constants/projects';

describe('Projects', () => {
  it('lists all projects closed', () => {
    render(<Projects id="projects" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(projects.length);
    for (const b of buttons) expect(b).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens one record at a time and shows its status text', async () => {
    render(<Projects id="projects" />);
    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[1]);
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true');
    // The summary row also carries a status chip (CSS-hidden on phones), so scope the
    // assertion to the expanded region.
    const region = document.getElementById('project-1') as HTMLElement;
    expect(within(region).getByText(/authored · deployment pending/)).toBeInTheDocument();
    await userEvent.click(buttons[0]);
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
  });
});
