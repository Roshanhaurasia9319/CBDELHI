import React from 'react';
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import Card from "../../components/Cards/Card"
import '../../App.css';

const cards = [
  {
    imgLink: '/images/megapari.png',
    title: 'MegaPari',
    offerBonus: '₹60,000 + Free Bets',
    userRatings: 15832,
    highlight: 'Over 20,000 Indians won on Betway last week',
  },
  {
    imgLink: '/images/10cric.png',
    title: '10CRIC',
    offerBonus: '₹1,00,000 + 20 Free Spins',
    userRatings: 13450,
    highlight: '19,783 players from India played on 10CRIC today',
  },
  {
    imgLink: '/images/parimatch.jpg',
    title: 'Parimatch',
    offerBonus: '₹20,000 + Cashback',
    userRatings: 14329,
    highlight: '16,942 Indians claimed a bonus on Parimatch',
  }
];


const BettingApp = () => {
    return (
        <div className='container'>
            <h1>Betting Apps</h1>
            <h2 class="emoji">🤩</h2>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} offerBonus={card.offerBonus} highlight={card.highlight} imgLink={card.imgLink} />
            ))}
            <LegalSection />
            <BettingInfo />
        </div>
    );
}

export default BettingApp;