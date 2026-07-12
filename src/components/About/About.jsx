import { motion } from 'framer-motion'
import profile from '../../data/profile'
import highlights from '../../data/about'
import SectionHeading from '../common/SectionHeading'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Focused on building things that work end-to-end."
        />

        <div className="about__grid">
          <div className="about__copy">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="about__highlights">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.id}
                  className="about__card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="about__card-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="about__card-title">{h.title}</h3>
                  <p className="about__card-desc">{h.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
