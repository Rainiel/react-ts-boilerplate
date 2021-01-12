import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  border: {
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "black",
    height: "500px",
  },
  item: {
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "black",
    height: "100px",
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

const DragAndDrop: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <div
          className={classes.border}
          id="div1"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => {
            allowDrop(e);
          }}
        >
          <div
            className={classes.item}
            draggable="true"
            id="drag1"
            onDragStart={(e) => {
              drag(e);
            }}
          ></div>
        </div>
      </Grid>
      <Grid item xs>
        <div
          className={classes.border}
          id="div2"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => {
            allowDrop(e);
          }}
        ></div>
      </Grid>
      <Grid item xs>
      <div
          className={classes.border}
          id="div3"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => {
            allowDrop(e);
          }}
        ></div>
      </Grid>
      <Grid item xs>
      <div
          className={classes.border}
          id="div4"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => {
            allowDrop(e);
          }}
        ></div>
      </Grid>
    </Grid>
  );
};

export default DragAndDrop;
