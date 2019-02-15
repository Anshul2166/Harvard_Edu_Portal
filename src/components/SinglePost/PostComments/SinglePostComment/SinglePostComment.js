import React, { Component } from "react";
import { connect } from "react-redux";
import {
  likePostComment,
  dislikePostComment
} from "../../../../store/actions/posts";
import classnames from "classnames";
import moment from "moment";

class SinglePostComment extends Component {
  onCommentLike = () => {
    this.props.likePostComment(this.props.id, this.props.index);
  };

  onCommentDislike = () => {
    this.props.dislikePostComment(this.props.id, this.props.index);
  };
  render() {
    const { props } = this;
    return (
      <div className="SinglePostComment">
        <div className="SinglePostComment__action-bar">
          <div
            onClick={this.onCommentLike}
            className={classnames({
              "SinglePostComment__action-btn": true,
              "SinglePostComment__action-btn--selected": this.props.liked.includes(
                this.props.profile._id
              )
            })}
          >
            <i className="fas fa-arrow-up" />
          </div>
          <div className="SinglePostComment__amount">
            {props.liked.length - props.disliked.length}
          </div>
          <div
            className={classnames({
              "SinglePostComment__action-btn": true,
              "SinglePostComment__action-btn--selected": this.props.disliked.includes(
                this.props.profile._id
              )
            })}
            onClick={this.onCommentDislike}
          >
            <i className="fas fa-arrow-down" />
          </div>
        </div>
        <div className="SinglePostComment__content-wrapper">
          <div className="SinglePostComment__header">
            {/* Display author name here */}
            <div className="SinglePostComment__author-name">
              {props.author.local.username}
            </div>
            <div className="SinglePostComment__posted-time">
              {moment(props.createdAt).fromNow()}
            </div>
          </div>
          <div className="SinglePostComment__text">{props.content}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { likePostComment, dislikePostComment }
)(SinglePostComment);
