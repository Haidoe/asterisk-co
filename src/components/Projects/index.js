import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";

const Projects = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Typography color="primary" variant="h2" className={classes.header}>
          PROJECTS
        </Typography>
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
