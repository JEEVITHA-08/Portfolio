import { motion } from 'framer-motion'
import skillCategories, { primaryTech } from '../../data/skills'
import SectionHeading from '../common/SectionHeading'
import TechBadge from '../common/TechBadge'
import './Skills.css'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies I use to build backend services, connect them to a frontend, and reason through problems along the way."
        />

        <motion.div
          className="skills__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.id} className="skills__card" variants={cardVariants}>
                <div className="skills__card-header">
                  <div className="skills__card-icon">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 className="skills__card-title">{category.title}</h3>
                </div>
                <div className="skills__chip-row">
                  {category.items.map((item) => (
                    <TechBadge key={item} label={item} highlight={primaryTech.includes(item)} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
