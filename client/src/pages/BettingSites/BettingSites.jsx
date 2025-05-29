import React from "react";
import Header from "../../components/BettingSite/Header";
import BettingTable from "../../components/BettingSite/BettingTable";
import BettingSlider from "../../components/BettingSite/BettingSlider";
import Feedback from "../../components/Feedback/Feedback";
import './BettingSites.css';

const BettingSites = () => {
  return (
    <>
      <Header
        heading={"Best Betting Site in India"}
        subHeading={"World Cup 2023"}
        button={"Betting Sites"}
      />

      <section className="info-section">
        <div className="info-overlay" />
        <div className="info-content">
          <div className="info-image">
            <img src="/images/header.jfif" alt="Betting Visual" />
          </div>
          <div className="info-text">
            <p>
              Searching for the <strong>best betting site in India 👀</strong>{" "}
              can be a daunting task with so many options to choose from. But
              don’t worry, we’ve got your back! Our team has thoroughly tested
              and reviewed the latest betting sites in the Indian gambling scene
              so that you can easily find the perfect match. 🔎
            </p>
            <p>
              Our list includes ratings, pros and cons of each site, helping you
              make an informed decision based on your preferences. From a
              variety of sports and betting options to secure payment methods
              and attractive promotions, we’ve got it all covered.
            </p>
            <p>
              But wait, there’s more! Our experts have also added their own
              insights and tips to help you maximize your betting experience.
              Plus, we constantly update the list to ensure that you have access
              to the latest and most trustworthy online bookmakers in India.
            </p>
            <p className="info-highlight">
              <em>
                <strong>
                  "So, why waste any more time? Check out our list and find the
                  perfect betting site in India that fits your needs and
                  preferences today! 💰"
                </strong>
              </em>
            </p>
          </div>
        </div>
      </section>

      <BettingTable />
      <Feedback />
    </>
  );
};

export default BettingSites;
