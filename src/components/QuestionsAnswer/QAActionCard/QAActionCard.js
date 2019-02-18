import React, { Component } from "react";

class QAActionCard extends Component {
  render() {
    return (
      <div className="QAActionCard">
        <div className="QAActionCard__header">Select a Difficulty</div>
        <div className="QAActionCard__single-card QAActionCard__single-card--selected">
          Begineer
        </div>
        <div className="QAActionCard__single-card">Intermediate</div>
        <div className="QAActionCard__single-card">Hard</div>
      </div>
    );
  }
}

export default QAActionCard;
