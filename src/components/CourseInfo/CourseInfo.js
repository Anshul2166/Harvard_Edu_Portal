import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import StarRatings from "react-star-ratings";
import ListBox from "../Profile/ListBox/ListBox";
import "./CourseInfo.css";
import {data} from "./data";

class CourseInfo extends Component {  
  render() {
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
              <b className="heading-form">
                {data.course_title}
              </b>
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
        <p>
          CS50 is a true, comprehensive introduction to computer science. The
          course is taught by the vivacious David Malan and hosted on edX. There
          are 13 weeks of instruction with 8 mandatory problem sets (psets) and
          a final project:
        </p>
        <p>
          The CS50 staff say that the pointers section of the course is the
          hardest and they are right. You intimately deal with pointers and
          allocating memory in pset5 and pset6. Mental gymnastics are required.
          Finally figuring out pointers is probably the thing I am most proud of
          coming out of the course.
        </p>
        <p>
          The 10–20 hours for each problem set is accurate. Your code won’t work
          and you will get frustrated (especially because half of the course is
          in C), but frustration is good. Frustration conquered is learning.
        </p>
        <h1>Screenshots</h1>
        <img src="/assets/cs501.png" className="screenshots" />
        <img src="/assets/cs502.png" className="screenshots" />
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
