import { Certification } from './types';

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    date: 'Apr 2026',
  },
  { name: 'AWS Certified Cloud Practitioner (CLF-C02)', issuer: 'Amazon Web Services', date: 'May 2025' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', date: 'Jul 2025' },
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft', date: 'Oct 2023' },
  { name: 'Fortinet NSE 1: Network Security Associate', issuer: 'Fortinet' },
  { name: 'Fortinet NSE 2: Network Security Associate', issuer: 'Fortinet' },
  {
    name: 'Cisco CCNA Routing & Switching',
    issuer: 'Cisco',
    date: '2020 – 2023',
    expired: true,
  },
];
