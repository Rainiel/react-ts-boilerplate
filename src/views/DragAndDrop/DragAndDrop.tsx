import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import img from "../../assets/img/sample.jpg";
import folder from "../../assets/img/folder.png";
import DndContainer from "../../components/dnd-container/dndcontainer";

const useStyles = makeStyles({
  border2: {
    backgroundColor: "#cccccc",
    borderRadius: "8px",
    padding: "5px",
    height: "175px",
  },
  item2: {
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
  },
  border: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#cccccc",
    borderRadius: "8px",
    height: "100px",
  },
  item: {
    "&:hover": {
      backgroundColor: "rgb(230, 240, 255, 0.5)",
      // opacity: "0.5",
      color: "#ffffff",
    },
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
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

const DragAndDrop: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <div
            className={classes.border2}
            id="div1"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          >
            <div
              className={classes.item2}
              draggable="true"
              id="drag1"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 1
            </div>
            <div
              className={classes.item2}
              draggable="true"
              id="drag2"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List Item 2
            </div>
            <div
              className={classes.item2}
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
            className={classes.border2}
            id="div2"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          ></div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.border2}
            id="div3"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          ></div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.border2}
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
