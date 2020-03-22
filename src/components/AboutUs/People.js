import React from "react";
import Grid from "@material-ui/core/Grid";
import Raymundo from "./Raymundo";
import Susana from "./Susana";
import useStyles from "./styles";

const People = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.grid}>
      <Raymundo />
      <Susana />
    </Grid>
  );
};

export default People;
