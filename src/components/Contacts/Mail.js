import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useToggle from "../../hooks/useToggle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "./Modal";

const Mail = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //textfield
  const [subject, setSubject] = useState("Service Quotation");
  const [loading, setLoading] = useState(false);
  const [modal, toggleModal] = useToggle(false);

  const inputProps = {
    variant: "outlined",
    fullWidth: true,
    className: classes.mailInput,
    required: true
  };

  const handleSubject = event => {
    setSubject(event.target.value);
  };

  const handleSendMail = event => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toggleModal();
    }, 3000);
  };

  return (
    <article className={classes.mailContainer}>
      <section>
        <form onSubmit={handleSendMail}>
          <TextField label="Name" autoFocus {...inputProps} />
          <TextField label="Email" {...inputProps} />

          <TextField
            select
            label="Subject"
            {...inputProps}
            value={subject}
            onChange={handleSubject}
          >
            <MenuItem value="Service Quotation">Service Quotation</MenuItem>
            <MenuItem value="I have quetions">I have quetions</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </TextField>

          <TextField label="Message" multiline rows="6" {...inputProps} />

          <div className={classes.mailBtn}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={!loading && <SendIcon />}
              size="large"
              fullWidth={matches}
              disabled={loading}
            >
              {loading ? (
                <React.Fragment>
                  <CircularProgress size={20} style={{ marginRight: "1em " }} />
                  Sending...
                </React.Fragment>
              ) : (
                "SEND MESSAGE"
              )}
            </Button>
          </div>
        </form>
      </section>
      <Modal visible={modal} onClose={toggleModal} />
    </article>
  );
};

export default Mail;
