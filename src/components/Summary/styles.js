import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    paddingTop: "4em",
    paddingBottom: "4em",
    background: "#FFF"
  },
  content: {
    padding: "0 !important"
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    padding: "2.5em",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      minHeight: 430
    }
  },
  typo: {
    textTransform: "uppercase",
    marginBottom: "1.5em",
    fontWeight: "bold"
  },
  typoP: {
    textAlign: "justify",
    marginBottom: "0.5em"
  },
  btn: {
    marginTop: "1em"
  },
  checkIcon: {
    color: "#FFF"
  },
  expertiseList: {
    marginTop: "-1em"
  },
  expertiseItem: {
    padding: 0,
    alignItems: "start"
  },
  itemText: {
    margin: "0 !important"
  }
}));

export default useStyles;
