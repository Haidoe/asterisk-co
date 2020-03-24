import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import ContactUs from "../Pages/Contacts";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/about-us">
      <About />
    </Route>

    <Route path="/services">
      <Services />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route path="/contact-us">
      <ContactUs />
    </Route>

    <Route exact path="*">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
