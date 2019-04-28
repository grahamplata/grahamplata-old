import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const WeatherBuddy = props => (
  <StaticQuery
    query={graphql`
      {
        WeatherBuddy: file(relativePath: { eq: "WeatherBuddy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Img
          fluid={data.WeatherBuddy.childImageSharp.fluid}
          href="https://github.com/grahamplata/WeatherBuddy/"
        />
        <div style={{ paddingTop: "5px" }}>
          <p>WeatherBuddy</p>
        </div>
        <h3>
          <a
            style={{ color: "rgba(0, 0, 0, 0.87)" }}
            href="https://github.com/grahamplata/WeatherBuddy/"
          >
            Weather Buddy
          </a>
        </h3>
        <div>
          <p>
            WeatherBuddy is a HMI device built with a Nextion Display, Particle
            Photon microcontroller and fueled by darksky webhooks. I have always
            been fascinated with electronics and I felt this was a great
            starter. The purpose of this project is to learn a bit about
            internet connected microcontrollers.
          </p>
        </div>
      </>
    )}
  />
);

export default WeatherBuddy;
