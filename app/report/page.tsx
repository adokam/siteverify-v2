import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Report a Scam Website | SiteVerify Nigeria',
  description: 'Report a fake website, investment scam, or fraudulent platform to SiteVerify. Help protect other Nigerians from online fraud.',
}

export default function ReportPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Report a Scam</h1>
        <p className="text-gray-500">Help protect other Nigerians. Report a fake website, investment platform, or fraudulent app.</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Website / Platform URL</label>
            <input type="text" placeholder="e.g. https://fakeinvestment.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Scam Type</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors">
              <option>Select type...</option>
              <option>Fake Investment Platform</option>
              <option>Fake Loan App</option>
              <option>Online Shopping Scam</option>
              <option>Crypto Fraud</option>
              <option>Betting Scam</option>
              <option>Phishing / Fake Bank Site</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">What happened?</label>
            <textarea rows={4} placeholder="Describe your experience. What did they promise? What did you lose?" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors resize-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Amount Lost (optional)</label>
            <input type="text" placeholder="e.g. ₦50,000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors" />
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
            🚨 Submit Report
          </button>
          <p className="text-xs text-gray-400 text-center">Reports are reviewed and help improve our AI scam detection for everyone.</p>
        </div>
      </div>
    </div>
  )
}
