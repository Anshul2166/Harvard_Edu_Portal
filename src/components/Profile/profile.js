import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import { connect } from "react-redux";
import ProfileInfoModal from "../Common/Modal/ProfileInfoModal";
import { Link } from "react-router-dom";
import EditProfileModal from "./EditProfile/EditProfile";
import * as profileActions from "../../store/actions/profile";
import { bindActionCreators } from "redux";
import "./profile.css";

class Profile extends Component {
  state = { modalOpen: false, data: [],section:"" };
  onEditOption = (data,section) => {
    this.setState({ data: data, modalOpen: true,section:section });
  };
  onClose = () => {
    this.setState({ modalOpen: false });
  };
  editProfileOpen = () => {
    this.setState({ editProfileOpen: true });
  };
  onCloseEditProfile = () => {
    this.setState({ editProfileOpen: false });
  };
  onEditProfile = updates => {
    console.log(updates);
    this.props.profileActions.updateProfile(updates);
  };
  handleImageClick=()=>{
    this.refs.fileUploader.click();
  }
  selectImageChange=(event)=>{
    let file=event.target.files[0];
    this.props.profileActions.updateImage(file);
  }
  render() {
    if (!this.props.profile.fetched) {
      return <div />
    } else {
      const { skills, accomplishments, projects, courses } = this.props.profile;
      let profileInfo = {
        name: this.props.profile.name,
        description: this.props.profile.description
      };
      return (
        <div className="profile">
        <input type="file" id="file" ref="fileUploader" style={{display: "none"}} onChange={(e)=>this.selectImageChange(e)}/>
          <ProfileInfoModal
            isOpen={this.state.modalOpen}
            onClose={() => this.onClose()}
            data={this.state.data}
            onSave={(updates)=>this.onEditProfile({[this.state.section]:updates})}
          />
          <EditProfileModal
            isOpen={this.state.editProfileOpen}
            onClose={() => this.onCloseEditProfile()}
            data={profileInfo}
            onEditProfile={this.onEditProfile}
          />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <CardMedia
                component="img"
                alt="Profile Pic"
                image={this.props.profile.imageUrl}
                title="Profile Pic"
                className="image-round"
                width="200"
                height="200"
                onClick={()=>this.handleImageClick()}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={10}>
              <div className="profile-info">
                <Typography variant="h4" component="h3">
                  {profileInfo.name}
                </Typography>
                <Typography gutterBottom>{profileInfo.description}</Typography>
                <Link
                  to="#"
                  className="bottom-div"
                  onClick={this.editProfileOpen}
                >
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
                  onClickEdit={() => this.onEditOption(skills,"skills")}
                  type="commaSeprated"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={11}>
                <ListBox
                  title="Accomplishments"
                  data={accomplishments}
                  onClickEdit={() => this.onEditOption(accomplishments,"accomplishments")}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={11}>
                <ListBox
                  title="Projects"
                  data={projects}
                  onClickEdit={() => this.onEditOption(projects,"projects")}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={11}>
                <ListBox
                  title="Completed Courses"
                  data={courses}
                  onClickEdit={() => this.onEditOption(courses,"courses")}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapActionsToProps = dispatch => {
  return {
    profileActions: bindActionCreators(profileActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Profile);
