const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/BlogPost.js");

  return graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
              excert
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          next,
          previous
        }
      });
    });

    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/BlogList.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });
};
