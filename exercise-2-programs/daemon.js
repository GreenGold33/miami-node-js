function beepAndWait () {
    console.log('> beep');
    setTimeout(beepAndWait, 1000);
}

console.log('Starting Daemon...');
beepAndWait();
