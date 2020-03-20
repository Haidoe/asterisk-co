import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    background: "#CFDFEC",
    padding: "3em 2em",
    textAlign: "center",
    overflow: "hidden"
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      padding: 0
    }
  },
  header: {
    textTransform: "uppercase",
    display: "inline-block",
    position: "relative",
    paddingBottom: "10px",
    marginBottom: "0.8em",
    color: theme.palette.primary.main,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "50%",
      height: "1px",
      bottom: 0,
      left: "25%",
      borderBottom: `5px solid ${theme.palette.primary.main}`
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5em"
    }
  },
  main: {
    paddingBottom: "1.5em"
  },
  paragraph: {
    textAlign: "justify",
    paddingBottom: "1em"
  },
  grid: {
    marginTop: "2em"
  },
  portrait: {
    display: "flex",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  portraitTitle: {
    flexGrow: 1,
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "2em 0.2em"
    }
  },
  portraitName: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em"
    }
  },
  portraitPosition: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4em"
    }
  },
  portraitImage: {
    width: 180,
    height: 180,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto"
    }
  },
  portraitContent: {
    marginTop: "3em",
    padding: "0 0.2em"
  },
  checkIcon: {
    paddingTop: "0.3em"
  },
  expertiseList: {},
  expertiseItem: {
    padding: 0,
    alignItems: "start"
  },
  itemText: {
    margin: "0 !important"
  },
  moreBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.1em",
    marginTop: "1em"
  }
}));

export default useStyles;
