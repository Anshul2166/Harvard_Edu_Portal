import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import StarRatings from "react-star-ratings";
import ListBox from "../Profile/ListBox/ListBox";
import "./CourseInfo.css";
import { data } from "./data";

class CourseInfo extends Component {
  render() {
    const Overview = data.overview.map(paragraph => <p>{paragraph}</p>);
    const Screenshots = data.screenshots.map(screenshot => (
      <img src={screenshot} className="screenshots" />
    ));
    return (
      <div className="course-info">
        <Grid container spacing={24} className="top-row-course-info">
          <Grid item md={2}>
            <CardMedia
              component="img"
              alt="Course Pic"
              image={data.course_image}
              title="Profile Pic"
              className="rectangle-image right-align"
              width="200"
              height="200"
            />
          </Grid>
          <Grid item md={8} className="vertical-align">
            <h2>
              <b className="heading-form">{data.course_title}</b>
            </h2>
            <p>
              <i>Offered by {data.offeredBy}</i>
            </p>
            <StarRatings
              rating={data.rating}
              changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="10px"
            />
          </Grid>
        </Grid>
        <h1>Overview</h1>
        {Overview}
        <h1>Screenshots</h1>
        {Screenshots}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={10} lg={11}>
            <ListBox
              title="Topics covered in the course"
              data={data.topics_covered}
              edit_option={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CourseInfo;
