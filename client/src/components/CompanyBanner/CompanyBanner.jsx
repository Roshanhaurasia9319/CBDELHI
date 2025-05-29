import React from "react";
import "./CompanyBanner.css";

const CompanyBanner = () => {
  return (
    <div className="banner-box">
      <div className="ipl-container">
        <p className="ipl-description">
          Are you looking for <strong>IPL 2024 Betting Sites</strong> or <strong>Betting Apps</strong> for today’s match prediction? <br /><br />
          We bring you the <strong>best betting guide</strong> on how to bet legally in India. <br /><br />
          You’ll find everything—from how to get started to how to improve your betting experience. Creating a new account can be challenging, but winning your first bet is the next level—and we’ve covered it all on <strong>cbdelhi</strong>.
        </p>

      </div>
      <div className="ipl-cards">
        <div className="ipl-card">
          <span role="img" aria-label="point">👉</span>
          <span className="ipl-card-title">Best Fantasy</span>
          <span className="ipl-card-subtitle">Apps In India For</span>
          <span className="ipl-card-highlight">IPL 2024</span>
        </div>

        <div className="ipl-card">
          <span role="img" aria-label="point">👉</span>
          <span className="ipl-card-title">Best Betting</span>
          <span className="ipl-card-subtitle">Apps in India</span>
        </div>

        <div className="ipl-card">
          <span role="img" aria-label="point">👉</span>
          <span className="ipl-card-title">Online Cricket</span>
          <span className="ipl-card-subtitle">Betting Sites in</span>
          <span className="ipl-card-highlight">India</span>
        </div>
      </div>
    </div>

  );
};

export default CompanyBanner;
