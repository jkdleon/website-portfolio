import { TopologyLink, TopologyNode } from './types';

export const TOPOLOGY_VIEWBOX = { width: 640, height: 150 } as const;

export const topologyNodes: TopologyNode[] = [
  {
    id: 'manila',
    label: 'Manila',
    shortLabel: 'MNL',
    kind: 'site',
    years: '2017 – 2019',
    note: 'Field engineering, IP database and support roles',
    x: 48,
    y: 92,
  },
  {
    id: 'noc',
    label: 'Parañaque NOC',
    shortLabel: 'NOC',
    kind: 'site',
    years: '2019 – 2025',
    note: 'New Oriental Club88 · NOC engineer → acting head of IT',
    x: 180,
    y: 92,
  },
  {
    id: 'hk',
    label: 'Hong Kong edge',
    shortLabel: 'HK',
    kind: 'site',
    labelPlacement: 'above',
    note: 'Dedicated PH–HK offshore link · Cisco core routers replaced',
    x: 300,
    y: 32,
  },
  {
    id: 'doha',
    label: 'Doha',
    shortLabel: 'DOH',
    kind: 'site',
    years: '2025 – 2026',
    note: 'Snoonu · IT Executive (Infrastructure & Operations)',
    x: 410,
    y: 92,
  },
  {
    id: 'azure',
    label: 'Azure',
    shortLabel: 'AZ',
    kind: 'cloud',
    note: 'Azure Administrator Associate (AZ-104), Apr 2026',
    x: 530,
    y: 44,
  },
  {
    id: 'aws',
    label: 'AWS',
    shortLabel: 'AWS',
    kind: 'cloud',
    note: 'Cloud Practitioner · Terraform static-site stack (authored)',
    x: 556,
    y: 92,
  },
  {
    id: 'gcp',
    label: 'GCP',
    shortLabel: 'GCP',
    kind: 'cloud',
    note: 'ZKBioTime migration to Google Cloud, zero downtime',
    x: 530,
    y: 138,
  },
];

export const topologyLinks: TopologyLink[] = [
  { from: 'manila', to: 'noc', style: 'plain' },
  { from: 'noc', to: 'hk', style: 'live', arc: 40 },
  { from: 'noc', to: 'doha', style: 'plain' },
  { from: 'doha', to: 'azure', style: 'live' },
  { from: 'doha', to: 'aws', style: 'live' },
  { from: 'doha', to: 'gcp', style: 'live' },
];
