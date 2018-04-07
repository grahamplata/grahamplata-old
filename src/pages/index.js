import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Image, Container, Segment } from "semantic-ui-react";

const styles = {
  label: {
    marginTop: 5,
    marginLeft: 5,
    letterSpacing: 2,
    fontSize: 10
  },
  image: {
    paddingTop: "3em",
    paddingBottom: "3em"
  }
};

const rand = Math.floor(Math.random() * 10 + 1);

const IndexPage = ({ data }) => (
  <Container fluid>
    <div style={styles.image}>
    <h2>Welcome to my Digital Sandbox</h2>
      <Img sizes={data.allFile.edges[rand].node.childImageSharp.sizes} />
      <div>
        <p style={styles.label && styles.inner}>
          Nikon D500 80.0-400.0 mm ƒ/4.5-5.6
        </p>
      </div>
    </div>
  </Container>
);

export const query = graphql`
  query ImagesQuery {
    allFile(filter: { sourceInstanceName: { eq: "headerImages" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
