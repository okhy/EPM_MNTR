// your app's webpack.config.js
const custom = require("../webpack.config.js")

module.exports = {
  stories: ["../src/**/*.story.{js,jsx,ts,tsx}"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  exclude: ["../node_modules/"],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    }
  }
}
