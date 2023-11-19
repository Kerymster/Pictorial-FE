import React from "react";
import Layout from "./Components/Layout";
import { Home } from "./Pages/Home/home.lazy";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
