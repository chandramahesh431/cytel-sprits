import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText(props) {
  const { error, autoComplete, helperText, value } = props;
  return (
    <TextField
      error={error}
      id="outlined-error-helper-text"
      label="Label text"
      value={value}
      variant="outlined"
      helperText={helperText || ""}
      autoComplete={autoComplete}
    />
  );
}
InputText.defaultProps = {
  error: false,
  autoComplete: "off",
  helperText: "",
  value: "Default Value"
};
