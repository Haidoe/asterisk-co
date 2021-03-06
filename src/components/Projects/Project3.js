import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import photo from "./assets/project-2.jpg";
import useStyles from "./styles";
import VisibilitySensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import useVisible from "../../hooks/useVisible";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Project = () => {
  const classes = useStyles();
  const [visible, toggleVisible] = useVisible(false);
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
                  alt="asterisk-project-one"
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
                  Project 3
                </Typography>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </article>
            </Slide>
          </div>
        </VisibilitySensor>
      </Container>
    </Box>
  );
};

export default Project;
