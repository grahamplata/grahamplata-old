import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/layout'
import { BlogContainer } from '../theme/containers/BlogPostsContaners'
import { PageContainer } from '../theme/containers/PageContainer'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date, path } = frontmatter
  return (
    <Layout>
      <Seo
        title={
          path
            .substr(1)
            .charAt(0)
            .toUpperCase() + path.slice(2)
        }
        keywords={['blog', 'grahamplata']}
      />
      <PageContainer>
        <>
          <h2>{title}</h2>
          <small>{date}</small>
        </>
        <BlogContainer dangerouslySetInnerHTML={{ __html: html }} />
      </PageContainer>
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
