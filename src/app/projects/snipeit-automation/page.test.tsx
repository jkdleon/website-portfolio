import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SnipeItAutomationPage from '@/app/projects/snipeit-automation/page';
import PrivacyPage from '@/app/projects/snipeit-automation/privacy/page';

describe('Snipe-IT automation project page', () => {
  it('shows the project title, its in-progress status and a way back', () => {
    render(<SnipeItAutomationPage />);
    expect(screen.getByRole('heading', { level: 1, name: /snipe-it asset agreement automation/i })).toBeInTheDocument();
    expect(screen.getAllByText('in progress').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '/');
  });

  it('links to the repository and the privacy policy', () => {
    render(<SnipeItAutomationPage />);
    expect(screen.getByRole('link', { name: /view on github/i })).toHaveAttribute(
      'href',
      'https://github.com/jkdleon/snipeit-n8n-automation',
    );
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/projects/snipeit-automation/privacy',
    );
  });
});

describe('Snipe-IT automation privacy policy', () => {
  it('names the app, states Limited Use and explains how to remove access', () => {
    render(<PrivacyPage />);
    expect(screen.getByRole('heading', { level: 1, name: /snipe-it asset automation/i })).toBeInTheDocument();
    expect(screen.getByText(/limited use requirements/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /myaccount\.google\.com\/permissions/i })).toHaveAttribute(
      'href',
      'https://myaccount.google.com/permissions',
    );
  });

  it('links back to the project page it belongs to', () => {
    render(<PrivacyPage />);
    expect(screen.getByRole('link', { name: /snipe-it asset agreement automation/i })).toHaveAttribute(
      'href',
      '/projects/snipeit-automation',
    );
  });
});
