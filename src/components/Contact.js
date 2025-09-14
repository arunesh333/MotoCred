import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Ready to start your journey with MotoCred? Fill out the form below and we'll
          get back to you soon.
        </p>
      </div>
      <div className="contact-container">
        <div className="enquiry-form-card">
          <h3 className="form-title">Enquiry Form</h3>
          <form className="enquiry-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNo">Mobile No. *</label>
                <input type="tel" id="mobileNo" placeholder="Enter your mobile number" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" id="city" placeholder="Enter your city" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" rows="4" placeholder="Tell us about your requirements or questions..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Enquiry</button>
          </form>
        </div>
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h4 className="info-title">Email Us</h4>
            <a href="mailto:arunstonks" className="info-link">hello@motocred.com</a>
          </div>
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h4 className="info-title">Call Us</h4>
            <a href="tel:+919789834211" className="info-link">+91 97898 34211</a>
          </div>
        </div>
      </div>
    </div>
  );
}