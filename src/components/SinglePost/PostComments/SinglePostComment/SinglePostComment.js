import React, { Component } from "react";

class SinglePostComment extends Component {
  render() {
    return (
      <div className="SinglePostComment">
        <div className="SinglePostComment__header">
          <div className="SinglePostComment__author-name">anshuldubey</div>
          <div className="SinglePostComment__posted-time">9 hours ago</div>
        </div>
        <div className="SinglePostComment__text">
          You are wrong. Captain America is the member of the shield. Alexander
          Pierce was the spy of Hydra who try to shot Nick Fury
        </div>
      </div>
    );
  }
}
export default SinglePostComment;
