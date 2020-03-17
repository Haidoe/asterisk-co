import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import raymundo from "./assets/reymund.webp";
import susana from "./assets/susana.webp";

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: "80vh",
    background: "#CFDFEC",
    padding: "3em 2em",
    textAlign: "center"
  },
  header: {
    textTransform: "uppercase",
    display: "inline-block",
    position: "relative",
    paddingBottom: "10px",
    marginBottom: "0.8em",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "50%",
      height: "1px",
      bottom: 0,
      left: "25%",
      borderBottom: `5px solid ${theme.palette.primary.main}`
    }
  },
  main: {
    paddingBottom: "1.5em"
  },
  paragraph: {
    textAlign: "justify",
    paddingBottom: "1em"
  },
  grid: {
    marginTop: "2em"
  },
  portrait: {
    display: "flex",
    background: theme.palette.primary.main
  },
  portraitTitle: {
    flexGrow: 1,
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  portraitImage: {
    width: 180,
    height: 180
  }
}));

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
          <Grid item xs={12} lg={6}>
            <Card className={classes.portrait}>
              <img
                src={raymundo}
                alt="raymundo"
                className={classes.portraitImage}
              />
              <div className={classes.portraitTitle}>
                <Typography variant="h4">RAYMUNDO S. TORRES </Typography>
                <Typography variant="h5">President and CEO </Typography>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card className={classes.portrait}>
              <img
                src={susana}
                alt="susana"
                className={classes.portraitImage}
              />
              <div className={classes.portraitTitle}>
                <Typography variant="h4">SUSANA C. ALVAREZ </Typography>
                <Typography variant="h5">Managing Director </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
