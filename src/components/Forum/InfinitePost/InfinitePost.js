import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostCard from "../../Common/PostCard/PostCard";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { fetchPost, resetPost } from "../../../store/actions/posts";

class InfinitePost extends Component {
  state = {
    //start index of the post
    skip: 0,
    //how many to fetch at a particular request
    limit: 1,
    fetching: false,
    scrollable: true
  };

  loadMorePost = async () => {
    console.log("Load more post is called");
    if (!this.state.fetching) {
      this.setState({ fetching: true });
      console.log("Skip thing", this.state.skip);
      await this.props.fetchPost(this.state.skip, this.state.limit);
      this.setState(prevState => {
        return { skip: prevState.skip + prevState.limit, fetching: false };
      });
    }
  };

  renderPost = () => {
    // if (!this.props.profile || !this.props.profile.keys) return;
    if (this.props.posts.list.length === 0) return;

    return this.props.posts.list.map((post, index) => {
      return (
        <PostCard
          index={index}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          comments={post.comments}
          id={post._id}
          title={post.title}
          description={post.description}
          creator={post.createdBy}
          community={post.community}
        />
      );
    });
  };

  componentWillUnmount = () => {
    this.props.resetPost();
    console.log("component will unmount called on infinite news feed");
  };
  render() {
    return (
      <div className="InfinitePost">
        {" "}
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMorePost}
          hasMore={this.props.posts.scrollable}
          loader={
            <div className="InfinitePost__loading" key={0}>
              <ClipLoader
                sizeUnit={"px"}
                size={23}
                color={"#00bcd1"}
                loading={true}
              />
            </div>
          }
        >
          {this.renderPost()}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});
export default connect(
  mapStateToProps,
  { fetchPost, resetPost }
)(InfinitePost);
