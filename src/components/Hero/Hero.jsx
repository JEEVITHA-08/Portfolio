import { motion } from 'framer-motion'
import { ArrowRight, FileDown, Github, Linkedin, Mail } from 'lucide-react'
import profile from '../../data/profile'
import { primaryTech } from '../../data/skills'
import TechBadge from '../common/TechBadge'
import Button from '../common/Button'
import SocialLink from '../common/SocialLink'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__greeting">
            {profile.greeting} <span aria-hidden="true">👋</span>
          </motion.p>

          <motion.h1 variants={item} className="hero__heading">
            {profile.heroHeadingLines.map((line, i) => (
              <span className="hero__heading-line" key={i}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="hero__description">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="hero__availability">
            <span className="hero__availability-dot" aria-hidden="true" />
            {profile.availability}
          </motion.div>

          <motion.div variants={item} className="hero__cta-row">
            <Button href="#projects" onClick={scrollToProjects} variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href={profile.resumePath} download variant="secondary" icon={FileDown} iconPosition="left">
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            <SocialLink href={profile.github.url} icon={Github} label="GitHub profile" />
            <SocialLink href={profile.linkedin.url} icon={Linkedin} label="LinkedIn profile" />
            <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Send an email" external={false} />
          </motion.div>

          <motion.div variants={item} className="hero__tags">
            {['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'REST API'].map((tech) => (
              <TechBadge
                key={tech}
                label={tech.toUpperCase()}
                highlight={primaryTech.includes(tech)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
