import React, { Component } from "react";

class Details extends Component {
  state = {};
  render() {
    const { name } = this.props;
    return <h1>Details: {name}</h1>;
  }
}

export default Details;
