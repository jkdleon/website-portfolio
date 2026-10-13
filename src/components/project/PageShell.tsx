import Link from 'next/link';
import { ReactNode } from 'react';

import Footer from '@/components/landing/Footer';

const BACK_LINK =
  'focus-ring inline-flex h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent';

/** Layout for pages outside the one-page landing: a way back, the content, the footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-14 max-w-content items-center px-5">
          <Link href="/" className={BACK_LINK}>
            <span aria-hidden="true">←</span> Portfolio
          </Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-content px-5 py-12 md:py-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
