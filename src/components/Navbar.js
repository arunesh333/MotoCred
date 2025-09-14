import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MotoCred</div>
        <ul className="nav-links">
          <li><a href="#offer">What we Offer</a></li>
          <li><a href="#partner">Partner with Us</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
}