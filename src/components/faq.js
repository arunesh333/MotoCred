import './Faq.css';
import { useState } from 'react';

const faqs = [
  { question: 'How is MotoCred different from OLX or other classified sites?', answer: 'Unlike traditional classified sites, MotoCred takes full responsibility for every step of the transaction, ensuring certified inspections, transparent pricing, and secure paperwork. We eliminate the guesswork and provide a trustworthy experience from start to finish.' },
  { question: 'What does "MotoCred Certified" actually mean?', answer: "A MotoCred Certified vehicle has passed a comprehensive, multi-point inspection by a professional mechanic, and its documents have been thoroughly verified. This certification guarantees the bike's quality and ensures it is ready for a hassle-free transfer." },
  { question: 'Who handles the RC transfer and paperwork?', answer: " MotoCred's dedicated team manages the entire RC transfer and all necessary paperwork. We handle all the formalities with the RTO, so you don’t have to worry about bureaucratic delays or complications." },
  { question: 'Is it safe to sell through MotoCred? Do I have to meet the buyer?', answer: 'Selling through MotoCred is completely safe. You do not have to meet the buyer in person. We handle all communications, vehicle inspections, and transfers, ensuring your privacy and security throughout the process.' },
  { question: 'I am a dealer/mechanic in Tamil Nadu. How can I partner with MotoCred?', answer: 'We would love to partner with you! Please use the "Partner with us today" button above or the contact form on our site. We will get in touch with you to discuss how we can work together to grow your business.' },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section">
      <div className="faq-intro">
        <h2 className="faq-title">
          Frequently Asked Questions
          <hr className="title-underline" />
        </h2>
        <p className="faq-subtitle">
          Got questions? We've got answers. Find everything you need to know about MotoCred.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">↓</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
