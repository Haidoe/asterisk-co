import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btn: {
    position: "fixed",
    bottom: 20,
    right: 20,
    color: theme.palette.primary.main
  }
}));

const ScrollFab = () => {
  const classes = useStyles();
  const [scrollPosition, setSrollPosition] = useState(0);
  const visibility = scrollPosition > window.innerHeight;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fade in={visibility} timeout={1000}>
      <Tooltip title="Scroll back to top" arrow placement="left">
        <Fab
          color="secondary"
          className={classes.btn}
          onClick={handleScrollTop}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Tooltip>
    </Fade>
  );
};

export default ScrollFab;
