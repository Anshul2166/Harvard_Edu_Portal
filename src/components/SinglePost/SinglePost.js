import React, { Component } from "react";
import Header from "../Common/Header/Header";
import PostCommentForm from "./PostCommentForm/PostCommentForm";
import PostComments from "./PostComments/PostComments";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchSinglePost } from "../../store/actions/posts";

class SinglePost extends Component {
  componentDidMount = () => {
    this.props.fetchSinglePost(this.props.match.params.id);
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
                    <div className="SinglePost__upvote SinglePost__side-action-btn">
                      <i className="fas fa-arrow-up" />
                    </div>
                    <div className="SinglePost__vote-amount">
                      {props.post.upVotes - props.post.downVotes}
                    </div>
                    <div className="SinglePost__downvote SinglePost__side-action-btn">
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
  post: state.posts.singlePost
});
export default connect(
  mapStateToProps,
  { fetchSinglePost }
)(SinglePost);
