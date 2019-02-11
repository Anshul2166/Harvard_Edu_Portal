import React, { Component } from "react";
import Header from "../../Common/Header/Header";
import Intro from "./images/intro.png";
import FrontEnd from "./images/frontend.png";
import BackEnd from "./images/backend.png";
import DevOps from "./images/devops.png";

class WebDev extends Component {
  render() {
    return (
      <div className="WebDev">
        <Header />
        <div className="container">
          <h1 className="WebDev__header">Web Developer roadmap</h1>
          <div className="WebDev__section-inner">
            <p className="WebDev__normal-paragraph">
              Here’s where you’ll start. You can choose either the Front-end, or
              Back-end path below. Regardless, there are eight recommendations
              in yellow that you should learn for either path.
            </p>
          </div>
          <img src={Intro} alt="" className="WebDev__image" />
          {/*Front end stuffs goes here */}
          <h3 className="WebDev__section-header">Front end paths</h3>

          <div className="WebDev__section-inner">
            <p className="WebDev__normal-paragraph">
              Give a short description of front end. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>
          <div className="WebDev__section-inner">
            <div className="WebDev__course-wrapper">
              <h4 className="WebDev__course-title">
                The Web Developer Roadmap
              </h4>
              <p className="WebDev__normal-paragraph">
                You need to learn the basics and build a solid foundation
              </p>
            </div>
            <div className="WebDev__course-wrapper">
              <h4 className="WebDev__course-title">Harvard top COurse</h4>
              <p className="WebDev__normal-paragraph">
                You need to learn the basics and build a solid foundation
              </p>
            </div>
          </div>
          <img src={FrontEnd} alt="" className="WebDev__image" />

          {/*Backend Stuffs goes here */}
          <h3 className="WebDev__section-header">Backend end paths</h3>

          <div className="WebDev__section-inner">
            <p className="WebDev__normal-paragraph">
              Give a short description of back end. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>
          <div className="WebDev__section-inner">
            <div className="WebDev__course-wrapper">
              <h4 className="WebDev__course-title">
                The Complete Node JS course
              </h4>
              <p className="WebDev__normal-paragraph">
                Build a solid foundation on the backend of the course
              </p>
            </div>
            <div className="WebDev__course-wrapper">
              <h4 className="WebDev__course-title">
                Stephen gridher Sql course
              </h4>
              <p className="WebDev__normal-paragraph">
                It's time to learn a non relational databse
              </p>
            </div>
          </div>
          <img src={BackEnd} alt="" className="WebDev__image" />

          {/* Dev ops goes here*/}
          <h3 className="WebDev__section-header">Dev Ops goes here</h3>

          <div className="WebDev__section-inner">
            <p className="WebDev__normal-paragraph">
              Give a short description of dev ops. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>

          <img src={DevOps} alt="" className="WebDev__image" />
        </div>
      </div>
    );
  }
}
export default WebDev;
