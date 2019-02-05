import React, { Component } from "react";

class PostCard extends Component {
  render() {
    return (
      <div className="PostCard">
        <div className="PostCard__side-action">
          <i className="fas fa-arrow-up" />
        </div>
        <div className="PostCard__main-area">Main Area goes here</div>
      </div>
    );
  }
}
export default PostCard;
