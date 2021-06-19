/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log(node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // called a slug: known as a file/navigation path to route to
    const slug = createFilePath({ node, getNode })

    //appending a new slug/file path
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
