import React, { Component } from "react";
import Header from "../../Common/Header/Header";
import Intro from "./images/intro.png";
import Basics from "./images/basics.png";
import Client from "./images/client.png";
import Server from "./images/server.png";

class GameDev extends Component {
  render() {
    return (
      <div className="GameDev">
        <Header />
        <div className="container">
          <h1 className="LearningPath__header">Game Developer roadmap</h1>
          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Here’s where you’ll start. You can choose to either become a
              artist, programmer, designer.
            </p>
          </div>
          <img src={Intro} alt="" className="LearningPath__image" />
          {/*Front end stuffs goes here */}
          <h3 className="LearningPath__section-header">Minimum fundamental</h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Here is the minimum fundamental you must know before you start on
              either path.
            </p>
          </div>

          <img src={Basics} alt="" className="LearningPath__image" />

          {/*Backend Stuffs goes here */}
          <h3 className="LearningPath__section-header">
            Client Side Programming
          </h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Give a short description of client side. You need to know the
              following things. The following courses will walk you through
              below roadmap
            </p>
          </div>
          <div className="LearningPath__section-inner">
            <div className="LearningPath__course-wrapper">
              <h4 className="LearningPath__course-title">
                The Complete UNITY course
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
          <img src={Client} alt="" className="LearningPath__image" />

          {/* Dev ops goes here*/}
          <h3 className="LearningPath__section-header">
            Server Side Developer
          </h3>

          <div className="LearningPath__section-inner">
            <p className="LearningPath__normal-paragraph">
              Give a short description of server side developer. You need to
              know the following things. The following courses will walk you
              through below roadmap
            </p>
          </div>

          <img src={Server} alt="" className="LearningPath__image" />
        </div>
      </div>
    );
  }
}
export default GameDev;
