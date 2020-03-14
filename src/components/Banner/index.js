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
    textAlign: "center"
  },
  typo: {
    margin: "0 auto",
    marginBottom: "0.3em",
    fontStyle: "italic",
    [theme.breakpoints.up("sm")]: {
      width: "600px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em"
    }
  },
  typo2: {
    marginBottom: "1em",
    color: "#FFF"
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Container>
        <Card className={classes.card} elevation={0}>
          <Typography variant="h4" className={classes.typo}>
            <q>GUIDING YOU THROUGH THE WORLD OF RISK</q>
          </Typography>
          <Typography variant="h6" className={classes.typo2}>
            Asterisk Consultancy Inc.
          </Typography>
          <Button color="primary" variant="contained">
            Checkout our Services
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default Banner;
