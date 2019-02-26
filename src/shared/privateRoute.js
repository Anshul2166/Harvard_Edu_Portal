import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

class PrivateRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { component: Component, profile, ...rest } = this.props;
    console.log(profile);
    if (profile.fetched) {
      return (
        <Route
          {...rest}
          render={props =>
            profile.authenticated === true ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            )
          }
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(withRouter(PrivateRoute));
