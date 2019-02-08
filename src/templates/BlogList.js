import React, { Component } from 'react'
import Layout from '../components/layout'
import { BlogContainer } from '../theme/containers/BlogPostsContaners'
import { Link, graphql } from 'gatsby'

export default class BlogList extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <h2>Blog</h2>
        <BlogContainer>
          <ul>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title
              const path = node.frontmatter.path
              const date = node.frontmatter.date
              const excert = node.frontmatter.excert
              return (
                <li>
                  <Link to={path}>
                    <b>{title}</b>
                  </Link>{' '}
                  - <small>{date}</small>
                  <p>
                    <small>{excert}</small>
                  </p>
                </li>
              )
            })}
          </ul>
        </BlogContainer>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            excert
            tags
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 550) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
