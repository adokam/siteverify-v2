import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scam Alerts & Online Safety Blog | SiteVerify Nigeria',
  description: 'Latest scam alerts, fake investment site exposés, and online safety tips for Nigerians. Stay protected with SiteVerify.',
}

const posts = [
  { slug: 'pxes-nigeria-scam', title: 'PXES Nigeria — Fake Investment Platform Fully Exposed', excerpt: 'PXES promises daily returns through VIP plans. Here is everything you need to know about why it is a scam.', date: 'May 2026', tag: 'Investment Scam', danger: true },
  { slug: 'bunnyband-scam', title: 'BunnyBand — The Site That Never Pays and Steals Your Data', excerpt: 'BunnyBand shows you a ₦13,000 welcome bonus you can never withdraw. We expose exactly how the trap works.', date: 'May 2026', tag: 'Data Harvest', danger: true },
  { slug: 'victuslink-scam', title: 'VictusLink — Classic Ponzi Scheme Targeting Nigerians', excerpt: 'VictusLink uses a .top domain, anonymous ownership, and unrealistic returns. Full analysis inside.', date: 'May 2026', tag: 'Ponzi Scheme', danger: true },
  { slug: 'how-to-spot-fake-investment-sites', title: 'How to Spot Fake Investment Sites in Nigeria (2026 Guide)', excerpt: '7 warning signs that a Nigerian investment platform is a scam — and how to check any site before sending money.', date: 'May 2026', tag: 'Safety Guide', danger: false },
  { slug: 'fake-loan-apps-nigeria', title: 'Fake Loan Apps in Nigeria — The Complete List to Avoid', excerpt: 'These apps steal your contact list, harass your family, and never deliver the promised loans.', date: 'May 2026', tag: 'Loan Scams', danger: true },
  { slug: 'how-to-verify-website-legit', title: 'How to Know If a Website is Legit Before You Pay', excerpt: 'A simple checklist every Nigerian should follow before making any payment to an online store or platform.', date: 'May 2026', tag: 'Safety Guide', danger: false },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      
      <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors">
  ← Back
</button>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Scam Alerts & Safety Blog</h1>
        <p className="text-gray-500">Latest scam exposés, safety guides, and online fraud warnings for Nigeria.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-full border ${post.danger ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                {post.tag}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h2 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">{post.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-sm font-semibold text-green-600">Read more →</div>
          </a>
        ))}
      </div>
    </div>
  )
}
