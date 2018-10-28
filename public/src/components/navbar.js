// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/standings">standings</NavLink>
//         <NavLink to="/schedules">schedules</NavLink>
//         <NavLink to="/teams">teams</NavLink>
//         <NavLink to="/players">players</NavLink>
//         <NavLink to="/stats">stats</NavLink>
//       </div>
//     );
//   }
// }

// export default NavBar;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Typography } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(event.target);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
