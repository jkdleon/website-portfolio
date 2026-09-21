import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CareerTopology } from '@/components/landing/CareerTopology';
import { topologyNodes } from '@/lib/constants/topology';

describe('CareerTopology', () => {
  it('renders one focusable node per topology entry with an accessible name', () => {
    const { container } = render(<CareerTopology />);
    const nodes = container.querySelectorAll('g[tabindex="0"]');
    expect(nodes).toHaveLength(topologyNodes.length);
    nodes.forEach((node) => expect(node.getAttribute('aria-label')).toBeTruthy());
    expect(container.querySelector('g[aria-label^="Doha"]')).toBeInTheDocument();
  });

  it('shows the node note in the tooltip on hover', async () => {
    const { container } = render(<CareerTopology />);
    const doha = container.querySelector('g[aria-label^="Doha"]');
    await userEvent.hover(doha!);
    expect(screen.getByRole('tooltip')).toHaveTextContent(/Snoonu/);
  });
});
