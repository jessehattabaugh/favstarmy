var path = require('path');

// the directory for source files
exports.src = path.join(__dirname, 'src');

// the directory for build products
exports.www = path.join(__dirname, 'www');

// whether or not to initiate long running watch processes
exports.watch = process.env.npm_config_watch ? true : false;
// this can be overridden like: 
// $npm config watch false

// whether or not to minify
exports.min = process.env.npm_config_min ? true : false;

exports.script = 'index.js';