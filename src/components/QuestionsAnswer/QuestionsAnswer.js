import React, { Component } from "react";
import QAActionCard from "./QAActionCard/QAActionCard";
import SingleQuestionCard from "./SingleQuestionCard/SingleQuestionCard";
import EasyQuestions from "./questions/cs_easyquestions";
import MediumQuestions from "./questions/cs_mediumquestions";
import HardQuestions from "./questions/cs_hardquestions";
import QAPagination from "./QAPagination/QAPagination";

class QuestionsAnswer extends Component {
  state = {
    topic: null,
    //Amount of data to be shown in a page
    limit: 5,
    pageCount: 5,
    currentPage: 1,
    //three values easy medium and hard
    difficulty: "easy"
  };

  componentDidMount = () => {
    const topic = this.props.match.params.topic;
    console.log("The questions is", topic);
    this.setState({ topic });
  };

  onChangeDifficulty = value => {
    this.setState({ difficulty: value });
  };

  renderQuestions = () => {
    let questions;
    if (this.state.difficulty === "easy") questions = EasyQuestions;
    if (this.state.difficulty === "medium") questions = MediumQuestions;
    if (this.state.difficulty === "hard") questions = HardQuestions;
    const filteredQuestions = this.filterQuestionsByTopic(questions);
    const total = filteredQuestions.length;
    return { total, filteredQuestions };
  };

  filterQuestionsByTopic = questions => {
    return questions.filter(question =>
      question.topics.includes(this.state.topic)
    );
  };

  handlePageChange = (page, e) => {
    console.log(this.state.currentPage);
    this.setState({
      currentPage: page
    });
  };
  render() {
    const { total, filteredQuestions } = this.renderQuestions();
    const { currentPage, limit } = this.state;
    console.log("Being rerendered", filteredQuestions.slice(10, 20));
    return (
      <div className="QuestionsAnswer">
        <div className="QuestionsAnswer__header">{this.state.topic}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <QAPagination
                total={total}
                limit={this.state.limit}
                pageCount={this.state.pageCount}
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
              />
              {this.state.topic &&
                filteredQuestions
                  .slice(
                    (currentPage - 1) * limit,
                    (currentPage - 1) * limit + limit
                  )
                  .map(question => (
                    <SingleQuestionCard
                      name={question.name}
                      link={question.link}
                      difficulty={question.difficulty}
                    />
                  ))}
            </div>
            <div className="col-md-4">
              <QAActionCard
                difficulty={this.state.difficulty}
                onChangeDifficulty={this.onChangeDifficulty}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class QuestionsList extends Component {
  render() {
    let questionNodes = this.props.data.map(function(question, index) {
      return (
        <SingleQuestionCard
          key={index}
          name={question.name}
          link={question.link}
          difficulty={question.difficulty}
        />
      );
    });

    return questionNodes;
  }
}
export default QuestionsAnswer;
