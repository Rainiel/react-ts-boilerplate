import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  border: {
    backgroundColor: "#cccccc",
    borderRadius: "8px",
    padding: "5px",
    height: "175px",
  },
  item: {
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
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
    <div>
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
            >
              List Item 1
            </div>
            <div
              className={classes.item}
              draggable="true"
              id="drag2"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 2
            </div>
            <div
              className={classes.item}
              draggable="true"
              id="drag3"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 3
            </div>
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
            >
              List Item 1
            </div>
            <div
              className={classes.item}
              draggable="true"
              id="drag2"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 2
            </div>
            <div
              className={classes.item}
              draggable="true"
              id="drag3"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 3
            </div>
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
    </div>
  );
};

export default DragAndDrop;
