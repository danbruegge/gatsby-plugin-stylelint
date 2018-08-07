/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const StyleLintPlugin = require("stylelint-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }, { plugins, ...options }) =>
  actions.setWebpackConfig({
    plugins: [new StyleLintPlugin(options)]
  });
