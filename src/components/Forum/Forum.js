import React, { Component } from "react";
import ForumActionArea from "./ForumActionArea/ForumActionArea";
import Header from "../Common/Header/Header";
import ForumContext from "./_forumContext";
import CreateCommunityModal from "./CreateCommunityModal/CreateCommunityModal";
import PostCard from "../Common/PostCard/PostCard";
import { connect } from "react-redux";
import { fetchCommunities } from "../../store/actions/communities";
import InfinitePost from "./InfinitePost/InfinitePost";

class Forum extends Component {
  state = {
    communityModalOpen: false
  };

  closeCommunityModal = () => this.setState({ communityModalOpen: false });

  openCommunityModal = () => this.setState({ communityModalOpen: true });

  componentDidMount = () => {
    if (!this.props.communities.fetched) {
      this.props.fetchCommunities();
    }
  };

  render() {
    const contextValue = {
      communityModalOpen: this.state.communityModalOpen,
      closeCommunityModal: this.closeCommunityModal,
      openCommunityModal: this.openCommunityModal
    };
    return (
      <ForumContext.Provider value={contextValue}>
        <div className="Forum">
          <Header />
          <CreateCommunityModal />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <InfinitePost />
              </div>
              <div className="col-md-4">
                <ForumActionArea />
              </div>
            </div>
          </div>
        </div>
      </ForumContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  communities: state.communities,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchCommunities }
)(Forum);
