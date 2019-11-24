import React from "react";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

export default ({ children }) => (
  <>
    <NavigationMenu />
    {children}
    <Footer />
  </>
);
