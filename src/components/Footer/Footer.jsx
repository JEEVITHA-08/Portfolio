import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../../data/profile'
import SocialLink from '../common/SocialLink'
import './Footer.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__role">{profile.role}</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <SocialLink href={profile.github.url} icon={Github} label="GitHub profile" size={18} />
          <SocialLink href={profile.linkedin.url} icon={Linkedin} label="LinkedIn profile" size={18} />
          <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Send an email" external={false} size={18} />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="footer__closing">{profile.closingMessage}</span>
        </div>
      </div>
    </footer>
  )
}
