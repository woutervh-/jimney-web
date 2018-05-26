const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.prod.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackHash = require('./webpack.hash');

module.exports = merge(common, {
    entry: {
        static: './src/static.tsx'
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
            test: /\.(jpe?g|png)$/,
            use: [{
                loader: 'responsive-loader',
                options: {
                    name: `images/[name]-[width].${webpackHash}.[ext]`
                }
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `images/[name].${webpackHash}.[ext]`,
                    emitFile: false
                }
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', location: '/', filename: 'index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', location: '/stories', filename: 'stories/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', location: '/contact', filename: 'contact/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', location: '/resources', filename: 'resources/index.html' }),
        new HtmlWebpackStaticPlugin()
    ]
});
