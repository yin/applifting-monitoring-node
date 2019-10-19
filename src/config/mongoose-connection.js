const mongoose_connection = require('mongoose');
const config = require ('./config');

mongoose_connection.connect(config.mongoose.host, { keepAlive: 1 })
    .then(() => {
        console.log("Mongo connection established");
    }).catch(() => {
        throw new Error('Unable to connect to database');
    });

if (config.debug.mongoose) {
    mongoose_connection.set('debug', (collectionName, method, query, doc) => {
        console.log(`${collectionName}.${method}`, query, doc);
    });
}
