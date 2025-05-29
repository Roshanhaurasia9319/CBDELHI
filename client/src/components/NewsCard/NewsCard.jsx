import React from 'react';
import './NewsCard.css';

const cards = [
  {
    title: "Narendra Modi Stadium Pitch Report Batting or Bowling, IPL Records, Stats: IPL 2024",
    tags: ["Pitch Report", "Cricket Betting"],
    img: "/images/firstNews.jpg",
    desc: "Narendra Modi Stadium Pitch Report: The 17th edition of Tata Indian Premier League is going on its ...",
    date: "March 9, 2024",
    views: 1071
  },
  {
    title: "Exciting IPL Betting Offers for 2024 are available here!",
    tags: ["Cricket Betting", "IPL"],
    img: "/images/secondNews.webp",
    desc: "IPL Betting Offers: The Indian Premier League is all set to get started at the end of ...",
    date: "March 6, 2024",
    views: 861
  },
  {
    title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
    tags: ["IPL", "Betting News", "Cricket Betting"],
    img: "/images/thirdNews.webp",
    desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
    date: "March 6, 2024",
    views: 1158
  },
  {
    title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
    tags: ["IPL", "Betting News", "Cricket Betting"],
    img: "/images/thirdNews.webp",
    desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
    date: "March 6, 2024",
    views: 1158
  },
  {
    title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
    tags: ["IPL", "Betting News", "Cricket Betting"],
    img: "/images/thirdNews.webp",
    desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
    date: "March 6, 2024",
    views: 1158
  }
];

const NewsCard = () => {
  return (
    <section className="card-grid">
      <h2>🏺 ICC World Cup 2023</h2>
      <div className="grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt="Card visual" />
            <div className="tag-list">
              {card.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="meta">
              <span>{card.date}</span>
              <span>👁 {card.views}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCard;
