import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    background: "#f1f1f1",
    padding: "5em 0"
  },
  typo: {
    textAlign: "center",
    fontWeight: "Bold",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

const GetInTouch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Typography variant="h5" className={classes.typo}>
          Get in touch! We would love to hear from you.
        </Typography>
      </Container>
    </Box>
  );
};

export default GetInTouch;
