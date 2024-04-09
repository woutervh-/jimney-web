const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');
const webpackHash = require('./webpack.hash');

module.exports = {
    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        filename: `[name].${webpackHash}.js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
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
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [postcssPresetEnv()],
                    },
                },
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            images: path.resolve(__dirname, './src/images/')
        }
    }
};
