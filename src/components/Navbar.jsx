import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Set theme to dark permanently
    document.body.setAttribute('data-theme', 'dark')
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const wasMobileMenuOpen = mobileMenuOpen
    setMobileMenuOpen(false)

    try {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        if (wasMobileMenuOpen) {
          // Delay scrolling on mobile to let the closing drawer animation start,
          // which prevents layout recalculations from aborting smooth scrolling.
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        } else {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } catch (err) {
      console.error("Scroll failed:", err)
    }
  }

  const handleDownload = (e) => {
    e.preventDefault()
    fetch('/Deva_M_S_Resume.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Deva_M_S_Resume.pdf')
        document.body.appendChild(link)
        link.click()
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
        window.URL.revokeObjectURL(url)
      })
      .catch((error) => console.error('Download failed:', error))
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#top"
          onClick={handleLogoClick}
          className="flex items-center gap-1.5 font-bold text-xl tracking-tight text-white transition hover:opacity-90 cursor-pointer"
        >
          <span>DEVA M S</span>
        </a>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="transition hover:text-cyan text-slate-300 cursor-pointer"
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="/Deva_M_S_Resume.pdf"
            onClick={handleDownload}
            className="rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-white transition hover:text-cyan cursor-pointer"
          >
            {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-5 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="block py-1 transition hover:text-cyan text-slate-300 cursor-pointer"
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-white/5 pt-4">
                <a
                  href="/Deva_M_S_Resume.pdf"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    handleDownload(e)
                  }}
                  className="inline-flex w-full justify-center items-center rounded-full bg-cyan py-2.5 text-xs font-semibold text-white transition hover:opacity-90 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer text-center"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
