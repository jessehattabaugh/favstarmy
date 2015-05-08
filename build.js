var config = require('./config');
var browserify = require('browserify');
var path = require('path');
var fs = require('fs');
var sh = require('shelljs');
var jade = require('jade');

// Here's what this script does
clean(); // removes old build products
js(); // browserifies JS files
html(); // compiles a jade template

function clean() {
  sh.rm('-rf', config.www);
  sh.mkdir(config.www);
}

function js() {
  var inPath = path.join(config.src, 'main.js');
  var outPath = path.join(config.www, config.script);
  
  var b = browserify();
  
  b.add(inPath);
  
  b.transform('babelify', { blacklist: ['strict'] });
  
  try {
    b.bundle().pipe(fs.createWriteStream(outPath));
  } catch(e) {
    console.error('browserify error');
  }
  
  console.info('js made');
}

function html() {
  var inPath = path.join(config.src, 'main.jade');
  var outPath = path.join(config.www, 'index.html');
  var template = jade.compileFile(
    inPath,
    { 
      cache: false,
      pretty: !config.min 
    }
  );
  fs.writeFile(outPath, template(config));
  console.info("html built");
}