import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
          <Typography variant="heading" component="h1" className="text-center landing-subheading">
            <span className="text-center">Why are we here?</span>
          </Typography>
        
        <Grid container spacing={24}>
          <Grid item md={6}>
            <img
              src="/assets/lookingforjob.jpg"
              width="40%"
              alt="Looking for job"
              className="image-center image-landing"
            />
            <Typography variant="subheading" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              src="/assets/lookingforjob.jpg"
              width="40%"
              alt="Looking for job"
              className="image-center image-landing"
            />
            <Typography variant="subheading" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="heading" component="h1" className="text-center landing-subheading">
            <span className="text-center">How we attempt to solve it?</span>
          </Typography>
      </div>
    );
  }
}

export default Landing;
