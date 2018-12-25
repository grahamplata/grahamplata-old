import React from 'react'
import { Header, Item } from 'semantic-ui-react'
import Layout from '../components/layout'
import { Link, StaticQuery, graphql } from 'gatsby'

const BlogPage = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
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
        <Header as="h2" textAlign="left">
          <Header.Content>Blog</Header.Content>
        </Header>
        <Item.Group>
          {data.allMarkdownRemark.edges.map(post => (
            <Item key={post.node.id}>
              <Item.Image
                as={Link}
                to={post.node.frontmatter.path}
                target="_blank"
                size="medium"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes.src
                }
              />
              <Item.Content>
                <Link to={post.node.frontmatter.path}>
                  <Item.Header as="h2">
                    {post.node.frontmatter.title}
                  </Item.Header>
                </Link>
                <Item.Meta>{post.node.frontmatter.date}</Item.Meta>
                <Item.Description>{post.node.excerpt}</Item.Description>
                <Item.Extra>@grahamplata</Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Layout>
    )}
  />
)

export default BlogPage
