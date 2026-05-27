'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 3L20 7V13C20 17.4 16.4 21.2 12 22C7.6 21.2 4 17.4 4 13V7L12 3Z" fill="white" opacity="0.3"/>
              <path d="M12 3L20 7V13C20 17.4 16.4 21.2 12 22C7.6 21.2 4 17.4 4 13V7L12 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-xl text-gray-900">
            Site<span className="text-green-600">Verify</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-green-600 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          {open
            ? <XMarkIcon className="w-5 h-5 text-gray-600" />
            : <Bars3Icon className="w-5 h-5 text-gray-600" />
          }
        </button>
      </div>

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
