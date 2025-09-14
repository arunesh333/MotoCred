import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-logo">
              <h4>MotoCred</h4>
              <p className="logo-subtitle">Smart - Safe - Swift</p>
            </div>
            <p className="footer-description">
              Ride ahead with confidence. Buy and sell pre-owned two-wheelers with certified
              inspections, transparent pricing, and zero doubts.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#offer">What we Offer</a></li>
              <li><a href="#partner">Partner with Us</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                hello@motocred.com
              </li>
              <li>
                <span className="contact-icon">📞</span>
                +91 12345 67890
              </li>
              <li>
                <span className="contact-icon">📍</span>
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom-row">
          <p className="copyright">© 2024 MotoCred. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}