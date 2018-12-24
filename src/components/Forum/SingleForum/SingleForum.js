import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import CommentForum from "../CommentForum/CommentForum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
  header: {
    boxShadow:
      "0px 0px 1px 0px rgba(0,0,0,0.5),0px 0px 0px 0px rgba(0,0,0,0.1),0px 2.5px 0px -1px rgba(0,0,0,0.12)"
  },
  title: {
    color: "purple"
  },
  card: {
    marginTop: "2.5%",
    boxShadow:
      "2px 3px 9px 2px rgba(0,0,0,0.1),0px 0px 0px 0px rgba(0,0,0,0.1),0px 2.5px 0px -1px rgba(0,0,0,0.12)"
  },
  icon: {
    color: "purple"
  },
  avatar: {
    backgroundColor: red[500]
  },
  votes: {
    fontSize: "1.2rem",
    verticalAlign: "middle"
  },
  margin: {
    margin: 0
  },
  forumFooter: {
    marginBottom: "0px",
    fontSize: "0.85rem"
  }
});

class SingleForum extends Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="single-forum">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            title="Anshul Dubey"
            subheader="Member since December 21,2018"
            classes={{
              title: classes.title
            }}
            action={
              <div>
                {/* <span className={classes.votes}>+28</span> */}
                <IconButton aria-label="Delete" className={classes.margin}>
                  <ArrowUpward fontSize="large" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                  <ArrowDownward fontSize="large" />
                </IconButton>
              </div>
            }
            className={classes.header}
          />
          <CardContent>
            <Typography variant="p" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <p className={classes.forumFooter}>
              26 votes, 12 replies
              <IconButton
                aria-label="Show more"
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </p>
          </CardContent>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <div className="comment-forum" style={{ marginLeft: "2.5%", marginBottom: "0.5%" }}>
              <CommentForum />
            </div>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SingleForum);
