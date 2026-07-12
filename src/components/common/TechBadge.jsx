import './common.css'

/**
 * Small chip used to display a technology or skill name.
 * `highlight` visually emphasizes primary technologies (Java, Spring Boot, PostgreSQL, React).
 */
export default function TechBadge({ label, highlight = false, size = 'md' }) {
  return (
    <span className={`tech-badge tech-badge--${size} ${highlight ? 'tech-badge--highlight' : ''}`}>
      {label}
    </span>
  )
}
