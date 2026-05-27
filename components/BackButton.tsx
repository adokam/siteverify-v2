'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      Back
    </button>
  )
}
