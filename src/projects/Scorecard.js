import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Scorecard = props => (
  <StaticQuery
    query={graphql`
      {
        dotaTwo: file(relativePath: { eq: "dota.png" }) {
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
        <a href="http://acid-scene.surge.sh/">
          <Img
            fluid={data.dotaTwo.childImageSharp.fluid}
            href="http://acid-scene.surge.sh/"
          />
        </a>
        <div style={{ paddingTop: '5px' }}>
          <p>
            A score Card that displays a short synopsis of a player's overall
            performance. The Card utilizes React, Redux and stats provided by
            the openDota Project.
          </p>
        </div>
        <h3>
          <a
            style={{ color: 'rgba(0, 0, 0, 0.87)' }}
            href="http://acid-scene.surge.sh/"
          >
            Dota 2 Score Card
          </a>
        </h3>
        <div>
          <p>
            Inspired by the OpenDota Web UI I created a simple scored card for
            viewing Dota 2 data. This utilizes the OpenDota API, which is also
            an open source project. The purpose was to strengthen my react
            skills and learn a bit of redux along the way. The app provides a
            bite-sized view of players recent dota stats.{' '}
          </p>
          <p>
            <i>
              Dota is a multiplayer video game in which two teams of five
              players compete to collectively destroy a large structure defended
              by the opposing team known as the "Ancient", whilst defending
              their own.
            </i>
          </p>
          <p>
            This game united my friend group through our formative years. I was
            first introduced to the game during a weekend LAN party I had with
            friends. At the time Dota had many shortcomings, this was the time
            of private lobbies, frequent disconnects, and constant map
            downloads. Even with all its hard edges, it united our friend group
            into one focused effort. I can attribute Dota for keeping my friend
            group together when we departed for college. 10 years later we are
            still going strong. It's amazing how far the game has come.
          </p>
        </div>
      </>
    )}
  />
)

export default Scorecard
