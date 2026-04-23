import type { Skill } from '@/lib/types';

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', category: 'Languages', icon: 'logos:javascript' },
  { name: 'HTML5', category: 'Languages', icon: 'logos:html-5' },
  { name: 'CSS3', category: 'Languages', icon: 'logos:css-3' },
  // Frameworks
  { name: 'Next.js', category: 'Frameworks', icon: 'logos:nextjs-icon' },
  { name: 'React', category: 'Frameworks', icon: 'logos:react' },
  { name: 'Tailwind CSS', category: 'Frameworks', icon: 'logos:tailwindcss-icon' },
  // Tools
  { name: 'Git', category: 'Tools', icon: 'logos:git-icon' },
  { name: 'GitHub', category: 'Tools', icon: 'mdi:github' },
  // Platforms
  { name: 'Supabase', category: 'Platforms', icon: 'logos:supabase-icon' },
  { name: 'Vercel', category: 'Platforms', icon: 'logos:vercel-icon' },
  { name: 'Wix', category: 'Platforms', icon: 'simple-icons:wix' },
];
