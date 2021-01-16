const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allContentfulBlogPosts {
        edges {
          node {
            author
            createdAt
            title
            id
            content {
              raw
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allContentfulBlogPosts;

  edges.forEach((edge) => {
    const { id } = edge.node;
    createPage({
      path: id,
      component: path.resolve(`./src/Templates/Blog/index.tsx`),
      context: {
        data: edge.node,
      },
    });
  });
};
