export type ProjectStatus = 'live' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export type SkillCategory = 'Languages' | 'Frameworks' | 'Tools' | 'Platforms';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}
