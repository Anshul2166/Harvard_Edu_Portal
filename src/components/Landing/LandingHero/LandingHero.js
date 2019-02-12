import React from "react";
import Hero1 from "../../../assets/images/bg/hero/1.png";
import Hero2 from "../../../assets/images/bg/hero/2.png";
import Hero3 from "../../../assets/images/bg/hero/3.png";
import Hero4 from "../../../assets/images/bg/hero/4.png";

const LandingHero = props => {
  return (
    <div className="LandingHero">
      <div className="container">
        <div className="LandingHero__main-area">
          <div className="row">
            <div className="col-md-6 LandingHero__info-col">
              <div className="LandingHero__header">
                Job market around the world is changing
              </div>
              <p className="LandingHero__description">
                Ignorance is going to be the number one cause of poverty in
                upcoming decades
              </p>
              <div className="LandingHero__action-btn">Learn More</div>
            </div>
            <div className="col-md-6">
              <div className="LandingHero__image-wrapper">
                <img src={Hero1} className="LandingHero__main-image-1" alt="" />
                <img src={Hero2} className="LandingHero__main-image-2" alt="" />
                <img src={Hero3} className="LandingHero__main-image-3" alt="" />
                <img src={Hero4} className="LandingHero__main-image-4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
