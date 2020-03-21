import React from "react";
import Layout from "./components/Layout";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <MenuBar />
      <Banner />
      <Summary />
      <AboutUs />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default App;
