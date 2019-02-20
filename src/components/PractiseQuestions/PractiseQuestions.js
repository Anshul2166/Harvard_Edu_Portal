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
                title="Trees problem"
                icon={<i class="fas fa-tree" />}
                description="Solve the problem related to trees data structure"
                topic="trees"
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Bits Manipulation"
                icon={<i class="fas fa-folder-open" />}
                description="Solve the problem related to binary digits(0,1) manipulation"
                topic="bit manipulation"
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Charts"
                icon={<i class="fas fa-chart-bar" />}
                description="Solve problem related to charts an bar graph"
                topic="graphs"
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Dynamic programming"
                icon={<i class="fas fa-sitemap" />}
                description="Solve problem related to dynamic programming"
                topic="dp"
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Implementation"
                icon={<i class="fas fa-forward" />}
                description="Solve the task using proper language and it's internal libraries"
                topic="implementation"
              />
            </div>
            <div className="col-md-4">
              <PractiseCard
                title="Greedy paradigm"
                icon={<i class="fas fa-chart-line" />}
                description="Solve problem related to greedy programming paradigm"
                topic="greedy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PractiseQuestions;
