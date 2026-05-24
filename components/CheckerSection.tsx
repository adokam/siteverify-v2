'use client'

import { useState } from 'react'

type ScanMode = 'quick' | 'deep' | 'investment' | 'clone'

interface Finding {
  icon: string
  title: string
  detail: string
}

interface ForensicFlag {
  icon: string
  label: string
  value: string
  status: 'good' | 'bad' | 'warn'
}

interface AgendaMotive {
  icon: string
  title: string
  description: string
  level: 'high' | 'medium' | 'low'
}

interface AnalysisResult {
  verdict: 'SAFE' | 'WARNING' | 'DANGER'
  verdict_label: string
  summary: string
  risk_score: number
  forensic?: { flags: ForensicFlag[] }
  scores?: { label: string; value: number }[]
  why_flagged?: string[]
  findings?: Finding[]
  agenda?: { summary: string; motives: AgendaMotive[] }
  recommendation: string
}

const MODES: { id: ScanMode; icon: string; label: string }[] = [
  { id: 'quick', icon: '⚡', label: 'Quick Scan' },
  { id: 'deep', icon: '🔬', label: 'Deep Scan' },
  { id: 'investment', icon: '💰', label: 'Investment Check' },
  { id: 'clone', icon: '👥', label: 'Clone Detector' },
]

const EXAMPLES = ['victuslink.top', 'pxesng.com', 'binance.com', 'payfastearn.com']

export default function CheckerSection() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<ScanMode>('quick')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')
  const [agendaOpen, setAgendaOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const scoreColor = (v: number) => v >= 70 ? 'text-green-600' : v >= 40 ? 'text-yellow-600' : 'text-red-600'
  const scoreBg = (v: number) => v >= 70 ? 'bg-green-500' : v >= 40 ? 'bg-yellow-500' : 'bg-red-500'
  const riskColor = (v: number) => v >= 70 ? 'text-red-600' : v >= 40 ? 'text-yellow-600' : 'text-green-600'

  const verdictStyles = {
    SAFE: { bg: 'bg-green-50 border-green-200', icon: '✅', label: 'text-green-700', action: 'Safe to Proceed' },
    WARNING: { bg: 'bg-yellow-50 border-yellow-200', icon: '⚠️', label: 'text-yellow-700', action: 'Proceed With Caution' },
    DANGER: { bg: 'bg-red-50 border-red-200', icon: '❌', label: 'text-red-700', action: 'Avoid Completely' },
  }

  async function scan() {
    if (!input.trim()) { setError('Please enter a URL or describe the site first.'); return }
    setError(''); setResult(null); setLoading(true); setAgendaOpen(false)
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: input.trim(), mode })
      })
      if (!res.ok) throw new Error(`Server error: ${res.status}`)
      const data = await res.json()
      setResult(data.analysis)
    } catch (err: any) {
      setError(err.message || 'Scan failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function shareResult() {
    if (navigator.share) {
      navigator.share({ title: 'SiteVerify Result', text: '🛡️ I just scanned a site with SiteVerify!', url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const vs = result ? verdictStyles[result.verdict] : null

  return (
    <div className="w-full max-w-2xl mx-auto text-left">

      {/* Scanner box — cyber feel */}
      <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-green-400 text-xs font-mono uppercase tracking-widest">Scanner Ready</span>
        </div>

        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) scan() }}
          placeholder="Paste URL or describe the site... e.g. victuslink.top"
          rows={3}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-green-500 transition-colors resize-none mb-4"
        />

        {/* Modes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {MODES.map(m => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg border text-xs font-medium transition-all ${mode === m.id ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
            >
              <span className="text-base">{m.icon}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={scan}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Scanning...
            </>
          ) : '🛡️  Scan Now'}
        </button>

        {/* Examples */}
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-gray-500 text-xs font-mono">Try:</span>
          {EXAMPLES.map(ex => (
            <button key={ex} onClick={() => setInput(ex)} className="text-xs font-mono text-gray-400 hover:text-green-400 border border-gray-700 px-2 py-1 rounded transition-colors">
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
          ⚠️ {error}
        </div>
      )}

      {/* Loading steps */}
      {loading && (
        <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <div className="space-y-3">
            {['Fetching site data from the web...', 'Checking domain age & registration...', 'Running forensic scam pattern analysis...', 'Checking Google Safe Browsing...', 'Generating verdict & risk score...'].map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-4 h-4 rounded-full border-2 border-green-400 border-t-transparent animate-spin flex-shrink-0" style={{ animationDelay: `${i * 0.2}s` }}></div>
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {result && vs && (
        <div className="mt-6 space-y-4">

          {/* Decision banner */}
          <div className={`rounded-2xl p-5 border ${vs.bg} flex items-start gap-4`}>
            <span className="text-4xl flex-shrink-0">{vs.icon}</span>
            <div>
              <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${vs.label}`}>{vs.action}</div>
              <div className="text-xl font-extrabold text-gray-900">{result.verdict_label}</div>
              <div className="text-sm text-gray-600 mt-1 leading-relaxed">{result.summary}</div>
            </div>
          </div>

          {/* Nigerian mode badge */}
          {mode === 'investment' && (
            <div className="inline-flex items-center gap-2 text-xs font-mono bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-full">
              🇳🇬 Nigerian Investment Fraud Intelligence Active
            </div>
          )}

          {/* Forensic risk score */}
          {result.forensic && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">🔬 Forensic Risk Score</span>
                <span className={`text-4xl font-extrabold ${riskColor(result.risk_score)}`}>
                  {result.risk_score}<span className="text-lg text-gray-300">/100</span>
                </span>
              </div>
              <div className="space-y-2">
                {result.forensic.flags.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm py-2 px-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span>{f.icon}</span>
                    <span className="flex-1 text-gray-700">{f.label}</span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${f.status === 'bad' ? 'bg-red-50 text-red-600 border border-red-200' : f.status === 'good' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-yellow-50 text-yellow-600 border border-yellow-200'}`}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scores */}
          {result.scores && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {result.scores.map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">{s.label}</div>
                  <div className={`text-2xl font-extrabold ${scoreColor(s.value)}`}>{s.value}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div className={`h-full rounded-full ${scoreBg(s.value)} transition-all duration-1000`} style={{ width: `${s.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Why flagged */}
          {result.why_flagged && result.why_flagged.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Why Is It Flagged?</div>
              <div className="space-y-2">
                {result.why_flagged.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-500 flex-shrink-0 mt-0.5">🚩</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Findings */}
          {result.findings && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Findings</div>
              <div className="space-y-3">
                {result.findings.map((f, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{f.title}</div>
                      <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agenda — what does this site want */}
          {result.agenda && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button onClick={() => setAgendaOpen(!agendaOpen)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-gray-900">👁️ What does this site really want?</div>
                    <div className="text-xs text-gray-500 mt-0.5">{result.agenda.summary}</div>
                  </div>
                </div>
                <span className={`text-gray-400 transition-transform ${agendaOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {agendaOpen && (
                <div className="px-5 pb-5 border-t border-gray-50 space-y-4 pt-4">
                  {result.agenda.motives.map((m, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{m.icon}</span>
                      <div>
                        <div className="font-bold text-sm text-gray-900">{m.title}</div>
                        <div className="text-sm text-gray-500 mt-1 leading-relaxed">{m.description}</div>
                        <span className={`inline-block text-xs font-mono mt-2 px-2 py-0.5 rounded border ${m.level === 'high' ? 'bg-red-50 text-red-600 border-red-200' : m.level === 'medium' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' : 'bg-green-50 text-green-600 border-green-200'}`}>
                          {m.level} concern
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Recommendation */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Recommendation</div>
            <p className="text-sm text-gray-700 leading-relaxed">{result.recommendation}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <button onClick={shareResult} className="flex items-center gap-2 bg-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors">
              📤 {copied ? 'Copied!' : 'Share Result'}
            </button>
            <button onClick={() => { setResult(null); setInput(''); setError('') }} className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-gray-300 transition-colors">
              ← New Scan
            </button>
          </div>

        </div>
      )}
    </div>
  )
}
