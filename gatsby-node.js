const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while runing GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/notes/${slug}`,
      component: path.resolve(`src/templates/note-template.js`),
      context: {
        slug,
      }
    })
  });

  const posts = result.data.allMdx.nodes;
  const postsPerPage = 6;
  const numOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/notes` : `/notes/${i + 1}`,
      component: path.resolve(`src/templates/note-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numOfPages,
        currentPage: i + 1
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'allMdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}