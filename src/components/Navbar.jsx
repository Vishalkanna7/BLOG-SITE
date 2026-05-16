import { Moon, Search, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ theme, onToggleTheme }) {
  const linkClass = ({ isActive }) =>
    `nav-link rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'nav-link-active shadow-sm' : ''
    }`

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="brand-mark grid h-10 w-10 place-items-center rounded-xl border border-line font-mono text-sm font-bold text-accent">
            VK
          </span>
          <span className="brand-text hidden text-sm font-bold tracking-wide sm:block">
            Tech Notes
          </span>
        </NavLink>
        <div className="nav-pill flex items-center gap-1 rounded-full border border-line p-1">
          <NavLink to="/" className={linkClass}>
            Blogs
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/#blogs"
            className="nav-icon grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-accent/60"
            aria-label="Search blogs"
          >
            <Search size={18} />
          </a>
          <button
            onClick={onToggleTheme}
            className="nav-icon grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-accent/60"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
