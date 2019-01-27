import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import AboutMe from '../components/AboutMe'

const About = (props, { data }) => (
  <Layout location={props.location}>
    <Header as="h2" textAlign="left">
      <Header.Content>About</Header.Content>
    </Header>
    <Grid stackable columns={2} verticalAlign="middle">
      <Grid.Column>
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </Grid.Column>
      <Grid.Column>
        <AboutMe />
      </Grid.Column>
    </Grid>
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
