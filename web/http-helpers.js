var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, asset, callback) {
  fs.readFile(asset, {'encoding': 'UTF-8'}, function(error, data){
    response.writeHead(200, headers);
    response.write(data);
    response.end();
    if (callback){
      callback();
    }
  });

};



// As you progress, keep thinking about what helper functions you can put here!


