import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogNav from "../components/BlogNav";

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title, date } = frontmatter;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <BlogNav next={next} prev={prev} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

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
`;

export default BlogPost;
