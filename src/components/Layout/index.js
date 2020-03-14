import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
