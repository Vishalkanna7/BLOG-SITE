import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'

export default function MainLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen font-sans">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Outlet />
      <Footer />
    </div>
  )
}
