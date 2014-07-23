## Using express to create a web application

### Defining the application package

In an empty folder, create a `package.json` to describe the name of your application, and the way to run the application:

file: `package.json`

```javascript
{
    "name": "myapp",
    "private": true,
    "main": "server.js"
}
```

### Creating express application

To create a webserver using express, you have to install the express module since it is not a core module:

```bash
npm install express --save
```

Then you can simply create the app and define on which port the app will listen for traffic:

file: `server.js`

```javascript
var express = require('express');
var app     = express();
app.listen(3000);
```

_note: By running `node server.js` or `npm start`, the application will run. Keep in mind that `npm start` will rely on `package.json` definition to execute the script defined thru `main`._

### Express Routes

Routes should be defined using `app.route('<url>')`, which returns a route object, this object allow you to define the listener for each of the supported HTTP Methods:

```javascript
app.route('/photos/:city').get(function (req, res, next) {
    res.send('sending this text to client.');
});
```

_note: the listener is a standard middleware that receive a request object, a response object, and the next callback in case of errors or skip._

### Middleware

Middleware are plugins for a HTTP server written in nodejs. Express uses connect under the hood, allowing you to use any connect middleware. Here is a list of some of the most popular middleware out there:

https://github.com/senchalabs/connect#middleware

To use a middleware like this:

```javascript
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));
```

You can also use it as listeners for a route method as illustrated in the previous example.

### Express Views

Express supports almost every template engine out there. Here is a compilation of some of the most popular engines:

 * ATPL: https://github.com/soywiz/atpl.js
 * Dust: https://github.com/akdubya/dustjs
 * ECO: https://github.com/sstephenson/eco
 * ECT: https://github.com/baryshev/ect
 * EJS: https://github.com/visionmedia/ejs
 * HAML: https://github.com/visionmedia/haml.js
 * HAML-Coffee: https://github.com/9elements/haml-coffee
 * Handlebars: https://github.com/ericf/express3-handlebars
 * Hogan: https://github.com/twitter/hogan.js
 * Jazz: https://github.com/shinetech/jazz
 * JQTPL: https://github.com/kof/node-jqtpl
 * JUST: https://github.com/baryshev/just
 * Liquor: https://github.com/chjj/liquor
 * Mustache: https://github.com/janl/mustache.js
 * QEJS: https://github.com/jepso/QEJS
 * Swig: https://github.com/paularmstrong/swig
 * Templayed: http://archan937.github.com/templayed.js/
 * Toffee: https://github.com/malgorithms/toffee
 * Underscore: https://github.com/documentcloud/underscore
 * Walrus: https://github.com/jeremyruppel/walrus
 * Whiskers: https://github.com/gsf/whiskers.js/tree/

Here is how to configure your express app to use a particular engine:

```javascript
app.set('views', './path/to/views');
app.set('view engine', '<engine-name>');
app.engine('<engine-name>', engineObj);
```

Once the engine is in place, you should be able to render any view localed within the folder designed by `views` setting (which defaults to `./views/`), e.g:

```javascript
app.route('/').get(function (req, res, next) {
    res.render('home');
});
```

### YQL

YQL (Yahoo Query Language) is an expressive SQL-like language that lets you query, filter, and join data across Web services. It provides access to most open web services out there by abstracting those APIs under a JSON API that accepts SQL-like queries.

More details here: https://developer.yahoo.com/yql/

These are some of the APIs we plan to use:

* [photo info by id][]
* [search photos by city name][]

_note: you need to follow the steps to get a personal api key._

[search photos by city name]: https://developer.yahoo.com/yql/console/#h=select+*+from+flickr.photos.search+where+woe_id+in+(select+woeid+from+geo.places+where+text%3D%22sunnyvale%2C+usa%22+limit+1)+AND+api_key+%3D+0984607e2222db7a1be6a5692741ca08+limit+9
[photo info by id]: https://developer.yahoo.com/yql/console/?_uiFocus=flickr&q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22true%22%20and%20text%3D%22london%2CUK%22%20and%20api_key%3D%2292bd0de55a63046155c09f1a06876875%22%3B#h=select+*+from+flickr.photos.info+where+photo_id%3D'2186714153'

### HTTP Client to call YQL from nodejs

The [request][] npm module provides a nice sugar to make calls to the different APIs, provide a wide range of configuration options and simplicity. Here is an example:

```javascript
request('https://query.yahooapis.com/v1/public/yql', {
    // adding querystring arguments to the API Url
    qs: {
        q: myQuery,
        format: 'json'
    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body));
    }
    // error control is needed
});
```

[request]: https://github.com/mikeal/request

### Serving static files with express

Express provides a middleware specialized in serving a folder structure as static assets. Here is an example:

```javascript
app.use('/css', express.static(__dirname + '/path/to/css/'));
```

In this case, any file within the folder `path/to/css/` will be accessible via HTTP thru a url like this `http://localhost:3000/css/foo/bar.css`.

## Exercises

First, clone and install the demo app that is meant to be improved:

```bash
git clone https://github.com/caridy/miami-node-js-demo-app.git
cd miami-nodejs-js-demo-app/
npm install
npm start
```

#### Tasks:

> __Abstract the YQL routine to be shared between multiple routes.__

_note: make a module that exports the YQL routine, receiving a query and a callback function._

> __Define rules that will prevent attackers to crash your server.__

_note: define a middleware that verifies the photo `id` as a numeric value (e.g.: `^[0-9]+`), or throw a 404._

> __Improve the list of available cities in the homepage.__

_note: read the names of the cities from disk, or from an API._
