import React from 'react';
import './BettingInfo.css';

const BettingInfo = () => {
  return (
    <section className="betting-section">
      <div className="betting-container">
        <h2 className="section-title">Why Should You Trust Us? 🤝</h2>
        <p className="betting-text">
          We’ve spent a decade navigating the world of online betting, learning from both our failures and successes. Now, with experience and insight, we only recommend thoroughly analyzed and trustworthy websites.
        </p>

        <h2 className="section-title">Future of Online Betting in India 📈</h2>
        <p className="betting-text">
          India, being a massive market, holds huge potential. Legalization could bring substantial revenue through taxation, turning online betting into a structured and beneficial industry for the nation.
        </p>

        <h2 className="section-title">How We Rank Betting Sites ⬆️</h2>
        <ul className="betting-list">
          <li><strong>License & Security:</strong> Verified by authorities like the UKGC or MGA.</li>
          <li><strong>Payment Methods:</strong> Preference to UPI-enabled options like Google Pay and Paytm.</li>
          <li><strong>Withdrawals & Deposits:</strong> Competitive thresholds and seamless processing.</li>
          <li><strong>Betting Odds:</strong> Prioritized sites with favorable odds.</li>
        </ul>

        <h2 className="section-title">FAQs ❓</h2>
        <ul className="betting-faq">
          <li><strong>Minimum Age:</strong> 18 years.</li>
          <li><strong>Legality:</strong> Legal if hosted offshore.</li>
          <li><strong>Support:</strong> 24/7 customer service offered by top sites.</li>
          <li><strong>Min. Deposit:</strong> Usually starts from Rs. 200/-.</li>
          <li><strong>Site Availability:</strong> Carefully curated list available.</li>
          <li><strong>Indian Players:</strong> Most top sites accept Indian users.</li>
          <li><strong>Alternatives to Bet365:</strong> Try Megapari or Parimatch.</li>
          <li><strong>Banned Sites:</strong> Betway, Bet365 are restricted in some regions.</li>
          <li><strong>Top Bookie:</strong> Fun88 leads the pack.</li>
        </ul>

        <h2 className="section-title">Online Bonuses in India 💰</h2>
        <p className="betting-text">
          Discover generous offers like:
        </p>
        <ul className="bonus-list">
          <li>Deposit Bonus</li>
          <li>Welcome Bonus</li>
          <li>Loyalty Bonus</li>
          <li>Free Bets</li>
        </ul>
        <p className="cta-text">Click "Claim" next to your preferred site to seize your bonus now!</p>
      </div>
    </section>
  );
};

export default BettingInfo;
