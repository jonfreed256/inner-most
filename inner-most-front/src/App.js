import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
