import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import ViewListIcon from "@material-ui/icons/ViewList";
import WorkIcon from "@material-ui/icons/Work";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles({});

const MenuBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" style={{ background: "#0C3C60" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6">
            ASTERISK
            <span style={{ color: "#7DCADA" }}> CONSULTANCY INC. </span>
          </Typography>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" />
          <Tab label="About Us" />
          <Tab label="Our Services" />
          <Tab label="Projects" />
          <Tab label="Contact Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
