const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

const app = express();

const port = config.http.port;

require('./config/mongoose-connection');

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/plain' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    return next();
});

app.get('*', (req, res) => {
    res.status(400).end('No content');
});

app.use((err, req, res, next) => {
    res.status(400).send({error: err});
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});

console.log("Application Starting...");
