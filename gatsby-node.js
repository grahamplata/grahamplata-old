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
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}
      });
    });

    return posts;
  });
};
