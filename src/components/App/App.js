import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
         This is the home page
         <Switch>
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
      </div>
    );
  }
}

export default App;
