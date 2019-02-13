import React, { Component } from "react";
import { connect } from "react-redux";
import { commentOnSinglePost } from "../../../store/actions/posts";

class PostCommentForm extends Component {
  state = {
    comment: ""
  };

  onCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  submitComment = () => {
    if (this.state.comment === "") return;
    this.props.commentOnSinglePost(this.props.id, this.state.comment);
  };
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
            value={this.state.comment}
            onChange={this.onCommentChange}
            className="PostCommentForm__main-form"
            placeholder="What are your thoughts?"
          />
          <div className="PostCommentForm__action-area">
            <div
              onClick={this.submitComment}
              className="PostCommentForm__btn btn btn-md btn-orange"
            >
              Comment
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { commentOnSinglePost }
)(PostCommentForm);
