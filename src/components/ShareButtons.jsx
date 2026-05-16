import { Check, Copy, Linkedin, Share2 } from 'lucide-react'
import { useState } from 'react'

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  async function shareNative() {
    if (navigator.share) {
      await navigator.share({ title, url })
    } else {
      await copyLink()
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={copyLink}
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent/70 hover:text-white"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent/70 hover:text-white"
      >
        <Linkedin size={16} />
        LinkedIn
      </a>
      <button
        onClick={shareNative}
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent/70 hover:text-white"
      >
        <Share2 size={16} />
        Share
      </button>
    </div>
  )
}
