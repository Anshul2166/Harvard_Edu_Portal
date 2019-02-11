import React from "react";

const LandingWhyUs = props => {
  return (
    <div className="LandingWhyUs">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="LandingWhyUs__title">We are here to Guide You</div>
            <div className="LandingWhyUs__description">
              Around 90% of fresh graduates are unemployed in India and it's
              neighbouring countries. There is a huge gap between the skills the
              industry demand and that the college teaches. We aim to narrow
              that skill gap.
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="LandingWhyUs__info-content">
                  <div className="LandingWhyUs__info-content__icon">
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <h3 className="LandingWhyUs__info-content__header">
                    Degree alone not enough
                  </h3>
                  <p className="LandingWhyUs__info-content__description">
                    In today's world degree alone is not going to guarantee you
                    a job. You need the actual skills to get in the industry
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="LandingWhyUs__info-content">
                  <div className="LandingWhyUs__info-content__icon">
                    <i className="fas fa-road" />
                  </div>
                  <h3 className="LandingWhyUs__info-content__header">
                    We are a roadmap
                  </h3>
                  <p className="LandingWhyUs__info-content__description">
                    We are the roadmap between your dream job and the required
                    skill. Just follow our laid path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingWhyUs;
