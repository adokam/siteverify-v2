import type { Metadata } from 'next'
import CheckerSection from '@/components/CheckerSection'

export const metadata: Metadata = {
  title: 'SiteVerify — Is This Website Safe? Free Scam Checker Nigeria',
  description: 'Instantly check if any website, investment platform, app, or online business is safe or a scam. AI-powered. Free. Trusted in Nigeria.',
  alternates: {
    canonical: 'https://siteverify.vercel.app',
  },
}

export default function HomePage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-white pt-16 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-green-100">
            🇳🇬 Built for Nigeria · Trusted Everywhere
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Is This Website <span className="text-green-600">Safe?</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Paste any URL, investment platform, or app name. Our AI scans the web and tells you instantly if it's legitimate or a scam.
          </p>

          {/* Checker */}
          <CheckerSection />

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">✅ Live web scanning</span>
            <span className="flex items-center gap-1.5">✅ Forensic analysis</span>
            <span className="flex items-center gap-1.5">✅ Google Safe Browsing</span>
            <span className="flex items-center gap-1.5">✅ Free forever</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">How SiteVerify Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: '🔗', title: 'Paste any link', desc: 'Enter any URL, app name, or describe the platform you want to check.' },
              { step: '02', icon: '🤖', title: 'AI scans the web', desc: 'Our AI searches for scam reports, domain info, and red flags in seconds.' },
              { step: '03', icon: '🛡️', title: 'Get your verdict', desc: 'Receive a clear SAFE, WARNING, or DANGER verdict with full explanation.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-xs font-bold text-green-600 mb-3">{item.step}</div>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">What We Detect</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">SiteVerify is trained on Nigerian scam patterns and global fraud databases</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '💰', label: 'Fake Investment Sites', desc: 'Ponzi schemes, fake ROI platforms' },
              { icon: '📱', label: 'Fake Loan Apps', desc: 'Apps that steal your contacts and data' },
              { icon: '🏦', label: 'Banking Scams', desc: 'Phishing and fake bank portals' },
              { icon: '🎰', label: 'Betting Scams', desc: 'Fake betting mirrors and tipsters' },
              { icon: '🛍️', label: 'Fake Online Stores', desc: 'Sites that take your money and vanish' },
              { icon: '💎', label: 'Crypto Fraud', desc: 'Fake exchanges and wallet drainers' },
            ].map((cat) => (
              <div key={cat.label} className="border border-gray-100 rounded-xl p-5 hover:border-green-200 hover:shadow-sm transition-all">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="font-semibold text-sm text-gray-900 mb-1">{cat.label}</div>
                <div className="text-xs text-gray-400">{cat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent scam alerts */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">⚠️ Recent Scam Alerts</h2>
            <a href="/blog" className="text-sm text-green-600 font-semibold hover:underline">View all →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tag: 'Investment', title: 'PXES Nigeria — Fake Investment Platform Exposed', date: 'May 2026', danger: true },
              { tag: 'Data Harvest', title: 'BunnyBand — Never Pays, Steals Your Data', date: 'May 2026', danger: true },
              { tag: 'Ponzi', title: 'VictusLink — Classic Ponzi Scheme Warning', date: 'May 2026', danger: true },
            ].map((alert) => (
              <div key={alert.title} className="bg-white rounded-xl p-5 border border-red-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full border border-red-100">{alert.tag}</span>
                  <span className="text-xs text-gray-400">{alert.date}</span>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 leading-snug">{alert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Don't Get Scammed Today</h2>
          <p className="text-green-100 mb-8">Thousands of Nigerians lose money to fake sites every day. Check before you click.</p>
          <a href="/check" className="inline-block bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-sm">
            Check a Site Now — It's Free →
          </a>
        </div>
      </section>

    </div>
  )
}
