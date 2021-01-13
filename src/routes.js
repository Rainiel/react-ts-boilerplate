// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

// Pages
import DashboardPage from "./views/Dashboard/Dashboard";
import DragAndDrop from "./views/DragAndDrop/DragAndDrop";
import Card from "./views/Card/Card";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // icon: Dashboard,
    component: DashboardPage,
    layout: "/layout1"
  },
  {
    path: "/card",
    name: "Card",
    // icon: Dashboard,
    component: Card,
    layout: "/layout1"
  },
  {
    path: "/draganddrop",
    name: "DragAndDrop",
    // icon: Dashboard,
    component: DragAndDrop,
    layout: "/layout1"
  },
  {
    path: "/complaints",
    name: "Complaints",
    // icon: Dashboard,
    // component: Complaints,
    layout: "/layout1"
  },
];

export default routes;
