import React, { Component } from "react";

class DomainCard extends Component {
  render() {
    const { props } = this;
    return (
      <div className="DomainCard">
        <div className="DomainCard__main-area">
          <p className="DomainCard__icon">{props.icon}</p>
          <h3 className="DomainCard__title">{props.title}</h3>
          <p className="DomainCard__description">
            Lorem ipsum dolor sit amet, conse adipi elit. Accu est ab excepturi
            praesentium nam nihil ea voluptates non quis et.
          </p>
        </div>
      </div>
    );
  }
}

export default DomainCard;
