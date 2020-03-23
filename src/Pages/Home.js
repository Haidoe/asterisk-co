import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Summary from "../components/Summary";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Fab from "../components/Fab";
import GetInTouch from "../components/GetInTouch";

const Home = () => (
  <Layout>
    <Banner />
    <Summary />
    <AboutUs title="The Company" />
    <Projects />
    <Fab />
    <GetInTouch />
  </Layout>
);

export default Home;
