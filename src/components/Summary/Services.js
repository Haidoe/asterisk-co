import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import Layout from "./Layout";
import useStyles from "./styles";

const list = [
  "We will assist you in identifying top priority risk and enable you to evaluate each risk as to its threat or opportunity it may presents.",
  "We will assist you in identifying critical risks that may affect your clients operation and provide solutions to prevent these risks from happening"
];

const Services = () => {
  const classes = useStyles();

  return (
    <Layout title="Our Services" onClick={() => []}>
      <List component="ul" className={classes.expertiseList}>
        {list.map(item => (
          <ListItem className={classes.expertiseItem} key={item}>
            <ListItemIcon className={classes.checkIcon}>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={item} className={classes.itemText} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default Services;
