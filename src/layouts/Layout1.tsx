import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/sidebar/sidebar";
import routes from "../routes.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../components/navbar/navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      height: "100%",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "black",
    },
  })
);

interface prop {}

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/layout1") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/layout1" to="/layout1/dashboard" />
  </Switch>
);
const Layout1: React.FC<any> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar routes={routes} />
      <Navbar />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.container}>{switchRoutes}</div>
      </div>
    </div>
  );
};

export default Layout1;
