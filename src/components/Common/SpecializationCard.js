import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

let styles = {
  card: {
    minWidth: 275,
    width: 300,
    height: 300,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300px 300px",
    border: "2px solid white",
    cursor: "pointer"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: 20,
    color: "azure"
  },
  info: {
    width: 300
  }
};

function onClick(props) {
  console.log("Here");
  console.log(props);
  props.history.push({ pathname: "/course_info", state: { info: props.data } });
}

function SpecializationCard(props) {
  const { classes, data } = props;

  return (
    <div>
      <Card
        className={classes.card}
        style={{ backgroundImage: `url(${props.courseImage})` }}
        onClick={() => onClick(props)}
      />
      <Typography variant="h6" component="p" className={classes.info}>
        {props.courseName}
      </Typography>
    </div>
  );
}

export default withRouter(withStyles(styles)(SpecializationCard));
