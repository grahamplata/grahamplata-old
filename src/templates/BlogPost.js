import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/layout'
import Header from '../components/Header'
import MainContainer from '../theme/containers/MainContainer'

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
