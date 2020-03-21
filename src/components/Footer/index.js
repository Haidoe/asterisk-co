import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    background: theme.palette.primary.main,
    padding: "4em"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF"
  },
  typo: {
    display: "inline-block",
    marginRight: "0.3em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em"
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <footer>
          <section className={classes.container}>
            <Typography variant="h3" className={classes.typo}>
              ASTERISK
            </Typography>
            <Typography variant="h3" className={classes.typo} color="secondary">
              CONSULTANCY
            </Typography>
            <Typography variant="h3" className={classes.typo}>
              INC.
            </Typography>
          </section>
          <div className={classes.container}>
            <Typography variant="h6">
              &#169; 2020 All Rights Reserved
            </Typography>
          </div>
        </footer>
      </Container>
    </Box>
  );
};

export default Footer;
