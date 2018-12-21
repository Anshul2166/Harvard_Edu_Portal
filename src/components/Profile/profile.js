import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-row">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="image-round image-right"
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
              Interested in DSA, Android
            </Typography>
            <Typography variant="p" component="p">
              Level 3 user
            </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
