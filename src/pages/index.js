import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Layout from "../components/layout";
import profile from "../images/cl.jpg";

const IndexPage = props => (
  <Layout location={props.location}>
    <Image fluid target="_blank" src={profile} />
  </Layout>
);

export default IndexPage;
