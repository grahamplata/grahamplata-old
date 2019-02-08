import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

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
        <h2>About</h2>
        <Img fluid={data.aboutImage.childImageSharp.fluid} />
        <h2>Learn more about me</h2>
        <h3>Where are you currently?</h3>
        <p>
          Currently, I reside in Phoenixville, Pennsylvania working as a Data
          Support Engineer for{' '}
          <a style={styles.syapse} href="https://www.syapse.com/">
            Syapse
          </a>
        </p>
        <h3>What skills would you like to learn in 2019?</h3>
        <h4>Group Riding</h4>
        <p>Long distance Cycling Rides</p>
        <h4>Go</h4>
        <p>fmt.Println("Hello, Go")</p>
        <h4>Welding</h4>
        <p>
          I want to restore and work on cars eventually. I feel this is a
          necessary skill for that.
        </p>
        <h4>Spirited Driving</h4>
        <p>
          I want to strengthen my driving abilities by learning to do Drift or
          Autocross.
        </p>
        <h3>Where would you like to travel?</h3>
        <h4>ICELAND</h4>
        <p>
          Iceland is the most unique and exciting place on the planet. You go to
          Iceland to have adventures and see natural beauty.
        </p>

        <h4>New Zealand</h4>
        <p>
          Much like Iceland New Zealand has an amazing range of breathtaking
          scenery but from subtropical forests to snow-covered mountains.
        </p>

        <h4>Pikes Peak International Hill Climb</h4>
        <p>
          The Pikes Peak International Hill Climb, also known as The Race to the
          Clouds, is an annual automobile and motorcycle hillclimb to the summit
          of Pikes Peak in Colorado, USA.
        </p>
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
