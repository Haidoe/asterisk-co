import React from "react";
import Typography from "@material-ui/core/Typography";

const typoProps = {
  variant: "h6",
  style: { display: "inline-block", marginRight: "0.3em" }
};

const Logo = () => {
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
