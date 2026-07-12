import { motion } from 'framer-motion'
import './common.css'

/**
 * Shared button used for CTAs across the site.
 * variant: 'primary' | 'secondary' | 'ghost'
 * Renders as an <a> when href is provided, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  iconSpin = false,
  type = 'button',
  disabled = false,
  target,
  download,
  ariaLabel,
  className = '',
}) {
  const combinedClassName = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon size={18} aria-hidden="true" className={iconSpin ? 'btn__icon-spin' : undefined} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon size={18} aria-hidden="true" className={iconSpin ? 'btn__icon-spin' : undefined} />
      )}
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { y: -2 },
    whileTap: disabled ? {} : { y: 0, scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        target={target}
        download={download}
        onClick={onClick}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  )
}
