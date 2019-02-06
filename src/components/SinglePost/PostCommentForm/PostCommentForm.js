import React, { Component } from "react";

class PostCommentForm extends Component {
  render() {
    return (
      <div className="PostCommentForm">
        <div className="PostCommentForm__title">
          Comment as
          <span className="PostCommentForm__title__name">
            Samrat Luintel
          </span>{" "}
        </div>
        <div className="PostCommentForm__form-wrapper">
          <textarea
            className="PostCommentForm__main-form"
            placeholder="What are your thoughts?"
          />
          <div className="PostCommentForm__action-area">
            <div className="PostCommentForm__btn btn btn-md btn-orange">
              Comment
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PostCommentForm;
