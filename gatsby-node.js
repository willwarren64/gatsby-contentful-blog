const path = require(`path`)


  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
    return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
        if(result.errors) {
          throw result.errors
        }
        const posts = result.data.allContentfulBlog.edges


        posts.forEach((post, index) => {
          const previous = index === posts.length -1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index-1].node


        createPage({
          path: post.node.slug,
          component: blogPost,
          context: {
              slug: post.node.slug,
              previous,
              next,
          },
        })
      })
    })
  }