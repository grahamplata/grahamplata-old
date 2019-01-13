import React from 'react'
import { Container, Header, Item, Label, Button } from 'semantic-ui-react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? 'blog/' : `blog/${currentPage - 1}`.toString()
    const nextPage = `blog/${currentPage + 1}`.toString()
    return (
      <Layout>
        <Header as="h2" textAlign="left">
          <Header.Content>Blog</Header.Content>
        </Header>
        <Container>
          <Button.Group compact>
            <Button as={Link} to={prevPage} disabled={isFirst}>
              Prev
            </Button>
            {Array.from({ length: numPages }, (_, i) => (
              <Button
                active={currentPage === i + 1}
                as={Link}
                to={`blog/${i === 0 ? '' : i + 1}`}
                key={i}
              >
                {i + 1}
              </Button>
            ))}
            <Button as={Link} to={nextPage} disabled={isLast}>
              Next
            </Button>
          </Button.Group>
          <Item.Group relaxed>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title
              const path = node.frontmatter.path
              const date = node.frontmatter.date
              const excert = node.frontmatter.excert
              const tags = node.frontmatter.tags
              return (
                <Item key={title}>
                  <Item.Image
                    to={path}
                    target="_blank"
                    size="medium"
                    src={
                      node.frontmatter.featuredImage.childImageSharp.sizes.src
                    }
                  />
                  <Item.Content verticalAlign="middle">
                    <Link to={path}>
                      <Item.Header as="h2">{title}</Item.Header>
                    </Link>
                    <Item.Meta>{date}</Item.Meta>
                    <Item.Description>{excert}</Item.Description>
                    <Item.Extra>
                      {tags.map(tag => {
                        return (
                          <Label size="mini" key={tag}>
                            {tag}
                          </Label>
                        )
                      })}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
          <Button.Group compact>
            <Button as={Link} to={prevPage} disabled={isFirst}>
              Prev
            </Button>
            {Array.from({ length: numPages }, (_, i) => (
              <Button
                active={currentPage === i + 1}
                as={Link}
                to={`blog/${i === 0 ? '' : i + 1}`}
                key={i}
              >
                {i + 1}
              </Button>
            ))}
            <Button as={Link} to={nextPage} disabled={isLast}>
              Next
            </Button>
          </Button.Group>
        </Container>
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
