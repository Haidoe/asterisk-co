import React from "react";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmailIcon from "@material-ui/icons/Email";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "./styles";

const Git = () => {
  const classes = useStyles();

  return (
    <article>
      <header>
        <Typography variant="h4" color="primary" className={classes.gitTitle}>
          GET IN TOUCH
        </Typography>
      </header>
      <section>
        <Typography className={classes.gitParagraph}>
          We want everything we make to shine and pour our hearts in building
          not only effective solutions, but ones designed with the user's need
          in mind. We realize that meeting delivery dates is a part of an
          effective craftsmanship that's why we won't release something until
          its great - understanding the need to deliver the best results on
          time. Our ultimate satisfaction is in seeing people use our work and
          making their lives better.
        </Typography>

        <List className={classes.gitList}>
          <ListItem className={classes.gitListItem}>
            <ListItemIcon>
              <LocationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              4th Flr. Pasong Tamo Tower Building, Chino Roces | Avenue, Makati
              City Philippines
            </ListItemText>
          </ListItem>

          <ListItem className={classes.gitListItem}>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText>inc.asterisk@gmail.com</ListItemText>
          </ListItem>

          <ListItem className={classes.gitListItem}>
            <ListItemIcon>
              <PhoneIphoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText>+6391 5305 7894</ListItemText>
          </ListItem>

          <ListItem className={classes.gitListItem}>
            <ListItemIcon>
              <AccessTimeIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Mondays to Fridays 9:00 am - 6:00 pm</ListItemText>
          </ListItem>
        </List>
      </section>
    </article>
  );
};

export default Git;
