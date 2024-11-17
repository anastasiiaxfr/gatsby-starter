exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/markdown/news//" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: "/news/" + slug,
      component: require.resolve(`./src/templates/news-single.js`),
      context: { slug: slug },
    });
  });
};
