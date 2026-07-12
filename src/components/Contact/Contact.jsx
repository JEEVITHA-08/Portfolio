import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import profile from '../../data/profile'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { submitContactForm } from '../../utils/contactService'
import './Contact.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const validate = (data) => {
    const nextErrors = {}
    if (!data.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!data.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (!data.message.trim()) {
      nextErrors.message = 'Please write a message.'
    } else if (data.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      await submitContactForm(formData)
      setStatus('success')
      setStatusMessage("Thanks — your message has been sent. I'll get back to you soon.")
      setFormData(initialForm)
    } catch (err) {
      setStatus('error')
      setStatusMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your message. Please try again.'
      )
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful."
          description="I'm open to software development opportunities, collaborations, and conversations about Java, backend development, and full-stack projects."
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={`mailto:${profile.email}`} className="contact__info-item">
              <span className="contact__info-icon">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">{profile.email}</span>
              </div>
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-item"
            >
              <span className="contact__info-icon">
                <Linkedin size={18} aria-hidden="true" />
              </span>
              <div>
                <span className="contact__info-label">LinkedIn</span>
                <span className="contact__info-value">Connect with me</span>
              </div>
            </a>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-item"
            >
              <span className="contact__info-icon">
                <Github size={18} aria-hidden="true" />
              </span>
              <div>
                <span className="contact__info-label">GitHub</span>
                <span className="contact__info-value">@{profile.github.username}</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
                />
                {errors.name && (
                  <span id="name-error" className="contact__field-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                />
                {errors.email && (
                  <span id="email-error" className="contact__field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <span id="subject-error" className="contact__field-error" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="contact__field-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={status === 'loading'}
              icon={status === 'loading' ? Loader2 : Send}
              iconSpin={status === 'loading'}
              ariaLabel="Send message"
              className="contact__submit"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <div className="contact__status contact__status--success" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{statusMessage}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error" role="alert">
                <AlertCircle size={18} aria-hidden="true" />
                <span>{statusMessage}</span>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
