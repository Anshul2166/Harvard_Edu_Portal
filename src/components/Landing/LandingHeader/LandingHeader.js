import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-scroll";
import classnames from "classnames";

class LandingHeader extends Component {
  state = {
    mobileNavOpen: false
  };

  toggleMobileNav = () => {
    this.setState(prevState => ({
      mobileNavOpen: !prevState.mobileNavOpen
    }));
  };

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
            <div className="LandingHeader__nav-parent-wrapper">
              <div
                className="LandingHeader__toggle-mobile-nav-btn"
                onClick={this.toggleMobileNav}
              >
                <i className="fas fa-bars" />
              </div>
              <div
                className={classnames({
                  "LandingHeader__nav-wrapper": true,
                  "LandingHeader__nav-wrapper--close ": !this.state
                    .mobileNavOpen
                })}
              >
                <Link
                  className="LandingHeader__nav-item"
                  activeClass="LandingHeader__nav-item--selected"
                  to="LandingHero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  className="LandingHeader__nav-item"
                  activeClass="LandingHeader__nav-item--selected"
                  to="LandingWhyUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  className="LandingHeader__nav-item"
                  activeClass="LandingHeader__nav-item--selected"
                  to="LandingAdditionalInfo"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Why Us
                </Link>
                <Link
                  className="LandingHeader__nav-item"
                  activeClass="LandingHeader__nav-item--selected"
                  to="User"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Join
                </Link>
                <div className="LandingHeader__nav-item">
                  <div className="LandingHeader__action-btn">Get Started</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingHeader;
