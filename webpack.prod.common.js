const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
});
