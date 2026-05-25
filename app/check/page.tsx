'use client'
import type { Metadata } from 'next'
import CheckerSection from '@/components/CheckerSection'

export const metadata: Metadata = {
  title: 'Check If a Website is Safe | SiteVerify Scam Detector',
  description: 'Free AI-powered website safety checker. Paste any URL and instantly find out if it is safe, suspicious, or a scam. Trusted in Nigeria.',
}

export default function CheckPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors">
  ← Back
</button>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Check Any Website for Safety</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Paste any URL, investment platform name, or describe the site. Our AI will scan it and tell you if it's safe, suspicious, or a scam.</p>
      </div>
      <CheckerSection />
    </div>
  )
}
