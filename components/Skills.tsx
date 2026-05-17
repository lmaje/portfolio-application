'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { skills } from '@/data/skills';
import type { SkillCategory } from '@/lib/types';

const categories: SkillCategory[] = ['Languages', 'Frameworks', 'Design', 'Tools & Platforms'];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
            // my toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Skills
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <div key={category}>
                <p className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  {category}
                </p>
                <div className="flex flex-wrap gap-4">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl w-20 transition-all duration-200"
                      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                    >
                      <Icon icon={skill.icon} width={32} height={32} />
                      <span className="text-xs text-center font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
