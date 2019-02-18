import React, { Component } from "react";

class PractiseCard extends Component {
  render() {
    const { props } = this;
    return (
      <div className="PractiseCard">
        <div className="PractiseCard__main-area">
          <p className="PractiseCard__icon">{props.icon}</p>
          <h3 className="PractiseCard__title">{props.title}</h3>
          <p className="PractiseCard__description">
            Lorem ipsum dolor sit amet, conse adipi elit. Accu est ab excepturi
            praesentium nam nihil ea voluptates non quis et.
          </p>
        </div>
      </div>
    );
  }
}

export default PractiseCard;
