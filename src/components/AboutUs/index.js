import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Raymundo from "./Raymundo";
import Susana from "./Susana";
import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Typography variant="h2" className={classes.header}>
          About us
        </Typography>
        <Typography color="primary" variant="h6" className={classes.main}>
          Ascend Systems and Risk Consultancy Inc. (Asterisk Inc.) was formed to
          address the needs of local clients for expert advise in Risk
          Management to make it available at arms reach 24/7.
        </Typography>
        <Typography variant="h6" className={classes.paragraph}>
          The depth and thoroughness in doing risk assessments though is kept
          thorough and at par with international practice as it conforms with
          the standards of the Institute of Risk Management, UK.
        </Typography>
        <Typography className={classes.paragraph} variant="h6">
          Our team is composed of of seasoned and experienced risk management
          and systems enhancement professionals who has worked with both
          multinational companies and top notable companies in the Philippines
          in facing and addressing risk management challenges unique to each of
          our client’s operation. Asterisk Inc. works hand in hand with its
          clients to understand their risks and provides risk management
          solution and approach tailor fitted to each of our client’s needs,
          providing solutions suited to the local environment, legislations and
          culture in which the business operates.
        </Typography>
        <Typography className={classes.paragraph} variant="h6">
          Asterisk Inc. aspires to prescribe innovative solutions adapted from a
          database of risks mitigation solutions acquired from across various
          industries
        </Typography>

        <Grid container spacing={5} className={classes.grid}>
          <Raymundo />
          <Susana />
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
