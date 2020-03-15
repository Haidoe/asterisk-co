import React from "react";
import Layout from "./components/Layout";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Summary from "./components/Summary";

function App() {
  return (
    <Layout>
      <MenuBar />
      <Banner />
      <Summary />
    </Layout>
  );
}

export default App;
