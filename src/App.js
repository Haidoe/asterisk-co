import React from "react";
import Layout from "./components/Layout";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Fab from "./components/Fab";
import GetInTouch from "./components/GetInTouch";

const App = () => (
  <Layout>
    <MenuBar />
    <Banner />
    <Summary />
    <AboutUs />
    <Projects />
    <Fab />
    <GetInTouch />
    <Footer />
  </Layout>
);

export default App;
