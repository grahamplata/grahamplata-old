import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/Seo'
import { BlogContainer } from '../theme/containers/BlogPostsContaners'

const BlogList = (props, { data }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    `}
    render={data => (
      <Layout>
        <Seo title="Blog" keywords={['blog', 'grahamplata']} />
        <h2>Blog</h2>
        <BlogContainer>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              const title = node.frontmatter.title
              const date = node.frontmatter.date
              const path = node.frontmatter.path
              const excert = node.frontmatter.title
              return (
                <li key={node.id}>
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
    )}
  />
)

export default BlogList
