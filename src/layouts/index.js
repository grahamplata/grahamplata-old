import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "semantic-ui-react";

import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

import "semantic-ui-css/semantic.min.css";

const styles = {
  container: {
    display: "flex",
    minHeight: "95vh",
    flexDirection: "column"
  },
  subContainer: {
    flex: 1,
    marginTop: "1.25em"
  }
};

const meta = [
  { name: "description", content: "Graham Plata's digital Sandbox." },
  {
    name: "keywords",
    content: "Graham, Plata, Graham Plata, dev, developer, video, photo"
  }
];

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet title="Graham Plata's Digital Sandbox" meta={meta} />
    <Container>
      <div style={styles.container}>
        <div style={styles.subContainer}>
          {/* {location.pathname == `/` && <MainMenu />} */}
          <MainMenu />
          {children()}
        </div>
      </div>
      <Footer />
    </Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
