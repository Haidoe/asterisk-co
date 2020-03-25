import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ServiceList from "./ServiceList";
import useStyles from "./styles";

//Transition
import Grow from "@material-ui/core/Grow";
import VisibilitySensor from "react-visibility-sensor";
import useVisible from "../../hooks/useVisible";

const Services = () => {
  const classes = useStyles();
  const [title, toggleTitle] = useVisible(false);

  return (
    <Box className={classes.box}>
      <Container>
        <VisibilitySensor onChange={toggleTitle}>
          <Grow in={title} timeout={1500}>
            <Typography variant="h2" color="primary" className={classes.header}>
              Services
            </Typography>
          </Grow>
        </VisibilitySensor>
        <Typography variant="h6" className={classes.paragraph} color="primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </Typography>
      </Container>
      <ServiceList />
    </Box>
  );
};

export default Services;
