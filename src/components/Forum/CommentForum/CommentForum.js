import React, { Component } from "react";
import CommentsBlock from "simple-react-comments";

class CommentForum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.commentsData
    };
  }
  render() {
    return (
      <div>
        <CommentsBlock
          comments={this.state.comments}
          isLoggedIn={true}
          onSubmit={text => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: "#",
                    avatarUrl: "#avatarUrl",
                    createdAt: new Date(),
                    fullName: "Name",
                    text
                  }
                ]
              });
              console.log("submit:", text);
            }
          }}
        />
      </div>
    );
  }
}

export default CommentForum;
