import React from 'react';
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import Card from '../../components/Cards/Card';
import '../../App.css';
import {cards} from "../Home/Home"

// const cards = [
//   {
//     imgLink: '/images/leoVegas.png',
//     title: 'LeoVegas',
//     offerBonus: '₹80,000 + 150 Free Spins',
//     userRatings: 12761,
//     highlight: '12,391 Indians won in LeoVegas casino this week',
//   },
//   {
//     imgLink: '/images/royalpanda.jpg',
//     title: 'Royal Panda',
//     offerBonus: '₹70,000 + 100 Free Spins',
//     userRatings: 11024,
//     highlight: '10,532 people hit jackpots on Royal Panda India',
//   },
//   {
//     imgLink: '/images/spinCasino.png',
//     title: 'Spin Casino',
//     offerBonus: '₹1,00,000 Welcome Bonus',
//     userRatings: 9513,
//     highlight: '8,764 Indians played slots on Spin Casino today',
//   },
// ];


const CasinoGameApp = () => {
    return (
        <div className='container'>
            <h1>Casino Gameing Apps</h1>
            <h2 class="emoji">🤩</h2>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} offerBonus={card.offerBonus} highlight={card.highlight} imgLink={card.imgLink} />
            ))}
            <LegalSection />
            <BettingInfo />
        </div>
    );
}

export default CasinoGameApp;