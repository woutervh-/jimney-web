const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.prod.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    entry: {
        'staticIndex': './src/static/index.tsx',
        'staticStories': './src/static/stories.tsx'
    },
    output: {
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /favicon.*\.png$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    emitFile: false
                }
            }]
        }, {
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    emitFile: false
                }
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    emitFile: false
                }
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'index.html', staticEntry: 'staticIndex' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'stories/index.html', staticEntry: 'staticStories' }),
        new HtmlWebpackStaticPlugin()
    ]
});
