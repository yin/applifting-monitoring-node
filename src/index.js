const express = require('express');
const config = require('./config/config');

const app = express();

const port = config.http.port;

require('./config/mongoose-connection');

app.get('*', (req, res) => {
    res.end('Hello');
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});

console.log("Application Starting...");
