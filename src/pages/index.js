import React, { Fragment } from "react";
import { Grid, Divider, Header } from "semantic-ui-react";
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
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" textAlign="left">
            Hey, I'm{" "}
            <Link to="/about">
              <b style={styles.graham}>Graham</b>
            </Link>
            . I’m a photographer, gamer & side-project enthusiast. I'm currently
            a Data Support Engineer at Syapse.
          </Header>
          <Divider />
        </Grid.Column>
        <Grid.Column>
          <Fragment />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage;
