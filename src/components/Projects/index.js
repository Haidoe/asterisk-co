import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";

//Transition
import Grow from "@material-ui/core/Grow";
import VisibilitySensor from "react-visibility-sensor";
import useVisible from "../../hooks/useVisible";

const Projects = () => {
  const classes = useStyles();
  const [title, toggleTitle] = useVisible(false);

  return (
    <Box className={classes.box}>
      <Container>
        <VisibilitySensor onChange={toggleTitle}>
          <Grow in={title} timeout={1500}>
            <Typography variant="h2" color="primary" className={classes.header}>
              PROJECTS
            </Typography>
          </Grow>
        </VisibilitySensor>
      </Container>
      <main className={classes.projectWrapper}>
        <Project />
        <Project2 />
        <Project3 />
      </main>
    </Box>
  );
};

export default Projects;
