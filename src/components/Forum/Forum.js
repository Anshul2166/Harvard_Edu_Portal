import React, { Component } from "react";
import "./forum.css";
import SingleForum from "./SingleForum/SingleForum";
import { connect } from "react-redux";
import SimpleModalWrapped from "./SimpleModal";
import { bindActionCreators } from "redux";
import * as forumActions from "../../actions/forumActions";

class Forum extends Component {  
  addNewThread=(threadState)=>{
    this.props.forums.add_thread(threadState);
  }
  addComment=(text)=>{
    console.log(text);
  }
  render() {
    console.log(this.props);
    const forums = this.props.forum.map((thread, index) => (
      <SingleForum thread={thread} key={index} addComment={this.addComment}/>
    ));
    return (
      <div className="forum">
        <div className="forum-title">
          <div className="text-center">
            <h1>Discussion Forum</h1>
            <p className="sub-title-forum">
              Get the best of opinions from the best of minds
            </p>
          </div>
          <div className="main-content">{forums}</div>
          <div className="add-new-forum">
            <SimpleModalWrapped addNewThread={this.addNewThread} addComment={this.addComment}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    forum: state.forums.threads
  };
};

const mapActionsToProps = dispatch => {
  return {
    forums: bindActionCreators(forumActions, dispatch)
  };
};

export default connect(mapStateToProps,mapActionsToProps)(Forum);
