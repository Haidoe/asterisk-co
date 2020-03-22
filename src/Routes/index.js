import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/AboutUs";
// import Sales from "../components/Pages/Sales";
// import Login from "../components/Pages/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about-us">
      <About />
    </Route>
    <Route exact path="*">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
