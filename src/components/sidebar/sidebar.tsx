import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      backgroundColor: "#5a606b",
      color: "#f5f5f5",
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    activeRoute: {
      backgroundColor: "#282c34",
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: "#FFF",
      },
    },
  })
);

const Sidebar: React.FC<any> = (props) => {
  const classes = useStyles();

  const activeRoute = (routeName: any) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };

  const { routes } = props;

  React.useEffect(() => {}, []);

  return (
    <div>
      <nav className={classes.drawer}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {routes.map((route: any, index: any) => {
              const activeItem = classNames({
                [classes["activeRoute"]]: activeRoute(
                  route.layout + route.path
                ),
              });
              return (
                <NavLink
                  key={index}
                  to={route.layout + route.path}
                  className={classes.item}
                >
                  <ListItem button key={index} className={activeItem}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={route.name} />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </Drawer>
      </nav>
    </div>
  );
};

export default Sidebar;
