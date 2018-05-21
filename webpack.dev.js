const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /favicon.*\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /\.(png|svg|jpg)$/,
      use: [{
        loader: 'url-loader'
      }],
      include: [path.resolve(__dirname, 'src/images')]
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
});
