import React, { Component } from "react";
import PractiseCard from "./PractiseCard/PractiseCard";
import Header from "../Common/Header/Header";

class PractiseQuestions extends Component {
  render() {
    return (
      <div className="PractiseQuestions">
        <Header />
        <h1 className="PractiseQuestions__header">Select a Practise Set</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PractiseCard
                title="Data Structure"
                icon={<i class="fas fa-globe" />}
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Object Oriented"
                icon={<i class="fas fa-globe" />}
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Game Dev"
                icon={<i class="fas fa-globe" />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PractiseQuestions;
