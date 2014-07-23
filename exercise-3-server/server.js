var http = require('http');
var requestHandler = require('./request-handler.js');

http.createServer(requestHandler).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
