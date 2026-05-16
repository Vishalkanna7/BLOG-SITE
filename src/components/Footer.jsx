import { Linkedin, Mail } from 'lucide-react'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishalkannan7', icon: Linkedin },
  { label: 'Email', href: 'mailto:vishalkanna2003@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Vishal Kannan Blogs — built for technical writing, LinkedIn shares, and recruiter-friendly reading.</p>
        <div className="flex gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-slate-300 transition hover:border-accent/70 hover:text-white"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
