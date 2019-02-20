import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
  modal: {
    minHeight: 300,
    maxHeight: 500
  },
  paper: {
    position: "absolute",
    width: 700,
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
  button: {
    textAlign: "center",
    marginTop: 30
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

class EditProfile extends React.Component {
  state = {
    keys: [],
    values: []
  };
  bufferRecords = this.props.data;
  componentWillReceiveProps(newProps) {
    let profileInfo = newProps.data;
    console.log("Here are the keys");
    console.log(profileInfo);
    let keys = Object.keys(profileInfo);
    let values = [];
    for (let i = 0; i < keys.length; i++) {
      let value = profileInfo[keys[i]];
      values.push(value);
    }
    console.log(values);
    this.setState({ values: values, keys: keys });
  }
  onClickSave = () => {
    let saved={};
    let {keys,values}=this.state;
    for(let i=0;i<keys.length;i++){
      saved[keys[i]]=values[i];
    }
    this.props.onEditProfile(saved);
    this.props.onClose();
  };
  onChangeText=(event,index)=>{
    let values=this.state.values;
    let currentValue=event.target.value;
    values[index]=currentValue;
    this.setState({values});
  }
  render() {
    const { classes } = this.props;
    const { keys, values } = this.state;
    const list = keys.map((item, index) => {
      console.log(item);
      if (item!== "description") {
        return (
          <ListItem divider className={classes.listItem} key={index}>
            <TextField
              id="outlined-name"
              label={item}
              className={classes.textField}
              type="text"
              margin="normal"
              variant="outlined"
              value={values[index]}
              onChange={(e)=>this.onChangeText(e,index)}
            />
          </ListItem>
        );
      } else {
        return (
          <ListItem divider className={classes.listItem} key={index}>
            <TextField
              id="outlined-name"
              label={item}
              className={classes.textField}
              type="text"
              margin="normal"
              variant="outlined"
              value={values[index]}
              onChange={(e)=>this.onChangeText(e,index)}
              multiline={true}
              rows={2}
              rowsMax={4}
            />
          </ListItem>
        );
      }
    });
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
            Edit profile
          </Typography>
          <div className={classes.demo}>
            <List dense={false} disablePadding>
              {list}{" "}
            </List>
          </div>

          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onClickSave}
            >
              Update Profile
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const EditProfileModal = withStyles(styles)(EditProfile);

export default EditProfileModal;
