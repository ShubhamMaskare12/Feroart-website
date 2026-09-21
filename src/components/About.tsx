import { aboutImage, stats } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="about">
      <div ref={ref} className={`container about__inner ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="about__visual">
          <div className="about__image-main">
            <img src={aboutImage} alt="Ferroart interior design" loading="lazy" />
          </div>
          <div className="about__badge">
            <span className="about__badge-year">1995</span>
            <span className="about__badge-text">Established</span>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            A Legacy of <span className="accent">Excellence</span> in Design
          </h2>
          <p className="about__lead">
            Headquartered in Nagpur, the company is helmed by the visionary duo Sagar and Leena
            Bhadbhade, whose dedication to perfection has been the cornerstone of Ferroart's
            enduring success.
          </p>
          <p className="about__body">
            Over the years, Ferroart has become synonymous with bespoke interior solutions that
            seamlessly blend aesthetics with functionality. Our designs are more than just visually
            appealing — they are tailored to meet the unique needs and aspirations of every client.
            Whether it's a sophisticated residential space, a chic commercial environment, or an
            expansive hospitality project, we approach each project with meticulous attention to detail.
          </p>
          <p className="about__body">
            Our legacy includes over 2,000 successful projects, each a testament to our unwavering
            commitment to excellence. With an in-house manufacturing facility, we ensure that every
            element of our designs is crafted with precision and care, delivering turnkey solutions
            from conceptualization to execution.
          </p>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="about__stat"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
