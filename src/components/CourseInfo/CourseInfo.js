import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import StarRatings from "react-star-ratings";
import "./CourseInfo.css";

class CourseInfo extends Component {
  render() {
    return (
      <div className="course-info">
        <Grid container spacing={24}>
          <Grid item md={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="rectangle-image right-align"
              width="150"
              height="150"
            />
          </Grid>
          <Grid item md={8} className="vertical-align">
            <h2>
              <b className="heading-form">
                An introduction to Computer Science
              </b>
            </h2>
            <p><i>Offered by coursera</i></p>
            <StarRatings
              rating={3}
              // starRatedColor="blue"
              changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="10px"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CourseInfo;
