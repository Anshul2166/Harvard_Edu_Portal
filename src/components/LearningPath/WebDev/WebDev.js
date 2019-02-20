import React, { Component } from "react";
import Intro from "./images/intro.png";
import FrontEnd from "./images/frontend.png";
import BackEnd from "./images/backend.png";
import DevOps from "./images/devops.png";

class WebDev extends Component {
  render() {
    return (
      <div className="WebDev">
        <div className="container">
          <h1 className="LearningPath__header">Web Developer roadmap</h1>
          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Here’s where you’ll start. You can choose either the Front-end, or
              Back-end path below. Regardless, there are eight recommendations
              in yellow that you should learn for either path.
            </p>
          </div>
          <img src={Intro} alt="" className="LearningPath__image" />
          {/*Front end stuffs goes here */}
          <h3 className="LearningPath__section-header">Front end paths</h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Give a short description of front end. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>
          <div className="LearningPath__section-inner">
            <div className="LearningPath__course-wrapper">
              <h4 className="LearningPath__course-title">
                The Web Developer Roadmap
              </h4>
              <p className="LearningPath__normal-paragraph">
                You need to learn the basics and build a solid foundation
              </p>
            </div>
            <div className="LearningPath__course-wrapper">
              <h4 className="LearningPath__course-title">Harvard top COurse</h4>
              <p className="LearningPath__normal-paragraph">
                You need to learn the basics and build a solid foundation
              </p>
            </div>
          </div>
          <img src={FrontEnd} alt="" className="LearningPath__image" />

          {/*Backend Stuffs goes here */}
          <h3 className="LearningPath__section-header">Backend end paths</h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Give a short description of back end. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>
          <div className="LearningPath__section-inner">
            <div className="LearningPath__course-wrapper">
              <h4 className="LearningPath__course-title">
                The Complete Node JS course
              </h4>
              <p className="LearningPath__normal-paragraph">
                Build a solid foundation on the backend of the course
              </p>
            </div>
            <div className="LearningPath__course-wrapper">
              <h4 className="LearningPath__course-title">
                Stephen gridher Sql course
              </h4>
              <p className="LearningPath__normal-paragraph">
                It's time to learn a non relational databse
              </p>
            </div>
          </div>
          <img src={BackEnd} alt="" className="LearningPath__image" />

          {/* Dev ops goes here*/}
          <h3 className="LearningPath__section-header">Dev Ops goes here</h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Give a short description of dev ops. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>

          <img src={DevOps} alt="" className="LearningPath__image" />
        </div>
      </div>
    );
  }
}
export default WebDev;
