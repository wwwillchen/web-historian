var httpHelpers = require('./http-helpers');
var url = require('url');
var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var routes = {
  '/': {
    'GET': function(request, response){
      httpHelpers.serveAssets(response, './public/index.html');
    }
  },
  '/submit': {
    'POST': function(request, response){
      response.end('POST received');
      // Collect the data
      // Process it
      // If... submitted URL exists in archive
        // Serve the file
      // Else..
        // Add to queue 'sites.txt'
        // Redirect them to loading.html
    }
  }
};

exports.handleRequest = function (request, response) {
  var requestPath = url.parse(request.url).path;
  var method = request.method;

  if ( routes[requestPath] && routes[requestPath][method] ) {
    routes[requestPath][method](request, response);
  } else {
    response.writeHead(404);
    response.end('404 - Invalid Path');
  }

};
