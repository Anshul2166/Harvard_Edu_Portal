import React, { Component } from "react";
import Header from "../Header/Header";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class CreatePost extends Component {
  state = {
    selectedCommunity: null
  };

  handleSelectedCommunityChange = selectedCommunity => {
    this.setState({ selectedCommunity });
    console.log(`Option selected:`, selectedCommunity);
  };

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
                  />
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
