var httpHelpers = require('./http-helpers');
var url = require('url');
var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var querystring = require('querystring');
// require more modules/folders here!

var routes = {
  '/': {
    'GET': function(request, response){
      httpHelpers.serveAssets(response, './public/index.html');
    }
  },
  '/styles.css': {
    'GET': function(request, response){
      httpHelpers.serveAssets(response, './public/styles.css');
    }
  },
  '/submit': {
    'POST': function(request, response){
      // Collect the data
      var postData = '';
      request.on('data', function(chunk){
        postData += chunk;
      });
      request.on('end', function(){
        response.writeHead(200, httpHelpers.headers);
        if (archive.isURLArchived(postData)){
          var requestedURL = querystring.parse(postData).url;

          fs.readFile('../archives/sites/' + requestedURL, {'encoding': 'UTF-8'}, function(error, data){
            response.writeHead(200, headers);
            // response.write(data);
            response.end('hello google breaks');
            console.log(response);
          });

          // httpHelpers.serveAssets(response, '../archives/sites/' + requestedURL);
        } else {
          if(true){
          } else {
          }
        }
        response.end();
      });

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
  console.log('url', request.url, 'method', request.method);
  var requestPath = url.parse(request.url).path;
  var method = request.method;

  if ( routes[requestPath] && routes[requestPath][method] ) {
    routes[requestPath][method](request, response);
  } else {
    response.writeHead(404);
    response.end('404 - Invalid Path');
  }
};
