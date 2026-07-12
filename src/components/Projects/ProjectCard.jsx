import { motion } from 'framer-motion'
import { Github, ExternalLink, CheckCircle2, Layers3 } from 'lucide-react'
import TechBadge from '../common/TechBadge'
import './Projects.css'

export default function ProjectCard({ project, index }) {
  const isComplete = project.statusTone === 'complete'

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-card__top">
        <div>
          <span className={`project-card__status project-card__status--${project.statusTone}`}>
            <span className="project-card__status-dot" aria-hidden="true" />
            {project.status}
          </span>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-link"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <Github size={18} aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-link"
              aria-label={`Open live demo of ${project.title}`}
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      {isComplete ? (
        <>
          <div className="project-card__stack-grid">
            <div>
              <span className="project-card__label">Backend</span>
              <div className="project-card__chip-row">
                {project.stack.backend.map((t) => (
                  <TechBadge key={t} label={t} size="sm" />
                ))}
              </div>
            </div>
            <div>
              <span className="project-card__label">Frontend</span>
              <div className="project-card__chip-row">
                {project.stack.frontend.map((t) => (
                  <TechBadge key={t} label={t} size="sm" />
                ))}
              </div>
            </div>
            <div>
              <span className="project-card__label">Database</span>
              <div className="project-card__chip-row">
                {project.stack.database.map((t) => (
                  <TechBadge key={t} label={t} size="sm" />
                ))}
              </div>
            </div>
            <div>
              <span className="project-card__label">Tools &amp; Deployment</span>
              <div className="project-card__chip-row">
                {project.stack.tools.map((t) => (
                  <TechBadge key={t} label={t} size="sm" />
                ))}
              </div>
            </div>
          </div>

          <div className="project-card__two-col">
            <div>
              <span className="project-card__label">
                <CheckCircle2 size={14} aria-hidden="true" /> Implemented Features
              </span>
              <ul className="project-card__list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="project-card__label">
                <Layers3 size={14} aria-hidden="true" /> Engineering Concepts
              </span>
              <ul className="project-card__list">
                {project.concepts.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="project-card__philosophy">
            {project.philosophy.map((step, i) => (
              <span key={step} className="project-card__philosophy-step">
                {step}
                {i < project.philosophy.length - 1 && <span className="project-card__philosophy-arrow">→</span>}
              </span>
            ))}
          </div>

          <div className="project-card__two-col">
            <div>
              <span className="project-card__label">Core Modules</span>
              <ul className="project-card__list">
                {project.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="project-card__label">Planned Features</span>
              <p className="project-card__planned-note">
                These features are planned and not yet implemented.
              </p>
              <ul className="project-card__list project-card__list--planned">
                {project.plannedFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </motion.article>
  )
}
