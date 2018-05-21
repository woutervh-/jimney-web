const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.prod.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
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
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    }
});
