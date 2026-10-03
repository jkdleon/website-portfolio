import { Project } from './types';

// Facts mirror the approved CV bullet library and skills inventory (CV folder, 3 Oct 2026).
export const projects: Project[] = [
  {
    title: 'ZKBioTime → Google Cloud migration',
    category: 'Cloud Migration · Snoonu',
    description:
      'Production attendance platform (15 biometric terminals, 500+ staff) moved off a desktop with a dynamic IP onto a Windows Server VM on Google Cloud with a static IP, with zero downtime.',
    year: '2025',
    status: { label: 'zero downtime', tone: 'success' },
    narrative:
      'The attendance system every employee clocks into ran on an ordinary desktop with a dynamic IP. Every time it restarted, all 15 ZKTeco terminals lost the server and had to be reconfigured by hand. I built a Windows Server VM on Google Cloud with a static IP, restored the users and attendance records from backup, and travelled between sites to repoint every terminal to the new address, all within one working day and with no downtime for staff.',
    tools: ['Google Cloud', 'Compute Engine', 'Windows Server', 'ZKBioTime', 'Workload migration'],
    businessImpact:
      'Removed the root cause of repeated terminal disconnections and moved a production system used by 500+ staff to a data-centre-grade server with zero downtime.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Core network refresh, onshore and offshore',
    category: 'Network Engineering · New Oriental Club88',
    description:
      'Replaced the Cisco core routers at the Hong Kong offshore edge and the Cisco core switches in the Philippines in a 30-minute change window with zero client downtime.',
    status: { label: 'zero client downtime', tone: 'success' },
    narrative:
      "The core routers at our Hong Kong edge and the core switches in the Philippines carried every client's traffic over the international link, and both needed replacing. I documented the configurations and dependencies, pre-configured the new devices, wrote the cutover with a rollback to the old hardware, notified clients in advance, and failed client traffic over to local ISPs before we touched the core, so clients stayed up regardless of how the change went. We ran it in a 30-minute low-traffic window from a checklist: one engineer executing, one on Zabbix and Cacti, me verifying and acting as the single escalation point for the vendor and the Hong Kong site.",
    tools: ['Cisco IOS', 'BGP', 'Change management', 'Rollback planning', 'Zabbix', 'Cacti'],
    businessImpact:
      'Completed inside the window with zero client downtime, no rollback and no incident tickets. The failover and rollback procedure was added to the department SOP.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Open-source NOC tooling stack',
    category: 'Network Operations · New Oriental Club88',
    description:
      'On my own initiative, replaced Check-MK with Zabbix and self-hosted FastNetMon, Oxidized, NetBox and Snipe-IT for the network operations team.',
    year: '2021 – 2025',
    status: { label: 'ran in production', tone: 'success' },
    narrative:
      'The NOC was finding out about problems when clients called, and the commercial DDoS subscription (Blue Coat) had lapsed because it was expensive. On Ubuntu and CentOS servers running as VMware ESXi virtual machines, I replaced Check-MK with Zabbix for monitoring and deployed FastNetMon for DDoS detection, Oxidized for automated device configuration backup (LibreNMS as the inventory feed, later replaced by a CSV feed after latency issues), NetBox for IP address, VLAN and asset management, and Snipe-IT for asset tracking with bi-weekly backups, which I also trialled on AWS EC2. When FastNetMon flagged an attack, we diverted the targeted prefix to Imperva for scrubbing, on average 4 to 6 times a month per ISP.',
    tools: ['Ubuntu', 'CentOS', 'VMware ESXi', 'Zabbix', 'FastNetMon', 'Imperva', 'Oxidized', 'NetBox', 'Snipe-IT'],
    businessImpact:
      'Engineers were troubleshooting a downed port before the client raised a ticket. When a client router died, its Oxidized backup had the client back online inside a 30-minute window.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Office-router configuration generator',
    category: 'Network Automation · New Oriental Club88',
    description:
      'An Excel generator that turned a few inputs into a complete Cisco office-router configuration, later rewritten in Python.',
    year: '2024',
    status: { label: 'used by the team', tone: 'success' },
    narrative:
      "Every new client office needed a router built to the same standard. I built an Excel generator that took a handful of inputs (hostname, subscribed bandwidth, public and management IPs) and produced the full Cisco IOS configuration: NAT, DHCP pools, ACLs, subinterfaces, a management VLAN, QoS rate limiting matched to the client's subscribed bandwidth, and a locked-down management plane that blocks SSH and telnet from outside. The team used it for new offices, and I later rewrote it as a Python script.",
    tools: ['Excel', 'Python', 'Cisco IOS', 'NAT', 'ACLs', 'QoS'],
    businessImpact:
      'Consistent router builds for new client offices, generated from a few inputs instead of typed by hand.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Managed dorm Wi-Fi service',
    category: 'Service Design · New Oriental Club88',
    description:
      'Proposed and ran an in-house paid Wi-Fi service on MikroTik routers for client staff dorms, replacing a costly third-party hotspot.',
    status: { label: 'approved · new revenue', tone: 'success' },
    narrative:
      "Client staff living in the dorms got their Wi-Fi from a third-party hotspot service with RADIUS user accounts. It cost too much and was going to be terminated, which would have left those staff with no internet. I proposed that we run the service ourselves: we would supply and manage MikroTik hAP lite routers, provision a 200 Mbps shared allowance, and bill per room by the bandwidth tier each room chose rather than per user. I pitched it at the managers' meeting with the GM, it was approved, and I installed and maintained it.",
    tools: ['MikroTik', 'Wi-Fi', 'Bandwidth management', 'Service pricing'],
    businessImpact:
      'Turned a cost the company was about to cut into a new revenue line across about 50 rooms.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'Department SOPs and process flowcharts',
    category: 'Documentation · New Oriental Club88',
    description:
      "Wrote the department's 29-page IT Standard Operating Procedure, six further SOPs and 16 process flowcharts.",
    year: '2023 – 2024',
    status: { label: '29-page SOP · 16 flowcharts', tone: 'neutral' },
    narrative:
      'As Lead Network Operations Engineer I wrote version 1.3 of the IT Standard Operating Procedure: incident management with a P1 to P4 SLA and acknowledgement within 2 minutes, change management with implementation and rollback plans, client onboarding and offboarding, weekly preventive maintenance, Microsoft 365 account rules, monitoring standards and an ISP escalation matrix. I followed it with six further SOPs (ISP faults, ISP rebate claims, asset inspection, management reports, device pull-outs and contractor work permits) and drew 16 process flowcharts in Visio. With the IT Manager I also designed the six KPIs we used to track the team.',
    tools: ['Technical writing', 'Visio', 'ITIL', 'KPI design'],
    businessImpact:
      'Personally resolved 100% of tickets within SLA every month from June to December 2023, measured against the KPIs I designed with the IT Manager.',
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
      'Company policy favoured cloud-first, so the question was whether cloud-hosted monitoring of remote sites over a site-to-site VPN was the right call once running costs were counted. I deployed Zabbix in the cloud and proved it against the Pakistan office over an IPsec VPN, tracked the monthly running cost, and found it uneconomic. I recommended an on-premises server with only SNMP traffic crossing the VPN and delivered the finding as a written cost and recommendation report to the Head of Digital Transformation.',
    tools: ['Zabbix', 'IPsec VPN', 'SNMP', 'Cost analysis'],
    businessImpact:
      'Delivered as a written cost and recommendation report to the Head of Digital Transformation.',
    link: '',
    linkLabel: '',
  },
  {
    title: 'ITSM gap analysis',
    category: 'Service Management · Snoonu',
    description:
      "Solo project assessing the IT department's processes against SLA and ITSM requirements, with an action plan to close the gaps.",
    year: '2025 – 2026',
    status: { label: '~90% at departure', tone: 'neutral' },
    narrative:
      'The department had no formal picture of where its incident, request and change handling fell short of SLA and ITSM expectations. As a solo project I assessed the current processes against those requirements, documented the gaps and produced the action plan. The analysis and plan were roughly 90% complete at my departure, with the final sign-off meeting pending.',
    tools: ['ITIL', 'Jira Service Management', 'SLA reporting'],
    businessImpact:
      'Analysis and action plan roughly 90% complete at departure, with the final sign-off meeting pending.',
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
      "Store managers across the Snoomart dark stores reported slow connectivity and ageing equipment. I gathered requirements with the store managers, audited the assets for replacement or upgrade, verified the reported slowness rather than taking it on faith, and right-sized each store's internet bandwidth.",
    tools: ['Requirements gathering', 'Asset audit', 'Bandwidth planning'],
    link: '',
    linkLabel: '',
  },
  {
    title: 'AWS static-site infrastructure in Terraform',
    category: 'Infrastructure as Code · Personal',
    description:
      'Terraform stack for a static site on AWS (private S3 origin, CloudFront with Origin Access Control, ACM and Route 53) with deploy scripts and GitHub Actions CI. Authored, AWS deployment pending.',
    year: '2026',
    status: { label: 'authored · deployment pending', tone: 'pending' },
    narrative:
      'I wanted the hosting for a static site defined as code rather than by hand: a private S3 bucket as the origin, CloudFront in front of it with Origin Access Control, TLS via ACM and DNS in Route 53. I wrote the Terraform for every component, Bash and PowerShell deployment scripts, and a GitHub Actions CI pipeline with branch protection on the repository. The stack is authored and in the repository. The AWS deployment is pending and the site is currently served from Vercel.',
    tools: ['Terraform', 'AWS S3', 'CloudFront', 'ACM', 'Route 53', 'GitHub Actions', 'Bash', 'PowerShell'],
    businessImpact:
      'Status: the Terraform is authored and in the repository. The AWS deployment is pending and the site is currently served from Vercel.',
    link: 'https://github.com/jkdleon/tumbatumba',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Personal portfolio website',
    category: 'Web · Personal',
    description:
      'A dark-first single-page portfolio built with Next.js and Tailwind CSS v4, the site you are looking at right now.',
    year: '2026',
    status: { label: 'live', tone: 'success' },
    narrative:
      'I wanted a portfolio that felt distinct from generic templates while staying fast, accessible and easy to maintain. It is a fully data-driven Next.js App Router site with Tailwind v4 design tokens and modular section components: content lives in typed constants, deploys trigger on merge, and updates take minutes instead of hours.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Three.js'],
    businessImpact:
      'A single source of truth for my professional presence. Content lives in typed constants, deploys trigger on merge, and updates take minutes instead of hours.',
    link: 'https://github.com/jkdleon/website-portfolio',
    linkLabel: 'View on GitHub',
  },
];
