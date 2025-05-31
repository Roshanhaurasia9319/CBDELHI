import React from "react";
import Header from "../../components/BettingSite/Header";
import NewsCard from "../../components/NewsCard/NewsCard";
import HorizontalCardSlider from "../../components/IPLComponent/HorizontalCardSlider";


export const bettingSites = [
  {
    name: "Megapari",
    bonus: "Welcome bonus on your 1st deposit up to 175882 INR + 150FS.",
    image: "/images/firstCard.png",
    link : "https://megapari-fun.app.link/registration"
  },
  {
    name: "PariMatch",
    bonus: "Bonus 150% Up To ₹20,000",
    image: "/images/secondCard.jpg",
    link : "https://parimatchglobal.com/en/cricket/live?qtag=a30884_t61301198_c3444_s&x_pm_click=ac3053425dd8164c40496f73fd428ae5&redirect_creative_id=3444"
  },
  {
    name: "BC GAME",
    bonus: "Welcome Pack upto 1,50,000 INR.",
    image: "/images/thirdCard.png",
    link : "https://bcgame.app.link/register"
  },
  {
    name: "PinUp",
    bonus: "Welcome bonus on your 1st deposit up to ₹4,50,000 INR + 250 FREE SPINS.",
    image: "/images/fourthCard.png",
    link : "https://form-plinkox-geo.pu214ev.com/?form_email=%7Bform_email%7D&form_phone=%7Bform_phone%7D&lrrPath=casino%2Fprovider%2Fsmartsoft%2Fplinkox&p_id=%7Bp_id%7D&pc=30&s1=seo1&s2=&s3=&s4=&s5=&source=https%3A%2F%2Fcbdelhi.in%2F&st=nuVe0FOe&startTime=1748666573505387086&trId=d0t8hj946vtc30h3abs0",
  },
   {
    name: "9WINZ",
    bonus: "Claim Bonus 150% Up To ₹1,50,000",
    image: "/images/fifthCard.png",
    link : "https://www.9winz.com/?accounts=*&register=*&btag=816763_683a88ec99bee2128fe859f98a5921830113f_ap&ap_inner=YmM%3D",
  },
   {
    name: "1xBet",
    bonus: "100% Bonus up to ₹20,000",
    image: "/images/sixthCard.webp",
    link: "https://ind.1xbet.com/",
  },
   {
    name: "Fun88",
    bonus: "200% Welcome Bonus on First Deposit",
    image: "/images/seventhCard.png",
    link : "https://m.gofun88.in/",
  },
   {
    name: "10Cric",
    bonus: "100% deposit bonus up to ₹1,00,000 + 40 free spins",
    image: "/images/eightCard.png",
    link: "https://www.10crics.com/",
  },
   {
    name: "Jackpot Guru",
    bonus: "Bonus 100% up to ₹10,000 + 20 Free Spins",
    image: "/images/nineCard.jpg",
    link : "https://affiliate.jackpotguru.com/affiliates/Account/Login?ReturnUrl=%2Faffiliates%2F#",
  },
   {
    name: "Casibee",
    bonus: "Bonus Up to ₹100,000 and 20 Free Spins!",
    image: "/images/tenCard.webp",
    link : "https://ntrfr.casibee.com/redirect.aspx?pid=3757351&lpid=1449&bid=17662",

  },
  

];

export const fantasyApps = [
     {
      name : "Fun88",
      bonus : "200% Welcome Bonus on First Deposit",
      image: "/images/seventhCard.png",
      link : "https://m.gofun88.in/",
     },
     {
       name : "Vision11",
      bonus : "Get a Bonus of ₹100 on your first deposit",
      image: "/images/vision11.jpg",
      link : "https://www.vision11.in/",
     },
     {
       name : "BalleBaazi",
      bonus : "Get ₹50 bonus on your first deposit.",
      image: "/images/ballebaazi.jpg",
      link : "https://cbdelhi.in/betting/fun88/",
     },
     {
       name : "My11Circle",
      bonus : "Download The App To Get ₹500 Bonus",
      image: "/images/my11circle.jpg",
      link : "https://cbdelhi.in/betting/fun88/",
     },
     {
       name : "MyTeam11",
      bonus : "Download Now to Get ₹100 Bonus",
      image: "/images/myteam11.jpg",
      link : "https://cbdelhi.in/betting/fun88/",
     }
     ,
     {
       name : "Dream11",
      bonus : "Get a welcome bonus on your first deposit!",
      image: "/images/myteam11.jpg",
      link : "https://cbdelhi.in/betting/fun88/",
     }
]


const IPL = ()=>{
    return (
       <div>
         <Header heading={'Best Cricket League in the World'} subHeading={'Tata IPL 2025'} button={'IPL'} />
         <NewsCard />
         <HorizontalCardSlider bettingSites={bettingSites} bettingHeading = {"New Betting Sites"} />
       
         <HorizontalCardSlider bettingSites={fantasyApps} bettingHeading = {"New Fantasy Apps"} />
       </div>
    )
}
 
export default IPL;