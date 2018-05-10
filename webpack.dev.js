const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.png$/,
      use: [{
        loader: 'url-loader'
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
