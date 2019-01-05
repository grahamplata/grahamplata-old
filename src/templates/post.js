import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Button, Icon } from 'semantic-ui-react'
import Layout from '../components/layout'

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext

  return (
    <Layout>
      <Container>
        <div style={{ marginBottom: 25 }}>
          <Button.Group floated="right">
            {prev && (
              <Link to={prev.frontmatter.path}>
                <Button
                  content="Previous"
                  icon="left arrow"
                  labelPosition="left"
                />
              </Link>
            )}
            <Link
              to="/blog"
              style={{ paddingRight: '5px', paddingLeft: '5px' }}
            >
              <Button icon>
                <Icon name="unordered list" />
              </Button>
            </Link>
            {next && (
              <Link to={next.frontmatter.path}>
                <Button
                  content="Next"
                  icon="right arrow"
                  labelPosition="right"
                />
              </Link>
            )}
          </Button.Group>
          <div>
            <h1 style={{ margin: 0, display: 'inline-block' }}>
              {post.frontmatter.title}
            </h1>
          </div>
          <div>
            <h3 style={{ margin: 0, display: 'inline-block' }}>
              {post.frontmatter.date}
            </h3>
          </div>
        </div>
        <Container text dangerouslySetInnerHTML={{ __html: post.html }} />
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
