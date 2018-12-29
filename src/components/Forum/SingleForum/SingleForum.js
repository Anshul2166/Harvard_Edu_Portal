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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
    console.log(this.props);
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
              {this.props.thread.mainMessage}
            </Typography>
            <p className={classes.forumFooter}>
              {this.props.thread.votes} votes, {this.props.thread.comments.length} replies
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
              <CommentForum commentsData={this.props.thread.comments}/>
            </div>
          </Collapse>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		forum: state.forums.threads
	};
};
// const mapActionsToProps = dispatch => {
//   return {
//     myActivity: bindActionCreators(myActivityActions, dispatch)
//   };
// };

export default connect(mapStateToProps)(withStyles(styles)(SingleForum));
