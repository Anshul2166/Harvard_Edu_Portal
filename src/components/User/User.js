import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup, FormControl } from "@material-ui/core";
import './User.css';
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    display: "block"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
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
                className={classes.textField}
              />
            </FormControl>
            <FormControl>
              <TextField
                required
                id="standard-password-input"
                label="Password"
                className={classes.textField}
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
      </div>
    );
  }
}

/*This returns the divider ----OR---- */
const Divider = props => (
  <div className="section">
    <div className="divider">
      <span className="divider_content">OR</span>
    </div>
  </div>
);

export default withStyles(styles)(User);
