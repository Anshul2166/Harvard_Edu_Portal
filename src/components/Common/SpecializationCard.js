import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import StarRatings from "react-star-ratings";

let styles = {
  card: {
    maxWidth: 400,
    width: 300,
    minHeight: 450,
    border: "2px solid azure",
    cursor: "pointer",
    borderRadius: "20px",
    borderBottomColor: "gainsboro"
  },
  media: {
    height: 250,
    width: "100%"
  },
  courseLength: {
    color: "goldenrod",
    marginTop: 10,
    marginBottom: 30
  },
  stars: {
    marginTop: 10,
    marginLeft: "2.5%",
    position: "absolute",
    bottom: "5%"
  }
};

function onClick(props) {
  console.log("Here");
  console.log(props);
  props.history.push({ pathname: "/course_info", state: { info: props.data } });
}

function SpecializationCard(props) {
  const {
    classes,
    courseName,
    courseList,
    courseProvider,
    courseRating
  } = props;
  return (
    <div>
      <Card className={classes.card} onClick={() => onClick(props)}>
        <CardMedia title={courseName}>
          <img
            src={`${props.courseImage}`}
            alt={courseName}
            className={classes.media}
          />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography variant="h5" className="heading" gutterBottom>
            {courseName}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            {courseProvider}
          </Typography>
          <Typography paragraph className={classes.courseLength}>
            {courseList.length} courses included
          </Typography>
          <div className={classes.stars}>
            <StarRatings
              rating={courseRating}
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="10px"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withRouter(withStyles(styles)(SpecializationCard));
