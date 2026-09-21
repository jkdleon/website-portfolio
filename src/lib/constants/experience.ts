import { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    company: 'Snoonu',
    location: 'Doha, Qatar',
    roles: [
      {
        title: 'IT Executive (Infrastructure & Operations)',
        scope:
          'Hands-on infrastructure and operations role: network and firewall estate, 500+ endpoints, cloud migration, ITSM.',
        startDate: 'Aug 2025',
        endDate: 'Feb 2026',
        bullets: [
          "Migrated the company's on-premises ZKBioTime attendance platform — 15 biometric terminals serving 500+ staff — to Google Cloud with zero downtime, delivered as an assigned project alongside daily operations.",
          "Ran the Snoomart dark-store IT refresh: gathered requirements with store managers, audited assets for replacement or upgrade, and right-sized each store's internet bandwidth after verifying the reported slowness.",
          'Deployed and managed the network and firewall estate — IPsec site-to-site VPNs, switching and wireless — supporting 500+ endpoints; primary on-call for critical incidents.',
          "Led the department's ITSM gap analysis (solo project; analysis and action plan delivered), and owned incident lifecycle management in Jira to SLA.",
          'Managed 500+ Windows and macOS endpoints through Hexnode MDM: approved-application deployment, security patching and compliance reporting.',
          'Managed identity and access for enterprise applications with a monthly recurring IAM audit; owned vendor management, procurement and the licence lifecycle.',
        ],
      },
    ],
  },
  {
    company: 'New Oriental Club88',
    location: 'Parañaque, Philippines',
    description:
      'Managed connectivity and IT services provider: internet connectivity, managed network and end-user support for 50–60 client companies, operating a dedicated Philippines–Hong Kong offshore link with Hong Kong IP address space. 13-person IT/NOC department.',
    roles: [
      {
        title: 'Lead Network Operations Engineer → IT Supervisor (acting head of IT)',
        scope:
          'Ran the IT function day-to-day for the IT Manager; one of three supervisors over a 9-engineer NOC.',
        startDate: 'Jun 2021',
        endDate: 'Jan 2025',
        bullets: [
          'Ran the IT function day-to-day on behalf of the IT Manager: department strategy and reporting, purchase approvals under delegated authority, team scheduling, and the department SOP (co-author).',
          'One of three supervisors over a 9-engineer network operations team: led and coached the engineers, ran team meetings, structured training and advanced-skills development, and acted as final escalation point 24×7.',
          'Delivered the core network upgrade — replaced the Cisco core routers at the Hong Kong offshore edge and the Cisco core switches in the Philippines — with a rehearsed rollback and client traffic failed over to local ISPs first: completed in a 30-minute window with zero client downtime, and the procedure added to the department SOP.',
          'Introduced Zabbix, Cacti, MRTG and FastNetMon monitoring, moving operations from ticket-driven reaction to proactive detection of link, capacity and DDoS events.',
          'Owned major-incident response for escalated outages, coordinating internal teams, ISPs and hardware vendors at all hours; led root-cause analysis and remediation for WAN/LAN incidents.',
          'Planned service levels and capacity, built the data-collection and reporting for application and infrastructure health, and installed and administered the Linux servers (Ubuntu, CentOS) and VMware ESXi hosts on Dell PowerEdge behind monitoring and infrastructure services.',
        ],
      },
      {
        title: 'Network Operations Engineer',
        scope: 'Level-1/2 network operations for 50–60 client companies.',
        startDate: 'Aug 2019',
        endDate: 'May 2021',
        bullets: [
          'Monitored network stability and performance (Cacti, MRTG, Zabbix, CheckMK, PingPlotter); delivered Level-1/2 troubleshooting, line testing and device configuration; drove ISP and vendor trouble tickets to resolution.',
          'Deployed Cisco network devices for new client offices; performed scheduled configuration changes and OS upgrades; produced daily, weekly and monthly network operations reports.',
        ],
      },
    ],
  },
  {
    company: 'Concentrix',
    location: 'Quezon City, Philippines',
    roles: [
      {
        title: 'Customer Care Analyst',
        startDate: 'Jul 2018',
        endDate: 'Sep 2019',
        bullets: ['Technical support to SLA with a first-contact-resolution focus.'],
      },
    ],
  },
  {
    company: 'Servflex Inc.',
    location: 'Makati, Philippines',
    roles: [
      {
        title: 'Project Database Engineer',
        startDate: 'Nov 2017',
        endDate: 'May 2018',
        bullets: ['Maintained the IP address database and fulfilled client work orders.'],
      },
    ],
  },
  {
    company: 'Faire Technologies Inc.',
    location: 'San Juan City, Philippines',
    roles: [
      {
        title: 'Field Engineer (design role)',
        startDate: 'Jan 2017',
        endDate: 'Nov 2017',
        bullets: ['CCTV and access-control system design, BOMs and project costing.'],
      },
    ],
  },
];
