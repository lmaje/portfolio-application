'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div
              className="w-52 h-52 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <Image
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Laila&top[]=hijab&topColor=e8d5b0&skin=tanned&eyes[]=default&eyebrow[]=defaultNatural&mouth[]=smile&clothe[]=blazerAndShirt&clotheColor=6b3a2a&accessories[]=&facialHair[]="
                alt="Laila Majeed"
                width={208}
                height={208}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
              // about me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              A developer who ships.
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m Laila — a frontend-leaning developer who builds full-stack web apps with React, Next.js, and TypeScript.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I come from a diverse background in project management and community work, which means I ship with both technical precision and real-world empathy.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/lmaje"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lailamajeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
