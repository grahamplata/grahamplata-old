import React from 'react'
import { graphql } from 'gatsby'
import { Header, Container, Grid } from 'semantic-ui-react'
import Layout from '../components/layout'
import BlogNav from '../components/BlogNav'

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pageContext
  return (
    <Layout>
      <Container>
        <Grid>
          <Grid.Column>
            <Header as="h2" textAlign="left">
              {title}
              <Header.Subheader>{date}</Header.Subheader>
            </Header>
            <Grid.Column>
              <BlogNav next={next} prev={prev} />
              <Container text dangerouslySetInnerHTML={{ __html: html }} />
              <BlogNav next={next} prev={prev} />
            </Grid.Column>
          </Grid.Column>
        </Grid>
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
        author
        excert
        tags
      }
    }
  }
`

export default BlogPost
