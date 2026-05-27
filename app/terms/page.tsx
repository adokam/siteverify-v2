import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Terms of Service | SiteVerify',
  description: 'Terms of Service for SiteVerify, a product of Fix9ja Technologies LTD.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <BackButton />
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: May 2026</p>
        <p className="text-gray-500 mt-3 leading-relaxed">
          Please read these terms carefully before using SiteVerify. By using our platform, you agree to these terms.
        </p>
      </div>
      <div className="space-y-6">
        {[
          {
            title: '1. About SiteVerify',
            body: `SiteVerify is a website safety and scam detection platform operated by Fix9ja Technologies LTD, a company registered with the Corporate Affairs Commission of Nigeria.

Our platform uses artificial intelligence and publicly available data to help users assess whether a website, investment platform, or online business appears to be safe or potentially fraudulent.`
          },
          {
            title: '2. No Professional Advice',
            body: `SiteVerify provides information for general reference purposes only. Nothing on this platform should be treated as legal advice, financial advice, investment advice, or professional cybersecurity advice.

Our AI-generated verdicts are based on publicly available data and automated analysis. They are not guaranteed to be accurate, complete, or up to date. Always conduct your own research and consult qualified professionals before making financial or legal decisions.`
          },
          {
            title: '3. Limitation of Liability',
            body: `Fix9ja Technologies LTD and SiteVerify are not liable for any loss, damage, or harm you experience as a result of relying on information provided by this platform.

This includes financial losses from investing in a platform we rated as Safe, losses from avoiding a platform we incorrectly flagged as Dangerous, or any other direct or indirect losses arising from your use of SiteVerify.

You use this platform at your own risk.`
          },
          {
            title: '4. Acceptable Use',
            body: `By using SiteVerify you agree that you will not use our platform for any illegal purpose, attempt to reverse engineer or overload our systems, submit abusive or defamatory content, or misrepresent our verdicts to unfairly damage legitimate businesses.

We reserve the right to block access to any user who violates these terms.`
          },
          {
            title: '5. Accuracy of Results',
            body: `SiteVerify makes reasonable efforts to provide accurate and helpful analysis. The internet changes rapidly. A website that was flagged as a scam may have changed ownership. A website that appears clean today may turn fraudulent tomorrow.

We recommend using SiteVerify as one tool among many and not as your only means of verifying a platform.`
          },
          {
            title: '6. Intellectual Property',
            body: `All content on SiteVerify, including the platform design, written content, and analysis methodology, is the property of Fix9ja Technologies LTD. You may not reproduce or distribute our content without written permission.`
          },
          {
            title: '7. Third Party Links',
            body: `SiteVerify may reference external services. We are not responsible for the content or practices of any third party websites. A reference on SiteVerify does not constitute an endorsement.`
          },
          {
            title: '8. Changes to These Terms',
            body: `We may update these Terms of Service as our platform evolves. Your continued use of SiteVerify after changes are made means you accept the updated terms.`
          },
          {
            title: '9. Governing Law',
            body: `These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from your use of SiteVerify will be subject to the jurisdiction of Nigerian courts.`
          },
          {
            title: '10. Contact',
            body: `Email: danielameh1027@gmail.com\nCompany: Fix9ja Technologies LTD\nLocation: Abuja, Nigeria`
          },
        ].map(s => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>SiteVerify is a product of <strong className="text-gray-600">Fix9ja Technologies LTD</strong></p>
        <p className="mt-1">Registered with the Corporate Affairs Commission. Abuja, Nigeria.</p>
      </div>
    </div>
  )
}
