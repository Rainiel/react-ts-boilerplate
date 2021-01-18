import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import folder from "../../assets/img/folder.png";
import Box from "@material-ui/core/Box";

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
    backgroundColor: "#cccccc",
    borderRadius: "8px",
    height: "100px",
    width: "80px",
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

const DndContainer: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Box
    id="div1"
    height={1}
    onDrop={(e) => drop(e)}
    onDragOver={(e) => {
      allowDrop(e);
    }}
  ></Box>
  );
};

export default DndContainer;
