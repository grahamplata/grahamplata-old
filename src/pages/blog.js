import React from "react";
import { Container, Header, Item, Label } from "semantic-ui-react";
import Layout from "../components/layout";
import { Link, StaticQuery, graphql } from "gatsby";

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
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
                author
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
        <Header as="h2" textAlign="left">
          <Header.Content>Blog</Header.Content>
        </Header>
        <Container text>
          <Item.Group relaxed>
            {data.allMarkdownRemark.edges.map(post => (
              <Item key={post.node.id}>
                <Item.Image
                  to={post.node.frontmatter.path}
                  target="_blank"
                  size="medium"
                  src={
                    post.node.frontmatter.featuredImage.childImageSharp.sizes
                      .src
                  }
                />
                <Item.Content verticalAlign="middle">
                  <Link to={post.node.frontmatter.path}>
                    <Item.Header as="h2">
                      {post.node.frontmatter.title}
                    </Item.Header>
                  </Link>
                  <Item.Meta>{post.node.frontmatter.date}</Item.Meta>
                  <Item.Description>
                    {post.node.frontmatter.excert}
                  </Item.Description>
                  <Item.Extra>
                    {post.node.frontmatter.tags.map(tag => {
                      return (
                        <Label size="mini" key={tag}>
                          {tag}
                        </Label>
                      );
                    })}
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Container>
      </Layout>
    )}
  />
);

export default BlogPage;
