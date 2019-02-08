import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import MainContainer from '../theme/containers/MainContainer'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  return (
    <Layout>
      <Header title={title} subtitle={date} />
      <MainContainer dangerouslySetInnerHTML={{ __html: html }} />
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
