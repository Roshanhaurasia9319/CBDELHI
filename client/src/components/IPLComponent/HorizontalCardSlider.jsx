import React from "react";
import "./HorizontalCardSlider.css";

const bettingSites = [
  {
    name: "Megapari",
    bonus: "Welcome bonus on your 1st deposit up to 175882 INR + 150FS.",
    image: "/images/firstCard.png",
  },
  {
    name: "PariMatch",
    bonus: "Bonus 150% Up To ₹20,000",
    image: "/images/secondCard.jpg",
  },
  {
    name: "BC GAME",
    bonus: "Welcome Pack upto 1,50,000 INR.",
    image: "/images/thirdCard.png",
  },
  {
    name: "PinUp",
    bonus: "Welcome bonus on your 1st deposit up to ₹4,50,000 INR + 250 FREE SPINS.",
    image: "/images/fourthCard.png",
  },
   {
    name: "9WINZ",
    bonus: "Claim Bonus 150% Up To ₹1,50,000",
    image: "/images/fifthCard.png",
  },
   {
    name: "1xBet",
    bonus: "100% Bonus up to ₹20,000",
    image: "/images/sixthCard.webp",
  },
   {
    name: "Fun88",
    bonus: "200% Welcome Bonus on First Deposit",
    image: "/images/seventhCard.png",
  },
   {
    name: "10Cric",
    bonus: "100% deposit bonus up to ₹1,00,000 + 40 free spins",
    image: "/images/eightCard.png",
  },
   {
    name: "Jackpot Guru",
    bonus: "Bonus 100% up to ₹10,000 + 20 Free Spins",
    image: "/images/nineCard.jpg",
  },
   {
    name: "Casibee",
    bonus: "Bonus Up to ₹100,000 and 20 Free Spins!",
    image: "/images/tenCard.webp",
  },
  

];

const HorizontalCardSlider = () => {
  const duplicatedSites = [...bettingSites, ...bettingSites]; // to loop infinitely

  return (
    <div className="slider-container">
      <h2 className="slider-title">🧿 New Betting Sites</h2>
      <div className="slider-track-wrapper">
        <div className="slider-track">
          {duplicatedSites.map((site, index) => (
            <div className="slider-card" key={index}>
              <img src={site.image} alt={site.name} className="site-image" />
              <h3 className="site-name">{site.name}</h3>
              <p className="site-bonus">{site.bonus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardSlider;
