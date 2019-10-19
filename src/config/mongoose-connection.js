const mongooseConnection = require('mongoose');
const config = require('./config');

mongooseConnection.connect(config.mongoose.host, { keepAlive: 1, useNewUrlParser: true })
    .then(() => {
        console.log("Mongo connection established");
    })
    .catch(() => {
        // TODO yin: This causes unhandled promise rejection. Handle startup errors comprehensively.
        //      Export the promise from the module.
        throw new Error('Unable to connect to database');
    });

if (config.debug.mongoose) {
    mongooseConnection.set('debug', (collectionName, method, query, doc) => {
        console.log(`${collectionName}.${method}`, query, doc);
    });
}
