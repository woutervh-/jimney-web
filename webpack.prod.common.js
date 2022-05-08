const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const webpackHash = require('./webpack.hash');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: true
        }),
        new MiniCssExtractPlugin({
            filename: `[name].${webpackHash}.css`,
            chunkFilename: `[id].${webpackHash}.css`
        })
    ],
});
