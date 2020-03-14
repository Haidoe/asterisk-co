import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MessageIcon from "@material-ui/icons/Message";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: "250px",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  icon: {
    color: theme.palette.secondary.main,
    transform: "scale(0.8)"
  },
  toolbar: theme.mixins.toolbar
}));

const list = [
  {
    title: "HOME",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "ABOUT US",
    icon: <InfoIcon />,
    link: "/about"
  },
  {
    title: "OUR SERVICES",
    icon: <BusinessCenterIcon />,
    link: "/about"
  },
  {
    title: "PROJECTS",
    icon: <FormatListBulletedIcon />,
    link: "/about"
  },
  {
    title: "CONTACT US",
    icon: <MessageIcon />,
    link: "/about"
  }
];

const MobileMenu = ({ visible, onClose }) => {
  const classes = useStyles();

  return (
    <Hidden lgUp>
      <Drawer
        variant="temporary"
        open={visible}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {list.map(item => (
              <ListItem button key={item.title}>
                <ListItemIcon className={classes.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Hidden>
  );
};

export default MobileMenu;
