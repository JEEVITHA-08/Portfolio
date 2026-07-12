import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'
import useScrolled from '../../hooks/useScrolled'
import useActiveSection from '../../hooks/useActiveSection'
import profile from '../../data/profile'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id))

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the mobile menu on escape key.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label={`${profile.name} — home`}
        >
          {profile.initial}
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-link"
            aria-label="GitHub profile"
          >
            <Github size={19} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={19} aria-hidden="true" />
          </a>
          <a
            href={profile.resumePath}
            download
            className="navbar__resume-btn"
          >
            <FileText size={16} aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>

        <button
          className="navbar__menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="navbar__mobile-links" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`navbar__mobile-link ${activeId === link.id ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumePath}
                download
                className="navbar__resume-btn navbar__resume-btn--mobile"
                onClick={() => setMenuOpen(false)}
              >
                <FileText size={16} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
              <div className="navbar__mobile-socials">
                <a href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <Github size={20} aria-hidden="true" />
                </a>
                <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
