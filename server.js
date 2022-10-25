// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");
   response.write("<h2>Jaden Schultz - z52g614</h2>");
   response.write("<p>Running node server on port 3033</p>");        
   response.end();
}).listen(3033);