import React from "react";
import "./Header.css";

const Header = ({ heading, subHeading, button }) => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <span className="subheading">{subHeading}</span>
          <h1 className="main-heading">{heading}</h1>
          <button className="hero-button">{button}</button>
        </div>
      </section>

    </>
  );
};

export default Header;
