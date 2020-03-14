import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
    <div>
      <Typography {...typoProps}>ASTERISK</Typography>
      <Typography {...typoProps} color="secondary">
        CONSULTANCY
      </Typography>
      <Typography {...typoProps}>INC.</Typography>
    </div>
  );
};

export default Logo;
