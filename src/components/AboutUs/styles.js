import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: "80vh",
    background: "#CFDFEC",
    padding: "3em 2em",
    textAlign: "center"
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
    background: theme.palette.primary.main
  },
  portraitTitle: {
    flexGrow: 1,
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  portraitImage: {
    width: 180,
    height: 180
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
