# Serving HTTP traffic with nodejs

## Basic HTTP server

program: `math-operation.js`

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
```

```bash
node exercise-3-server/server.js
```

## Modules

nodejs ships with few core modules, which are accessible by `require()`. E.g.:

```javascript
var fs = require('fs');
var path = require('path');
```

The core modules are defined in node's source: https://github.com/joyent/node/tree/master/lib

Most of them are documented here:  http://nodejs.org/api/

#### Custom modules

You can write your own modules, and requiring them using `require('path/to/file.js');`, which is very similar to `include_once('/path/to/file.php');` in PHP.

Details about the use of modules:
http://nodejs.org/api/modules.html#modules_modules

#### 3rd party modules

You can install 3rd party modules in your application using NPM.

You can search for available modules here: npmjs.org

In your application folder, you can use:

```bash
npm install <module-name> --save
```

It will install the module locally, making it accessible for your application only, and it will save the new dependency in `package.json` to facilitate the installation in other systems.

#### Examples

```javascript
// load modules to expand nodejs capabilities
var fs = require('fs');
var path = require('path');

// compute the filesystem path for the file to read
var file = path.join(__dirname, 'modules.js');
fs.readFile(file, 'utf8', function (err, content) {

    // very common error control pattern
    if (err) {
        console.error('Ops, something went wrong: ' + err);
        return; // breaks
    }

    // use the content of the file in any way you want
    console.log(content);
});
```

#### `__dirname` && `path.join()`

This is equivalent to `dirname(__FILE__) . '/foo.php');` in PHP, the difference is that by using `path.join()` it works in windows and unix filesystems. The `path` module is smart enough to do the right thing with `/` and `\` depending on the "runtime".

More details about `path` module here: http://nodejs.org/api/path.html
