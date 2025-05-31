import React from "react";
import "./HorizontalCardSlider.css";

const HorizontalCardSlider = ({ bettingSites, bettingHeading }) => {
  const duplicatedSites = [...bettingSites, ...bettingSites]; // for infinite loop

  return (
    <div className="slider-container">
      <h2 className="slider-title">🧿 {bettingHeading}</h2>
      <div className="slider-track-wrapper">
        <div className="slider-track">
          {duplicatedSites.map((site, index) => (
            <div
              className="slider-card"
              key={index}
              onClick={() => window.open(site.link, "_blank")}
            >
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
