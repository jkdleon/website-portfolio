export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  status: string;
  currently: string;
  cvHref: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string[];
}

export interface Role {
  title: string;
  scope?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  description?: string;
  roles: Role[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  expired?: boolean;
}

export type StatusTone = 'success' | 'pending' | 'neutral';

export interface ProjectStatus {
  label: string;
  tone: StatusTone;
}

export interface Project {
  title: string;
  category?: string;
  description: string;
  narrative: string;
  year?: string;
  status: ProjectStatus;
  tools: string[];
  businessImpact?: string;
  link: string;
  linkLabel: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
}

export interface Stat {
  value: number;
  display?: string;
  label: string;
}

export type TopologyNodeKind = 'site' | 'cloud';

export interface TopologyNode {
  id: string;
  label: string;
  shortLabel: string;
  kind: TopologyNodeKind;
  labelPlacement?: 'above' | 'below' | 'right';
  years?: string;
  note: string;
  x: number;
  y: number;
}

export type TopologyLinkStyle = 'plain' | 'live';

export interface TopologyLink {
  from: string;
  to: string;
  style: TopologyLinkStyle;
  arc?: number;
}
