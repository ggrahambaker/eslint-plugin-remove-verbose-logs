"use strict";

var Parser = require('simple-text-parser');

function finder(code) {
  var parser = new Parser();
  parser.addRule('#if ENABLE_VERBOSE_LOGGING', function(tag) {
     return '';
  });
  parser.addRule('#endif', function(tag) {
     return '';
  });
  var ret = parser.parse(code);
  return [ret];
}


module.exports = finder;
