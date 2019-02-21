import React, { Component } from "react";
import "@material/react-checkbox/dist/checkbox.css";
import Checkbox from "@material/react-checkbox";
import { connect } from "react-redux";
import {
  markQuestionAsSolved,
  markQuestionAsUnSolved
} from "../../../store/actions/profile";

class SingleQuestionCard extends Component {
  state = { indeterminate: false };

  onCheckBoxClick = async e => {
    this.setState({
      checked: e.target.checked
    });
    try {
      if (e.target.checked) {
        await this.props.markQuestionAsSolved(this.props.name);
      } else {
        await this.props.markQuestionAsUnSolved(this.props.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="SingleQuestionCard__short-description__difficulty">
            Difficulty: {this.props.difficulty}
          </div>
          <div className="SingleQuestionCard__short-description__checkbox">
            Solved:{" "}
            <Checkbox
              nativeControlId="SingleQuestionsCard__checkbox"
              checked={this.props.solved}
              onChange={this.onCheckBoxClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { markQuestionAsSolved, markQuestionAsUnSolved }
)(SingleQuestionCard);
