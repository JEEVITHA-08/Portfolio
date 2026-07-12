import { motion } from 'framer-motion'
import journey from '../../data/journey'
import SectionHeading from '../common/SectionHeading'
import './Journey.css'

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title="Engineering Journey"
          description="What I'm actively building depth in right now, organized by area rather than a percentage score."
        />

        <div className="journey__grid">
          {journey.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.id}
                className="journey__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="journey__card-header">
                  <div className="journey__card-icon">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 className="journey__card-title">{stage.title}</h3>
                </div>
                <ul className="journey__card-list">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
