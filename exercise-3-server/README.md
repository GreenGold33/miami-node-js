# Serving HTTP traffic with nodejs

## Basic HTTP server

program: `simple-server.js`

```javascript
var http = require('http');
var server = http.createServer(function (req, res) {
    console.log('> route: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

});
server.listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
```

```bash
node exercise-3-server/simple-server.js
```

## Modules

### Core modules

nodejs ships with few core modules, which are accessible by `require()`. E.g.:

```javascript
var fs = require('fs');
var path = require('path');
```

The core modules are defined in node's source: https://github.com/joyent/node/tree/master/lib

Most of them are documented here:  http://nodejs.org/api/

### 3rd party modules

You can install 3rd party modules in your application using NPM (package manager for node).

You can search for available modules here: http://npmjs.org/

In your application folder, you can use:

```bash
npm install <module-name>
```

It will install the module locally, making it accessible for your application only. If you add the option `--save`, and it will save the new dependency in `package.json` to facilitate the installation in other systems.

### Custom modules

You can write your own modules, and requiring them in your program:

module: foo/bar.js
```javascript
module.exports = function () {
    console.log('yay!');
}
```

You can require that module by doing:

```javascript
var modFn = require('./foo/bar.js');
modFn();
```

Module can export functions, object,  numbers, strings, etc.

Details about the use of modules:
http://nodejs.org/api/modules.html#modules_modules

## Exercise

__Write a http server that uses a custom module that exports the request handler, use a 3rd party module to complement the program in any way you like.__

program: `server.js`

```javascript
var http = require('http');
var requestHandler = require('./request-handler.js');

http.createServer(requestHandler).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
```

Module: `request-handler.js`

```javascript
module.exports = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

};
```

```bash
node exercise-3-server/server.js
```

_note: `start.js` requires a module that exports the http server instance, and calls listen on it._
