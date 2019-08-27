const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    hot: true,
    //   '/TempSensor': {
    //     target: 'http://127.0.0.1:50051',
    //   },
    // },
  },
  plugins: [],
});
