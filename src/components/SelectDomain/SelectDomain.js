import React, { Component } from "react";
import DomainCard from "./DomainCard/DomainCard";

class SelectDomain extends Component {
  render() {
    return (
      <div className="SelectDomain">
        <h1 className="SelectDomain__header">Select A Domain</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DomainCard link="/learning-path/webdev" description="We will guide from the basic of HTML,CSS to all the way being a full stack developer. This roadmap will show you everything to get hired as web developer in 2019" title="Web Dev" icon={<i class="fas fa-globe" />} />
            </div>
            <div className="col-md-4">
              <DomainCard link="/learning-path/gamedev" title="Game Dev" icon={<i class="fas fa-gamepad"></i>} description="We will guide you from the basic of game mathematics to all the way creating a 3d game. This roadmap will teach you about Game AI Game engines etc. "/>
            </div>
            <div className="col-md-4">
              <DomainCard redirect="https://medium.com/@thisismetis/roadmap-how-to-learn-machine-learning-in-6-months-7c501889b545" description="Machine learning is glowing hot area in the field of computer science. Learn abot Pure Math(Calculus,linear algebra), statistics and programming  " title="Machine Learning" icon={<i class="fas fa-cogs"></i>} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectDomain;
