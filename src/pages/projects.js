import React from "react";
import { Header, Divider } from "semantic-ui-react";
import Layout from "../components/layout";

// Projects
import DotaStats from "../projects/dotastats";
import Reel from "../projects/reel";

const Projects = props => (
  <Layout location={props.location}>
    <Header as="h2" textAlign="left">
      <Header.Content>Personal Projects</Header.Content>
    </Header>
    <DotaStats />
    <Divider style={styles.spacer} />
    <Reel />
  </Layout>
);

const styles = {
  spacer: {
    paddingBottom: "20px"
  }
};

export default Projects;
