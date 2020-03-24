import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    textAlign: "center",
    padding: "4em 0"
  },
  header: {
    textTransform: "uppercase",
    display: "inline-block",
    position: "relative",
    paddingBottom: "10px",
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
  grid: {
    marginTop: "4em"
  },
  gitTitle: {
    textAlign: "left"
  },
  gitParagraph: {
    textAlign: "left",
    marginTop: "2em",
    color: "#666"
  },
  gitList: {
    marginTop: "2em"
  },
  gitListItem: {
    paddingLeft: 0
  },
  mailContainer: {
    padding: "0 2em",
    textAlign: "right"
  },
  mailInput: {
    marginBottom: "1em"
  }
}));

export default useStyles;
