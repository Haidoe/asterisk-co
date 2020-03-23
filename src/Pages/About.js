import React from "react";
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import People from "../components/AboutUs/People";

const About = () => (
  <Layout>
    <AboutUs boxColor="#FFF">
      <People />
    </AboutUs>
  </Layout>
);

export default About;
