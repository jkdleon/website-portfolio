import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StatTile } from '@/components/ui/StatTile';

describe('StatTile', () => {
  it('renders the display string verbatim when given', () => {
    render(<StatTile value={60} display="50–60" label="client companies" />);
    expect(screen.getByText('50–60')).toBeInTheDocument();
    expect(screen.getByText('client companies')).toBeInTheDocument();
  });

  it('renders the final value when IntersectionObserver is unavailable', () => {
    render(<StatTile value={8} label="years in infra" />);
    expect(screen.getByText('8')).toBeInTheDocument();
  });
});
