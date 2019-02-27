import React, { Component } from "react";
import {withRouter } from 'react-router-dom';

class DomainCard extends Component {

  redirect=()=>{
    if(this.props.redirect){
      window.open(this.props.redirect,"_blank");
    }else{
      this.props.history.push(this.props.link);
    }
  
  }
  render() {
    const { props } = this;
    return (
      <div className="DomainCard">
        <div className="DomainCard__main-area">
          <p className="DomainCard__icon">{props.icon}</p>
          <h3 onClick={this.redirect} className="DomainCard__title">{props.title}</h3>
          <p className="DomainCard__description">{props.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(DomainCard);
