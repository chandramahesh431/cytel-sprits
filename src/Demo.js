import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import InputText from "./components/common/InputText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

export default class App extends Component {
  render() {
    return (
      <>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Divider />
        <InputText />
        <InputText label="Label text" />
        <InputText helperText="Helper text" />
        <InputText value="Value" helperText="Helper text" />
        <InputText error helperText="Error message" />
        <Divider />
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </>
    );
  }
}
