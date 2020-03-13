import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

const Layout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      {children}
    </Box>
  );
};

export default Layout;
