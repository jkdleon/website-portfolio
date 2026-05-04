export interface PersonalInfo {
  name: string;
  tagline: string;
  openToRemote: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  category?: string;
  featured?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
}
