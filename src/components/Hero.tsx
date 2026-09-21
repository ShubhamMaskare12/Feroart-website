import { useEffect, useState, useCallback } from 'react'
import { heroSlides } from '../data'
import './Hero.css'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__slides">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero__overlay" />
          </div>
        ))}
      </div>

      <div className={`hero__content ${loaded ? 'hero__content--loaded' : ''}`}>
        <div className="hero__text">
          <span className="hero__label">Ferroart Interiors</span>
          <h1 className="hero__title">
            {heroSlides[current].title}
          </h1>
          <p className="hero__subtitle">{heroSlides[current].subtitle}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn-gold" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <span>View Our Work</span>
            </a>
            <a href="#about" className="btn-outline hero__btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Discover Ferroart
            </a>
          </div>
        </div>
      </div>

      <div className="hero__controls">
        <button className="hero__arrow" onClick={prev} aria-label="Previous slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="hero__dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="hero__arrow" onClick={next} aria-label="Next slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
