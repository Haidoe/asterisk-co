import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";

import VisibilitySensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import useVisible from "../../hooks/useVisible";

import useStyles from "./styles";
import susana from "./assets/susana.webp";
import useToggle from "../../hooks/useToggle";

const Susana = () => {
  const classes = useStyles();
  const [btn, toggleBtn] = useToggle(false);
  const [visible, toggleVisible] = useVisible(false);

  const list = [
    "Establishing a company’s Training Institute",
    "Formation of company values",
    "Designing salary structure",
    "Development and delivery of training programs",
    "Certification of subject matter experts",
    "Designing an employee handbook",
    "Facilitation of strategic and business planning",
    "Development of performance management system",
    "Audit on HR compliance to Labor standards and Quality Management Systems (ISO 9001)",
    "Establishing HR policies and procedures",
    "Development, maintenance and implementation of employee code of conduct and discipline",
    "Formulation of job description, formulation of competency-based interview tools, development of competency model",
    "Establishing career development and  technical ladder"
  ];

  if (!btn) {
    list.length = 8;
  } else {
    list.length = 13;
  }

  return (
    <VisibilitySensor partialVisibility onChange={toggleVisible}>
      <Grid item xs={12} lg={6}>
        <Slide
          in={visible}
          direction="left"
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <Card className={classes.portrait}>
            <img src={susana} alt="susana" className={classes.portraitImage} />
            <div className={classes.portraitTitle}>
              <Typography variant="h4" className={classes.portraitName}>
                SUSANA C. ALVAREZ
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.portraitPosition}
              >
                Managing Director
              </Typography>
            </div>
          </Card>
        </Slide>

        <Slide
          in={visible}
          direction="up"
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <div className={classes.portraitContent}>
            <Typography className={classes.paragraph} variant="h6">
              Susana C. Alvarez has over 18 years of solid HR experience in all
              facets of Human Resource Management gained from various
              industries.
            </Typography>

            <Typography variant="h5">HR Programs that she developed</Typography>

            <List component="ul" className={classes.expertiseList}>
              {list.map(item => (
                <ListItem className={classes.expertiseItem} key={item}>
                  <ListItemIcon className={classes.checkIcon}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h6">{item}</Typography>}
                    className={classes.itemText}
                  />
                </ListItem>
              ))}

              <ListItem button className={classes.moreBtn} onClick={toggleBtn}>
                {btn ? "HIDE" : "MORE"} ...
              </ListItem>
            </List>
          </div>
        </Slide>
      </Grid>
    </VisibilitySensor>
  );
};

export default Susana;
