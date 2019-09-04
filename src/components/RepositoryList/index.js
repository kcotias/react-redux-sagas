import React, { Component } from "react";

export default class RepositoryList extends Component {
  state = {
    newRepository: ""
  };
  render() {
    const { repositories } = this.props;

    return <h1>Hello world</h1>;
  }
}
