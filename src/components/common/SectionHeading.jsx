import { motion } from 'framer-motion'
import './common.css'

/**
 * Consistent heading block used at the top of every major section.
 * eyebrow: short mono-styled label (e.g. "About")
 * title: the large heading text
 * description: optional supporting paragraph
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </motion.div>
  )
}
