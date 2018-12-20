import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import logo from "../../shared/assets/stanford.jpg";

const styles = {
  card: {
    minWidth: 275,
    width:300,
    height:300,
    backgroundImage:`url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border:"1px solid wheat"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 20,
  },
};

function SpecializationCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos}>
          Stanford Course
        </Typography>
      </CardContent>
    </Card>
  );
}

SpecializationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecializationCard);