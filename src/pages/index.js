import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { skills, places } from "../../content/aboutme/aboutme";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={["blog", "portfolio", "grahamplata"]} />
    <>
      <h1>Welcome to my Digital Sandbox.</h1>
      <p>
        I am Graham Plata, a Software Engineer based in Phoenixville,
        Pennsylvania. Currently, I solve interesting problems as a Site
        Reliability Engineer for{" "}
        <a style={styles.syapse} href="https://www.syapse.com/">
          Syapse
        </a>
        .
      </p>
      <h3>Skills I would like to learn in 2019</h3>
      <ul>
        {skills.map(skill => {
          return (
            <li key={skill.skill}>
              <b>{skill.skill}</b> - {skill.description}
            </li>
          );
        })}
      </ul>
      <h3>Where would you like to travel?</h3>
      <ul>
        {places.map(place => {
          return (
            <li key={place.place}>
              <b>{place.place}</b> - {place.description}
            </li>
          );
        })}
      </ul>
    </>
  </Layout>
);

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
  }
};

export default IndexPage;
