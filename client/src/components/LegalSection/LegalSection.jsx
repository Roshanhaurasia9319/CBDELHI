import React from 'react';
import './LegalSection.css';

const LegalSection = () => {
  return (
    <section className="legal-section">
      <div className="text-content">
        <h1>
          Is Online Betting Legal in India? <br />
          <span>For IPL 2024</span> 🤔
        </h1>

        <p className="welcome">
          Welcome to{' '}
          <a href="https://www.cbdelhi.in" target="_blank" rel="noopener noreferrer">
            www.cbdelhi.in
          </a>
          . When you hear the word <strong>“online betting for IPL 2024”</strong>, the first thing that comes to your mind
          most probably is <strong>“Is Online Betting Legal in India?”</strong> And if yes, how do we know which betting website is legal or not?
        </p>

        <p>
          This is the first question that emerges in every Indian person’s mind while talking about online betting sites. To clear up this confusion,
          we have prepared this paragraph, especially for you guys. There is no federal law in India that forbids <strong>online betting in India</strong>.
        </p>

        <p>
          So, we can say that betting websites are legal in India for IPL 2024 matches, as long as they are being operated by offshore companies.
          Yes, you heard it right! You can now get the benefits of online betting websites without any worry of legal action.
          However, the central government has given the responsibility to the states related to betting in their respective states.
        </p>

        <button className="betting-btn">All Betting websites 👉</button>
      </div>

      <div className="image-section">
        <img src="/images/legal.png" alt="Legal Illustration" />
      </div>
    </section>
  );
};

export default LegalSection;
