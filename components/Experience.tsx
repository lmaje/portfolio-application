'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
            // where I&apos;ve been
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Experience
          </h2>
        </motion.div>

        <div className="relative flex flex-col">
          {/* Vertical timeline line */}
          <div
            className="absolute hidden md:block top-2 bottom-2 w-px"
            style={{ left: '11.75rem', background: 'var(--border)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8"
            >
              {/* Date column */}
              <div className="md:w-44 flex-shrink-0 pt-1 md:text-right">
                <span className="font-mono text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {exp.startDate}
                  <br className="hidden md:block" />
                  <span className="md:hidden"> — </span>
                  {exp.endDate}
                </span>
              </div>

              {/* Dot */}
              <div className="hidden md:flex items-start justify-center flex-shrink-0 pt-1.5" style={{ width: '1px' }}>
                <div
                  className="w-2.5 h-2.5 rounded-full -translate-x-[5px]"
                  style={{ background: 'var(--accent)' }}
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 p-5 rounded-xl"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                    {exp.title}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-mono"
                    style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>
                  {exp.company}
                </p>
                <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                  {exp.location}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: 'var(--bg)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
