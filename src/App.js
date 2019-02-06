import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/profile";
import Forum from "./components/Forum/Forum";
import User from "./components/User/User";
import Graph from "./components/Graph/Graph";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Landing from "./components/Landing/Landing";
import SunburstGraph from "./components/SunburstGraph/SunburstGraph";
import CreatePost from "./components/CreatePost/CreatePost";
import SinglePost from "./components/SinglePost/SinglePost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Forum} />
          <Route path="/user" component={User} />
          <Route path="/graph" component={Graph} />
          <Route path="/sunburst" component={SunburstGraph} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/course_info" component={CourseInfo} />
          <Route path="/single-post" component={SinglePost} />
        </Switch>
      </div>
    );
  }
}

export default App;