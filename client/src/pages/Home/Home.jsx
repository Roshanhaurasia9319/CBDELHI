import React from "react";
import Card from "../../components/Cards/Card";
import CompanyBanner from "../../components/CompanyBanner/CompanyBanner";
import NewsCard from "../../components/NewsCard/NewsCard";
import LegalSection from "../../components/LegalSection/LegalSection";
import BettingInfo from "../../components/BettingInfo/BettingInfo";
import './Home.css'

export const cards = [
  {
    imgLink: '/images/megapari.png',
    title: 'MegaPari',
    offerBonus: 'Welcome bonus on your 1st deposit up to 175882 INR+150FS.',
    userRatings: 9924,
    highlight: '14,327 people won in India on Megapari',
    redirectLink : "https://megapari-fun.app.link/registration",
  },
  {
    imgLink: '/images/parimatch.jpg',
    title: 'PariMatch',
    offerBonus: 'Bonus 150% Up To ₹20,000',
    userRatings: 9815,
    highlight: ' 1405 people won In India on Parimatch yesterday',
    redirectLink : "https://parimatchglobal.com/en/cricket/live?qtag=a30884_t61301198_c3444_s&x_pm_click=ac3053425dd8164c40496f73fd428ae5&redirect_creative_id=3444"
  },
  {
    imgLink: '/images/bcgame.png',
    title: 'BC.Game',
    offerBonus: 'Welcome bonus on your 1st deposit up to 1,50,000 INR',
    userRatings: 10924,
    highlight: ' 15327 people won In India on BCGAME yesterday',
    redirectLink : "https://bcgame.app.link/register",
  },
  {
    imgLink: '/images/pinup.png',
    title: 'Pin-UP',
    offerBonus: 'Welcome Bonus Up to Rs. 4,50,000/- and 250 Free Spins',
    userRatings: 9924,
    highlight: ' 14327 people won In India on Pinup yesterday',
    redirectLink : "https://form-plinkox-geo.pu214ev.com/?form_email=%7Bform_email%7D&form_phone=%7Bform_phone%7D&lrrPath=casino%2Fprovider%2Fsmartsoft%2Fplinkox&p_id=%7Bp_id%7D&pc=30&s1=seo1&s2=&s3=&s4=&s5=&source=https%3A%2F%2Fcbdelhi.in%2F&st=nuVe0FOe&startTime=1748666573505387086&trId=d0t8hj946vtc30h3abs0",
  },
  {
    imgLink: '/images/9winz.png',
    title: '9WINZ',
    offerBonus: 'Bonus 150% Up To ₹1,50,000',
    userRatings: 8301,
    highlight: ' 1184 people won In India on 9WINZ yesterday',
    redirectLink : "https://www.9winz.com/?accounts=*&register=*&btag=816763_683a88ec99bee2128fe859f98a5921830113f_ap&ap_inner=YmM%3D",
  },
  {
    imgLink: '/images/1xbet.webp',
    title: '1xBet',
    offerBonus: '100% Bonus up to ₹20,000',
    userRatings: 7504,
    highlight: '  906 people won In India on 1xBet yesterday',
    redirectLink : "https://ind.1xbet.com/",
  },
  {
    imgLink: '/images/fun88.png',
    title: 'Fun88',
    offerBonus: '200% Welcome Bonus on First Deposit',
    userRatings: 6282,
    highlight: ' 655 people won In India on Fun88 yesterday',
    redirectLink : "https://m.gofun88.in/",
  },
  {
    imgLink: '/images/10cric.png',
    title: '10Cric',
    offerBonus: 'Bonus 100% upto ₹1,00,000 + 40 free spins',
    userRatings: 8910,
    highlight: ' 1319 people won In India on 10Cric yesterday',
    redirectLink : "https://www.10crics.com/",
  },
  {
    imgLink: '/images/jackpotguru.jpg',
    title: 'Jackpot Guru',
    offerBonus: 'Bonus 100% up to ₹10,000 + 20 Free Spins',
    userRatings: 7802,
    highlight: ' 1082 people won In India on Jackpot Guru yesterday',
    redirectLink : "https://affiliate.jackpotguru.com/affiliates/Account/Login?ReturnUrl=%2Faffiliates%2F#",
  },
  {
    imgLink: '/images/casibee.webp',
    title: 'Casibee',
    offerBonus: 'Bonus Up to ₹100,000 and 20 Free Spins!',
    userRatings: 8450,
    highlight: ' 1227 people won In India on Casibee yesterday',
    redirectLink : "https://ntrfr.casibee.com/redirect.aspx?pid=3757351&lpid=1449&bid=17662",
  },
  {
    imgLink: '/images/bigboost.jpg',
    title: 'Big Boost',
    offerBonus: '100% Deposit Bonus Up to ₹100,000',
    userRatings: 8539,
    highlight: ' 1304 people won In India on Big Boost yesterday',
    redirectLink : "https://bigboost.com/in",
  }


];


const Home = () =>{
    return(
        
        <div className="home">
            
          <h1>Best Betting Sites in India for IPL 2024</h1>
            <h2 class="emoji">🤩</h2>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} offerBonus={card.offerBonus} highlight={card.highlight} imgLink={card.imgLink} redirectLink = {card.redirectLink} />
            ))}
            <CompanyBanner />
            <NewsCard />
            <LegalSection />
            <BettingInfo />
    
        </div>
       
    )
}

export default Home;