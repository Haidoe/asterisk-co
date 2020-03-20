import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: { paddingTop: "3em", textAlign: "center", overflow: "hidden" },
  box2: { background: "#f1f1f1", overflow: "hidden" },
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
  projectWrapper: {
    padding: "1em 0"
  },
  projectBox: {
    overflowY: "hidden"
  },
  projectContainer: {
    display: "flex",
    padding: "3em 0",
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  projectImg: {
    width: 450,
    height: 300,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto"
    }
  },
  projectArticle: {
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      padding: "1.5em 0"
    }
  },
  projectArticleTitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  projectContainer2: {
    display: "flex",
    padding: "3em 0",
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  projectArticle2: {
    flexGrow: 1,
    textAlign: "right",
    paddingRight: "2em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      padding: "1.5em 0"
    }
  }
}));

export default useStyles;
