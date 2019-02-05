import React, { Component } from "react";
import ForumActionArea from "./ForumActionArea/ForumActionArea";
import Header from "../Header/Header";
class Forum extends Component {
  render() {
    return (
      <div className="Forum">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">All the forum post goes here</div>
            <div className="col-md-4">
              <ForumActionArea />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forum;
