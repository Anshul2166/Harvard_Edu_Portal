import React, { Component } from "react";
import Header from "../Header/Header";
import Select from "react-select-v1";
import "react-select-v1/dist/react-select.css";
import CKEditor from "react-ckeditor-component";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class CreatePost extends Component {
  state = {
    selectedCommunity: null,
    title: "",
    content: "",
    contentFocused: false
  };

  handleSelectedCommunityChange = selectedCommunity => {
    this.setState({ selectedCommunity });
    console.log(`Option selected:`, selectedCommunity);
  };

  onContentChange = evt => {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    });
  };

  onTitleChange = e => this.setState({ title: e.target.value });
  render() {
    return (
      <div className="CreatePost">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 CreatePost__col">
              <div className="CreatePost__main-area">
                <h1 className="CreatePost__header">Create a Post</h1>
                <div className="CreatePost__select">
                  <Select
                    value={this.state.selectedCommunity}
                    onChange={this.handleSelectedCommunityChange}
                    options={options}
                    placeholder="Choose a community"
                  />
                </div>
                <div className="CreatePost__action-header">
                  <div className="CreatePost__action-header__item">
                    <i className="fas fa-envelope" /> Post
                  </div>
                </div>
                <div className="CreatePost__main-form">
                  <input
                    className="CreatePost__main-form__title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                  />
                  <div className="CreatePost__main-form__content">
                    <CKEditor
                      content={this.state.content}
                      events={{
                        focus: () => this.setState({ contentFocused: true }),
                        blue: () => this.setState({ contentFocused: false }),
                        change: this.onContentChange
                      }}
                      onMouseOut={() =>
                        this.setState({ contentFocused: false })
                      }
                      activeClass="p10"
                    />
                    {this.state.content === "" &&
                      !this.state.contentFocused && (
                        <div className="CreatePost__main-form__content--info">
                          Description .. Optional
                        </div>
                      )}
                  </div>
                  <div className="CreatePost__btn-wrapper">
                    <div className="CreatePost__action-btn CreatePost__action-btn--disabled">
                      POST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatePost;
