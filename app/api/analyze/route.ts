import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { input, mode } = await req.json()
    if (!input || typeof input !== 'string' || input.length > 500) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    let gsbResult = null
    const urlMatch = input.match(/https?:\/\/[^\s]+|(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/)
    if (urlMatch && process.env.GOOGLE_SAFE_BROWSING_API_KEY) {
      const rawUrl = urlMatch[0]
      const targetUrl = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`
      try {
        const gsbRes = await fetch(
          `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${process.env.GOOGLE_SAFE_BROWSING_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              client: { clientId: 'siteverify', clientVersion: '2.0.0' },
              threatInfo: {
                threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
                platformTypes: ['ANY_PLATFORM'],
                threatEntryTypes: ['URL'],
                threatEntries: [{ url: targetUrl }]
              }
            })
          }
        )
        const gsbData = await gsbRes.json()
        const matches = gsbData.matches || []
        gsbResult = { flagged: matches.length > 0, threats: matches.map((m: any) => m.threatType), url: targetUrl }
      } catch (e) { console.error('GSB error:', e) }
    }

    const modeContext: Record<string, string> = {
      quick: 'Standard safety check. Fast but thorough.',
      deep: 'Deep forensic analysis. Be very detailed in every field.',
      investment: 'Investment fraud check with Nigerian scam intelligence. Watch for Ponzi schemes, fake ROI, unregistered platforms, VIP membership traps, fake crypto sites, unrealistic daily returns. Check SEC Nigeria registration.',
      clone: 'Clone site detection. Check if this site impersonates a legitimate brand. Look for typosquatting and domain tricks.'
    }

    const systemPrompt = `You are SiteVerify AI, a professional cybersecurity and fraud analyst specializing in Nigerian internet fraud and global scam detection.

Scan mode: "${mode}" — ${modeContext[mode] || modeContext.quick}

Use web_search to research this site. Look for scam reports, domain info, user complaints, news, and registration details.

Return ONLY valid JSON. No markdown. No text outside JSON.

{
  "verdict": "SAFE" | "WARNING" | "DANGER",
  "verdict_label": "Short phrase",
  "summary": "2 to 3 sentence plain English summary",
  "risk_score": 0-100,
  "forensic": {
    "flags": [
      { "icon": "emoji", "label": "Domain Age", "value": "e.g. 12 days", "status": "bad" | "warn" | "good" },
      { "icon": "emoji", "label": "SSL Certificate", "value": "Present or Missing", "status": "good" | "bad" },
      { "icon": "emoji", "label": "Domain Ownership", "value": "Anonymous or Public", "status": "bad" | "good" },
      { "icon": "emoji", "label": "Blacklist Status", "value": "Clean or Flagged", "status": "good" | "bad" },
      { "icon": "emoji", "label": "Scam Reports", "value": "None found or Multiple found", "status": "good" | "bad" }
    ]
  },
  "scores": [
    { "label": "Trust Score", "value": 0-100 },
    { "label": "Transparency", "value": 0-100 },
    { "label": "Red Flags", "value": 0-100 },
    { "label": "Regulation", "value": 0-100 }
  ],
  "why_flagged": ["reason 1", "reason 2", "reason 3"],
  "findings": [
    { "icon": "emoji", "title": "Finding title", "detail": "Explanation" }
  ],
  "agenda": {
    "summary": "One sentence describing what this site is really after",
    "motives": [
      { "icon": "emoji", "title": "Motive name", "description": "Plain explanation", "level": "high" | "medium" | "low" }
    ]
  },
  "recommendation": "Clear direct advice. Be specific."
}

Notes: risk_score 0 means safe, 100 means extreme danger. Red Flags score of 100 means no flags found, 0 means extreme flags. Only include why_flagged for WARNING or DANGER verdicts. Do not use em dashes anywhere in your response. Write naturally without hyphens connecting clauses.`

    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY!,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'tools-2024-04-04'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: systemPrompt,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{ role: 'user', content: `Analyze this for safety: ${input}` }]
      })
    })

    if (!claudeRes.ok) {
      const errBody = await claudeRes.text()
      throw new Error(`Claude API error ${claudeRes.status}: ${errBody}`)
    }

    const claudeData = await claudeRes.json()
    const textBlock = claudeData.content?.filter((b: any) => b.type === 'text')?.map((b: any) => b.text)?.join('') || ''
    const clean = textBlock.replace(/```json|```/gi, '').trim()
    const analysis = JSON.parse(clean)

    return NextResponse.json({ analysis, gsb: gsbResult })

  } catch (err: any) {
    console.error('Analyze error:', err)
    return NextResponse.json({ error: err.message || 'Analysis failed' }, { status: 500 })
  }
}
