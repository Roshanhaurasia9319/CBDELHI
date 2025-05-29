import React from 'react';
import './Card.css';

const Card = ({imgLink, title, offerBonus, userRatings, highlight, index}) => {
  return (    
    <div className="offer-card">
      <div className="offer-rank">{index}</div>

      <div className="offer-left">
        <img src={imgLink} alt="First Card" />

      </div>

      <div className="offer-middle">
       <div className="riview-btn">
         <h2>{title}</h2>
        <div className="offer-stars">
          {[...Array(5)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
       </div>
        <p className="offer-bonus">Welcome bonus on your 1st deposit up to <strong>{offerBonus}</strong>.</p>
        <p className="user-ratings">User Ratings ({userRatings})</p>
        <p className="highlight"><span role="img" aria-label="trophy">🏆</span> {highlight} <span className="yesterday">yesterday</span></p>
      </div>

      <div className="offer-right">
        <a href="#" className="review-link">Read Review</a>
        <button className="cta-btn">Claim Now & Play</button>
      </div>
    </div>
  );
};

export default Card;
