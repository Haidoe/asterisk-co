import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GetInTouch from "./Git";
import Map from "./Map";
import Mail from "./Mail";
import useStyles from "./styles";

//Transition
import Grow from "@material-ui/core/Grow";
import VisibilitySensor from "react-visibility-sensor";
import useVisible from "../../hooks/useVisible";

const Contacts = props => {
  const classes = useStyles();
  const [title, toggleTitle] = useVisible(false);

  return (
    <Box className={classes.box}>
      <Container>
        <VisibilitySensor onChange={toggleTitle}>
          <Grow in={title} timeout={1500}>
            <Typography variant="h2" color="primary" className={classes.header}>
              Contact us
            </Typography>
          </Grow>
        </VisibilitySensor>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item sm={12} md={6}>
            <GetInTouch />
          </Grid>
          <Grid item sm={12} md={6}>
            <Mail />
          </Grid>
        </Grid>

        <Map />
      </Container>
    </Box>
  );
};

export default Contacts;
