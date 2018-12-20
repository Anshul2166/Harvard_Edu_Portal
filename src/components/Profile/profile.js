import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Profile extends Component {
  render() {
    return (
      <div className="profile-row">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>Profile Pic</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Paper>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
