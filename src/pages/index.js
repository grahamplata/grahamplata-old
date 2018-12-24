import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = (props, { data }) => (
  <Layout location={props.location}>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
  </Layout>
);

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "cl.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage;
