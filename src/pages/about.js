import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/Seo";
import { PageContainer } from "../theme/containers/PageContainer";
import { skills, places } from "../../content/aboutme/aboutme";

const About = () => (
  <StaticQuery
    query={graphql`
      {
        aboutImage: file(relativePath: { eq: "me.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Seo title="About" keywords={["blog", "about", "grahamplata"]} />
        <PageContainer>
          <h2>About</h2>
          <div>
            <h3>Where are you currently?</h3>
            <ul>
              <li>
                Currently, I reside in Phoenixville, Pennsylvania working as a
                Site Reliability Engineer for{" "}
                <a style={styles.syapse} href="https://www.syapse.com/">
                  Syapse
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>What skills would you like to learn in 2019?</h3>
            <ul>
              {skills.map(skill => {
                return (
                  <li>
                    <b>{skill.skill}</b> - {skill.description}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Where would you like to travel?</h3>
            <ul>
              {places.map(place => {
                return (
                  <li>
                    <b>{place.place}</b> - {place.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </PageContainer>
      </Layout>
    )}
  />
);

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
  }
};

export default About;
