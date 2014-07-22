# Running programs with nodejs

nodejs can execute javascript programs, but not all javascript programs will run in node. It is important to understand what is available, and what is not in the nodejs "runtime".

## Examples

_note: to execute a program with nodejs, just type `$ node ./path/to/program.js` in your terminal._

### Math Operation

program: `math-operation.js`

```javascript
1 + 2;
```

```bash
node exercise-2-programs/math-operation.js
```

_note: it is a program without output, and it finishes immediately._

### Logging messages

program: `math-operation.js`

```javascript
console.log('ironhack workshop!');
console.log('date: ' + new Date());
```

```bash
node exercise-2-programs/console-message.js
```

_note: it logs two messages in the console, and it finishes immediately after._

### Event loop

program: `event-loop.js`

```javascript
console.log('> one');

setTimeout(function () {
    console.log('> two');
}, 1000);

console.log('> three');
```

```bash
node exercise-2-programs/event-loop.js
```

_note: the output will be `> one > three > two` due to the async nature of javascript. the first pass on the program will not end after the last line of the program gets executed because there is a pending operation that was added into the event loop to be executed in about 1000ms. The programs ends when the event loop is empty._

### Daemon

program: `daemon.js`

```javascript
function beepAndWait () {
    console.log('> beep');
    setTimeout(beepAndWait, 1000);
}

console.log('Starting Daemon...');
beepAndWait();
```

```bash
node exercise-2-programs/daemon.js
```

_note: a function called `beepAndWait()` is defined, and eventually executed. this function will log a message in the console, and will add a new event in the event loop to execute itself after 1000ms. this program never ends because the event loop will never be empty. to interrupt the program, use `Ctrl-C`._
