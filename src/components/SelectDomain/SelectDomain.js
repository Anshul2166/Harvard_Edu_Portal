import React, { Component } from "react";
import DomainCard from "./DomainCard/DomainCard";
import Header from "../Common/Header/Header";

class SelectDomain extends Component {
  render() {
    return (
      <div className="SelectDomain">
        <Header />
        <h1 className="SelectDomain__header">Select A Domain</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DomainCard title="Web Dev" icon={<i class="fas fa-globe" />} />
            </div>
            <div className="col-md-4">
              <DomainCard title="Game Dev" icon={<i class="fas fa-globe" />} />
            </div>
            <div className="col-md-4">
              <DomainCard title="Game Dev" icon={<i class="fas fa-globe" />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectDomain;
