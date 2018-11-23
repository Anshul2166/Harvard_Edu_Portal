import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
         <Switch>
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
      </div>
    );
  }
}

export default App;
