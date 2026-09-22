import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/ui/NodeMesh', () => ({ NodeMesh: () => null }));
vi.mock('next/image', () => ({ default: () => null }));

import Hero from '@/components/landing/Hero';

describe('Hero', () => {
  it('shows role, name and the CV/LinkedIn calls to action', () => {
    render(<Hero id="overview" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('James Kyle De Leon');
    expect(screen.getByText('Cloud & Network Infrastructure Engineer')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/cv.pdf');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/james-kyle-de-leon'
    );
  });

  it('renders the four stat tiles', () => {
    render(<Hero id="overview" />);
    expect(screen.getByText('years in infra')).toBeInTheDocument();
    expect(screen.getByText('50–60')).toBeInTheDocument();
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('certifications')).toBeInTheDocument();
  });
});
