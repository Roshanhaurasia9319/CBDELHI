import React from "react";
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import Card from '../../components/Cards/Card';
import '../../App.css';

const cards = [
  {
    imgLink: "/images/dream11.jpg",
    title: "Dream11",
    offerBonus: "₹200 Cashback + 50% Bonus",
    userRatings: 25032,
    highlight: "25,000+ fantasy teams created today on Dream11",
  },
  {
    imgLink: "/images/fanFight.png",
    title: "FanFight",
    offerBonus: "₹150 Welcome Bonus",
    userRatings: 10475,
    highlight: "Over 12,000 fantasy matches played today on FanFight",
  },
  {
    imgLink: "/images/MyTeam11.jpg",
    title: "MyTeam11",
    offerBonus: "₹100 Bonus + 25% Cashback",
    userRatings: 9871,
    highlight: "More than 9,000 players joined leagues today on MyTeam11",
  },
];

const FantasyApp = () => {
  return (
    <div className='container'>
      <h1>Fantasy Apps</h1>
      <h2 class="emoji">🤩</h2>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          offerBonus={card.offerBonus}
          highlight={card.highlight}
          imgLink={card.imgLink}
        />
      ))}
        <LegalSection />
        <BettingInfo />
    </div>
  );
};

export default FantasyApp;
