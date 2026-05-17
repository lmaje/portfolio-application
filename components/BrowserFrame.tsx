'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BrowserFrameProps {
  src?: string;
  url?: string;
  alt?: string;
  aspect?: string;
}

function Chrome({ url }: { url: string }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3"
      style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <div
        className="flex-1 rounded-md px-3 py-1 text-xs font-mono truncate"
        style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)' }}
      >
        {url}
      </div>
    </div>
  );
}

export default function BrowserFrame({ src, url = 'localhost:3000', alt = 'App preview', aspect = '16/9' }: BrowserFrameProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      {/* Inline frame */}
      <div
        className="rounded-xl overflow-hidden w-full"
        style={{ border: '1px solid var(--border)', background: 'var(--card-bg)' }}
      >
        <Chrome url={url} />
        <div className={`relative w-full ${src ? 'cursor-zoom-in' : ''}`} style={{ aspectRatio: aspect }} onClick={() => src && setOpen(true)}>
          {src ? (
            <>
              <Image src={src} alt={alt} fill className="object-cover object-top" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{ background: 'rgba(10,22,40,0.4)' }}>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'var(--accent)', color: '#0a1628' }}>
                  Click to expand
                </span>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--accent-muted)' }}>
              <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>screenshot coming soon</span>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0" style={{ background: 'rgba(5,12,24,0.92)', backdropFilter: 'blur(8px)' }} />

            {/* Expanded frame */}
            <motion.div
              className="relative w-full max-w-5xl rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Chrome url={url} />
              <div className="relative w-full" style={{ aspectRatio: aspect }}>
                <Image src={src!} alt={alt} fill className="object-cover object-top" />
              </div>
            </motion.div>

            {/* Close hint */}
            <button
              className="absolute top-5 right-5 text-xs font-medium px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
              style={{ background: 'var(--card-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              onClick={() => setOpen(false)}
            >
              esc to close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
