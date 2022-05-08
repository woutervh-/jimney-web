const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.prod.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackStaticPlugin = require('./html-webpack-static-plugin');
const webpackHash = require('./webpack.hash');

const additionalTags = [{
    tagName: 'script',
    closeTag: true,
    attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js' }
}, {
    tagName: 'script',
    closeTag: true,
    attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js' }
}, {
    tagName: 'script',
    closeTag: true,
    attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/history/5.3.0/history.production.min.js' }
}, {
    tagName: 'script',
    closeTag: true,
    attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/react-router/6.3.0/react-router.production.min.js' }
}, {
    tagName: 'script',
    closeTag: true,
    attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/6.3.0/react-router-dom.production.min.js' }
}];

module.exports = merge(common, {
    entry: {
        static: './src/static.tsx'
    },
    output: {
        library: {
            type: 'umd'
        }
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
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/', filename: 'index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/author', filename: 'author/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/contact', filename: 'contact/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/contact-thanks', filename: 'contact-thanks/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/resources', filename: 'resources/index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['bundle'], entry: 'static', additionalTags, location: '/blog', filename: 'blog/index.html' }),
        new HtmlWebpackStaticPlugin()
    ]
});
