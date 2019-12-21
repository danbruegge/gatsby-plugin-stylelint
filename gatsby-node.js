/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const StylelintBarePlugin = require('stylelint-bare-webpack-plugin');

const defaultOptions = {
  files: `${__dirname}/src/**/*.{js,jsx}`,
}

exports.onCreateWebpackConfig = ({ actions }, { plugins, ...options }) => {
  actions.setWebpackConfig({
    plugins: [new StylelintBarePlugin({ ...defaultOptions, ...options })]
  });
}
