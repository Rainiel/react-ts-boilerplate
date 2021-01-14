import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import img from "../../assets/img/sample.jpg";
import folder from "../../assets/img/folder.png";
import DndContainer from "../../components/dnd-container/dndcontainer";

const useStyles = makeStyles({
  border: {
    backgroundImage: `url(${img})`,
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

const Window: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Box height={1} width={1}>
      <Grid container direction="row" spacing={0} style={{ height: "50%" }}>
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
              id="draggable1"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              <img src={folder} width="50" height="50" draggable="false" />
              List 1
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <Box
            className={classes.border}
            id="div2"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              className={classes.item}
              draggable="true"
              id="draggable2"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              <span>list 2</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs>
          <div
            className={classes.border}
            id="div3"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          >
            <div
              className={classes.item}
              draggable="true"
              id="draggable3"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List 3
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={0} style={{ height: "50%" }}>
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
              id="draggable1"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              <img src={folder} width="50" height="50" draggable="false" />
              List 1
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <Box
            className={classes.border}
            id="div2"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              className={classes.item}
              draggable="true"
              id="draggable2"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              <span>list 2</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs>
          <div
            className={classes.border}
            id="div3"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => {
              allowDrop(e);
            }}
          >
            <div
              className={classes.item}
              draggable="true"
              id="draggable3"
              onDragStart={(e) => {
                drag(e);
              }}
            >
              List 3
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Window;
