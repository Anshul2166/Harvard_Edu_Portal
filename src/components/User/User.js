import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup, FormControl } from "@material-ui/core";
import FacebookIcon from 'mdi-react/FacebookIcon';
import GoogleIcon from "mdi-react/GoogleIcon";
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
    width:250
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
      <div className="center-div-user">
        <form className={classes.container} noValidate autoComplete="off">
          <FormGroup className="form-center">
            <FormControl>
              <TextField
                required
                id="standard-required"
                label="Username"
                placeholder="Hello World"
                margin="normal"
                className={classes.textField+" textfield"}
              />
            </FormControl>
            <FormControl>
              <TextField
                required
                id="standard-password-input"
                label="Password"
                className={classes.textField+" textfield"}
                type="password"
                autoComplete="current-password"
                margin="small"
              />
            </FormControl>
          </FormGroup>
        </form>
        <Button variant="contained" color="primary" className={classes.button}>
          Login with username
        </Button>
        <Divider />
        <SocialNetworkLogIn classes={classes} />
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
      <FacebookIcon/>Login with facebook
    </Button>
    <Button
      variant="contained"
      color="primary"
      className={props.classes.button}
    >
      <GoogleIcon/>Login with google
    </Button>
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
