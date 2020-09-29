const path = require('path');

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

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/notes/${slug}`,
      component: path.resolve(`src/templates/note-template.js`),
      context: {
        slug
      }
    })
  });

//   const posts = result.data.allMdx.nodes;
//   const postsPerPage = 10;
//   const numOfPages = Math.ceil(posts.length / postsPerPage);

//   Array.from({ length: numOfPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/notes` : `/notes/${i + 1}`,
//       component: path.resolve.apply(`src/templates/note-list-template.js`),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numOfPages,
//         currentPage: i + 1
//       }
//     })
//   })
}