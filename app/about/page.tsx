import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'About Us | SiteVerify',
  description: 'SiteVerify is built by Fix9ja Technologies LTD to help Nigerians verify websites and avoid online scams.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <BackButton />
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">About SiteVerify</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          We built SiteVerify because we got tired of watching people lose their money to scams that could have been avoided.
        </p>
      </div>
      <div className="space-y-6">
        {[
          {
            title: 'Our Story',
            body: `Every day in Nigeria, people receive links in WhatsApp groups, see investment opportunities on Facebook, and come across online stores that look legitimate. Some of these platforms are real. Many of them are not.

The problem is that most people have no easy way to tell the difference before it is too late. They send money, wait for returns that never come, and lose everything they worked for.

SiteVerify was created to fix that. We wanted to build a tool that anyone could use to check a website in seconds and get a clear, honest answer about whether it is safe or not.`
          },
          {
            title: 'What We Do',
            body: `SiteVerify uses artificial intelligence and real-time web scanning to analyze any website, investment platform, app, or online business. When you paste a link into our scanner, we check it against scam databases, analyze the domain history, look for red flags in how the site is structured, and search for complaints and reports from other users.

We then give you a clear verdict: Safe, Warning, or Danger. We also explain exactly what we found so you can make your own informed decision.

We do not just tell you a site is dangerous. We tell you why, and we tell you what the site is actually trying to get from you.`
          },
          {
            title: 'Our Mission',
            body: `Our mission is simple. We want to make Nigeria safer online, one website check at a time. We believe that access to good information is the best defense against fraud, and that every Nigerian deserves to know the truth about a platform before they hand over their money or personal details.

We are not a cybersecurity firm and we are not lawyers. We are a technology platform that gives you real information so you can protect yourself.`
          },
          {
            title: 'Who We Are',
            body: `SiteVerify is a product of Fix9ja Technologies LTD, a technology company registered with the Corporate Affairs Commission of Nigeria. Fix9ja Technologies builds practical digital tools that solve real problems for people in Nigeria and across Africa.

We are based in Abuja, Nigeria.`
          },
          {
            title: 'Important Disclaimer',
            body: `SiteVerify provides information for reference purposes only. Our verdicts are based on AI analysis and publicly available data. We do not guarantee that every result is 100 percent accurate, and we are not liable for any decisions you make based on our analysis. Always verify important financial decisions through multiple sources before acting.`
          },
        ].map(s => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-green-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-extrabold mb-2">Check a Site Right Now</h3>
        <p className="text-green-100 text-sm mb-6">Free, instant, and no account needed.</p>
        <a href="/check" className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm">
          Start Scanning
        </a>
      </div>
    </div>
  )
}
