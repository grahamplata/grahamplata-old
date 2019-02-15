import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { PageContainer } from '../theme/containers/PageContainer'

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
        <Seo title="Home" keywords={['blog', 'portfolio', 'grahamplata']} />
        <PageContainer>
          <Img fluid={data.indexImage.childImageSharp.fluid} />
        </PageContainer>
      </Layout>
    )}
  />
)

export default IndexPage
