import React from "react";
import { graphql } from "gatsby";
import { Container } from "semantic-ui-react";
import Layout from "../components/layout";
import BlogMenu from "../components/BlogMenu";

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <div style={{ marginBottom: 25 }}>
        <BlogMenu
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          next={next.frontmatter.path}
          prev={prev.frontmatter.path}
        />
      </div>
      <Container text dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`;

export default Template;
