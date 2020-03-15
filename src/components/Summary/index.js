import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RiskManagement from "./RiskManagement";
import Expertise from "./Expertise";
import Services from "./Services";
import useStyles from "./styles";

const Summary = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Grid spacing={5} container className={classes.grid}>
          <RiskManagement />
          <Expertise />
          <Services />
        </Grid>
      </Container>
    </Box>
  );
};

export default Summary;
