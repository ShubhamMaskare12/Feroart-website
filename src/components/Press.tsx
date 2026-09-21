import { pressItems } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Press.css'

export default function Press() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="press" className="press">
      <div ref={ref} className={`container ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="press__header">
          <span className="section-label">Press & Recognition</span>
          <h2 className="section-title">
            Award-Winning <span className="accent">Design</span>
          </h2>
          <p className="press__intro">
            Our dedication to redefining luxury has earned us prestigious recognitions
            and features in renowned publications.
          </p>
        </div>

        <div className="press__grid">
          {pressItems.map((item, i) => (
            <article
              key={i}
              className="press-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="press-card__image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="press-card__overlay" />
                <span className="press-card__source">{item.source}</span>
              </div>
              <div className="press-card__content">
                <h3 className="press-card__title">{item.title}</h3>
                <p className="press-card__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
