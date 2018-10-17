import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Teams from "./teams";
import Standings from "./standings";
import Schedules from "./schedules";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/schedules" component={Schedules} />
          <Route path="/teams" component={Teams} />
          <Route component={Standings} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
