'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`SiteVerify Contact: Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:danielameh1027@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const whatsappMessage = encodeURIComponent('Hello SiteVerify, I have a question about your platform.')
  const whatsappUrl = `https://wa.me/2349161366544?text=${whatsappMessage}`

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Contact Us</h1>
        <p className="text-gray-500 leading-relaxed">
          Have a question, want to report a scam, or just want to say hello? We are here and we will get back to you as soon as we can.
        </p>
      </div>

      {/* Contact options */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="text-2xl mb-2">📧</div>
          <div className="text-sm font-bold text-gray-900 mb-1">Email Us</div>
          <a href="mailto:danielameh1027@gmail.com" className="text-xs text-green-600 hover:underline break-all">
            danielameh1027@gmail.com
          </a>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 transition-colors rounded-2xl border border-green-400 p-5 shadow-sm block"
        >
          <div className="text-2xl mb-2">💬</div>
          <div className="text-sm font-bold text-white mb-1">WhatsApp Us</div>
          <div className="text-xs text-green-100">Click to chat directly</div>
        </a>
      </div>

      {/* Contact form */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Send a Message</h2>

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-bold text-green-700 mb-1">Message ready to send</div>
            <p className="text-sm text-gray-500">Your email app should have opened. If it did not, email us directly at danielameh1027@gmail.com</p>
            <button onClick={() => { setSent(false); setName(''); setEmail(''); setMessage('') }} className="mt-4 text-sm text-green-600 font-semibold hover:underline">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Chidi Okonkwo"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="e.g. chidi@gmail.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell us what is on your mind..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
            >
              Send Message →
            </button>
            <p className="text-xs text-gray-400 text-center">
              We usually respond within 24 hours on business days.
            </p>
          </form>
        )}
      </div>

      {/* Company info */}
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>SiteVerify is a product of <strong className="text-gray-600">Fix9ja Technologies LTD</strong></p>
        <p className="mt-1">Registered with the Corporate Affairs Commission · Abuja, Nigeria</p>
      </div>

    </div>
  )
}
