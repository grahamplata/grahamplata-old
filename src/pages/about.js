import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import { PageContainer } from '../theme/containers/PageContainer'

const skills = [
  {
    skill: 'Welding',
    description: 'I want to restore and work on cars eventually.',
  },
  {
    skill: 'Spirited Driving',
    description: 'I want to learn to Drift or Autocross.',
  },
  { skill: 'Group Riding', description: 'Long distance Cycling Rides' },
  { skill: 'Go', description: 'fmt.Println("Hello, Go")' },
]

const places = [
  {
    place: 'Iceland',
    description:
      'Iceland is the most unique and exciting place on the planet. \
      You go to Iceland to have adventures and see natural beauty.',
  },
  {
    place: 'New Zealand',
    description:
      'Much like Iceland New Zealand has an amazing range of breathtaking \
      scenery but from subtropical forests to snow-covered mountains.',
  },
  {
    place: 'Pikes Peak International Hill Climb',
    description:
      'The Pikes Peak International Hill Climb, also known as The Race to the Clouds, \
      is an annual automobile and motorcycle hillclimb to the summit of Pikes Peak in Colorado, USA.',
  },
]

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
        <PageContainer>
          <h2>About</h2>
          <div>
            <h3>Where are you currently?</h3>
            <p>
              Currently, I reside in Phoenixville, Pennsylvania working as a
              Data Support Engineer for{' '}
              <a style={styles.syapse} href="https://www.syapse.com/">
                Syapse
              </a>
            </p>
          </div>
          <div>
            <h3>What skills would you like to learn in 2019?</h3>
            <ul>
              {skills.map(skill => {
                return (
                  <li>
                    <b>{skill.skill}</b> - {skill.description}
                  </li>
                )
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
                )
              })}
            </ul>
          </div>
        </PageContainer>
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
