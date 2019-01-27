import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Grid } from 'semantic-ui-react'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        imageOne: file(relativePath: { eq: "gp.JPG" }) {
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
        <Grid verticalAlign="middle">
          <Grid.Column>
            <Grid.Row>
              <Container>
                <Img fluid={data.imageOne.childImageSharp.fluid} />
              </Container>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Layout>
    )}
  />
)

export default IndexPage
