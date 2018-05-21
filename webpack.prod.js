const prodBundle = require('./webpack.prod.bundle');
const prodStatic = require('./webpack.prod.static');

module.exports = [prodBundle, prodStatic];
