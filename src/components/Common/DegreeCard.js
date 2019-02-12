import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import logo from "../../shared/assets/stanford.jpg";
import creatorLogo from "../../shared/assets/ibm-logo.jpg";
import './DegreeCard.css';

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 300,
    minHeight: 400,
    border:"1px solid wheat"
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
  }
});

class CourseCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes,degreeName,degreeImage,degreeProvider } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <div className="center-div in-div">
          <img src={degreeImage} alt="Random" width="50" height="50" />
        </div>
        <CardContent>
          <Typography variant="h5" component="h5" className="heading">
            {degreeName}
          </Typography>
          <Typography variant="p" component="p" className="heading">
            Provided by {degreeProvider}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseCard);
