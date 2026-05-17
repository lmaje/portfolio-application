'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { projects } from '@/data/projects';
import BrowserFrame from './BrowserFrame';
import type { Project } from '@/lib/types';

const featuredProjects = projects;

function StatusBadge({ status }: { status: Project['status'] }) {
  const styles: Record<string, string> = {
    live: 'bg-emerald-500/15 text-emerald-400',
    'in-progress': 'bg-amber-500/15 text-amber-400',
    planned: 'bg-slate-500/15 text-slate-400',
  };
  const labels: Record<string, string> = {
    live: 'Live',
    'in-progress': 'In Progress',
    planned: 'Planned',
  };
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  const textBlock = (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 rounded-md"
            style={{ background: 'var(--tag-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ background: 'var(--accent)', color: '#0a1628' }}
          >
            <Icon icon="mdi:open-in-new" width={16} />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            <Icon icon="mdi:github" width={16} />
            Source
          </a>
        )}
      </div>
    </div>
  );

  const frameBlock = (
    <div className="relative">
      <BrowserFrame
        src={project.screenshot}
        url={project.liveUrl?.replace('https://', '') ?? 'preview'}
        alt={`${project.title} preview`}
        aspect={project.screenshotAspect}
      />
      {project.status === 'in-progress' && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl" style={{ background: 'rgba(10,22,40,0.6)' }}>
          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-amber-500/20 text-amber-400">
            In Progress
          </span>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      {isEven ? (
        <>
          {textBlock}
          {frameBlock}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{frameBlock}</div>
          <div className="order-1 md:order-2">{textBlock}</div>
        </>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
            // what I&apos;ve built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
