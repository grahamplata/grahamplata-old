import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const IndexPage = props => (
  <StaticQuery
    query={graphql`
      {
        imageOne: file(relativePath: { eq: "cl.jpg" }) {
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
        <p>1ßs</p>
      </Layout>
    )}
  />
)

export default IndexPage
