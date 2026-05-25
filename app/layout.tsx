import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'SiteVerify — Is This Website Safe? Free Scam Checker Nigeria',
  description: 'Check if any website, investment platform, or app is safe or a scam. AI-powered scam detector trusted in Nigeria. Free, instant, accurate.',
  keywords: 'scam checker nigeria, is this site legit, fake investment sites nigeria, website safety checker, online scam detector',
  openGraph: {
    title: 'SiteVerify — Is This Website Safe?',
    description: 'Check if any website or investment platform is safe or a scam. Free AI-powered scam detector.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteVerify — Is This Website Safe?',
    description: 'Check if any website or investment platform is safe or a scam.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SiteVerify" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <NavBar />
        <main>{children}</main>
        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-5xl mx-auto px-4 py-10 text-center text-sm text-gray-400">
            <p className="mb-2">🛡️ <strong className="text-gray-600">SiteVerify</strong> — Nigeria's trusted scam detection platform</p>
            <p>Powered by AI · Not legal or financial advice · Always verify independently</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400">
              <a href="/blog" className="hover:text-green-600">Blog</a>
              <a href="/check" className="hover:text-green-600">Check a Site</a>
              <a href="/report" className="hover:text-green-600">Report a Scam</a>
              <a href="/about" className="hover:text-green-600">About</a>
              <a href="/contact" className="hover:text-green-600">Contact</a>
              <a href="/privacy" className="hover:text-green-600">Privacy Policy</a>
              <a href="/terms" className="hover:text-green-600">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
