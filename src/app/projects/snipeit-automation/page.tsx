import type { Metadata } from 'next';
import Link from 'next/link';

import { PageShell } from '@/components/project/PageShell';
import { Chip } from '@/components/ui/Chip';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { StatusChip } from '@/components/ui/StatusChip';

const REPO = 'https://github.com/jkdleon/snipeit-n8n-automation';
const CASE_STUDY = `${REPO}/blob/main/docs/case-study.md`;

export const metadata: Metadata = {
  title: 'Snipe-IT asset agreement automation | James Kyle De Leon',
  description:
    'Snipe-IT checkouts and check-ins trigger e-signature agreements through n8n and Documenso, archived to the asset record and Google Drive. Built on AWS.',
};

const STEPS = [
  'IT checks a laptop or phone out (or back in) in Snipe-IT, as they already do.',
  'n8n confirms the event against Snipe-IT’s own activity log, fills in the right agreement and sends it through Documenso: the employee signs first, then the IT admin who did the handover.',
  'Once both have signed, the PDF is attached to the asset in Snipe-IT and backed up to Google Drive, in a folder per asset.',
  'Rejections, agreements left unsigned and workflow failures reach IT by email. Snipe-IT is never changed automatically.',
];

const STACK = ['AWS EC2', 'RDS MariaDB', 'VPC', 'SSM', 'Docker Compose', 'Caddy', 'Snipe-IT', 'n8n', 'Documenso', 'Google Drive', 'Gmail', 'Terraform'];

const STATUS = [
  { phase: 'AWS infrastructure, built by hand in the console', state: 'done', tone: 'success' as const },
  { phase: 'Signing automation on n8n Cloud, secured with mutual TLS', state: 'done', tone: 'success' as const },
  { phase: 'Self-hosted n8n rebuild and comparison', state: 'done', tone: 'success' as const },
  { phase: 'Terraform rebuild of the infrastructure', state: 'in progress', tone: 'pending' as const },
];

const LINK_SOLID =
  'focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] bg-fg px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-bg transition-colors hover:opacity-85';
const LINK_GHOST =
  'focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-line-strong px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition-colors hover:border-accent hover:text-accent';

export default function SnipeItAutomationPage() {
  return (
    <PageShell>
      <article className="max-w-[70ch]">
        <MonoLabel as="p" tone="accent" className="mb-3">
          project · automation · infrastructure
        </MonoLabel>
        <h1 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
          Snipe-IT asset agreement automation
        </h1>
        <div className="mt-4">
          <StatusChip label="in progress" tone="pending" />
        </div>

        <p className="mt-6 text-[17px] leading-relaxed text-muted">
          When IT hands out or takes back a laptop, someone has to get an agreement signed and file it where an
          auditor can find it. That step is usually manual, and it’s the one that gets skipped. This project automates
          it end to end, from the checkout in Snipe-IT to a signed PDF on the asset record.
        </p>

        <section aria-labelledby="how-title" className="mt-10">
          <h2 id="how-title" className="font-display text-xl font-bold tracking-tight text-fg">
            How it works
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:font-mono marker:text-subtle">
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="security-title" className="mt-10">
          <h2 id="security-title" className="font-display text-xl font-bold tracking-tight text-fg">
            Built twice, compared
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            n8n Cloud has no fixed IP address, so an IP allowlist can’t protect Snipe-IT’s API. In the first version,
            the API had its own hostname that required mutual TLS: a client certificate signed by a private CA, plus a
            least-privilege API token. Every webhook is treated as a signal only and verified against Snipe-IT’s own
            records before anything is sent.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            I then rebuilt it with n8n self-hosted next to Snipe-IT and compared the two. The API calls never leave
            the server (Snipe-IT’s audit trail shows an internal address instead of a shared public IP), the API
            hostname is gone, only one webhook path is public, and it added no compute cost. Every system now runs on
            one business timezone, so agreement dates and signing times match the audit trail. The self-hosted
            version is the one the Terraform rebuild will codify.
          </p>
        </section>

        <section aria-labelledby="stack-title" className="mt-10">
          <h2 id="stack-title" className="font-display text-xl font-bold tracking-tight text-fg">
            Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {STACK.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
        </section>

        <section aria-labelledby="status-title" className="mt-10">
          <h2 id="status-title" className="font-display text-xl font-bold tracking-tight text-fg">
            Status
          </h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {STATUS.map((item) => (
              <li key={item.phase} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <span className="text-[15px] text-muted">{item.phase}</span>
                <StatusChip label={item.state} tone={item.tone} />
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={CASE_STUDY} target="_blank" rel="noopener noreferrer" className={LINK_SOLID}>
            Read the case study <span aria-hidden="true">↗</span>
          </a>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className={LINK_GHOST}>
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-subtle">
          This project uses a Google OAuth app to archive signed agreements to Google Drive and send notifications
          through Gmail. See its{' '}
          <Link href="/projects/snipeit-automation/privacy" className="focus-ring text-muted underline hover:text-accent">
            privacy policy
          </Link>
          .
        </p>
      </article>
    </PageShell>
  );
}
