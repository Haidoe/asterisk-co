import React from "react";
import { Link, useLocation } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/MenuList";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import MobileMenu from "./MobileMenu";
import useToggle from "../../hooks/useToggle";
import list from "./list";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: "250px"
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  tabs: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  menuItem: {
    whiteSpace: "nowrap"
  },
  menuBtn: {
    background: "transparent !important",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  menuText: {
    fontWeight: "bold !important"
  },
  selected: {
    color: theme.palette.secondary.main,
    background: "transparent !important"
  }
}));

const Menu = () => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const [mobile, handleMobile] = useToggle(false);
  return (
    <>
      <IconButton
        color="inherit"
        className={classes.menuButton}
        onClick={handleMobile}
      >
        <MenuIcon />
      </IconButton>

      <List className={classes.tabs}>
        {list.map(item => (
          <ListItem
            button
            key={item.title}
            component={Link}
            to={item.link}
            className={classes.menuItem}
            classes={{
              selected: classes.selected,
              button: classes.menuBtn
            }}
            selected={pathname === item.link}
            disableRipple
          >
            <ListItemText
              primary={item.title}
              classes={{
                primary: classes.menuText
              }}
            />
          </ListItem>
        ))}
      </List>

      <MobileMenu visible={mobile} onClose={handleMobile} />
    </>
  );
};

export default Menu;
