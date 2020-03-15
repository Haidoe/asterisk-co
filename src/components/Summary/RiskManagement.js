import React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "./Layout";
import useStyles from "./styles";

const RiskManagement = () => {
  const classes = useStyles();

  return (
    <Layout title="RISK MANAGEMENT" onClick={() => []}>
      <Typography className={classes.typoP}>
        Risk Management facing risks is a fact every Business has to face.
        Though risks has been synonymous to{" "}
        <q>danger, hazards , accidents or failures</q>.
      </Typography>

      <Typography className={classes.typoP}>
        Risk Management also looks into the{" "}
        <q> Brighter side of each situation </q> or the OPPORTUNITIES.
      </Typography>
    </Layout>
  );
};

export default RiskManagement;
