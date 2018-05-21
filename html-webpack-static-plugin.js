const jsdom = require('jsdom');
const vm = require('vm');

class HtmlWebpackStaticPlugin {
    constructor(options) {
        this.pluginName = 'HtmlWebpackStaticPlugin';
    }

    apply(compiler) {
        if (compiler.options.output.libraryTarget !== 'umd') {
            throw new Error('This plugin currently only supports "umd" for output.libraryTarget. If you would like to see any of the targets from https://webpack.js.org/configuration/output/#output-librarytarget supported, please open an issue.');
        }

        compiler.hooks.compilation.tap(this.pluginName, (compilation) => this.applyCompilation(compilation));

        compiler.hooks.emit.tap(this.pluginName, (compilation) => {
            for (const chunk of compilation.chunks) {
                for (const file of chunk.files) {
                    delete compilation.assets[file];
                }
            }
        });
    }

    applyCompilation(compilation) {
        if (!compilation.hooks.htmlWebpackPluginAlterAssetTags) {
            throw new Error('The expected HtmlWebpackPlugin hook was not found! Ensure HtmlWebpackPlugin is installed and was initialized before this plugin.');
        }

        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(this.pluginName, (htmlPluginData, callback) => this.applyAlterAssetTags(compilation, htmlPluginData, callback));
    }

    applyAlterAssetTags(compilation, htmlPluginData, callback) {
        const chunks = compilation.getStats().compilation.namedChunks;
        if (htmlPluginData.plugin.options.staticEntry) {
            if (chunks.has(htmlPluginData.plugin.options.staticEntry)) {
                const chunk = chunks.get(htmlPluginData.plugin.options.staticEntry);
                const jsFiles = chunk.files.filter((name) => name.endsWith('.js'));

                if (jsFiles.length === 1) {
                    const dom = new jsdom.JSDOM('', { runScripts: 'outside-only' });
                    dom.virtualConsole.sendTo(console);
                    const script = new vm.Script(compilation.assets[jsFiles[0]].source());
                    dom.runVMScript(script);

                    if (typeof dom.window.default === 'string') {
                        htmlPluginData.body.unshift({
                            tagName: 'div',
                            closeTag: true,
                            attributes: { id: 'container' },
                            innerHTML: dom.window.default
                        });
                    } else {
                        throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' did not export a string.');
                    }
                } else if (jsFiles.length <= 0) {
                    throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' has no output files.');
                } else {
                    throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' has multiple output files. I do not know how to deal with this.');
                }

                for (const file of chunk.files) {
                    delete compilation.assets[file];
                }
            } else {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.staticEntry) + ' was not found. Make sure there is an entry with this name!');
            }
        }
        callback();
    }
}

module.exports = HtmlWebpackStaticPlugin;
