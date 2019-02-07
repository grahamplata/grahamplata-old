import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    // const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? "blog/" : `blog/${currentPage - 1}`.toString();
    const nextPage = `blog/${currentPage + 1}`.toString();
    return (
      <Layout>
        <h2>Blog</h2>
        <Link as={Link} to={prevPage} disabled={isFirst}>
          Prev
        </Link>
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            active={currentPage === i + 1}
            as={Link}
            to={`blog/${i === 0 ? "" : i + 1}`}
            key={i}
          >
            {i + 1}
          </Link>
        ))}
        <a href={nextPage}>Next</a>
        <div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title;
            const path = node.frontmatter.path;
            const date = node.frontmatter.date;
            const excert = node.frontmatter.excert;
            const tags = node.frontmatter.tags;
            return (
              <div key={title}>
                <Img
                  fluid={
                    node.frontmatter.featuredImage.childImageSharp.sizes.src
                  }
                />
                <Link to={path}>
                  <h2>{title}</h2>
                </Link>
                <p>{date}</p>
                <p>{excert}</p>
                {tags.map(tag => {
                  return (
                    <p size="mini" key={tag}>
                      {tag}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Layout>
    );
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
`;
