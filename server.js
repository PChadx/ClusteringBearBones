const express = require('express');

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
    delay(4000);
    res.send(`Ding Ding Ding | Process id: ${process.pid}`);
});

app.listen(3000);


