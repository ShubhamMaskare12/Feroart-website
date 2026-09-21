import { useState } from 'react'
import { projects } from '../data'
import type { Project } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="projects">
      <div ref={ref} className={`container ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="projects__header">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="projects__intro">
            Each project is a journey of collaboration, creativity, and craftsmanship —
            a masterpiece that tells a story.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card ${i % 5 === 0 || i % 5 === 3 ? 'project-card--tall' : ''}`}
              onClick={() => setSelected(project)}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-card__overlay" />
              </div>
              <div className="project-card__info">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__name">{project.name}</h3>
                <div className="project-card__meta">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <span className="project-card__view">View Project →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="project-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal__close" onClick={() => setSelected(null)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="project-modal__image">
              <img src={selected.image} alt={selected.name} />
            </div>
            <div className="project-modal__content">
              <span className="section-label">{selected.category}</span>
              <h3 className="project-modal__title">{selected.name}</h3>
              <p className="project-modal__desc">{selected.description}</p>
              <div className="project-modal__meta">
                <div>
                  <span className="project-modal__meta-label">Location</span>
                  <span className="project-modal__meta-value">{selected.location}</span>
                </div>
                <div>
                  <span className="project-modal__meta-label">Year</span>
                  <span className="project-modal__meta-value">{selected.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
