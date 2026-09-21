import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CareerTopology } from '@/components/landing/CareerTopology';
import { topologyNodes } from '@/lib/constants/topology';

describe('CareerTopology', () => {
  it('renders one focusable button per node with an accessible name', () => {
    render(<CareerTopology />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(topologyNodes.length);
    expect(screen.getByRole('button', { name: /Doha/ })).toBeInTheDocument();
  });

  it('shows the node note in the tooltip on hover', async () => {
    render(<CareerTopology />);
    const doha = screen.getByRole('button', { name: /Doha/ });
    await userEvent.hover(doha);
    expect(screen.getByRole('tooltip')).toHaveTextContent(/Snoonu/);
  });
});
