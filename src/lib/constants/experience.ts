import { ExperienceEntry } from './types';

// Bullet text mirrors the approved CV bullet library (CV/build_cv.py, 3 Oct 2026). Change both together.
export const experience: ExperienceEntry[] = [
  {
    company: 'Snoonu',
    location: 'Doha, Qatar',
    roles: [
      {
        title: 'IT Infrastructure and Operations Engineer',
        scope:
          'Official title: IT Executive. Infrastructure, network and end-user operations for 500+ staff across 11 sites.',
        startDate: 'Aug 2025',
        endDate: 'Feb 2026',
        bullets: [
          "Fixed repeated attendance-terminal disconnections at the root cause by moving ZKBioTime (15 biometric terminals, 500+ staff) off a desktop with a dynamic IP onto a self-built Windows Server VM on Google Cloud with a static IP. Restored users and attendance records from backup and repointed the terminals site by site in one working day, with zero downtime.",
          "Under a cloud-first policy, deployed Zabbix in the cloud and proved it against the Pakistan office over an IPsec VPN, then costed it, found it uneconomic and recommended on-premises in a written report to the Head of Digital Transformation.",
          "Managed the FortiGate firewall, switching and wireless estate across 11 sites (2 offices, 5 dark stores, 4 staff accommodations), including site-to-site and remote-access VPNs, and enrolled 500+ Windows and macOS endpoints in Hexnode MDM with device policies and Windows security updates.",
          "Ran identity and access for enterprise applications through a monthly IAM audit that removed any access without a matching request ticket. Owned vendor management, procurement, the licence lifecycle and primary on-call for critical incidents.",
          "Led the department's ITSM gap analysis as a solo project, found gaps in every ITIL process reviewed and delivered an action plan. Owned incident lifecycle management in Jira to SLA.",
          "Ran the Snoomart IT refresh across 5 dark stores: gathered requirements with store managers, audited assets for replacement and right-sized each store's internet bandwidth.",
        ],
      },
    ],
  },
  {
    company: 'New Oriental Club88',
    location: 'Parañaque, Philippines',
    description:
      "Connectivity provider for 50-60 client companies (about 1,800 public IPs, up to 3.7 Gbps subscribed) over a dedicated Philippines to Hong Kong link. 13-person IT and NOC team.",
    roles: [
      {
        title: 'Lead Network Operations Engineer → IT Supervisor (acting head of IT)',
        scope:
          'Ran the IT function day to day for the IT Manager. One of three supervisors over a 9-engineer NOC.',
        startDate: 'Jun 2021',
        endDate: 'Jan 2025',
        bullets: [
          "Replaced the Cisco core routers at the Hong Kong offshore edge and the core switches in the Philippines inside a 30-minute window with zero client downtime and no rollback, failing client traffic over to local ISPs first.",
          "Mitigated DDoS attacks on client IP ranges, detected by FastNetMon, by diverting the targeted prefixes to Imperva for scrubbing and reverting once each attack ended, on average 4 to 6 times a month per ISP.",
          "Replaced Check-MK with Zabbix and added FastNetMon DDoS detection alongside Cacti and MRTG across a 200+ switch, 50-60 router estate. Engineers were then troubleshooting downed ports before clients raised tickets.",
          "Owned major-incident response, coordinating teams, ISPs and vendors at all hours. Restored a full network outage caused by a rogue client switch within the hour, then led the root-cause analysis.",
          "Restored a client's internet within a 30-minute window after its router failed: rebuilt the replacement from the Oxidized configuration backup, mounted and tested it, and cleared ARP entries on the core devices.",
          "Built an Excel configuration generator that turned a few inputs into a complete Cisco office-router config (NAT, DHCP, ACLs, QoS rate limiting to the subscribed bandwidth, management-plane lockdown), used by the team for new offices and later rewritten in Python.",
          "Configured and maintained about 10 FortiGate firewalls (security policies, NAT, IPsec VPN, web filtering). Enforced acceptable use by disabling accounts and shutting switch ports caught with unauthorised home routers or prohibited websites.",
          "Traced faults through router, switch, FortiGate and Linux logs, including MAC flapping, DHCP conflicts, err-disabled ports and unauthorised SSH access attempts.",
          "Built and sized the VMware ESXi VMs on Dell PowerEdge hosts running Zabbix, NetBox, Snipe-IT and Oxidized, and managed engineer accounts on the LDAP-backed jump server used for remote device access.",
          "Proposed an in-house paid Wi-Fi service on MikroTik routers when the costly third-party hotspot for client staff dorms was being dropped, billed per room by bandwidth tier from a 200 Mbps shared allowance. Pitched it to the GM, won approval and turned the cost into new revenue across about 50 rooms.",
          "Wrote the department's 29-page IT Standard Operating Procedure plus six further SOPs and 16 process flowcharts, covering incident management with a P1 to P4 SLA, change management with rollback plans, client onboarding, preventive maintenance and ISP escalation.",
          "Designed six department KPIs with the IT Manager and tracked them monthly for 12 engineers and leads. Personally resolved 100% of tickets within SLA every month from June to December 2023.",
          "One of three supervisors over a 9-engineer NOC and final escalation point 24x7. Trained engineers through sessions, on-the-job coaching and new-hire onboarding, and one was later promoted to Lead NOE.",
          "Ran the 13-person IT function day to day for the IT Manager, including reporting, purchase approvals under delegated authority, scheduling and the department SOP.",
        ],
      },
      {
        title: 'Network Operations Engineer',
        scope: 'Network operations for 50+ client companies on a rotating 24x7 shift.',
        startDate: 'Aug 2019',
        endDate: 'May 2021',
        bullets: [
          "Configured the provider core: BGP advertisement and traffic policy on the Cisco core routers (prefix-lists, route-maps, ACLs, distribute lists), and VLANs, SVIs, static routes and ACLs on the L3 core switch, with OSPF redistribution for client-bought IP blocks. Worked under my lead's supervision at first, then was authorised to make core changes alone.",
          "Fixed recurring faults at the root cause: cleared NAT translation overload behind slow internet and automated the clearing with a Cisco IOS kron job, found broken cables from access-switch interface counters, traced STP loops and MAC flapping from the CLI, and added missing static routes for newly bought IPs.",
          "Balanced traffic across 3 local ISPs, all configured as BGP neighbours for load sharing and failover, and relieved an over-utilised ISP by withdrawing advertised IP blocks so traffic moved to the others.",
          "Built redundancy and failover on core and client routers: HSRP gateway redundancy, IP SLA probes with route tracking, and IPsec VPNs for branch connectivity and remote administration.",
          "Fully configured client-side Cisco switches, Cisco routers and FortiGate firewalls, including VLANs.",
          "Deployed around 20 new client offices, configuring out-of-the-box routers and switches to each client's requirements. Carried out scheduled configuration changes and OS upgrades, and produced daily, weekly and monthly operations reports.",
          "Worked a rotating monthly shift (6am to 2pm, 2pm to 10pm, 10pm to 6am) as the NOC engineer for 50+ client companies, handling 10 to 20 tickets per shift.",
        ],
      },
    ],
  },
  {
    company: 'Concentrix (formerly Convergys)',
    location: 'Quezon City, Philippines',
    roles: [
      {
        title: 'Customer Care Analyst',
        startDate: 'Jul 2018',
        endDate: 'Aug 2019',
        bullets: [
          "Supported point-of-sale systems and store networks for US retail clients including Clarks, Vans and Helzberg Diamonds, by phone and remote access, meeting SLA and first-call-resolution targets.",
        ],
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
        bullets: [
          "Maintained PLDT's IP address database and assigned IP blocks to new business circuits using standard work-order templates.",
        ],
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
        bullets: [
          "Surveyed client sites and designed CCTV and access control systems in AutoCAD (system diagrams and floor plans), with bills of materials and cost estimates.",
        ],
      },
    ],
  },
];
