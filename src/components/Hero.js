import './Hero.css';
import HeroPic from '../assets/heropic.png'; // adjust path based on folder

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <div className="hero-certified-badge">Certified</div>
        <div className="hero-trusted-badge">Trusted</div>
        <img 
        src={HeroPic} 
        alt="Blue and orange motorcycle" 
        className="hero-image" />

      </div>

      <div className="hero-content">
        <h1 className="hero-title">MotoCred</h1>
        <h2 className="hero-subtitle">Smart - Safe - Swift</h2>
        <p className="hero-description">
          Ride ahead with confidence. Buy and sell pre-owned two-wheelers with certified
          inspections, transparent pricing, and zero doubts.
        </p>
        <div className="hero-buttons">
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}