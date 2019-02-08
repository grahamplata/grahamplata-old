import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        indexImage: file(relativePath: { eq: "gp.JPG" }) {
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
        <Img fluid={data.indexImage.childImageSharp.fluid} />
      </Layout>
    )}
  />
)

export default IndexPage
