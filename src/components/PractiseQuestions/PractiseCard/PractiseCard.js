import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PractiseCard extends Component {
  redirectToQuestion = () => {
    const topic = this.props.topic;
    this.props.history.push(`/questions/${topic}`);
  };

  render() {
    const { props } = this;
    return (
      <div className="PractiseCard">
        <div className="PractiseCard__main-area">
          <p className="PractiseCard__icon">{props.icon}</p>
          <h3 onClick={this.redirectToQuestion} className="PractiseCard__title">
            {props.title}
          </h3>
          <p className="PractiseCard__description">{props.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PractiseCard);
