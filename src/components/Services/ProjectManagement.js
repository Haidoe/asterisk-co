import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import photo from "./assets/project-management.webp";
import useStyles from "../Projects/styles";
//For Better User Experience
import VisibilitySensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import useVisible from "../../hooks/useVisible";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//Modal
import useToggle from "../../hooks/useToggle";
import Modal from "./Modal";

const ProjectManagement = () => {
  const classes = useStyles();
  const [visible, toggleVisible] = useVisible(false);
  const [modal, toggleModal] = useToggle(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.projectBox}>
      <Container>
        <VisibilitySensor onChange={toggleVisible} partialVisibility={matches}>
          <div className={classes.projectContainer}>
            <Slide in={visible} timeout={2000} direction="right">
              <div>
                <img
                  src={photo}
                  className={classes.projectImg}
                  alt="project-management"
                />
              </div>
            </Slide>
            <Slide in={visible} timeout={1000} direction="up">
              <article className={classes.projectArticle}>
                <Typography
                  color="primary"
                  variant="h4"
                  className={classes.projectArticleTitle}
                >
                  Project Management
                </Typography>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.projectBtn}
                  fullWidth={matches}
                  onClick={toggleModal}
                >
                  Book now
                </Button>
              </article>
            </Slide>
          </div>
        </VisibilitySensor>

        <Modal visible={modal} onClose={toggleModal} />
      </Container>
    </Box>
  );
};

export default ProjectManagement;
