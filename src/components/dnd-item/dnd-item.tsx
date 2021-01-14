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
    // backgroundImage: `url(${img})`,
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

const DndItem: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    
      <Box
        className={classes.border}
        id="div1"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => {
          allowDrop(e);
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.item}
          draggable="true"
          id="draggable1"
          onDragStart={(e) => {
            drag(e);
          }}
        >
          <Box>
            <Box>
              <img src={folder} width="50" height="50" draggable="false" />
            </Box>
            <Box display="flex" justifyContent="center">
              <span>list 2</span>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default DndItem;
