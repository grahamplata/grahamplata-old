const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/post.js");

  return graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 210)
            html
            id
            frontmatter {
              path
              title
              date
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
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        }
      });
    });

    return posts;
  });
};
