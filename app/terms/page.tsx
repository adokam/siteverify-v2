'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | SiteVerify',
  description: 'Terms of Service for SiteVerify — a product of Fix9ja Technologies LTD.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      
      <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors">
  ← Back
</button>

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
            content: `SiteVerify is a website safety and scam detection platform operated by Fix9ja Technologies LTD, a company registered with the Corporate Affairs Commission of Nigeria.

Our platform uses artificial intelligence and publicly available data to help users assess whether a website, investment platform, or online business appears to be safe or potentially fraudulent.`
          },
          {
            title: '2. No Professional Advice',
            content: `SiteVerify provides information for general reference purposes only. Nothing on this platform should be treated as legal advice, financial advice, investment advice, or professional cybersecurity advice.

Our AI-generated verdicts are based on publicly available data and automated analysis. They are not guaranteed to be accurate, complete, or up to date. A site we rate as Safe may still carry risks, and a site we flag as Dangerous may in some cases be legitimate.

Always conduct your own research and consult qualified professionals before making financial or legal decisions.`
          },
          {
            title: '3. Limitation of Liability',
            content: `Fix9ja Technologies LTD and SiteVerify are not liable for any loss, damage, or harm you experience as a result of relying on information provided by this platform.

This includes but is not limited to financial losses from investing in a platform we rated as Safe, losses from avoiding a platform we incorrectly flagged as Dangerous, or any other direct or indirect losses arising from your use of SiteVerify.

You use this platform at your own risk.`
          },
          {
            title: '4. Acceptable Use',
            content: `By using SiteVerify you agree that you will not:

- Use our platform for any illegal purpose
- Attempt to reverse engineer, scrape, or overload our systems
- Submit content that is abusive, defamatory, or harmful
- Use our platform to target or harass individuals or businesses without legitimate reason
- Misrepresent our verdicts or use them to unfairly damage the reputation of legitimate businesses

We reserve the right to block access to any user who violates these terms.`
          },
          {
            title: '5. Accuracy of Results',
            content: `SiteVerify makes reasonable efforts to provide accurate and helpful analysis. However, the internet changes rapidly. A website that was flagged as a scam may have changed ownership. A website that appears clean today may turn fraudulent tomorrow.

We do not guarantee that our database of scam patterns is complete or current. We recommend using SiteVerify as one tool among many and not as your only means of verifying a platform.`
          },
          {
            title: '6. Intellectual Property',
            content: `All content on SiteVerify, including the platform design, written content, and analysis methodology, is the property of Fix9ja Technologies LTD. You may not reproduce, distribute, or use our content without written permission.

You retain ownership of any content you submit to our platform, such as URLs or descriptions you paste into the scanner.`
          },
          {
            title: '7. Third Party Links',
            content: `SiteVerify may contain links to third party websites or reference external services. We are not responsible for the content, accuracy, or practices of any third party websites. A link on SiteVerify does not constitute an endorsement.`
          },
          {
            title: '8. Changes to These Terms',
            content: `We may update these Terms of Service as our platform evolves. When we make significant changes, we will update the date at the top of this page. Your continued use of SiteVerify after changes are made means you accept the updated terms.`
          },
          {
            title: '9. Governing Law',
            content: `These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from your use of SiteVerify will be subject to the jurisdiction of Nigerian courts.`
          },
          {
            title: '10. Contact',
            content: `If you have questions about these terms, please contact us:

Email: danielameh1027@gmail.com
Company: Fix9ja Technologies LTD
Location: Abuja, Nigeria`
          },
        ].map((section) => (
          <div key={section.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</div>
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
