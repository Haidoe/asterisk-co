import React from "react";
import propTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center"
  },
  container: {
    width: 580,
    minHeight: 300,
    background: "#FFF",
    borderRadius: "8px",
    padding: "1em",
    [theme.breakpoints.down("sm")]: {
      width: "94%"
    }
  },
  header: {
    display: "flex",
    justifyContent: "flex-end"
  },
  section: {
    marginTop: "0.2em",
    textAlign: "center",
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1em"
    }
  },
  footer: {
    textAlign: "center",
    marginTop: "1.5em"
  },
  btn: {
    fontWeight: "bold"
  }
}));

const ServiceModal = props => {
  const classes = useStyles();
  const { visible, onClose } = props;

  return (
    <Modal className={classes.modal} open={visible} onClose={onClose}>
      <article className={classes.container}>
        <header className={classes.header}>
          <IconButton aria-label="delete" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </header>

        <section className={classes.section}>
          <Typography variant="h6" color="primary">
            Sorry, this service is not yet available for online bookings. Please
            contact us for more information.
          </Typography>
        </section>

        <footer className={classes.footer}>
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={onClose}
          >
            Got it
          </Button>
        </footer>
      </article>
    </Modal>
  );
};

ServiceModal.defaultProps = {
  visible: false
};

ServiceModal.propTypes = {
  visible: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired
};

export default ServiceModal;
