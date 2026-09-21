import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'ZKBioTime → Google Cloud migration',
    category: 'Cloud Migration · Snoonu',
    description:
      'Production attendance platform — 15 biometric terminals serving 500+ staff — migrated from on-premises to Google Cloud with zero downtime.',
    challenge:
      'The attendance system every employee clocks into ran on an on-premises server. It had to move to Google Cloud without interrupting attendance capture, and the work was assigned alongside daily operations.',
    solution:
      'Planned and executed the migration of the ZKBioTime server to Google Cloud and re-pointed all 15 biometric terminals to the new environment, with no loss of attendance data and no downtime for staff.',
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
    challenge:
      'Define a complete static-site hosting stack as code rather than by hand: a private S3 bucket as the origin, CloudFront in front of it with Origin Access Control, TLS via ACM and DNS in Route 53.',
    solution:
      'Wrote the Terraform for every component, Bash and PowerShell deployment scripts, and a GitHub Actions CI pipeline with branch protection on the repository.',
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
    challenge:
      'The core routers at the Hong Kong edge and the core switches in the Philippines carried traffic for 50–60 client companies over the international link. Both had to be replaced without taking clients offline.',
    solution:
      'Documented configurations and dependencies, wrote the cutover with a rehearsed rollback to the old hardware, and failed client traffic over to local ISPs before touching the core. Executed in a 30-minute low-traffic window with the NOC team running from a checklist.',
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
    challenge:
      'The NOC needed monitoring, DDoS detection, configuration backup, an IPAM/DCIM source of truth and asset tracking — on a budget, after a commercial DDoS subscription had expired.',
    solution:
      'Deployed and operated Zabbix (network monitoring), FastNetMon (DDoS detection, replacing the expired Blue Coat subscription), Oxidized (device configuration backup and versioning — LibreNMS as the inventory feed, later replaced by a CSV feed after latency issues), NetBox (IPAM/DCIM) and Snipe-IT (asset management with bi-weekly backups; also trialled on AWS EC2).',
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
    challenge:
      'Company policy favoured cloud-first. The question was whether cloud-hosted monitoring of remote sites over site-to-site VPN was actually the right call once running costs were counted.',
    solution:
      'Deployed Zabbix in the cloud and proved it against the Pakistan office over a site-to-site IPsec VPN, tracked the monthly running cost, and found it uneconomic. Recommended an on-premises server with only SNMP traffic crossing the VPN.',
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
    challenge:
      'The department had no formal picture of where its incident, request and change handling fell short of SLA and ITSM expectations.',
    solution:
      'Assessed current processes against SLA/ITSM requirements, documented the gaps and produced the action plan.',
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
    challenge:
      'Store managers reported slow connectivity and ageing equipment across the dark-store estate.',
    solution:
      'Gathered requirements with store managers, audited assets for replacement or upgrade, verified the reported slowness, and right-sized each store’s internet bandwidth.',
    tools: ['Requirements gathering', 'Asset audit', 'Bandwidth planning'],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Personal portfolio website',
    category: 'Web · Personal',
    description:
      'A dark-first single-page portfolio built with Next.js and Tailwind CSS v4 — the site you are looking at right now.',
    challenge:
      'I needed a portfolio that felt distinct from generic templates while staying fast, accessible, and easy to maintain.',
    solution:
      'Built a fully data-driven Next.js App Router site with Tailwind v4 design tokens, dark/light mode with FOUC prevention, scroll-fade animations, and modular landing components.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Three.js'],
    businessImpact:
      'A single source of truth for my professional presence — content lives in typed constants, deploys auto-trigger on merge, and updates take minutes instead of hours.',
    link: 'https://github.com/jkdleon/website-portfolio',
    linkLabel: 'View on GitHub',
  },
];
