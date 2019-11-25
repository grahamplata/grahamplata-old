import React from "react";

import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

import GlobalStyle from "../theme/global";

export default ({ children }) => (
  <>
    <GlobalStyle />
    <NavigationMenu />
    {children}
    <Footer />
  </>
);
