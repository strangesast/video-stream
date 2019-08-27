const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new HTMLInlineCSSWebpackPlugin(),
    new CompressionPlugin(),
  ],
});
