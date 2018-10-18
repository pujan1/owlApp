import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Home from "./home";
import Teams from "./teams";
import Standings from "./standings";
import Schedules from "./schedules";
import Players from "./players";
import Stats from "./stats";
import NavBar from "./navbar";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/schedules" component={Schedules} />
            <Route path="/teams" component={Teams} />
            <Route path="/players" component={Players} />
            <Route path="/stats" component={Stats} />
            <Route path="/standings" component={Standings} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
