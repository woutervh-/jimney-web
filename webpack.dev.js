const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            test: /\.(jpe?g|png)$/,
            use: [{
                loader: 'responsive-loader',
                options: {
                    name: 'images/[name]-[width].[ext]'
                }
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'url-loader'
            }],
            include: [path.resolve(__dirname, 'src/images')]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: false
        }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});
