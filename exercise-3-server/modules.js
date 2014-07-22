// load modules to expand nodejs capabilities
var fs = require('fs');
var path = require('path');

// compute the filesystem path for the file to read
var file = path.join(__dirname, './modules.js');
fs.readFile(file, 'utf8', function (err, content) {

    // very common error control pattern
    if (err) {
        console.error('Ops, something went wrong: ' + err);
        return; // breaks
    }

    // use the content of the file in any way you want
    console.log(content);
});
