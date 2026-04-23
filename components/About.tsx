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
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Laila&top=hijab&topColor=2c1a0e&facialHair=&accessories=prescription02&accessoriesColor=transparent&clothe=blazerAndShirt&clotheColor=3c4f5c&eyes=default&eyebrow=defaultNatural&mouth=smile&skin=tanned"
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
              Hi, I&apos;m Laila — a self-driven developer who loves turning ideas into real, usable products.
              I build full-stack web applications end-to-end, from database design to polished UI, using
              Next.js, TypeScript, and Supabase.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I care deeply about clean code and experiences that just work — and I love the moment when
              something I built actually helps someone.
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
