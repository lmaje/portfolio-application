export type ProjectStatus = 'live' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshot?: string;
  screenshotAspect?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export type SkillCategory = 'Languages' | 'Frameworks' | 'Design' | 'Tools & Platforms';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  tags: string[];
}
