import React from 'react'
import { graphql } from 'gatsby'
import { Header, Container } from 'semantic-ui-react'
import Layout from '../components/layout'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Container>
        <Header as="h2" textAlign="left">
          {post.frontmatter.title}
          <Header.Subheader>{post.frontmatter.date}</Header.Subheader>
        </Header>
        <Container dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Template
