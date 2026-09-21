import { contactInfo } from '../data'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">Ferroart</span>
            <span className="footer__logo-sub">Interiors Pvt. Ltd.</span>
          </div>
          <p className="footer__tagline">
            Our surroundings have an impact on how we feel every day and can influence our well-being.
            Hence team Ferroart firmly believes in functional and luxurious interiors.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__link-list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Phone</span>
            <span>{contactInfo.phones.join(' · ')}</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Email</span>
            <span>{contactInfo.email}</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Address</span>
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Ferroart Interiors Pvt. Ltd. All rights reserved.</span>
          <span>Established 1995 · Nagpur, India</span>
        </div>
      </div>
    </footer>
  )
}
