import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import { withRouter } from "react-router-dom";
import StarRatings from "react-star-ratings";

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 300,
    minHeight: 400,
    border: "2px solid azure",
    height: 300,
    cursor: "pointer",
    borderRadius: "20px",
    borderBottom: "gainsboro",
    marginBottom:"1px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  content: {
    // position: "absolute",
    // bottom: "15%"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  stars: { marginLeft: "2.5%"}
});

class CourseCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  onClick = () => {
    this.props.history.push({
      pathname: "/course_info",
      state: { info: this.props.data }
    });
  };

  render() {
    const {
      classes,
      courseName,
      courseImage,
      courseProvider,
      courseRating
    } = this.props;

    return (
      <Card className={classes.card} onClick={() => this.onClick()}>
        <CardMedia
          className={classes.media}
          image={courseImage}
          title={courseName}
        />
        <CardContent>
          <Typography variant="h5" component="h5" className="heading">
            {courseName}
          </Typography>
          <div className={classes.content}>
            <Typography variant="p" component="p" className="heading">
              {courseProvider}
            </Typography>
          </div>
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
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(CourseCard));
