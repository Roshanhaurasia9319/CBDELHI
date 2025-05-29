import React from "react";
import Card from "../../components/Cards/Card";
import CompanyBanner from "../../components/CompanyBanner/CompanyBanner";
import NewsCard from "../../components/NewsCard/NewsCard";
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import './Home.css'

const cards = [
  {
    imgLink: '/images/firstCard.png',
    title: 'MegaPari',
    offerBonus: '₹175,882 + 150 FS',
    userRatings: 9924,
    highlight: '14,327 people won in India on Megapari',
  },
  {
    imgLink: '/images/secondCard.jpg',
    title: 'My11Circle',
    offerBonus: '₹225,770 + 110 FS',
    userRatings: 12213,
    highlight: '18,927 people won in India on Megapari',
  },
  {
    imgLink: '/images/thirdCard.png',
    title: 'MegaPari',
    offerBonus: '₹175,882 + 150 FS',
    userRatings: 9924,
    highlight: '14,327 people won in India on Megapari',
  }
];


const Home = () =>{
    return(
        
        <div className="home">
            
          <h1>Best Betting Sites in India for IPL 2024</h1>
            <h2 class="emoji">🤩</h2>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} offerBonus={card.offerBonus} highlight={card.highlight} imgLink={card.imgLink} />
            ))}
            <CompanyBanner />
            <NewsCard />
            <LegalSection />
            <BettingInfo />
    
        </div>
       
    )
}

export default Home;