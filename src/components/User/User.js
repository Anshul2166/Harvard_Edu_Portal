import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup, FormControl } from "@material-ui/core";
import FacebookIcon from "mdi-react/FacebookIcon";
import GoogleIcon from "mdi-react/GoogleIcon";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import "./User.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "block"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 250
  },
  button: {
    margin: theme.spacing.unit,
    width: 250
  }
});

class User extends Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="User">
        <Grid container spacing={24} className="user">
          <Grid item md={1} />
          <Grid item md={5} className="vertical-center">
            <Typography
              variant="subheading"
              component="p"
              className="form-center"
            >
              <ul>
                <li>
                  <CheckIcon />
                  Learn from our carefully prepared course path crafted by our
                  expert
                </li>
                <li>
                  <CheckIcon />
                  Explore oppurtunities in your field in India and abroad
                </li>
                <li>
                  <CheckIcon />
                  Get to know opinions of others on your area of interest
                </li>
                <li>
                  <CheckIcon />
                  Get information on best resources available out there to
                  optimize your learning
                </li>
                <li>
                  <CheckIcon />
                  Learn smart by devoting time on learning skills which are
                  important
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <div className="border-box">
              <Typography
                variant="display1"
                component="h1"
                className="form-center center-text"
              >
                <b className="heading-form">Get started with learnIt</b>
              </Typography>
              <div className="center-div-user">
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <FormGroup className="form-center">
                    <FormControl>
                      <TextField
                        required
                        id="standard-required"
                        label="Username"
                        placeholder="Hello World"
                        margin="normal"
                        className={classes.textField + " textfield"}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField + " textfield"}
                        type="password"
                        autoComplete="current-password"
                        margin="small"
                      />
                    </FormControl>
                  </FormGroup>
                </form>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login with username
                </Button>
                <Divider />
                <SocialNetworkLogIn classes={classes} />
                <div className="center-text">
                  <Link to="/signup">Click here to sign up</Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const SocialNetworkLogIn = props => (
  <div className="social-network-login">
    <Button
      variant="contained"
      color="primary"
      className={props.classes.button}
    >
      <FacebookIcon />
      Login with facebook
    </Button>
    <a href="http://localhost:8080/api/users/auth/google">
      <Button
        variant="contained"
        color="primary"
        className={props.classes.button}
      >
        <GoogleIcon />
        Login with google
      </Button>
    </a>
  </div>
);

/*This returns the divider ----OR---- */
const Divider = props => (
  <div className="section">
    <div className="divider">
      <span className="divider_content">OR</span>
    </div>
  </div>
);

export default withStyles(styles)(User);
