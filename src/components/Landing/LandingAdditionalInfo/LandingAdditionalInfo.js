import React from "react";
import Business from "../../../assets/images/business.jpg";

const LandingAdditionalInfo = props => {
  return (
    <div className="LandingAdditionalInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Business}
              alt=""
              className="LandingAdditionalInfo__image"
            />
          </div>
          <div className="col-md-6">
            <h3 className="LandingAdditionalInfo__title">
              We present you with Learn it
            </h3>
            <h5 className="LandingAdditionalInfo__emphasis-text">
              College showed you how to climb a mountain. We'll show you which
              mountaint to climb
            </h5>
            <p className="LandingAdditionalInfo__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              laudantium voluptates deserunt voluptas libero dolores
              voluptatibus, atque iure inventore, quisquam nemo et. Nam
              distinctio nulla earum fugiat, totam eum doloremque magnam esse
              animi, amet, ratione consequatur explicabo officia aliquid laborum
              saepe veritatis fugit dolor asperiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAdditionalInfo;
