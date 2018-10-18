import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/standings">standings</NavLink>
        <NavLink to="/schedules">schedules</NavLink>
        <NavLink to="/teams">teams</NavLink>
        <NavLink to="/players">players</NavLink>
        <NavLink to="/stats">stats</NavLink>
      </div>
    );
  }
}

export default NavBar;
