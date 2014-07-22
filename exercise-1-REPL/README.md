## REPL = Read-Eval-Print-Loop

Since nodejs uses Google's V8 engine to interpret and execute javascript code, the nodejs console should be pretty similar to Chrome Devtool Console.

## Examples

* to open the nodejs console, just type `$ node` in your terminal.

* to open the browser console, go to Chrome's menu: View > Developer > Javascript Console.

The following examples can be executed in both consoles:

### Math Operations

```javascript
1 + 3
```

### Logging messages

```javascript
console.log("hey, log this!");
```

_note: explain the log message is followed by an `undefined` before returning the control to the user._

### For loops

```javascript
for (i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Expensive operations in console

Define a function to compute primes:

```javascript
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
```

Use the defined function to output the primes smalled than 10 millions.

_note: explain how the expensive operation holds the control until the execution finishes._

### Asynchronous calls

You can use `setTimeout`, `setInterval`, and any other loop control mechanism will work the same. For example:

```javascript
setTimeout(function () {
    console.log('done');
}, 10000);
1 + 2;
```

In the previous example, the result of the numeric operation will be log, and eventually the `done` message will appear in the console.

### Major differences

* most javascript declarative syntax is supported in both "runtimes". (e.g.: `typeof foo;`)
* imperative forms differences are much more complicated to assess because it depends on the capabilities of the "runtime". In most cases, if it is part of the javascript specs, it should be available in both "runtimes". (e.g.: `Array.isArray();`)

_note: with the exception of new ES6 features that might be released in V8 very recently, it takes few cycles to get nodejs updated._

__Exercise: find at least 3 APIs on each "runtime" that are unique.__

* nodejs: `process.env`, `global` and `require()`.
* chrome: `document.addEventListener()`, `window` and `new Promise()`

## Links

More about nodejs REPL: http://nodejs.org/api/repl.html
