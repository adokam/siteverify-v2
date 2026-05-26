import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Privacy Policy | SiteVerify',
  description: 'Privacy Policy for SiteVerify — a product of Fix9ja Technologies LTD.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <BackButton />
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: May 2026</p>
        <p className="text-gray-500 mt-3 leading-relaxed">This Privacy Policy explains how SiteVerify, a product of Fix9ja Technologies LTD, handles information when you use our platform.</p>
      </div>
      <div className="space-y-6">
        {[
          { title: '1. Who We Are', body: `SiteVerify is operated by Fix9ja Technologies LTD, a company registered with the Corporate Affairs Commission of Nigeria. Our platform helps users check whether websites, investment platforms, and online businesses are safe or potentially fraudulent.\n\nIf you have any questions about this policy, you can contact us at danielameh1027@gmail.com.` },
          { title: '2. Information We Collect', body: `SiteVerify does not require you to create an account. You do not need to provide your name, email address, phone number, or any personal details to use our website scanner.\n\nThe only information that passes through our platform when you use the scanner is the URL or text you paste into the search box. This is sent to our AI system for analysis and is not stored on our servers or linked to any personal profile.\n\nWe do not collect your name, email address, phone number, location, payment information, or any account credentials.` },
          { title: '3. How We Use Your Information', body: `When you submit a URL or description for scanning, that input is processed by our AI to generate a safety verdict. The input is used only for the purpose of generating that analysis and is not stored, shared, or used for any other purpose.\n\nWe do not sell your data. We do not share your data with advertisers. We do not use your data to build a profile about you.` },
          { title: '4. Cookies and Analytics', body: `SiteVerify may use basic analytics tools to understand how many people visit our platform and which pages they view. This data is aggregated and anonymous. It does not identify you as an individual.\n\nWe may use cookies for basic website functionality. These cookies do not track you across other websites and do not contain personal information.` },
          { title: '5. Third Party Services', body: `SiteVerify uses the following third party services:\n\nGoogle Safe Browsing API: We check URLs against Google's database of known malicious sites.\n\nAnthropic Claude API: Our AI analysis is powered by Anthropic's Claude model. URLs and descriptions you submit may be processed by Anthropic's systems.\n\nVercel: Our platform is hosted on Vercel. Vercel may collect standard server logs including IP addresses as part of normal hosting operations.` },
          { title: '6. Data Security', body: `We take reasonable steps to protect the information that passes through our platform. Our site uses HTTPS encryption for all connections. We do not store sensitive user data on our servers.\n\nHowever, no internet transmission is completely secure and we cannot guarantee absolute security.` },
          { title: '7. Children', body: `SiteVerify is not directed at children under the age of 13. We do not knowingly collect any information from children. If you believe a child has submitted information through our platform, please contact us.` },
          { title: '8. Changes to This Policy', body: `We may update this Privacy Policy from time to time as our platform grows. When we make changes, we will update the date at the top of this page.` },
          { title: '9. Contact Us', body: `Email: danielameh1027@gmail.com\nCompany: Fix9ja Technologies LTD\nLocation: Abuja, Nigeria` },
        ].map(s => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>SiteVerify · A product of <strong className="text-gray-600">Fix9ja Technologies LTD</strong></p>
        <p className="mt-1">Registered with the Corporate Affairs Commission · Abuja, Nigeria</p>
      </div>
    </div>
  )
}
