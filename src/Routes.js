import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoMatchPage from "./components/common/NoMatchPage";
import Demo from "./Demo";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/login" render={() => <div>Loginnnn</div>} />
        <Route exact path="/demo" render={() => <Demo />} />
        <Route component={NoMatchPage} />
      </Switch>
    );
  }
}
