import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";

class Profile extends Component {
  render() {
    return (
      <div className="profile-row">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="image-round image-center"
              width="150"
              height="150"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Paper>User details</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
