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
      <BlogNav next={next} prev={prev} />
      <Header as="h2" textAlign="left">
        {title}
        <Header.Subheader>{date}</Header.Subheader>
      </Header>
      <Container>
        <Grid>
          <Grid.Column>
            <Grid.Column>
              <Container text dangerouslySetInnerHTML={{ __html: html }} />
            </Grid.Column>
            <BlogNav next={next} prev={prev} />
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
