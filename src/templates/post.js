import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Header, Container } from 'semantic-ui-react'
import Layout from '../components/layout'

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Container>
        <div style={{ marginBottom: 25 }}>
          <Fragment>
            <Header as="h2" textAlign="left">
              <Header.Content>{post.frontmatter.title}</Header.Content>
            </Header>
            <Header as="h4" textAlign="left">
              <Header.Content>{post.frontmatter.date}</Header.Content>
            </Header>
          </Fragment>
        </div>
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
