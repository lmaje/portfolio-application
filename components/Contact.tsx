'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
            // get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Whether you have a project in mind, a job opportunity, or just want to say hi —
            my inbox is always open.
          </p>

          <a
            href="mailto:lailamajeed96@gmail.com"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 mb-12"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/lmaje"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Icon icon="mdi:github" width={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lailamajeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Icon icon="mdi:linkedin" width={20} />
              LinkedIn
            </a>
            <a
              href="mailto:lailamajeed96@gmail.com"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Icon icon="mdi:email" width={20} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
