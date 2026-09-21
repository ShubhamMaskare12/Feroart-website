import { useState } from 'react'
import { contactInfo } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`container ${visible ? 'fade-up visible' : 'fade-up'}`}>
        <div className="contact__header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Create <span className="accent">Something Beautiful</span>
          </h2>
          <p className="contact__intro">
            Ready to transform your space? Reach out to begin your design journey with Ferroart.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-label">Call Now</span>
              {contactInfo.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="contact__info-value">
                  {phone}
                </a>
              ))}
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Email Now</span>
              <a href={`mailto:${contactInfo.email}`} className="contact__info-value">
                {contactInfo.email}
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Location</span>
              <span className="contact__info-value">{contactInfo.address}</span>
            </div>
            <div className="contact__info-decoration" />
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />
                </svg>
                <h3>Thank You</h3>
                <p>Your message has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="contact__field">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="contact__field-row">
                  <div className="contact__field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="contact__field">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-gold contact__submit">
                  <span>Send Message</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
