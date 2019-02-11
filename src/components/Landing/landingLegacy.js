import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default class landingLegacy extends Component {
  render() {
    const ColoredLine = ({ color }) => (
      <div className="hr-line">
        <hr
          style={{
            color: color,
            backgroundColor: color,
            height: 5,
            borderTop: "1px solid rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>
    );
    return (
      <div>
        <Typography
          variant="heading"
          component="h1"
          className="text-center landing-subheading"
        >
          <span className="text-center">Why are we here?</span>
        </Typography>

        <Grid container spacing={24}>
          <Grid item md={6}>
            <img
              src="/assets/unskilled.jpg"
              width="40%"
              height="65%"
              alt="Unskilled person"
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
              height="65%"
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
        <ColoredLine />
        <Typography
          variant="heading"
          component="h1"
          className="text-center landing-subheading"
        >
          <span className="text-center">How we attempt to solve it?</span>
        </Typography>
        <Grid container spacing={24} className="row">
          <Grid item md={6}>
            <img
              src="/assets/skills.jpg"
              width="40%"
              height="65%"
              alt="Improve skills"
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
              src="/assets/prob_solving.jpg"
              width="40%"
              height="65%"
              alt="Problem solving skills"
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
        <ColoredLine />
        <Typography
          variant="heading"
          component="h1"
          className="text-center landing-subheading"
        >
          <span className="text-center">We present you with LearnIt</span>
        </Typography>
      </div>
    );
  }
}
