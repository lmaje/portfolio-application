'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import type { Project } from '@/lib/types';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        {project.status === 'in-progress' && (
          <span
            className="text-xs font-mono px-2 py-1 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
          >
            In Progress
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-1 rounded-md"
            style={{ background: 'var(--tag-bg)', color: 'var(--text-secondary)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--accent)' }}
          >
            <Icon icon="lucide:external-link" width={14} />
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Icon icon="mdi:github" width={14} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
