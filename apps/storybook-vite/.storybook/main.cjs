const windiCss = require('vite-plugin-windicss');
const macrosPlugin = require('vite-plugin-babel-macros');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // async viteFinal(config) {
  //   config.plugins = [
  //     ...config.plugins,
  //     windiCss(),
  //     macrosPlugin(),
  //   ]
  // }
}