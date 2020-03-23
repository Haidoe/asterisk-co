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
  paragraph: {
    padding: "3em 6em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em"
    }
  }
}));

export default useStyles;
