import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0C3C60"
    },
    secondary: {
      main: "#7DCADA"
    }
  },
  typography: {
    fontFamily: "Work Sans"
  },
  mixins: {
    toolbar: {
      minHeight: 65
    }
  }
});

export default theme;
