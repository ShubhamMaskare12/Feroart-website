import { services } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Services.css'

const icons: Record<string, string> = {
  concept: 'M9.53 14.53l8-8a4 4 0 1 0-5.66-5.66l-8 8a4 4 0 1 0 5.66 5.66zM3 22h18M3 18h18',
  material: 'M3 6l3 1m0 0l-3 9a5 5 0 0 0 6 6l3-9-3-1m0 0L9 3m6 6l3-1m0 0l-3 9a5 5 0 0 1-6 6l3-9 3 1z',
  manufacturing: 'M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6M9 11h.01M15 11h.01',
  execution: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
}

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="services" className="services">
      <div ref={ref} className={`container ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="services__header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Turnkey Solutions, <span className="accent">Start to Finish</span>
          </h2>
        </div>

        <div className="services__intro">
          <p>
            At Ferroart, we take the hassle out of creating your dream space by providing everything
            under one roof. From conceptualization and design to material selection, manufacturing,
            and execution, we handle it all with precision and expertise.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="service-card__number">0{i + 1}</div>
              <div className="service-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[service.icon]} />
                </svg>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
