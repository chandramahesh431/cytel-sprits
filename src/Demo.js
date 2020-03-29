import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class App extends Component {
  render() {
    return (
      <>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="subtitle1">Subtitle1</Typography>
      </>
    );
  }
}
