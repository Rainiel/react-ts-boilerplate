import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { ProtectedRoute } from "./protected.route";
import reportWebVitals from "./reportWebVitals";
import Layout1 from "./layouts/Layout1";
import LoginPage from "./views/LoginPage/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute path="/layout1" component={Layout1} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
