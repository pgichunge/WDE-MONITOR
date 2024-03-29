let http = require('http');
let url = require('url');

// A function to wrap our server functionality so that we can export it
let start = function(route, handle){

   function onRequest(request, response){
       // Extracting the pathname from the url requested
       let pathname = url.parse(request.url).pathname
       console.log("Request for " + pathname + " has been received.")
      
       // Inject the response object into the route function
       route(handle, pathname, response);

   }
  
   let PORT = process.env.PORT || 8000;

   http.createServer(onRequest).listen(PORT);
  
   console.log(`Server has started on Port: ${PORT}`);
}

exports.start = start;