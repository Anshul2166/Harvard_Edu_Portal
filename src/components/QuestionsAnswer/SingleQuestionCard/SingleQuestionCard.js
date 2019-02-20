import React, { Component } from "react";

class SingleQuestionCard extends Component {
  render() {
    return (
      <div className="SingleQuestionCard">
        <div
          className="SingleQuestionCard__main-question"
          onClick={() => window.open(this.props.link, "_blank")}
        >
          {this.props.name}
        </div>
        <div className="SingleQuestionCard__short-description">
          Difficulty: {this.props.difficulty}
        </div>
      </div>
    );
  }
}

export default SingleQuestionCard;
