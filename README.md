# gatsby-plugin-stylelint
Gatsby plugin to add support for [stylelint-webpack-plugin](plugin).

## Install
`yarn add --dev gatsby-plugin-stylelint`

## Usage
```javascript
// In your gatsby-config.js
plugins: ["gatsby-plugin-stylelint"]
```

If you need to pass options to `stylelint` use the plugins options, see
[stylelint-webpack-plugin](options) for all available options.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-stylelint",
    options: { files: ["**/*.js*"] }
  }
]
```

[plugin]: https://github.com/webpack-contrib/stylelint-webpack-plugin
[options]: https://github.com/webpack-contrib/stylelint-webpack-plugin#options
