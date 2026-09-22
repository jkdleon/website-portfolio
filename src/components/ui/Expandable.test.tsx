import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Expandable } from '@/components/ui/Expandable';

describe('Expandable', () => {
  it('wires the button to the region with aria attributes', () => {
    render(
      <Expandable id="r1" open={false} onToggle={() => {}} summary="Title">
        <p>Body</p>
      </Expandable>
    );
    const button = screen.getByRole('button', { name: /title/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'r1');
    expect(document.getElementById('r1')).toHaveAttribute('aria-hidden', 'true');
  });

  it('exposes the region when open', () => {
    render(
      <Expandable id="r2" open onToggle={() => {}} summary="Title">
        <p>Body</p>
      </Expandable>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('r2')).toHaveAttribute('aria-hidden', 'false');
  });

  it('calls onToggle when the summary is clicked', async () => {
    const onToggle = vi.fn();
    render(
      <Expandable id="r3" open={false} onToggle={onToggle} summary="Title">
        <p>Body</p>
      </Expandable>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
