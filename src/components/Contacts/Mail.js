import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
const Mail = () => {
  const classes = useStyles();

  const inputProps = {
    variant: "outlined",
    fullWidth: true,
    className: classes.mailInput
  };

  return (
    <article className={classes.mailContainer}>
      <section>
        <TextField label="Name" {...inputProps} />
        <TextField label="Email" {...inputProps} />
        <TextField label="Subject" {...inputProps} />
        <TextField label="Message" multiline rows="6" {...inputProps} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          size="large"
        >
          SEND MESSAGE
        </Button>
      </section>
    </article>
  );
};

export default Mail;
