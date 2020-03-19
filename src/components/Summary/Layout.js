import React from "react";
import propTypes from "prop-types";
import useStyles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import VisibilitySensor from "react-visibility-sensor";
import Grow from "@material-ui/core/Grow";
import useVisible from "../../hooks/useVisible";

const Layout = ({ title, onClick, children }) => {
  const classes = useStyles();
  const [visible, handleOnChange] = useVisible(false);

  return (
    <Grow in={visible} timeout={1500}>
      <Grid item xs={12} lg={4}>
        <Card className={classes.card}>
          <CardContent classes={{ root: classes.content }}>
            <Typography variant="h5" className={classes.typo}>
              {title}
            </Typography>
            <VisibilitySensor partialVisibility onChange={handleOnChange}>
              <div>{children}</div>
            </VisibilitySensor>
          </CardContent>

          <Button onClick={onClick} color="secondary" className={classes.btn}>
            More info...
          </Button>
        </Card>
      </Grid>
    </Grow>
  );
};

Layout.propTypes = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default Layout;
