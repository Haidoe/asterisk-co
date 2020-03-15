import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "4em",
    paddingTop: "1.2em",
    background: theme.palette.primary.main,
    minHeight: "100vh",
    backgroundImage: `url(${require("./arch-des/arch-lg.jpg")})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.8,
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed"
    }
  },

  card: {
    paddingTop: 125,
    alignItems: "center",
    background: "transparent",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 140
    }
  },
  typo: {
    margin: "0 auto",
    fontFamily: "'Parisienne', cursive",
    [theme.breakpoints.up("sm")]: {
      width: "600px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9em"
    }
  },
  typo2: {
    marginBottom: "1em",
    color: "#FFF",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1em"
    }
  },
  btn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em"
    }
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Container>
        <Card className={classes.card} elevation={0}>
          <Typography variant="h4" className={classes.typo}>
            <q>Guiding you through the world of risk</q>
          </Typography>
          <Typography variant="h6" className={classes.typo2}>
            Asterisk Consultancy Inc.
          </Typography>
          <Button className={classes.btn} color="primary" variant="contained">
            Checkout our Services
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default Banner;
