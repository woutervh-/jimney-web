// const assert = require('assert');
const fs = require('fs');
const util = require('util');
const vm = require('vm');

// TODO: delete chunk or delete asset from compilation that will be rendered as HTML
// https://github.com/numical/script-ext-html-webpack-plugin/blob/master/lib/plugin.js#L98

class HtmlWebpackStaticPlugin {
    constructor(options) {
        this.pluginName = 'HtmlWebpackStaticPlugin';
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(this.pluginName, (compilation) => this.applyCompilation(compilation));
        compiler.hooks.emit.tap(this.pluginName, (compilation) => this.applyEmit(compilation));
    }

    applyCompilation(compilation) {
        if (!compilation.hooks.htmlWebpackPluginAlterAssetTags) {
            throw new Error('The expected HtmlWebpackPlugin hook was not found! Ensure HtmlWebpackPlugin is installed and was initialized before this plugin.');
        }
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(this.pluginName, (htmlPluginData, callback) => this.registerCallback(compilation, htmlPluginData, callback));
    }

    applyEmit(compilation) {
        // console.log(compilation.getStats().compilation.entries);
        // console.log(compilation.getStats().compilation.entrypoints);
        // console.log(compilation.getStats().compilation.chunks);
        // console.log(compilation.getStats().compilation.namedChunks);
    }

    registerCallback(compilation, htmlPluginData, callback) {
        const chunks = compilation.getStats().compilation.namedChunks;
        if (htmlPluginData.plugin.options.staticEntry) {
            if (chunks.has(htmlPluginData.plugin.options.staticEntry)) {
                const chunk = chunks.get(htmlPluginData.plugin.options.staticEntry);
                const files = chunk.files;
                if (files.length === 1) {
                    const exports = {};
                    const sandbox = { exports };
                    const context = vm.createContext(sandbox);
                    vm.runInContext(compilation.assets[files[0]].source(), context);
                    const result = exports.default;
                    if (typeof result === 'string') {
                        htmlPluginData.body.unshift({
                            tagName: 'div',
                            closeTag: true,
                            attributes: { id: 'container' },
                            innerHTML: result
                        });
                    } else {
                        throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' did not export a string.');
                    }
                } else if (files.length <= 0) {
                    throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' has no output files.');
                } else {
                    throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' has multiple output files. I do not know how to deal with this.');
                }
            } else {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' was not found. Make sure there is an entry with this name!');
            }
        }
        callback();
    }
}

module.exports = HtmlWebpackStaticPlugin;
