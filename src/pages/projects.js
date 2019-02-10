import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player'

import Seo from '../components/Seo'
import Layout from '../components/layout'
import { BlogContainer } from '../theme/containers/BlogPostsContaners'

const styles = {
  playerWrapper: {
    position: 'relative',
    paddingTop: '53.25%',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}

const Projects = (props, { data }) => (
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
      <Layout>
        <Seo title="Projects" keywords={['blog', 'projects', 'grahamplata']} />
        <h2>Projects</h2>
        <BlogContainer>
          <Img
            fluid={data.dotaTwo.childImageSharp.fluid}
            href="http://acid-scene.surge.sh/"
          />

          <div>
            A score Card that displays a short synopsis of a player's overall
            performance. The Card utilizes React, Redux and stats provided by
            the openDota Project.
          </div>
          <h2>
            <a
              style={{ color: 'rgba(0, 0, 0, 0.87)' }}
              href="http://acid-scene.surge.sh/"
            >
              Dota 2 Score Card
            </a>
          </h2>
          <p>
            Inspired by the OpenDota Web UI I created a simple scored card for
            viewing Dota 2 data. This utilizes the OpenDota API, which is also
            an open source project. The purpose was to strengthen my react
            skills and learn a bit of redux along the way. The app provides a
            bite-sized view of players recent dota stats.{' '}
          </p>
          <div>Much ado about dota</div>
          <p>
            Dota is a multiplayer video game in which two teams of five players
            compete to collectively destroy a large structure defended by the
            opposing team known as the "Ancient", whilst defending their own.
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
          <div>
            <h2>2016 Video Reel</h2>
            <div style={styles.playerWrapper}>
              <ReactPlayer
                style={styles.reactPlayer}
                url="https://vimeo.com/177779267"
                width="100%"
                height="100%"
                muted
              />
            </div>
            <p>
              A few years ago I worked for a couple boutique video studios
              creating commercials, music videos and motion graphics. Aside you
              can find a selection of shots from my favorite projects. Since my
              career switch I find myself doing less video content but enjoying
              it so much more.
            </p>
            <p>In the reel you will find clips from:</p>
            <ul>
              <li>A camera product highlight</li>
              <li>A bowling short</li>
              <li>A rock opera</li>
              <li>A rockabilly festival</li>
              <li>A spec medical piece</li>
              <li>A corporate drivers clinic</li>
            </ul>
          </div>
        </BlogContainer>
      </Layout>
    )}
  />
)

export default Projects
