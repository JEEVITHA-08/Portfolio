import './common.css'

export default function SocialLink({ href, icon: Icon, label, external = true, size = 18 }) {
  return (
    <a
      href={href}
      className="social-link"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
    >
      <Icon size={size} aria-hidden="true" />
    </a>
  )
}
