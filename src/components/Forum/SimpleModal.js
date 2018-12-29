import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "block"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    email: "",
    threadMessage: ""
  };
  handleEmailChange=(e)=> {
    this.setState({ email: e.target.value });
  }
  handleThreadMessageChange=(e)=> {
    this.setState({ threadMessage: e.target.value });
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onSubmitFormThread=(event)=>{
    event.preventDefault();
    this.props.addNewThread(this.state);
    return false;
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <p className="forum-thread" onClick={this.handleOpen}>
          Add a thread
        </p>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Add new thread
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <Form onSubmit={this.onSubmitFormThread}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="youremail@mail.com"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    value={this.state.threadMessage}
                    onChange={this.handleThreadMessageChange}
                  />
                </FormGroup>
                <Button>
                  Submit
                </Button>
              </Form>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;