import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import VisibilitySensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";

import useStyles from "./styles";
import raymundo from "./assets/reymund.webp";
import useVisible from "../../hooks/useVisible";

const Raymundo = () => {
  const classes = useStyles();
  const [visible, toggleVisible] = useVisible(false);

  return (
    <VisibilitySensor partialVisibility onChange={toggleVisible}>
      <Grid item xs={12} lg={6}>
        <Slide
          in={visible}
          direction="right"
          timeout={1500}
          mountOnEnter
          unmountOnExit
        >
          <Card className={classes.portrait}>
            <img
              src={raymundo}
              alt="raymundo"
              className={classes.portraitImage}
            />
            <div className={classes.portraitTitle}>
              <Typography variant="h4" className={classes.portraitName}>
                RAYMUNDO S. TORRES
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.portraitPosition}
              >
                President and CEO
              </Typography>
            </div>
          </Card>
        </Slide>

        <Slide
          in={visible}
          direction="up"
          timeout={2500}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.portraitContent}>
            <Typography className={classes.paragraph} variant="h6">
              Raymund has for the last 24 years been seriously involved in Risk
              Management Practice. In the first 10 years of his career Raymund
              has undergone extensive training and experience in the fields of
              Risk Engineering, Risk Assessment and Loss Control. Upon joining
              JLTIB, Raymund undertook extensive training in Risk Management
              which eventually led him to achieve a Diploma from the IRM
              (Institute of Risk Management), UK.
            </Typography>

            <Typography className={classes.paragraph} variant="h6">
              Likewise, Raymund has also achieved another Diploma course on
              Business Continuity Management, USA. This qualifies him as a
              Certified Continuity Manager (CCM) and has assisted corporate
              Clients in formulating their BCP plan.
            </Typography>
          </div>
        </Slide>
      </Grid>
    </VisibilitySensor>
  );
};

export default Raymundo;
