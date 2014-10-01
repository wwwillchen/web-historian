var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // ROUTER
  //  POST request - with URL in the body
  //  GET request - static files
  //
  //  ROUTER
  //  /
  //  /archive/
  var routes = {
    '/': {
      'GET': function(request, response){
        // Serve the index.html
      }
    },
    '/submit': {
      'POST': function(request, response){
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

  res.end('hello world');
  // res.end(archive.paths.list);
  //

  //
  //
  //
  //
};
