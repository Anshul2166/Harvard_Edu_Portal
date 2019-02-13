import React, { Component } from "react";
import Header from "../Common/Header/Header";
import Select from "react-select-v1";
import "react-select-v1/dist/react-select.css";
import CKEditor from "react-ckeditor-component";
import { connect } from "react-redux";
import { fetchCommunities } from "../../store/actions/communities";
import classnames from "classnames";
import { createPost } from "../../store/actions/posts";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class CreatePost extends Component {
  state = {
    selectedCommunity: null,
    title: "",
    content: "",
    titleErr: "",
    contentErr: "",
    selectedCommunityErr: "",
    contentFocused: false
  };

  handleSelectedCommunityChange = selectedCommunity => {
    if (this.state.selectedCommunityErr)
      this.setState({ selectedCommunityErr: "" });

    this.setState({ selectedCommunity: selectedCommunity.value });
    console.log(`Option selected:`, selectedCommunity);
  };

  onContentChange = evt => {
    var newContent = evt.editor.getData();
    if (this.state.contentErr !== "") this.setState({ contentErr: "" });
    this.setState({
      content: newContent
    });
  };

  onTitleChange = e => {
    if (this.state.titleErr !== "") this.setState({ titleErr: "" });
    this.setState({ title: e.target.value });
  };

  componentDidMount = () => {
    if (!this.props.communities.fetched) {
      this.props.fetchCommunities();
    }
  };

  submitCreatePost = async () => {
    if (!this.state.selectedCommunity)
      return this.setState({
        selectedCommunityErr: "Please select a community"
      });

    if (!this.state.title)
      return this.setState({
        titleErr: "You need to create a title for your post"
      });

    if (!this.state.content)
      return this.setState({
        contentErr: "Please write some content"
      });
    try {
      await this.props.createPost(
        this.state.selectedCommunity,
        this.state.title,
        this.state.content
      );
      this.setState({ title: "", content: "", selectedCommunity: null });
      NotificationManager.info("Post have been successfully created");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let options = [];
    this.props.communities.list.map(community =>
      options.push({ value: community._id, label: community.name })
    );

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
                  {this.state.selectedCommunityErr && (
                    <div className="CreatePost__error">
                      {this.state.selectedCommunityErr}
                    </div>
                  )}
                </div>
                <div className="CreatePost__action-header">
                  <div className="CreatePost__action-header__item">
                    <i className="fas fa-envelope" /> Post
                  </div>
                </div>
                <div className="CreatePost__main-form">
                  <input
                    className={classnames({
                      "CreatePost__main-form__title": true,
                      "CreatePost__main-form__title--error":
                        this.state.titleErr !== ""
                    })}
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                  />
                  {this.state.titleErr && (
                    <div className="CreatePost__error">
                      {this.state.titleErr}
                    </div>
                  )}
                  <div
                    className={classnames({
                      "CreatePost__main-form__content": true,
                      "CreatePost__main-form__content--error":
                        this.state.contentErr !== ""
                    })}
                  >
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
                  {this.state.contentErr && (
                    <div className="CreatePost__error">
                      {this.state.contentErr}
                    </div>
                  )}
                  <div className="CreatePost__btn-wrapper">
                    <div
                      onClick={this.submitCreatePost}
                      className="CreatePost__action-btn"
                    >
                      POST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  communities: state.communities
});
export default connect(
  mapStateToProps,
  { fetchCommunities, createPost }
)(CreatePost);
