'use client';

import { useTypedText } from '@/hooks/useTypedText';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Next.js Engineer',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const typed = useTypedText(roles, 80, 1800);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      id="hero"
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="font-mono text-sm mb-4" style={{ color: 'var(--accent)' }}>
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Laila Majeed
        </h1>
        <div className="text-2xl md:text-3xl font-mono mb-8 h-10 flex items-center justify-center gap-2">
          <span style={{ color: 'var(--text-secondary)' }}>{typed}</span>
          <span className="cursor-blink" style={{ color: 'var(--accent)' }}>|</span>
        </div>
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          I build full-stack web apps that are fast, clean, and actually useful — from idea to deployed product.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
