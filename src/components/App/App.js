import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Profile from '../Profile/profile';
import Forum from '../Forum/Forum';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
         <Switch>
					<Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Forum} />
				</Switch>
      </div>
    );
  }
}

export default App;
