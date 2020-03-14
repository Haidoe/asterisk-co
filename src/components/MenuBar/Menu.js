import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import MobileMenu from "./MobileMenu";
import useToggle from "../../hooks/useToggle";
import useInput from "../../hooks/useInput";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: "250px"
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  tabs: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
}));

const Menu = () => {
  const classes = useStyles();
  const [tab, handleTab] = useInput("home");
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

      <Tabs value={tab} onChange={handleTab} className={classes.tabs}>
        <Tab label="Home" value="home" />
        <Tab label="About Us" />
        <Tab label="Our Services" />
        <Tab label="Projects" />
        <Tab label="Contact Us" />
      </Tabs>

      <MobileMenu visible={mobile} onClose={handleMobile} />
    </>
  );
};

export default Menu;
