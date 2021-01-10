import React from "react";
import { Route, Redirect } from "react-router-dom";
import App from "./App";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return (<App />);
        } else {
          return (
            <Redirect
              to={{
                pathname: "/Login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
