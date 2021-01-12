import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/sidebar/sidebar";
import routes from "../routes.js";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 230;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
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

  const { location } = props;
  React.useEffect(() => {
    
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar routes={routes} location={location} />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive Navigation Bar
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.container}>{switchRoutes}</div>
      </div>
    </div>
  );
};

export default Layout1;
