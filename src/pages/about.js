import React from 'react'
import { Container, Grid, List, Header } from 'semantic-ui-react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const styles = {
  syapse: {
    color: '#21C2D2',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  spacing: {
    paddingTop: '3em',
    paddingBottom: '3em',
  },
}

const About = (props, { data }) => (
  <Layout location={props.location}>
    <Header as="h2" textAlign="left">
      <Header.Content>About</Header.Content>
    </Header>
    <Container>
      <Grid>
        <Grid.Column>
          <h3>What are you known for?</h3>
          <p>
            Graham's accumulation of talents was cultivated through curiosity,
            physical experience, and pure gut instinct. These factors create
            results that are often non-representational of a normal
            problem-solving method. Graham loves keeping his hands busy with as
            many different mediums as possible... often too many. Ranging from
            photography to programming and even distilling honey wine.
            Throughout his professional career, Graham has intermixed many
            disciplines of his past to inform and influence his future
            endeavors.
          </p>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </Grid.Column>
        <Grid.Column>
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
          <List>
            <List.Item>
              <List.Icon name="circle notched" />
              <List.Content>
                <List.Header>Group Riding</List.Header>
                <List.Description>Long distance Cycling Rides</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="circle notched" />
              <List.Content>
                <List.Header>Go</List.Header>
                <List.Description>fmt.Println("Hello, Go")</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="circle notched" />
              <List.Content>
                <List.Header>Welding</List.Header>
                <List.Description>
                  I want to restore and work on cars eventually. I feel this is
                  a necessary skill for that.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="circle notched" />
              <List.Content>
                <List.Header>Spirited Driving</List.Header>
                <List.Description>
                  I want to strengthen my driving abilities by learning to do
                  Drift or Autocross.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
          <h3>Where would you like to travel?</h3>
          <List>
            <List.Item>
              <List.Content>
                <List.Header>ICELAND</List.Header>
                <List.Description>
                  Iceland is the most unique and exciting place on the planet.
                  You go to Iceland to have adventures and see natural beauty.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>New Zealand</List.Header>
                <List.Description>
                  Much like Iceland New Zealand has an amazing range of
                  breathtaking scenery but from subtropical forests to
                  snow-covered mountains.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Pikes Peak International Hill Climb</List.Header>
                <List.Description>
                  The Pikes Peak International Hill Climb, also known as The
                  Race to the Clouds, is an annual automobile and motorcycle
                  hillclimb to the summit of Pikes Peak in Colorado, USA.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  </Layout>
)

export default About

export const liquidImage = graphql`
  fragment liquidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageTwo: file(relativePath: { eq: "me.png" }) {
      ...liquidImage
    }
  }
`
