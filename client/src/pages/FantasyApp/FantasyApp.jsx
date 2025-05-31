import React from "react";
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import Card from '../../components/Cards/Card';
import '../../App.css';

const cards = [
  {
    imgLink: "/images/fun88.png",
    title: "Fun88",
    offerBonus: "200% Welcome Bonus on First Deposit",
    userRatings: 6282,
    highlight: " 655 people won In India on Fun88 yesterday",
    link:"https://cbdelhi.in/betting/fun88/",
  },
  {
    imgLink: "/images/vision11.jpg",
    title: "Vision11",
    offerBonus: "Get a Bonus of ₹100 on your first deposit",
    userRatings: 2982,
    highlight: "",
    link:"https://www.vision11.in/",
  },
  {
    imgLink: "/images/ballebaazi.jpg",
    title: "BalleBaazi",
    offerBonus: "Get ₹50 bonus on your first deposit.",
    userRatings: 9871,
    highlight: "",
    link:"https://cbdelhi.in/betting/fun88/"
  },
  {
    imgLink: "/images/my11circle.jpg",
    title: "My11Circle",
    offerBonus: "Download The App To Get ₹500 Bonus",
    userRatings: 9871,
    highlight: "",
    link:"https://cbdelhi.in/betting/fun88/"
  },
  {
    imgLink: "/images/myteam11.jpg",
    title: "MyTeam11",
    offerBonus: "Download Now to Get ₹100 Bonus",
    userRatings: 9871,
    highlight: "",
    link:"https://cbdelhi.in/betting/fun88/"
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
          redirectLink = {card.link}
        />
      ))}
        <LegalSection />
        <BettingInfo />
    </div>
  );
};

export default FantasyApp;
