import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import { connect } from "react-redux";
import ProfileInfoModal from "../Common/Modal/ProfileInfoModal";
import { Link } from "react-router-dom";
import EditProfileModal from "./EditProfile/EditProfile";
import "./profile.css";

class Profile extends Component {
  state = { modalOpen: false, data: [] };
  onEditOption = data => {
    console.log("On edit clicked");
    console.log(data);
    this.setState({ data: data, modalOpen: true });
  };
  onClose = () => {
    console.log("Closing");
    this.setState({ modalOpen: false });
  };
  editProfileOpen=()=>{
    console.log("Opening edit profile");
    this.setState({editProfileOpen:true});
  }
  onCloseEditProfile=()=>{
    this.setState({editProfileOpen:false});
  }
  render() {
    const { skills, accomplishments, projects, courses } = this.props.data;
    let profileInfo={name:"Anshul",description:"",imageUrl:""};
    console.log("rendering");
    return (
      <div className="profile">
        <ProfileInfoModal
          isOpen={this.state.modalOpen}
          onClose={() => this.onClose()}
          data={this.state.data}
        />
        <EditProfileModal
          isOpen={this.state.editProfileOpen}
          onClose={() => this.onCloseEditProfile()}
          data={profileInfo}
        />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="image-round"
              width="200"
              height="200"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10}>
            <div className="profile-info">
              <Typography variant="h4" component="h3">
                Anshul
              </Typography>
              <Typography gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Link to="#" className="bottom-div" onClick={this.editProfileOpen}>
                Edit profile
              </Link>
            </div>
          </Grid>
        </Grid>
        <div className="all-lists">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Skills"
                data={skills}
                onClickEdit={() => this.onEditOption(skills)}
                type="commaSeprated"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Accomplishments"
                data={accomplishments}
                onClickEdit={() => this.onEditOption(accomplishments)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Projects"
                data={projects}
                onClickEdit={() => this.onEditOption(projects)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Completed Courses"
                data={courses}
                onClickEdit={() => this.onEditOption(courses)}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.profileInfo.info
  };
};

export default connect(mapStateToProps)(Profile);
