import './Aboutus.css';

const teamMembers = [
  {
    icon: '🛵',
    title: 'Automobile Enthusiasts',
    description: 'Passionate riders who understand the love for two-wheelers',
  },
  {
    icon: '💻',
    title: 'Tech Professionals',
    description: 'Building cutting-edge solutions for seamless experiences',
  },
  {
    icon: '🔧',
    title: 'Expert Mechanics',
    description: 'Certified professionals ensuring quality and safety',
  },
];

export default function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Buying or selling a used two-wheeler often feels uncertain — endless listings,
          tough haggling, and a mess of paperwork. We created MotoCred to change that.
          <br /><br />
          Started by Automobile enthusiasts, Tech professionals, and Expert mechanics,
          we've built a trusted, hassle-free way for you to buy and sell bikes with absolute
          confidence and convenience.
        </p>

        <div className="team-cards-row">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-icon">{member.icon}</div>
              <h4 className="team-title">{member.title}</h4>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="our-mission-box">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-text">
            To revolutionize the pre-owned two-wheeler market by building trust, ensuring
            transparency, and delivering exceptional experiences that make buying and
            selling bikes as simple as it should be.
          </p>
        </div>
      </div>
    </div>
  );
}