import React, { Component } from "react";

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://owlappp.herokuapp.com/api/standings")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <ul>{items}</ul>;
    }
  }
}

export default Standings;
