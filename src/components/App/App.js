import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Profile from '../Profile/profile';
import Forum from '../Forum/Forum';
import User from '../User/User';
import Graph from '../Graph/Graph';
import CourseInfo from "../CourseInfo/CourseInfo";
import Landing from "../Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
         <Switch>
         <Route exact path="/" component={Landing} /> 
					<Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Forum} />
          <Route path="/user" component={User} />
          <Route path="/graph" component={Graph} />
          <Route path="/course_info" component={CourseInfo} />
				</Switch>
      </div>
    );
  }
}

export default App;
