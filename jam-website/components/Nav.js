'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Music', href: '/music' },
  { name: 'Blog', href: '/blog' },
  { name: 'Research', href: '/research' },
  { name: 'Products', href: '/products' },
  { name: 'Tour', href: '/tour' },
  { name: 'Support', href: '/support' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-white via-white/95 to-transparent z-50 backdrop-blur-sm">
      <Link
        href="/"
        className="font-display text-2xl md:text-3xl tracking-[6px] text-sky-warm hover:opacity-80"
      >
        <span className="text-sky-accent">J</span>AM
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className={`font-mono text-xs tracking-[2px] uppercase py-2 border-b-2 transition-colors ${
              pathname === page.href
                ? 'text-sky-accent border-sky-accent'
                : 'text-sky-text-muted border-transparent hover:text-sky-accent'
            }`}
          >
            {page.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-sky-warm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}
