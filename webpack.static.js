const webpack = require('webpack');
const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.tsx',
    staticIndex: './src/static/index.tsx',
    staticStories: './src/static/stories.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
    // libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
      include: [path.resolve(__dirname, 'src')]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /favicon.*\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }],
      include: [path.resolve(__dirname, 'src/images')]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }, {
        loader: 'svgo-loader'
      }],
      include: [path.resolve(__dirname, 'src/images')]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['app'], staticEntry: 'staticIndex' }),
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['app'], staticEntry: 'staticStories', filename: 'stories/index.html' }),
    new HtmlWebpackStaticPlugin()
    // new StaticSiteGeneratorPlugin({
    //   paths: [
    //     '/',
    //     '/stories',
    //     '/author',
    //     '/resources',
    //     '/contact'
    //   ]
    // })
  ]
};
