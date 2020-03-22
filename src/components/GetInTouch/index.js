import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  box: {
    background: "#f1f1f1",
    padding: "5em 0",
    [theme.breakpoints.down("sm")]: {
      padding: "3em 0"
    }
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  typo: {
    textAlign: "center",
    fontWeight: "Bold",
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

const GetInTouch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Typography
          component={Link}
          to="/contact-us"
          variant="h5"
          className={classes.typo}
        >
          Get in touch! We would love to hear from you.
        </Typography>
      </Container>
    </Box>
  );
};

export default GetInTouch;
