const path = require('path');
const merge = require('webpack-merge');
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
            test: /\.(png|svg|jpg)$/,
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], filename: 'index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    }
});
