import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Credentials } from '@/components/landing/Credentials';

describe('Credentials', () => {
  it('marks the CCNA and Fortinet NSE as expired and shows the NU degree', () => {
    render(<Credentials id="credentials" />);
    const ccna = screen.getByText('Cisco CCNA Routing & Switching').closest('li');
    expect(ccna).toHaveTextContent(/expired/i);
    const nse = screen.getByText('Fortinet NSE 1: Network Security Associate').closest('li');
    expect(nse).toHaveTextContent(/expired/i);
    expect(screen.getByText('Bachelor of Science, Electronics Engineering')).toBeInTheDocument();
  });
});
