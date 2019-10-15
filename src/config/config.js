const config = {
    debug: {
        mongoose: true
    },
    mongoose: {
        host: process.env.MONGO_HOST || "mongodb://localhost/odmp"
    },
    http: {
        port: process.env.HTTP_PORT || 3000
    },
};

module.exports = config;
