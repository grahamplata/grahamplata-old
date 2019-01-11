import React from "react";
import Helmet from "react-helmet";
import { Container, Grid } from "semantic-ui-react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

import "semantic-ui-css/semantic.min.css";

const meta = [
  { name: "description", content: "Graham Plata's digital Sandbox." },
  {
    name: "keywords",
    content: "Graham, Plata, Graham Plata, dev, developer, video, photo"
  }
];

const styles = {
  container: {
    marginTop: "15px"
  }
};

export default ({ children }) => (
  <div style={styles.container}>
    <Helmet title="Graham Plata's Digital Sandbox" meta={meta} />
    <Grid verticalAlign="middle" columns={1} centered>
      <Grid.Column>
        <Grid.Row>
          <Container>
            <MainMenu />
            {children}
            <Footer />
          </Container>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </div>
);
