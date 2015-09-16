"use strict";
var extract = require("./finder");

module.exports = {
  processors: {
      // assign to the file extension you want (.js, .jsx, .html, etc.)
      ".js": {
          // takes text of the file and filename
          preprocess: function(text, filename) {
              // here, you can strip out any non-JS content
              // and split into multiple strings to lint
              var parsed = extract(text);
              // console.log(parsed);

              // console.log(parsed.length)
              return parsed;  // return an array of strings to lint
          },

          // takes a Message[][] and filename
          postprocess: function(messages, filename) {
              // `messages` argument contains two-dimensional array of Message objects
              // where each top-level array item contains array of lint messages related
              // to the text that was returned in array from preprocess() method

              // you need to return a one-dimensional array of the messages you want to keep
              // console.log(messages + '   ' + filename + '    ' + messages.length)
              return messages[0];
          }
      }
  }
};
