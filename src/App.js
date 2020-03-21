import React, { Component } from "react";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    this.props.increment();
  }
  render() {
    return <div>Home: {this.props.count}</div>;
  }
}

const mapStateToProps = state => ({
  count: state.studyReducer.count
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
