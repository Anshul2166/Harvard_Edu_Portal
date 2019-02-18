import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import logo from "../../shared/assets/stanford.jpg";
import "./DegreeCard.css";
import { withRouter } from "react-router-dom";
import StarRatings from "react-star-ratings";

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 300,
    minHeight: 450,
    border: "2px solid aquamarine",
    cursor: "pointer",
    borderRadius: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
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
  stars: {
    marginLeft: "2.5%"
  }
});

class DegreeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  onClick = () => {
    console.log("Here");
    this.props.history.push({
      pathname: "/course_info",
      state: { info: this.props.data }
    });
  };

  render() {
    const {
      classes,
      degreeName,
      degreeImage,
      degreeProvider,
      courseRating
    } = this.props;

    return (
      <Card className={classes.card} onClick={() => this.onClick()}>
        <CardMedia className={classes.media} image={logo} title={degreeName} />
        <div className="center-div in-div">
          <img src={degreeImage} alt="Random" width="50" height="50" />
        </div>
        <CardContent>
          <Typography variant="h5" component="h5" className="heading">
            {degreeName}
          </Typography>
          <Typography variant="p" component="p" className="heading">
            {degreeProvider}
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
    );
  }
}

DegreeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(DegreeCard));
