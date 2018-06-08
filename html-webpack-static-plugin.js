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
        if (htmlPluginData.plugin.options.additionalTags) {
            for (const additionalTag of htmlPluginData.plugin.options.additionalTags.slice().reverse()) {
                htmlPluginData.body.unshift(additionalTag);
            }
        }

        if (htmlPluginData.plugin.options.entry) {
            const chunks = compilation.getStats().compilation.namedChunks;

            if (!chunks.has(htmlPluginData.plugin.options.entry)) {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.entry) + ' was not found. Make sure there is an entry with this name!');
            }

            if (typeof htmlPluginData.plugin.options.location !== 'string') {
                throw new Error('Missing location in plugin options.');
            }

            const chunk = chunks.get(htmlPluginData.plugin.options.entry);
            const jsFiles = chunk.files.filter((name) => name.endsWith('.js'));

            if (jsFiles.length <= 0) {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.entry) + ' has no output files.');
            } else if (jsFiles.length >= 2) {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.entry) + ' has multiple output files. I do not know how to deal with this.');
            }

            const dom = new jsdom.JSDOM('', { runScripts: 'outside-only' });
            dom.virtualConsole.sendTo(console);
            const script = new vm.Script(compilation.assets[jsFiles[0]].source());
            dom.runVMScript(script);

            if (typeof dom.window.default !== 'function') {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.entry) + ' did not export a function.');
            }

            const result = dom.window.default(htmlPluginData.plugin.options.location);
            if (typeof result !== 'string') {
                throw new Error('Chunk ' + JSON.stringify(htmlPluginData.plugin.options.entry) + ' returned a non-string.');
            }

            htmlPluginData.body.unshift({
                tagName: 'div',
                closeTag: true,
                attributes: { id: 'container' },
                innerHTML: result
            });
        }
        callback();
    }
}

module.exports = HtmlWebpackStaticPlugin;
