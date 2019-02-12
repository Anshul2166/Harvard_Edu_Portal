import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import logo from "../../shared/assets/stanford.jpg";
import  { Redirect,withRouter } from 'react-router-dom';

let styles = {
  card: {
    minWidth: 275,
    width: 300,
    height: 300,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300px 300px",
    border: "2px solid white"
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

function onClick(props){
  console.log("Here");
  props.history.push('/profile');
};

function SpecializationCard(props) {
<<<<<<< HEAD
  const { classes } = props;
  // classes.card.backgroundImage=props.courseImage;
=======
  const { classes,data } = props;
>>>>>>> onClick working
  return (
    <div>
      <Card
        className={classes.card}
        style={{ backgroundImage: `url(${props.courseImage})` }}
        onClick={()=>onClick(props)}
      />
      <Typography variant="h6" component="p" className={classes.info}>
        {props.courseName}
      </Typography>
    </div>
  );
}

export default withRouter(withStyles(styles)(SpecializationCard));
