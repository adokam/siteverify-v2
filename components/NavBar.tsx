'use client'

import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/check', label: 'Check Site' },
  { href: '/blog', label: 'Blog' },
  { href: '/report', label: 'Report Scam' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl">🛡️</span>
          <span className="font-bold text-xl text-gray-900">
            Site<span className="text-green-600">Verify</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-green-600 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3">
          <nav className="flex flex-col gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
