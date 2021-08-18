# New Maintainer needed
https://github.com/danbruegge/gatsby-plugin-stylelint/issues/20

---

# gatsby-plugin-stylelint
Gatsby plugin to add support for [stylelint-bare-webpack-plugin][plugin].

## Note
You need your own stylelint setup. Please have a look at the stylelint
[website][stylelint-website].

The intention of this plugin is to inject stylelint into webpack for gatsbyjs.

## Install
`yarn add --dev @danbruegge/gatsby-plugin-stylelint`

## Usage
```javascript
// In your gatsby-config.js
plugins: ["@danbruegge/gatsby-plugin-stylelint"]
```

## Configuration
If you need to pass options to `stylelint` use the plugins options, see
[stylelint-bare-webpack-plugin][options] for all available options.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "@danbruegge/gatsby-plugin-stylelint",
    options: { files: ["**/*.{js,jsx}"] }
  }
]
```

## Example
To see the plugin in action, look at my [example project][example-project].


[plugin]: https://github.com/cascornelissen/stylelint-bare-webpack-plugin
[options]: https://github.com/cascornelissen/stylelint-bare-webpack-plugin#options
[stylelint-website]: https://stylelint.io/
[example-project]: https://github.com/danbruegge/gatsby-starter-kitt
