import React from "react";
import Helmet from "react-helmet";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import meta from "./meta";

export default ({ children }) => (
  <div style={{ margin: "1em 0em 0em", padding: "1em 0em" }}>
    <Helmet title="Graham Plata's Digital Sandbox" meta={meta} />
    <MainMenu />
    {children}
    <Footer />
  </div>
);
