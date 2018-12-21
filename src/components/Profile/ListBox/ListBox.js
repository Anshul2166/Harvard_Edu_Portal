import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header:{
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)"
    }
  });

class ListBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="list-box">
        <Card>
          <CardHeader
            title="Skills"
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            className={classes.header}
          />
          <CardContent>
            <Typography paragraph>
              React, NodeJs, Python, CSS
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ListBox);
