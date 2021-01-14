import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import window from "../../assets/img/window.jpg";
import folder from "../../assets/img/folder.png";
import DndContainer from "../../components/dnd-container/dndcontainer";
import DndItem from "../../components/dnd-item/dnd-item";

const useStyles = makeStyles({
  border: {
    backgroundImage: `url(${window})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#cccccc",
    borderRadius: "8px",
    height: "100%",
  },
  item: {
    "&:hover": {
      backgroundColor: "rgb(230, 240, 255, 0.5)",
      color: "#ffffff",
    },
    borderRadius: "8px",
    // padding: "10px",
    color: "#ffffff",
    height: "100%",
  },
});

interface prop {}

const allowDrop = (ev: any) => {
  ev.preventDefault();
};

const drag = (ev: any) => {
  ev.dataTransfer.setData("text", ev.target.id);
};

const drop = (ev: any) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
};

const Window: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Box height={1} width={1} className={classes.border}>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "16.6666667%" }}
      >
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
        <Grid item xs>
          <DndItem></DndItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Window;
