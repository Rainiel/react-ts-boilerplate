import React from "react";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    loginForm: {
      borderRadius: "8px",
      backgroundColor: "#ffffff",
    },
    background: {
      backgroundColor: "#f2f2f2",
    },
  })
);

interface prop {}

const Card: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      bgcolor="background.paper"
      justifyContent="center"
      alignItems="center"
      className={classes.loginForm}
    >
      <Box p={8}>
        <form className={classes.root} noValidate autoComplete="off">
          <Box>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {

              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Card;
