import './whatWeOffer.css';

const offers = [
  { icon: '🚀', title: 'Zero Hassle', description: 'We manage the entire process, from listing to paperwork, so you can enjoy a completely stress-free experience.' },
  { icon: '🛡️', title: 'Trust Built-In', description: 'Every bike is MotoCred certified after a serious inspection and document verification, ensuring quality.' },
  { icon: '💡', title: 'Smart Pricing', description: 'Our prices are based on real-time market data and trends ensuring a fair value that you can be confident in.' },
  { icon: '🏠', title: 'Doorstep Services', description: 'Experience ultimate convenience with our doorstep service. We handle all vehicle pickups and deliveries for you.' },
  { icon: '💻', title: 'Digitalize Ur work', description: 'Move your business online with our easy-to-use platform. Track inspections and list your vehicles, etc.' },
  { icon: '🔧', title: 'Be a Vehicle Inspector', description: 'Elevate your professional standing by becoming a MotoCred Certified Inspector.' },
  { icon: '📊', title: 'Eased Dashboard', description: 'Effortlessly track your earnings, manage your schedule, and view new customer leads in real-time.' },
  { icon: '📈', title: 'Grow with us', description: 'We bring brand, tech, and statewide reach to help scale your business and income.' },
];

export default function WhatWeOffer() {
  const customerOffers = offers.slice(0, 4);
  const dealerOffers = offers.slice(4);

  return (
    <div className="what-we-offer-section">
      <h2 className="section-title">
        What we Offer
      </h2>
      <hr className="title-underline" />
      <div className="offer-grid-container">
        {/* For Customers Section */}
        <div className="offer-group customer-group">
          <div className="group-text">
            <h3>For Customers</h3>
            <p>Experience hassle-free buying and selling</p>
          </div>
          <div className="offer-cards-row">
            {customerOffers.map((offer, index) => (
              <div key={index} className="offer-card">
                <div className="initial-content">
                  <div className="offer-icon">{offer.icon}</div>
                  <div className="offer-title">{offer.title}</div>
                </div>
                <div className="hover-content">
                  <p>{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Dealers & Mechanics Section */}
        <div className="offer-group dealer-group">
          <div className="offer-cards-row">
            {dealerOffers.map((offer, index) => (
              <div key={index} className="offer-card">
                <div className="initial-content">
                  <div className="offer-icon">{offer.icon}</div>
                  <div className="offer-title">{offer.title}</div>
                </div>
                <div className="hover-content">
                  <p>{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="group-text">
            <h3>For Dealers & Mechanics</h3>
            <p>Grow your business with our platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
