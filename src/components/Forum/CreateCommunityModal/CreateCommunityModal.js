import React, { Component } from "react";
import Modal from "react-modal";
import ForumContext from "../_forumContext";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  createCommunity,
  fetchCommunities
} from "../../../store/actions/communities";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0"
  },
  overlay: {
    backgroundColor: "rgba(46, 47, 48, 0.7)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class CreateCommunityModal extends Component {
  state = {
    name: "",
    description: "",
    nameErr: "",
    descriptionErr: ""
  };
  static contextType = ForumContext;

  changeName = e => {
    if (this.state.nameErr !== "") {
      this.setState({ nameErr: "" });
    }
    this.setState({ name: e.target.value });
  };

  changeDescription = e => {
    if (this.state.descriptionErr !== "") {
      this.setState({ descriptionErr: "" });
    }
    this.setState({ description: e.target.value });
  };

  submitForm = async () => {
    if (this.state.name === "") {
      return this.setState({ nameErr: "You need to provide a name" });
    }
    if (this.state.description === "") {
      return this.setState({
        descriptionErr: "You need to provide the description for the community"
      });
    }

    if (this.state.nameErr === "" && this.state.descriptionErr === "") {
      try {
        await this.props.createCommunity(
          this.state.name,
          this.state.description
        );

        this.props.fetchCommunities();
        this.setState({ name: "", description: "" });
        NotificationManager.info("Community have been successfully created");
        window.location.reload();
      } catch (error) {
        //Error check from server
        console.log("From submit form", error);
        if (error.data.nameErr) {
          this.setState({ nameErr: error.data.nameErr });
        }
      }
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.context.communityModalOpen}
        style={customStyles}
        contentLabel="Create Community"
      >
        <div className="CreateCommunityModal">
          <div className="CreateCommunityModal__form">
            <h1 className="CreateCommunityModal__header">
              Create a Community
              <div
                onClick={this.context.closeCommunityModal}
                className="CreateCommunityModal__header__close-btn"
              >
                <i class="fas fa-times" />
              </div>
            </h1>
            <div className="CreateCommunityModal__input-div-wrapper">
              <div className="CreateCommunityModal__main-input-wrapper">
                <label className="CreateCommunityModal__main-input-wrapper__label">
                  <input
                    type="text"
                    className={classnames({
                      "CreateCommunityModal__main-input": true,
                      "CreateCommunityModal__main-input--error":
                        this.state.nameErr !== ""
                    })}
                    value={this.state.name}
                    onChange={this.changeName}
                  />
                  <span className="CreateCommunityModal__main-input-wrapper__span">
                    community name
                  </span>
                </label>
              </div>
              <div className="CreateCommunityModal__input-div-wrapper__info">
                Community names including capitalization cannot be changed{" "}
                <i class="fas fa-info-circle" />
              </div>
              {this.state.nameErr && (
                <div className="CreateCommunityModal__input-div-wrapper__error">
                  {this.state.nameErr}
                </div>
              )}
            </div>
            <div className="CreateCommunityModal__input-div-wrapper">
              <div className="CreateCommunityModal__main-input-wrapper">
                <label className="CreateCommunityModal__main-input-wrapper__label">
                  <textarea
                    type="text"
                    value={this.state.description}
                    onChange={this.changeDescription}
                    className={classnames({
                      "CreateCommunityModal__main-input": true,
                      "CreateCommunityModal__main-input--textarea": true,
                      "CreateCommunityModal__main-input--error":
                        this.state.descriptionErr !== ""
                    })}
                  />
                  <span className="CreateCommunityModal__main-input-wrapper__span">
                    community description
                  </span>
                </label>
              </div>
              <div className="CreateCommunityModal__input-div-wrapper__info">
                This is how new members come to understand your community.{" "}
                <i class="fas fa-info-circle" />
              </div>
              {this.state.descriptionErr && (
                <div className="CreateCommunityModal__input-div-wrapper__error">
                  {this.state.descriptionErr}
                </div>
              )}
            </div>
          </div>
          <div className="CreateCommunityModal__action-area">
            <button className="CreateCommunityModal__cancel-btn btn btn-md btn-blue-outline">
              Cancel
            </button>
            <button
              onClick={this.submitForm}
              className="CreateCommunityModal__start-btn btn btn-md btn-blue"
            >
              Create
            </button>
          </div>
          <NotificationContainer />
        </div>
      </Modal>
    );
  }
}

export default connect(
  null,
  { createCommunity, fetchCommunities }
)(CreateCommunityModal);
