import { welcomeImages } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Welcome.css'

export default function Welcome() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="welcome">
      <div ref={ref} className={`container welcome__inner ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="welcome__images">
          {welcomeImages.map((img, i) => (
            <div
              key={i}
              className="welcome__image-wrap"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <img src={img} alt={`Interior detail ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="welcome__text">
          <span className="section-label">Welcome to Ferroart</span>
          <h2 className="section-title">
            Redefining Luxury and <span className="accent">Innovation</span> in Interior Design
          </h2>
          <p className="welcome__lead">
            Ferroart Interiors Private Limited is a pioneer in creating bespoke luxury interiors,
            blending artistic innovation with precision craftsmanship.
          </p>
          <p className="welcome__body">
            With nearly three decades of expertise, the company transforms spaces into elegant,
            functional masterpieces tailored to client preferences. Offering a seamless experience
            from concept to completion, Ferroart combines cutting-edge technology with an in-house
            manufacturing setup to ensure impeccable quality.
          </p>
          <p className="welcome__body">
            Recognized for its award-winning designs, the firm has a global perspective, infusing
            international trends with timeless elegance. From luxurious homes to distinctive
            commercial spaces, Ferroart redefines interiors with sophistication and style.
          </p>
          <a href="#about" className="btn-gold welcome__btn" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span>Our Story</span>
          </a>
        </div>
      </div>
    </section>
  )
}
