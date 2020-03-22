import React from "react";
import Layout from "../../components/Layout";
import MenuBar from "../../components/MenuBar";
import AboutUs from "../../components/AboutUs";
import People from "../../components/AboutUs/People";
import Footer from "../../components/Footer";

const About = () => (
  <Layout>
    <MenuBar />

    <AboutUs boxColor="#FFF">
      <People />
    </AboutUs>

    <Footer />
  </Layout>
);

export default About;
