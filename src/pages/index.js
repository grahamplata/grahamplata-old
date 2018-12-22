import React, { Fragment } from "react";
import { Grid, Header } from "semantic-ui-react";
import Link from "gatsby-link";
import Layout from "../components/layout";

const styles = {
  wrapper: {
    marginTop: 100
  },
  graham: {
    fontSize: 30,
    color: "#00b5ad",
    fontWeight: "bold"
  }
};

const IndexPage = props => (
  <Layout>
    <Grid style={styles.wrapper} stackable columns={2}>
      <Grid.Row />
    </Grid>
  </Layout>
);

export default IndexPage;
