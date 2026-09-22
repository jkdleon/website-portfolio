import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'ZKBioTime → Google Cloud migration',
    category: 'Cloud Migration · Snoonu',
    description:
      'Production attendance platform — 15 biometric terminals serving 500+ staff — migrated from on-premises to Google Cloud with zero downtime.',
    year: '2025',
    status: { label: 'zero downtime', tone: 'success' },
    narrative:
      'The attendance system every employee clocks into — 15 biometric terminals, 500+ staff — ran on an on-premises server and had to move to Google Cloud without interrupting attendance capture. I planned and executed the migration of the ZKBioTime server to Google Cloud and re-pointed all 15 terminals to the new environment, delivered as an assigned project alongside daily operations, with no loss of attendance data and no downtime for staff.',
    tools: ['Google Cloud', 'Compute Engine', 'ZKBioTime', 'Workload migration'],
    businessImpact:
      'Zero-downtime cutover of a production system used by 500+ staff, delivered on top of a full operational workload.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'AWS static-site infrastructure in Terraform',
    category: 'Infrastructure as Code · Personal',
    description:
      'Terraform stack for a static site on AWS — private S3 origin, CloudFront with Origin Access Control, ACM and Route 53 — with deploy scripts and GitHub Actions CI. Authored; AWS deployment pending.',
    year: '2026',
    status: { label: 'authored · deployment pending', tone: 'pending' },
    narrative:
      'I wanted the hosting for a static site defined as code rather than by hand: a private S3 bucket as the origin, CloudFront in front of it with Origin Access Control, TLS via ACM and DNS in Route 53. I wrote the Terraform for every component, Bash and PowerShell deployment scripts, and a GitHub Actions CI pipeline with branch protection on the repository. The stack is authored and in the repository; the AWS deployment is pending and the site is currently served from Vercel.',
    tools: [
      'Terraform',
      'AWS S3',
      'CloudFront',
      'ACM',
      'Route 53',
      'GitHub Actions',
      'Bash',
      'PowerShell',
    ],
    businessImpact:
      'Status: the Terraform is authored and in the repository; the AWS deployment is pending and the site is currently served from Vercel.',
    link: 'https://github.com/jkdleon/tumbatumba',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Core network refresh, onshore and offshore',
    category: 'Network Engineering · New Oriental Club88',
    description:
      'Replaced the Cisco core routers at the Hong Kong offshore edge and the Cisco core switches in the Philippines — a 30-minute change window with zero client downtime.',
    status: { label: 'zero client downtime', tone: 'success' },
    narrative:
      'The core routers at our Hong Kong edge and the core switches in the Philippines carried every client’s traffic over the international link — and both needed replacing. I documented the configurations and dependencies, wrote the cutover with a rehearsed rollback to the old hardware, and failed client traffic over to local ISPs before we touched the core, so clients stayed up regardless of how the change went. We ran it in a 30-minute low-traffic window from a checklist: one engineer executing, one on Zabbix and Cacti, me verifying and acting as the single escalation point for the vendor and the Hong Kong site.',
    tools: ['Cisco IOS', 'Change management', 'Rollback planning', 'Zabbix', 'Cacti'],
    businessImpact:
      'Completed inside the window with zero client downtime, no rollback and no incident tickets. The failover and rollback procedure was added to the department SOP.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Open-source NOC tooling stack',
    category: 'Network Operations · New Oriental Club88',
    description:
      'Built and ran the network operations team’s tooling on self-hosted Ubuntu servers: Zabbix, FastNetMon, Oxidized, NetBox and Snipe-IT.',
    year: '2021 – 2025',
    status: { label: 'ran in production', tone: 'success' },
    narrative:
      'The NOC needed monitoring, DDoS detection, configuration backup, an IPAM/DCIM source of truth and asset tracking — on a budget, after a commercial DDoS subscription had expired. On self-hosted Ubuntu servers I deployed and operated Zabbix for network monitoring, FastNetMon for DDoS detection (replacing the expired Blue Coat subscription), Oxidized for device configuration backup and versioning (LibreNMS as the inventory feed, later replaced by a CSV feed after latency issues), NetBox as the IPAM/DCIM source of truth, and Snipe-IT for asset management with bi-weekly backups, which I also trialled on AWS EC2.',
    tools: ['Ubuntu', 'Zabbix', 'FastNetMon', 'Oxidized', 'NetBox', 'Snipe-IT', 'LibreNMS'],
    businessImpact:
      'Moved the team from ticket-driven reaction to proactive detection of link, capacity and DDoS events, with versioned device configs and a single source of truth for IPs and assets.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Cloud-vs-on-premises monitoring evaluation',
    category: 'Cloud Evaluation · Snoonu',
    description:
      'Deployed Zabbix in the cloud under a cloud-first policy, tested it against the Pakistan office over an IPsec VPN, costed it, and recommended an on-premises server instead.',
    year: '2025',
    status: { label: 'report delivered', tone: 'neutral' },
    narrative:
      'Company policy favoured cloud-first, so the question was whether cloud-hosted monitoring of remote sites over a site-to-site VPN was the right call once running costs were counted. I deployed Zabbix in the cloud and proved it against the Pakistan office over an IPsec VPN, tracked the monthly running cost, and found it uneconomic. I recommended an on-premises server with only SNMP traffic crossing the VPN and delivered the finding as a written cost and recommendation report to the IT Manager.',
    tools: ['Zabbix', 'IPsec VPN', 'SNMP', 'Cost analysis'],
    businessImpact: 'Delivered as a written cost and recommendation report to the IT Manager.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'ITSM gap analysis',
    category: 'Service Management · Snoonu',
    description:
      'Solo project assessing the IT department’s processes against SLA and ITSM requirements, with an action plan to close the gaps.',
    year: '2025 – 2026',
    status: { label: '~90% at departure', tone: 'neutral' },
    narrative:
      'The department had no formal picture of where its incident, request and change handling fell short of SLA and ITSM expectations. As a solo project I assessed the current processes against those requirements, documented the gaps and produced the action plan. The analysis and plan were delivered — roughly 90% complete at my departure, with the final sign-off meeting pending.',
    tools: ['ITIL', 'Jira Service Management', 'SLA reporting'],
    businessImpact:
      'Analysis and action plan delivered — roughly 90% complete at departure, with the final sign-off meeting pending.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Snoomart dark-store IT refresh',
    category: 'IT Operations · Snoonu',
    description:
      'Requirements gathering, asset audit and bandwidth right-sizing across the Snoomart dark stores.',
    year: '2025',
    status: { label: 'delivered', tone: 'success' },
    narrative:
      'Store managers across the Snoomart dark stores reported slow connectivity and ageing equipment. I gathered requirements with the store managers, audited the assets for replacement or upgrade, verified the reported slowness rather than taking it on faith, and right-sized each store’s internet bandwidth.',
    tools: ['Requirements gathering', 'Asset audit', 'Bandwidth planning'],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Personal portfolio website',
    category: 'Web · Personal',
    description:
      'A dark-first single-page portfolio built with Next.js and Tailwind CSS v4 — the site you are looking at right now.',
    year: '2026',
    status: { label: 'live', tone: 'success' },
    narrative:
      'I wanted a portfolio that felt distinct from generic templates while staying fast, accessible and easy to maintain. It is a fully data-driven Next.js App Router site with Tailwind v4 design tokens and modular section components: content lives in typed constants, deploys trigger on merge, and updates take minutes instead of hours.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Three.js'],
    businessImpact:
      'A single source of truth for my professional presence — content lives in typed constants, deploys auto-trigger on merge, and updates take minutes instead of hours.',
    link: 'https://github.com/jkdleon/website-portfolio',
    linkLabel: 'View on GitHub',
  },
];
