import React from "react";
import Layout from "./components/Layout";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Layout>
      <MenuBar />
      <Banner />
      <Summary />
      <AboutUs />
    </Layout>
  );
}

export default App;
