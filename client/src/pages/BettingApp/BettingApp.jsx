import React from 'react';
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import Card from "../../components/Cards/Card"
import '../../App.css';
import { cards } from "../Home/Home"





const BettingApp = () => {
  return (
    <div className='container'>
      <h1>Betting Apps</h1>
      <h2 class="emoji">🤩</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} offerBonus={card.offerBonus} highlight={card.highlight} imgLink={card.imgLink} redirectLink={card.redirectLink} />
      ))}
      <LegalSection />
      <BettingInfo />

      <div
  style={{
    backgroundImage: 'url(/images/egyptian-bg.png)', // Make sure this path matches your file
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#d4af37',
    padding: '40px 20px',
    borderRadius: '16px',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '30px auto',
  }}
>
  <h2
    style={{
      fontSize: 'clamp(24px, 5vw, 36px)',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '1px 1px 4px #000',
    }}
  >
    CONCLUSION
  </h2>
  <p
    style={{
      fontSize: 'clamp(16px, 4vw, 20px)',
      lineHeight: '1.8',
      color: '#fff',
      maxWidth: '900px',
      margin: '0 auto',
      textShadow: '1px 1px 3px #000',
    }}
  >
    In this article, we highlighted the best Indian betting apps, thoroughly reviewed and evaluated by our experts.
    Each platform has been carefully assessed to ensure safety, reliability, and user satisfaction.
    We strongly encourage responsible gambling and thank you for trusting our recommendations.
  </p>
</div>



    </div>
  );
}

export default BettingApp;