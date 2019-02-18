import React, { Component } from "react";
import QAActionCard from "./QAActionCard/QAActionCard";
import Header from "../Common/Header/Header";
import SingleQuestionCard from "./SingleQuestionCard/SingleQuestionCard";

class QuestionsAnswer extends Component {
  render() {
    return (
      <div className="QuestionsAnswer">
        <Header />
        <div className="QuestionsAnswer__header">
          Data structure and algorithm
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <SingleQuestionCard />
            </div>
            <div className="col-md-4">
              <QAActionCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuestionsAnswer;
