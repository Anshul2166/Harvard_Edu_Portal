import React, { Component } from "react";
import Header from "../Common/Header/Header";
import PostCommentForm from "./PostCommentForm/PostCommentForm";
import PostComments from "./PostComments/PostComments";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import {
  fetchSinglePost,
  upvoteSinglePost,
  removeSinglePostUpvote,
  downvoteSinglePost,
  removeSinglePostDownvote
} from "../../store/actions/posts";
import classnames from "classnames";

class SinglePost extends Component {
  state = {
    postAlreadyUpvoted: false,
    postAlreadyDownVoted: false
  };

  componentDidMount = async () => {
    await this.props.fetchSinglePost(this.props.match.params.id);
    this.checkIfAlreadyUpvotedOrDownvoted();
  };

  onUpvoteClick = async () => {
    if (this.state.postAlreadyUpvoted) {
      await this.props.removeSinglePostUpvote(this.props.match.params.id);
    } else {
      await this.props.upvoteSinglePost(this.props.match.params.id);
    }
    this.checkIfAlreadyUpvotedOrDownvoted();
  };

  onDownVoteClick = async () => {
    if (this.state.postAlreadyDownVoted) {
      await this.props.removeSinglePostDownvote(this.props.match.params.id);
    } else {
      await this.props.downvoteSinglePost(this.props.match.params.id);
    }
    this.checkIfAlreadyUpvotedOrDownvoted();
  };
  //Checks if the user has already upvoted or downvoted the post
  checkIfAlreadyUpvotedOrDownvoted = () => {
    if (!this.props.profile.fetched || !this.props.profile.authenticated)
      return;
    console.log("Check if already upvoted or downvoted called");
    const postId = this.props.match.params.id;
    const isUpvoted = this.props.profile.liked.includes(postId);

    if (isUpvoted) {
      console.log("User have already upvoted the post");
      this.setState({ postAlreadyUpvoted: true, postAlreadyDownVoted: false });
    } else {
      this.setState({ postAlreadyUpvoted: false });
    }

    const isDownvoted = this.props.profile.disliked.includes(postId);
    if (isDownvoted) {
      console.log("User have already downvoted the post");
      this.setState({ postAlreadyDownVoted: true, postAlreadyUpvoted: false });
    } else {
      this.setState({ postAlreadyDownVoted: false });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.profile.fetched !== nextProps.profile.fetched) {
      this.checkIfAlreadyUpvotedOrDownvoted();
    }
    if (this.props.post.fetched !== nextProps.post.fetched) {
      this.checkIfAlreadyUpvotedOrDownvoted();
    }
  };
  render() {
    const { props } = this;
    if (!props.post.fetched) {
      return (
        <div className="SinglePost">
          <Header />
          <div className="SinglePost__loading" key={0}>
            <ClipLoader
              sizeUnit={"px"}
              size={43}
              color={"#00bcd1"}
              loading={true}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="SinglePost">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 SinglePost__col">
              <div className="SinglePost__wrapper">
                <div className="SinglePost__side-action">
                  <div className="SinglePost__upvote-wrapper">
                    <div
                      onClick={this.onUpvoteClick}
                      className={classnames({
                        "SinglePost__upvote SinglePost__side-action-btn": true,
                        "SinglePost__side-action-btn--selected": this.state
                          .postAlreadyUpvoted
                      })}
                    >
                      <i className="fas fa-arrow-up" />
                    </div>
                    <div className="SinglePost__vote-amount">
                      {props.post.upVotes - props.post.downVotes}
                    </div>
                    <div
                      onClick={this.onDownVoteClick}
                      className={classnames({
                        "SinglePost__downvote SinglePost__side-action-btn": true,
                        "SinglePost__side-action-btn--selected": this.state
                          .postAlreadyDownVoted
                      })}
                    >
                      <i className="fas fa-arrow-down" />
                    </div>
                  </div>
                </div>
                <div className="SinglePost__main-area">
                  <div className="SinglePost__main-area__post-info-wrapper">
                    <div className="SinglePost__main-area__post-info">
                      <div className="SinglePost__community-wrapper">
                        <div className="SinglePost__community-name">
                          r/{props.post.community.name}
                        </div>
                        <div className="SinglePost__author-name">
                          Posted by {props.post.createdBy.local.username}
                        </div>
                      </div>
                      <div className="SinglePost__post-title">
                        {props.post.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: JSON.parse(props.post.description)
                        }}
                        className="SinglePost__post-description"
                      />
                    </div>
                    <div className="SinglePost__post-additional-info">
                      <div className="SinglePost__comments SinglePost__post-additional-info__single-item">
                        <i className="fas fa-comments" />{" "}
                        {props.post.comments.length} Comments
                      </div>
                    </div>
                    <PostCommentForm id={this.props.match.params.id} />
                    <PostComments />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  post: state.posts.singlePost
});
export default connect(
  mapStateToProps,
  {
    fetchSinglePost,
    upvoteSinglePost,
    downvoteSinglePost,
    removeSinglePostUpvote,
    removeSinglePostDownvote
  }
)(SinglePost);
