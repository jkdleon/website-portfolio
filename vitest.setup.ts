import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

import '@testing-library/jest-dom/vitest';

// vitest.config.ts doesn't set test.globals, so RTL's auto-cleanup (which
// only registers when it finds a global `afterEach`) never runs on its own;
// without this, DOM from earlier `it()` blocks in the same file accumulates.
afterEach(() => {
  cleanup();
});

// jsdom has no matchMedia; components read prefers-reduced-motion through it.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }),
});
