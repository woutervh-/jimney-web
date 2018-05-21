const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
  entry: {
    'bundle': './src/index.tsx',
    'staticIndex': './src/static/index.tsx',
    'staticStories': './src/static/stories.tsx'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM'
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       bundleStyles: {
  //         name: 'bundle',
  //         test: (m, c, entry = 'bundle') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'index.html', staticEntry: 'staticIndex' }),
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'stories/index.html', staticEntry: 'staticStories' }),
    new HtmlWebpackStaticPlugin()
  ]
};
