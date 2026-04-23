export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t" style={{ borderColor: 'var(--border)' }}>
      <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
        Built by{' '}
        <span style={{ color: 'var(--accent)' }}>Laila Majeed</span>
        {' · '}
        Next.js · TypeScript · Tailwind CSS · Vercel
      </p>
    </footer>
  );
}
