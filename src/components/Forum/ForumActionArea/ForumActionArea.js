import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";
import ForumContext from "../_forumContext";
import { withRouter } from "react-router-dom";

class ForumActionArea extends Component {
  static contextType = ForumContext;

  redirectToCreatePost = () => {
    this.props.history.push("/create-post");
  };

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
            <button
              onClick={this.redirectToCreatePost}
              className="ForumActionArea__control-section__btn"
            >
              CREATE POST
            </button>
            <button
              className="ForumActionArea__control-section__btn ForumActionArea__control-section__btn--white-bg"
              onClick={this.context.openCommunityModal}
            >
              CREATE COMMUNITY
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ForumActionArea);
