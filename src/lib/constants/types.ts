export interface PersonalInfo {
  name: string;
  tagline: string;
  openToRemote: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string[];
}

export interface Role {
  title: string;
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

export interface Project {
  title: string;
  category?: string;
  description: string;
  challenge?: string;
  solution?: string;
  tools: string[];
  businessImpact?: string;
  link: string;
  linkLabel: string;
  caseStudyHref?: string;
  featured?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
}
