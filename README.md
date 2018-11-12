# gatsby-plugin-stylelint
Gatsby v2 plugin to add support for [stylelint-webpack-plugin][plugin].

## Note
You need your own stylelint setup. Please have a look at the stylelint
[website][stylelint-website].

The intention of this plugin is to inject stylelint into webpack for gatsbyjs.

## Install
`yarn add --dev gatsby-plugin-stylelint`

## Usage
```javascript
// In your gatsby-config.js
plugins: ["gatsby-plugin-stylelint"]
```

## Configuration
If you need to pass options to `stylelint` use the plugins options, see
[stylelint-webpack-plugin][options] for all available options.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-stylelint",
    options: { files: ["**/*.jsx?"] }
  }
]
```

## Example
To see the plugin in action, look at my [example project][example-project].


[plugin]: https://github.com/webpack-contrib/stylelint-webpack-plugin
[options]: https://github.com/webpack-contrib/stylelint-webpack-plugin#options
[stylelint-website]: https://stylelint.io/
[example-project]: https://github.com/danbruegge/gatsby-starter-default-extended
