import React, { Component } from "react";

class SinglePostComment extends Component {
  render() {
    const { props } = this;
    return (
      <div className="SinglePostComment">
        <div className="SinglePostComment__action-bar">
          <div className="SinglePostComment__action-btn">
            <i className="fas fa-arrow-up" />
          </div>
          <div className="SinglePostComment__action-btn">
            <i className="fas fa-arrow-down" />
          </div>
        </div>
        <div className="SinglePostComment__content-wrapper">
          <div className="SinglePostComment__header">
            {/* Display author name here */}
            <div className="SinglePostComment__author-name">
              {props.author.local.username}
            </div>
            <div className="SinglePostComment__posted-time">9 hours ago</div>
          </div>
          <div className="SinglePostComment__text">{props.content}</div>
        </div>
      </div>
    );
  }
}
export default SinglePostComment;
