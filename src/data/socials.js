import { Github, Linkedin, Mail } from 'lucide-react'
import profile from './profile'

// Centralized list of social/contact links used by Navbar, Hero, Contact and Footer.
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    icon: Github,
    href: profile.github.url,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: profile.linkedin.url,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    icon: Mail,
    href: `mailto:${profile.email}`,
    external: false,
  },
]

export default socials
