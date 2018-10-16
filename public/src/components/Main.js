import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Teams from "./teams";
import Standings from "./standings";
import Schedules from "./schedules";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Standings} exact />
          <Route path="/schedules" component={Schedules} />
          <Route path="/teams" component={Teams} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
