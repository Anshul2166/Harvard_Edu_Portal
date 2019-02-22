import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup, FormControl } from "@material-ui/core";
import FacebookIcon from "mdi-react/FacebookIcon";
import GoogleIcon from "mdi-react/GoogleIcon";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { connect } from "react-redux";
import { signUpUser } from "../../store/actions/profile";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: "100%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 650
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: 20
  }
});

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    usernameErr: "",
    passwordErr: "",
    emailErr: ""
  };

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onFormSubmit = async () => {
    console.log("On form submit is called");
    const name = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    try {
      await this.props.signUpUser(name, email, password);
      this.props.history.push("/sunburst");
    } catch (error) {
      console.log(error);
      this.setFormError(error.data.errors);
    }
  };

  setFormError = formErrors => {
    let errors = {};
    formErrors.map(error => {
      if (error.param === "email") {
        errors["email"] = error.msg;
      }
      if (error.param === "password") {
        errors["password"] = "Provide a password of minimum 5 character";
      }
      if (error.param === "name") {
        console.log("Name error is called");
        errors["username"] = "Provide a name between 5 and 15 character";
      }
    });
    this.setState({
      usernameErr: errors.username,
      passwordErr: errors.password,
      emailErr: errors.email
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="SignUp">
        <div className="SignUp__header">Join in to the Learn It</div>
        <div className="SignUp__main-area">
          <form className={classes.container} noValidate autoComplete="off">
            <FormGroup>
              <FormControl>
                <TextField
                  required
                  id="standard-required"
                  label="Username"
                  placeholder="Hello World"
                  margin="normal"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
                {this.state.usernameErr && (
                  <p className="SignUp__error">{this.state.usernameErr}</p>
                )}
              </FormControl>
              <FormControl>
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  placeholder="Hello World"
                  margin="normal"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                {this.state.emailErr && (
                  <p className="SignUp__error">{this.state.emailErr}</p>
                )}
              </FormControl>
              <FormControl>
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  margin="small"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
                {this.state.passwordErr && (
                  <p className="SignUp__error">{this.state.passwordErr}</p>
                )}
              </FormControl>
            </FormGroup>
          </form>
          <div className="SignUp__button-wrapper">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.onFormSubmit}
            >
              Sign Up with username
            </Button>
          </div>

          <Divider />
          <SocialNetworkLogIn classes={classes} />
        </div>
      </div>
    );
  }
}
const SocialNetworkLogIn = props => (
  <div className="SocialNetworkLogin">
    <Button
      variant="contained"
      color="primary"
      className={props.classes.button}
    >
      <FacebookIcon />
      Sign up with facebook
    </Button>
    <a href="http://localhost:8080/api/users/auth/google">
      <Button
        variant="contained"
        color="primary"
        className={props.classes.button}
      >
        <GoogleIcon />
        Sign up with google
      </Button>
    </a>
  </div>
);
/*This returns the divider ----OR---- */
const Divider = props => (
  <div className="SignUp__divider section">
    <div className="divider">
      <span className="divider_content">OR</span>
    </div>
  </div>
);

export default withStyles(styles)(
  withRouter(
    connect(
      null,
      { signUpUser }
    )(SignUp)
  )
);
