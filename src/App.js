import React, { Component } from "react";
// import { connect } from "react-redux";

export default class App extends Component {
  // componentDidMount() {
  //   setInterval(() => {
  //     this.props.increment();
  //   }, 1000);
  // }
  render() {
    return <div>Home</div>;
    // return <div>Home: {this.props.count}</div>;
  }
}

// const mapStateToProps = state => ({
//   count: state.studyReducer.count
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
