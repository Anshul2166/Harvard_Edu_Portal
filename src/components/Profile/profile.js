import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import { connect } from "react-redux";
import ProfileInfoModal from "../Common/Modal/ProfileInfoModal";
import "./profile.css";

class Profile extends Component {
  state = { modalOpen: false,data:[] };
  onEditOption = (data)=>{
    console.log("On edit clicked");
    console.log(data);
    this.setState({ modalOpen: true,data:data });
  };
  onClose = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    const { skills, accomplishments, projects, courses } = this.props.data;
    return (
      <div className="profile">
        <ProfileInfoModal
          isOpen={this.state.modalOpen}
          onClose={this.onClose}
          data={this.state.data}
        />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="image-round"
              width="150"
              height="150"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10}>
            <div className="profile-info">
              <Typography variant="h5" component="h2">
                Anshul
              </Typography>
              <Typography variant="p" component="p">
                Add a small bio here
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="all-lists">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Skills"
                data={skills}
                onClickEdit={()=>this.onEditOption(skills)}
                type="commaSeprated"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Accomplishments"
                data={accomplishments}
                onClickEdit={()=>this.onEditOption(accomplishments)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Projects"
                data={projects}
                onClickEdit={()=>this.onEditOption(projects)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Completed Courses"
                data={courses}
                onClickEdit={()=>this.onEditOption(courses)}
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
