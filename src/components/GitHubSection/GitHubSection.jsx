import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight, Radar } from 'lucide-react'
import profile from '../../data/profile'
import projects from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import './GitHubSection.css'

const currentFocus = [
  'Data Structures & Algorithms practice',
  'Spring Boot authentication patterns',
  'Placement Preparation Platform build-out',
]

export default function GitHubSection() {
  const [statsImageFailed, setStatsImageFailed] = useState(false)
  const statsImgSrc = `https://github-readme-stats.vercel.app/api?username=${profile.github.username}&show_icons=true&hide_border=true&bg_color=10141D&title_color=4C8DFF&text_color=9AA3B8&icon_color=9B7BFF`

  return (
    <section id="github" className="section github">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="GitHub Activity"
          description="Where the code for these projects actually lives, and what I'm currently pushing commits toward."
        />

        <div className="github__grid">
          <motion.div
            className="github__profile-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="github__profile-icon">
              <Github size={26} aria-hidden="true" />
            </div>
            <h3 className="github__profile-name">@{profile.github.username}</h3>
            <p className="github__profile-desc">
              Repositories for every project featured on this site, including work in progress.
            </p>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary github__profile-btn"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <div className="github__focus">
              <span className="github__focus-label">
                <Radar size={13} aria-hidden="true" /> Current Coding Focus
              </span>
              <ul className="github__focus-list">
                {currentFocus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="github__side"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="github__repos">
              <span className="github__side-label">Featured Repositories</span>
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github__repo-link"
                >
                  <span className="github__repo-name">{p.title}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="github__stats">
              <span className="github__side-label">Contribution Activity</span>
              {!statsImageFailed ? (
                <img
                  src={statsImgSrc}
                  alt={`GitHub contribution statistics for ${profile.github.username}`}
                  className="github__stats-img"
                  loading="lazy"
                  onError={() => setStatsImageFailed(true)}
                />
              ) : (
                <div className="github__stats-fallback">
                  <p>
                    Live contribution stats are unavailable right now. Visit the GitHub profile
                    directly to see current activity.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
