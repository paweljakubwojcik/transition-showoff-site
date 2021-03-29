const path = require(`path`)
const fs = require("fs")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const models = require(`./src/constants/models.js`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const basePath = "models"
  const modelPageTemplate = path.resolve(`src/templates/model.jsx`)

  models.forEach(model => {
    createPage({
      path: `/${basePath}/${model.name}`,
      component: modelPageTemplate,
      context: model,
    })
  })
}
