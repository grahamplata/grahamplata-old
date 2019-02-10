import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import { BlogContainer } from '../theme/containers/BlogPostsContaners'

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
        <Seo title="About" keywords={['blog', 'about', 'grahamplata']} />
        <h2>About</h2>
        <BlogContainer>
          <h3>Where are you currently?</h3>
          <p>
            Currently, I reside in Phoenixville, Pennsylvania working as a Data
            Support Engineer for{' '}
            <a style={styles.syapse} href="https://www.syapse.com/">
              Syapse
            </a>
          </p>
          <h3>What skills would you like to learn in 2019?</h3>
          <ul>
            <li>
              <b>Group Riding</b>
              <p>Long distance Cycling Rides</p>
            </li>
            <li>
              <b>Go</b>
              <p>fmt.Println("Hello, Go")</p>
            </li>
            <li>
              <b>Welding</b>
              <p>
                I want to restore and work on cars eventually. I feel this is a
                necessary skill for that.
              </p>
            </li>
            <li>
              <b>Spirited Driving</b>
              <p>
                I want to strengthen my driving abilities by learning to do
                Drift or Autocross.
              </p>
            </li>
          </ul>
          <h3>Where would you like to travel?</h3>
          <ul>
            <li>
              <b>Iceland</b>
              <p>
                Iceland is the most unique and exciting place on the planet. You
                go to Iceland to have adventures and see natural beauty.
              </p>
            </li>
            <li>
              <b>New Zealand</b>
              <p>
                Much like Iceland New Zealand has an amazing range of
                breathtaking scenery but from subtropical forests to
                snow-covered mountains.
              </p>
            </li>
            <li>
              <b>Pikes Peak International Hill Climb</b>
              <p>
                The Pikes Peak International Hill Climb, also known as The Race
                to the Clouds, is an annual automobile and motorcycle hillclimb
                to the summit of Pikes Peak in Colorado, USA.
              </p>
            </li>
          </ul>
        </BlogContainer>
      </Layout>
    )}
  />
)

const styles = {
  syapse: {
    color: '#21C2D2',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}

export default About
