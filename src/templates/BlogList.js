import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";
import Seo from "../components/Seo";

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
        <Seo title="Blog" keywords={["blog", "grahamplata"]} />
        <>
          <h2>Blog</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { title, tags, date, path, excert } = node.frontmatter;
            return (
              <BlogItem
                key={node.id}
                title={title}
                tags={tags}
                date={date}
                path={path}
                excert={excert}
              />
            );
          })}
        </>
      </Layout>
    )}
  />
);

export default BlogList;
