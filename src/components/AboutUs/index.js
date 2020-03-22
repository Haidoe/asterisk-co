import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

//Transitions
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";

import useStyles from "./styles";
import useVisible from "../../hooks/useVisible";
import About from "../../Pages/AboutUs";

const AboutUs = ({ children, boxColor, title }) => {
  const classes = useStyles();

  const [vTitle, toggleVTitle] = useVisible(false);
  const [content1, toggleContent1] = useVisible(false);
  const [content2, toggleContent2] = useVisible(false);

  const handleChange = event => {
    toggleVTitle(event);
    toggleContent1(event);
    toggleContent2(event);
  };

  return (
    <Box className={classes.box} style={{ background: boxColor }}>
      <Container className={classes.container}>
        <VisibilitySensor onChange={handleChange}>
          <Grow in={vTitle} timeout={1500}>
            <Typography variant="h2" className={classes.header}>
              {title}
            </Typography>
          </Grow>
        </VisibilitySensor>

        <Slide direction="right" in={content1} timeout={1500} mountOnEnter>
          <Typography color="primary" variant="h6" className={classes.main}>
            Ascend Systems and Risk Consultancy Inc. (Asterisk Inc.) was formed
            to address the needs of local clients for expert advise in Risk
            Management to make it available at arms reach 24/7.
          </Typography>
        </Slide>

        <Slide direction="left" in={content2} timeout={2500}>
          <div>
            <Typography variant="h6" className={classes.paragraph}>
              The depth and thoroughness in doing risk assessments though is
              kept thorough and at par with international practice as it
              conforms with the standards of the Institute of Risk Management,
              UK.
            </Typography>
            <Typography className={classes.paragraph} variant="h6">
              Our team is composed of of seasoned and experienced risk
              management and systems enhancement professionals who has worked
              with both multinational companies and top notable companies in the
              Philippines in facing and addressing risk management challenges
              unique to each of our client’s operation. Asterisk Inc. works hand
              in hand with its clients to understand their risks and provides
              risk management solution and approach tailor fitted to each of our
              client’s needs, providing solutions suited to the local
              environment, legislations and culture in which the business
              operates.
            </Typography>
            <Typography className={classes.paragraph} variant="h6">
              Asterisk Inc. aspires to prescribe innovative solutions adapted
              from a database of risks mitigation solutions acquired from across
              various industries
            </Typography>
          </div>
        </Slide>
        {children}
      </Container>
    </Box>
  );
};

AboutUs.defaultProps = {
  title: "About us"
};

export default AboutUs;
