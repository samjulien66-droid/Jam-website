import Link from 'next/link'

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Spotify', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-sky-border bg-sky-bg-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-display text-2xl tracking-[4px] text-sky-warm mb-2">
            <span className="text-sky-accent">J</span>AM — SAM JULIEN
          </div>
          <p className="font-mono text-xs text-sky-text-muted">
            Music • Mission • Movement
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="font-mono text-xs text-sky-text-muted hover:text-sky-accent transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-sky-border text-center">
        <p className="font-mono text-xs text-sky-text-muted">
          © {new Date().getFullYear()} Sam Julien. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
