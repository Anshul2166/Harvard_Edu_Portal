import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";
class LandingHeader extends Component {
  render() {
    return (
      <div className="LandingHeader">
        <div className="container">
          <div className="LandingHeader__main-area">
            <div className="LandingHeader__brand-wrapper">
              <img
                src={Logo}
                alt=""
                className="LandingHeader__brand-wrapper__logo"
              />
              <div className="LandingHeader__brand-wrapper__name">
                Learn<span>It</span>
              </div>
            </div>

            <div className="LandingHeader__nav-wrapper">
              <div className="LandingHeader__nav-item">Home</div>
              <div className="LandingHeader__nav-item">About</div>
              <div className="LandingHeader__nav-item">Service</div>
              <div className="LandingHeader__nav-item">Contact Us</div>
              <div className="LandingHeader__nav-item">Home</div>
              <div className="LandingHeader__nav-item">
                <div className="LandingHeader__action-btn">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingHeader;
