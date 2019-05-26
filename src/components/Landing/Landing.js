import React, { Component } from "react";
import User from "../User/User";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeader from "./LandingHeader/LandingHeader";
import LandingWhyUs from "./LandingWhyUs/LandingWhyUs";
import LandingAdditionalInfo from "./LandingAdditionalInfo/LandingAdditionalInfo";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingHeader />
        <LandingHero />
        <LandingWhyUs />
        <LandingAdditionalInfo />
        <User />
      </div>
    );
  }
}

export default Landing;