import './Partner.css';

const partnerTypes = [
  "Used Two-Wheeler Dealers & Consultants",
  "Certified Mechanics & Service Experts",
  "Insurance Agents & Brokers",
  "Vehicle Finance Agents & Lenders"
];

export default function Partner() {
  return (
    <div className="partner-section">
      <div className="partner-content">
        <h2 className="partner-title">Partner with Us
          <hr className="title-underline" />
        </h2>
        <p className="partner-description">
          At MotoCred, our vision is to create a seamless and trustworthy
          ecosystem for pre-owned vehicles. We know we can't achieve this alone,
          which is why we welcome professional partners who share our
          commitment to quality and customer satisfaction.
        </p>
        <h4 className="partner-list-heading">Our Partner Network Includes:</h4>
        <ul className="partner-list">
          {partnerTypes.map((item, index) => (
            <li key={index}>
              <span className="bullet-icon">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="network-card">
        <div className="card-top-decor-orange"></div>
        <div className="card-top-decor-blue"></div>
        <div className="card-content">
          <div className="card-icon">👥</div>
          <h3 className="card-heading">Join Our Network</h3>
          <p className="card-description">
            Be part of a growing ecosystem that's revolutionizing the pre-owned
            vehicle market
          </p>
        <button className="partner-btn">Partner with us today</button>

        </div>
      </div>
    </div>
  );
}