import { Github, Linkedin, Mail } from 'lucide-react'
import profile from './profile'

// Centralized list of social/contact links used by Navbar, Hero, Contact and Footer.
export const socials = [
  {
    id: 'https://github.com/Boopathi2025',
    label: 'GitHub',
    icon: Github,
    href: profile.github.url,
    external: true,
  },
  {
    id: 'https://www.linkedin.com/in/boopathi-s-1b57a127a',
    label: 'LinkedIn',
    icon: Linkedin,
    href: profile.linkedin.url,
    external: true,
  },
  {
    id: 'tyson275835@gmail.com',
    label: 'Email',
    icon: Mail,
    href: `mailto:${profile.email}`,
    external: false,
  },
]

export default socials
