const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime <  duration  ) {
        // do nothing just wait.
        // this goes directly in the event loop blocking everything
    }
}

app.get('/',(req, res) => {
    res.send(`Performance example  | Process id: ${process.pid}`);
});
//JSON stringify
//[].sort
//JSON.parse()
// node crypto module designed to execute slowly
//all of these are blocking
// threadpool => or os for network or file work


app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding Ding Ding | Process id: ${process.pid}`);
});

if (cluster.isMaster) {
    //master controls workers
    console.log(`Master is running  | Process id: ${process.pid}`);
    
    //let's take the number of logical cores of the CPU
    // we need 1 worker / logical core
    const NUM_WORKERS= os.cpus().length;
    
    //let's spawn n workers, where n === NUM_WORKERS 
    for (let i = 0; i< NUM_WORKERS; i++) {
        
        cluster.fork();
    
    }
} else {
    //we do work here
    console.log(`Worker has been started | Process id: ${process.pid}`)
    app.listen(3000);
}