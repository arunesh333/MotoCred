import './OathSection.css';

export default function OathSection() {
  return (
    <div className="oath-section">
      <div className="oath-container">
        <blockquote className="oath-quote">
          <div className="quote-mark">“</div>
          "At MotoCred, we go beyond just connecting buyers and sellers, we take full
          responsibility for every step of the transaction. From thorough inspections to
          seamless paperwork, every stage is handled with complete transparency.
          Whether you're buying or selling, we ensure a safe, hassle-free, and
          trustworthy experience."
        </blockquote>
        <div className="oath-author">
          <div className="author-avatar">M</div>
          <div className="author-info">
            <p className="author-name">MotoCred Team</p>
            <p className="author-title">Your Trusted Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
}