import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  removeSinglePostDownvote,
  removeSinglePostUpvote,
  upvoteSinglePost,
  downvoteSinglePost
} from "../../../store/actions/posts";

//In this component we actually update the local state of upvote and downvote
//This is quite different from SinglePost.js component logic
//upvoteSinglePost and other actions also changes the singlePost of postsReducer
//which was mostly designed for single page

class PostCard extends Component {
  state = {
    postAlreadyUpvoted: false,
    postAlreadyDownVoted: false,

    //If the user has clicked once
    //upvote and downvote thing is left on state
    alreadyClicked: false,
    postUpvoteAmount: 0,
    localVote: 0
  };

  componentDidMount = async () => {
    this.checkIfAlreadyUpvotedOrDownvoted();
    this.setPostUpvoteAmount();
  };

  handleLocalVote = (upvoted, downvoted) => {
    let localVote = 0;

    //If the user has previously upvoted and is downvoting now
    //the change in number will be 2
    if (this.state.postAlreadyUpvoted && downvoted) {
      localVote = -2;
    }
    if (this.state.postAlreadyDownVoted && upvoted) {
      localVote = 2;
    }

    //undoing upvote
    if (this.state.postAlreadyUpvoted && upvoted) {
      localVote = -1;
    }
    if (this.state.postAlreadyDownVoted && downvoted) {
      localVote = 1;
    }

    //if the user has not interacted with post at all and is upvoting now
    //increase it by 2
    if (
      !this.state.postAlreadyUpvoted &&
      upvoted &&
      !this.state.postAlreadyDownVoted
    ) {
      localVote = 1;
    }
    if (
      !this.state.postAlreadyDownVoted &&
      downvoted &&
      !this.state.postAlreadyUpvoted
    ) {
      localVote = -1;
    }

    this.setState(prevState => ({
      postUpvoteAmount: prevState.postUpvoteAmount + localVote
    }));
  };

  onUpvoteClick = async () => {
    this.handleLocalVote(true, false);
    this.setState({ alreadyClicked: true });
    //undoing upvote
    if (this.state.postAlreadyUpvoted) {
      this.setState({ postAlreadyUpvoted: false });
      await this.props.removeSinglePostUpvote(this.props.id);
    } else {
      //doing upvote
      this.setState({
        postAlreadyDownVoted: false,
        postAlreadyUpvoted: true
      });
      await this.props.upvoteSinglePost(this.props.id);
    }
  };

  onDownVoteClick = async () => {
    this.handleLocalVote(false, true);
    this.setState({ alreadyClicked: true });
    //undoing downvote
    if (this.state.postAlreadyDownVoted) {
      this.setState({ postAlreadyDownVoted: false });
      await this.props.removeSinglePostDownvote(this.props.id);
    } else {
      //doing downvote
      this.setState({ postAlreadyDownVoted: true, postAlreadyUpvoted: false });
      await this.props.downvoteSinglePost(this.props.id);
    }
  };

  //Checks if the user has already upvoted or downvoted the post
  checkIfAlreadyUpvotedOrDownvoted = () => {
    if (!this.props.profile.fetched || !this.props.profile.authenticated)
      return;
    const postId = this.props.id;
    const isUpvoted = this.props.profile.liked.includes(postId);
    console.log("Check if already upvoted or downvoted called");
    if (isUpvoted) {
      this.setState({ postAlreadyUpvoted: true });
    }

    const isDownvoted = this.props.profile.disliked.includes(postId);
    if (isDownvoted) {
      console.log("User have already downvoted the post");
      this.setState({ postAlreadyDownVoted: true });
    }
  };

  setPostUpvoteAmount = () => {
    this.setState({
      postUpvoteAmount: this.props.upVotes - this.props.downVotes
    });
  };
  componentWillReceiveProps = nextProps => {
    if (this.props.profile.fetched !== nextProps.profile.fetched) {
      this.checkIfAlreadyUpvotedOrDownvoted();
    }
  };

  redirectToSinglePost = () => {
    this.props.history.push(`/single-post/${this.props.id}`);
  };

  render() {
    const { props } = this;
    let postUpvoteAmount = this.props.upVotes - this.props.downVotes;
    if (this.state.alreadyClicked) {
      postUpvoteAmount = this.state.postUpvoteAmount;
    }
    return (
      <div className="PostCard">
        <div className="PostCard__side-action">
          <div className="PostCard__upvote-wrapper">
            <div
              onClick={this.onUpvoteClick}
              className={classnames({
                "PostCard__upvote PostCard__side-action-btn": true,
                "PostCard__side-action--selected": this.state.postAlreadyUpvoted
              })}
            >
              <i className="fas fa-arrow-up" />
            </div>
            <div className="PostCard__vote-amount">{postUpvoteAmount}</div>
            <div
              onClick={this.onDownVoteClick}
              className={classnames({
                "PostCard__downvote PostCard__side-action-btn": true,
                "PostCard__side-action--selected": this.state
                  .postAlreadyDownVoted
              })}
            >
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

const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      removeSinglePostDownvote,
      removeSinglePostUpvote,
      upvoteSinglePost,
      downvoteSinglePost
    }
  )(PostCard)
);
