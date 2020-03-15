import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import Layout from "./Layout";
import useStyles from "./styles";

const list = [
  "Safety",
  "Risk Management Program",
  "Engineering Audit",
  "Systems Enhancement",
  "HR Related"
];

const Expertise = () => {
  const classes = useStyles();

  return (
    <Layout title="Our Expertise" onClick={() => []}>
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

export default Expertise;
