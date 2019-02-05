import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";

class ForumActionArea extends Component {
  render() {
    return (
      <div className="ForumActionArea">
        <div className="ForumActionArea__inner">
          <div className="ForumActionArea__background" />
          <div className="ForumActionArea__info">
            <img src={Logo} alt="" className="ForumActionArea__info__image" />
            <div className="ForumActionArea__info__text">Forum</div>
          </div>
          <p className="ForumActionArea__description">
            Your personal Learn It frontpage. Come here to check with your
            favourite communities
          </p>
          <div className="ForumActionArea__control-section">
            <button className="ForumActionArea__control-section__btn">
              CREATE POST
            </button>
            <button
              className="ForumActionArea__control-section__btn 
            ForumActionArea__control-section__btn--white-bg"
            >
              CREATE COMMUNITY
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ForumActionArea;
