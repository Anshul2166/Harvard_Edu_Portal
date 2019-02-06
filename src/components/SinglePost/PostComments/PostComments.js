import React, { Component } from "react";
import SinglePostComment from "./SinglePostComment/SinglePostComment";

class PostComments extends Component {
  render() {
    return (
      <div className="PostComments">
        <SinglePostComment />
      </div>
    );
  }
}
export default PostComments;
