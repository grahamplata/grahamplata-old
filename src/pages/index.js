import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = props => (
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
      <Layout location={props.location}>
        <Img fluid={data.imageOne.childImageSharp.fluid} />
      </Layout>
    )}
  />
)

export default IndexPage
