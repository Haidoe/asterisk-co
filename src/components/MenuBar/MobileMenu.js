import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import list from "./list";

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
  toolbar: theme.mixins.toolbar,
  menuItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selected: {
    background: "rgba(255, 255, 255, 0.2) !important"
  }
}));

const MobileMenu = ({ visible, onClose }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

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
          <MenuList>
            {list.map(item => (
              <MenuItem
                button
                key={item.title}
                component={Link}
                to={item.link}
                className={classes.menuItem}
                classes={{
                  selected: classes.selected
                }}
                selected={pathname === item.link}
              >
                <ListItemIcon className={classes.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </MenuItem>
            ))}
          </MenuList>
        </div>
      </Drawer>
    </Hidden>
  );
};

export default MobileMenu;
