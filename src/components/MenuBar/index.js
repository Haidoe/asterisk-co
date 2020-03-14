import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Logo from "./Logo";
import Menu from "./Menu";

const MenuBar = () => {
  return (
    <AppBar color="primary">
      <Container>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Logo />
          <Menu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuBar;
