import React, { Component } from "react";

class SingleQuestionCard extends Component {
  render() {
    return (
      <div className="SingleQuestionCard">
        <div className="SingleQuestionCard__main-question">
          Write a program to reverse a string and check whether that is
          palindrome
        </div>
        <div className="SingleQuestionCard__short-description">
          I am thinking of pursuing web developing as a career & was just
          wondering. I’ve heard that that location is a big factor when it comes
          to salary of web developers. Kindly state: 1 Country 2 Salary
          Monthly/Yearly 3 Years of experience. P.s You can ...
        </div>
      </div>
    );
  }
}
export default SingleQuestionCard;
