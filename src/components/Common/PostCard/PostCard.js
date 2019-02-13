import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PostCard extends Component {
  redirectToSinglePost = () => {
    this.props.history.push(`/single-post/${this.props.id}`);
  };

  render() {
    const { props } = this;
    return (
      <div className="PostCard">
        <div className="PostCard__side-action">
          <div className="PostCard__upvote-wrapper">
            <div className="PostCard__upvote PostCard__side-action-btn">
              <i className="fas fa-arrow-up" />
            </div>
            <div className="PostCard__vote-amount">
              {props.upVotes - props.downVotes}
            </div>
            <div className="PostCard__downvote PostCard__side-action-btn">
              <i className="fas fa-arrow-down" />
            </div>
          </div>
        </div>
        <div className="PostCard__main-area">
          <div className="PostCard__main-area__post-info-wrapper">
            <div className="PostCard__main-area__post-info">
              <div className="PostCard__community-wrapper">
                <div className="PostCard__community-name">
                  r/{props.community.name}
                </div>
                <div className="PostCard__author-name">
                  Posted by {props.creator.local.username}
                </div>
              </div>
              <div
                onClick={this.redirectToSinglePost}
                className="PostCard__post-title"
              >
                {props.title}
              </div>
              <div
                className="PostCard__post-description"
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(props.description)
                }}
              />
            </div>
            <div className="PostCard__post-additional-info">
              <div className="PostCard__comments PostCard__post-additional-info__single-item">
                <i className="fas fa-comments" /> {props.comments.length}{" "}
                Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PostCard);
