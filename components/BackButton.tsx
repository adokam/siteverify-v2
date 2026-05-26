'use client'

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors"
    >
      ← Back
    </button>
  )
}
