import React, { Component } from "react";
import classnames from "classnames";

class QAActionCard extends Component {
  render() {
    return (
      <div className="QAActionCard">
        <div className="QAActionCard__header">Select a Difficulty</div>
        <div
          className={classnames({
            "QAActionCard__single-card": true,
            "QAActionCard__single-card--selected":
              this.props.difficulty === "easy"
          })}
          onClick={() => this.props.onChangeDifficulty("easy")}
        >
          Begineer
        </div>
        <div
          className={classnames({
            "QAActionCard__single-card": true,
            "QAActionCard__single-card--selected":
              this.props.difficulty === "medium"
          })}
          onClick={() => this.props.onChangeDifficulty("medium")}
        >
          Intermediate
        </div>
        <div
          className={classnames({
            "QAActionCard__single-card": true,
            "QAActionCard__single-card--selected":
              this.props.difficulty === "hard"
          })}
          onClick={() => this.props.onChangeDifficulty("hard")}
        >
          Hard
        </div>
      </div>
    );
  }
}

export default QAActionCard;
