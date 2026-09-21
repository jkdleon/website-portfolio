import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Credentials } from '@/components/landing/Credentials';

describe('Credentials', () => {
  it('marks the CCNA as expired and shows the NU degree', () => {
    render(<Credentials id="credentials" />);
    const ccna = screen.getByText('Cisco CCNA Routing & Switching').closest('li');
    expect(ccna).toHaveTextContent(/expired/i);
    expect(screen.getByText('BSc Electronics & Communication Engineering')).toBeInTheDocument();
  });
});
