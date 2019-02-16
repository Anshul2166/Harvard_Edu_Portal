import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  modal:{
    minHeight:300,
    maxHeight:500,
    overflow:"scroll"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    paddingTop: 0
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  listItem: {
    padding: 0
  },
  button:{
    textAlign:"center",
    marginTop:30
  }
});

class ProfileModal extends React.Component {
  state = {
    bufferText: "",
    bufferChecked: Array(this.props.data.length).fill(true)
  };
  bufferRecords=this.props.data;
  componentWillReceiveProps(newProps) {
    this.setState({ bufferChecked: Array(newProps.data.length).fill(true) });
    this.bufferRecords = newProps.data;
  }
  onAlterCheckbox = (event, index) => {
    let bufferChecked=this.state.bufferChecked.slice();
    if (event.target.checked) {
      bufferChecked[index] = true;
    } else {
      bufferChecked[index] = false;
    }
    this.setState({ bufferChecked: bufferChecked });
  };
  onClickAdd = event => {
    console.log(event);
    console.log(event.key);
    if (event.key === 'Enter') {
      this.bufferRecords.push(this.state.bufferText);
      let bufferChecked=this.state.bufferChecked.slice();
      bufferChecked.push(true);
      this.setState({ bufferChecked: bufferChecked,bufferText:"" });
    }
  };
  changeBufferText = event => {
    console.log(event.target.value);
    this.setState({ bufferText: event.target.value });
    console.log(event.target.value);
  };
  onClickSave=()=>{
    let saved=[];
    let bufferChecked=this.state.bufferChecked;
    for(let i=0;i<this.state.bufferChecked.length;i++){
      if(bufferChecked[i]){
        saved.push(this.bufferRecords[i]);
      }
    }
  }
  render() {
    const { classes } = this.props;
    const list = this.bufferRecords.map((item, index) => (
      <ListItem divider className={classes.listItem} key={index}>
        <Checkbox
          value="checkedC"
          onClick={event => this.onAlterCheckbox(event, index)}
          checked={this.state.bufferChecked[index]}
        />
        <ListItemText
          primary={item}
          style={
            this.state.bufferChecked[index]
              ? { textDecoration: "" }
              : { textDecoration: "line-through" }
          }
        />
      </ListItem>
    ));
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpen}
        onClose={this.props.onClose}
        className={classes.modal}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Add or delete
          </Typography>
          <div className={classes.demo}>
            <List dense={false} disablePadding>
              {list}{" "}
              <span className={classes.textField}>
                <TextField
                  id="standard-with-placeholder"
                  label="Type here and press enter"
                  placeholder="Placeholder"
                  margin="normal"
                  onKeyPress={this.onClickAdd}
                  onChange={this.changeBufferText}
                  value={this.state.bufferText}
                />
              </span>
            </List>
          </div>

          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={this.onClickSave}>
              Update List
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

ProfileModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const ProfileInfoModal = withStyles(styles)(ProfileModal);

export default ProfileInfoModal;
