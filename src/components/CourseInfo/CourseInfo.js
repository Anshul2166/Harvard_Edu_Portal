import React, { Component } from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import StarRatings from "react-star-ratings";
import ListBox from "../Profile/ListBox/ListBox";
import "./CourseInfo.css";

class CourseInfo extends Component {
  render() {
    let index=this.props.location.state.index;
    console.log(this.props);
    let data=this.props.info[index-1];
    const Overview = data.overview.map(paragraph => <p>{paragraph}</p>);
    const Screenshots = data.screenshots.map(screenshot => (
      <img src={screenshot} className="screenshots" alt="screenshot"/>
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
            <p className="course-info-url">
              <i>Available on <a href={data.url}>{data.url}</a></i>
            </p>
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

const mapStateToProps = state => {
  return {
    info: state.courses.info
  };
};

export default connect(mapStateToProps)(CourseInfo);
