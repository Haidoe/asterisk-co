import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  div: {
    color: "#FFF"
  },
  typo: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.1em"
    }
  }
}));

const Logo = () => {
  const classes = useStyles();

  const typoProps = {
    variant: "h6",
    style: { display: "inline-block", marginRight: "0.3em" },
    className: classes.typo
  };
  return (
    <Link to="/">
      <div className={classes.div}>
        <Typography {...typoProps}>ASTERISK</Typography>
        <Typography {...typoProps} color="secondary">
          CONSULTANCY
        </Typography>
        <Typography {...typoProps}>INC.</Typography>
      </div>
    </Link>
  );
};

export default Logo;
