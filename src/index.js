import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import cytelTheme from "./materialComponents/cytelTheme";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
const configureStore = store();

ReactDOM.render(
  <Provider store={configureStore}>
    <MuiThemeProvider theme={cytelTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/login" render={() => <div>Login</div>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
