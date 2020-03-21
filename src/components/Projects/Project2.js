import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import photo from "./assets/project-3.jpg";
import useStyles from "./styles";
import VisibilitySensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import useVisible from "../../hooks/useVisible";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Project2 = () => {
  const classes = useStyles();
  const [visible, toggleVisible] = useVisible(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.box2}>
      <Container>
        <VisibilitySensor onChange={toggleVisible} partialVisibility={matches}>
          <div className={classes.projectContainer2}>
            <Slide in={visible} timeout={1000} direction="up">
              <article className={classes.projectArticle2}>
                <Typography
                  color="primary"
                  variant="h4"
                  className={classes.projectArticleTitle}
                >
                  Project 2
                </Typography>
                <Typography variant="h6">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Typography>
              </article>
            </Slide>

            <div>
              <Slide in={visible} timeout={2000} direction="left">
                <img
                  src={photo}
                  className={classes.projectImg}
                  alt="asterisk-project-one"
                />
              </Slide>
            </div>
          </div>
        </VisibilitySensor>
      </Container>
    </Box>
  );
};

export default Project2;