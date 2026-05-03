import { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: 'Networking',
    skills: ['Cisco IOS', 'LAN/WAN', 'OSPF', 'EIGRP', 'BGP', 'VLAN', 'DHCP', 'DNS', 'NAT', 'IP Subnetting'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['Azure', 'AWS', 'GCP', 'Fortinet', 'Aruba', 'Hexnode MDM', 'Microsoft 365'],
  },
  {
    name: 'Security Tools',
    skills: ['Wazuh', 'TheHive', 'Shuffle', 'IPsec VPN'],
  },
  {
    name: 'Monitoring',
    skills: ['Zabbix', 'MRTG', 'Cacti', 'Fastnetmon', 'Pingplotter'],
  },
  {
    name: 'OS & Systems',
    skills: ['Linux (Ubuntu, CentOS)', 'Windows Server', 'macOS'],
  },
  {
    name: 'Soft Skills',
    skills: ['Team Leadership', 'SOP Development', 'Vendor Coordination', 'SLA Management', 'Stakeholder Communication'],
  },
];
