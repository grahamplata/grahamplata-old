import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <h2>Blog</h2>
        <div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title
            const path = node.frontmatter.path
            const date = node.frontmatter.date
            const excert = node.frontmatter.excert
            const tags = node.frontmatter.tags
            return (
              <div key={title}>
                <div>
                  <Link to={path}>
                    <h2>{title}</h2>
                  </Link>
                  <sub>{date}</sub>
                </div>
                <p>{excert}</p>
                <ul>
                  {tags.map(tag => {
                    return <li key={tag}>{tag}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
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
