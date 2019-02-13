import React, { Component } from "react";
import SinglePostComment from "./SinglePostComment/SinglePostComment";
import { connect } from "react-redux";

//If the post is not fetched this component is never loaded
//REMEMBER if this component is called without post being fetched
//application crashes

class PostComments extends Component {
  renderComments = () => {
    console.log("Render post comments", this.props.comments);
    return this.props.comments.map(comment => {
      return (
        <SinglePostComment
          liked={comment.liked}
          disliked={comment.disliked}
          content={comment.content}
          author={comment.author}
        />
      );
    });
  };
  render() {
    return <div className="PostComments">{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.posts.singlePost.comments
});
export default connect(mapStateToProps)(PostComments);
