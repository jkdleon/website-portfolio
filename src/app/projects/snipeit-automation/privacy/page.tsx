import type { Metadata } from 'next';
import Link from 'next/link';

import { PageShell } from '@/components/project/PageShell';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { personal } from '@/lib/constants/personal';

export const metadata: Metadata = {
  title: 'Privacy policy: Snipe-IT Asset Automation | James Kyle De Leon',
  description: 'How the Snipe-IT Asset Automation Google app uses Google Drive and Gmail data.',
};

const H2 = 'mt-10 font-display text-xl font-bold tracking-tight text-fg';
const P = 'mt-4 text-[15px] leading-relaxed text-muted';
const UL = 'mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted';
const A = 'focus-ring text-muted underline hover:text-accent';

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="max-w-[70ch]">
        <MonoLabel as="p" tone="accent" className="mb-3">
          privacy policy
        </MonoLabel>
        <h1 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
          Snipe-IT Asset Automation
        </h1>
        <p className="mt-3 font-mono text-xs text-subtle">Last updated: 14 October 2026</p>

        <p className={P}>
          “Snipe-IT Asset Automation” is a Google OAuth app used by one personal lab project,{' '}
          <Link href="/projects/snipeit-automation" className={A}>
            Snipe-IT asset agreement automation
          </Link>
          . It lets a self-hosted n8n instance work with the Google account of the project’s owner. It isn’t offered
          to the public, and the only account connected to it is the owner’s own.
        </p>

        <h2 className={H2}>What Google data the app uses</h2>
        <ul className={UL}>
          <li>
            <strong className="text-fg">Google Drive:</strong> creates a folder per asset inside one designated folder,
            looks up those folders, and uploads signed asset agreement PDFs into them.
          </li>
          <li>
            <strong className="text-fg">Gmail:</strong> sends notification emails to the IT team about rejected or
            unsigned agreements and workflow errors.
          </li>
        </ul>
        <p className={P}>
          The permissions Google asks for when n8n connects can be broader than this, because they’re set by n8n’s
          Google integrations. The workflows only perform the actions listed above.
        </p>

        <h2 className={H2}>How the data is handled</h2>
        <ul className={UL}>
          <li>Google data is used only to perform the actions above. It isn’t sold, shared with third parties, used for advertising, or used to train AI models.</li>
          <li>The sign-in tokens are stored encrypted in the self-hosted n8n instance, on a private server.</li>
          <li>Uploaded files stay in the owner’s Google Drive. n8n deletes its run history after 14 days.</li>
          <li>When the lab is retired, the n8n instance and its stored tokens are deleted.</li>
        </ul>
        <p className={P}>
          The use and transfer of information received from Google APIs adheres to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={A}
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 className={H2}>Removing access</h2>
        <p className={P}>
          Access can be removed at any time at{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className={A}>
            myaccount.google.com/permissions
          </a>
          .
        </p>

        <h2 className={H2}>Contact</h2>
        <p className={P}>
          Questions about this policy:{' '}
          <a href={`mailto:${personal.email}`} className={A}>
            {personal.email}
          </a>
          .
        </p>
      </article>
    </PageShell>
  );
}
