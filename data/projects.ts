import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'todo-app',
    title: 'My Todo App',
    description: 'A full-stack task manager with add/delete, inline editing, deadline tracking with overdue detection, and filter by status. Built with SSR and optimistic updates.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://my-todo-app-ten-topaz.vercel.app/',
    githubUrl: 'https://github.com/lmaje/my-todo-app',
    status: 'live',
    featured: true,
  },
  {
    id: 'bookkeeping-app',
    title: 'Bookkeeping App',
    description: 'A personal finance tracker for managing income, expenses, and financial reports. Built with full-stack Next.js and cloud persistence via Supabase.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/lmaje/bookkeeping-app',
    status: 'live',
    featured: true,
  },
  {
    id: 'recipe-app',
    title: 'Recipe App',
    description: 'Browse, save, and manage your favourite recipes with a clean modern UI. Full-stack app with cloud sync across devices.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: undefined,
    githubUrl: undefined,
    status: 'in-progress',
    featured: false,
  },
  {
    id: 'gilguzi',
    title: 'Gilguzi.com',
    description: 'A professional business website designed and built for a client. Clean, modern design focused on brand presentation and user experience.',
    techStack: ['Wix'],
    liveUrl: 'https://www.gilguzi.com',
    githubUrl: undefined,
    status: 'live',
    featured: false,
  },
];
