import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <div style={theme.mixins.toolbar} />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
