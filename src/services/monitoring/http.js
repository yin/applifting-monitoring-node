const request = require('request-promise-native');

function createHttpMonitor(url, interval, callback) {
    const perform = async () => {
        const resp = await request({ url: url });
        callback(resp.statusCode, resp.body);
    };
    return {
        start: async () => { this._id = setInterval(perform, interval * 1000) },
        stop: async () => { if(this._id) clearInterval(this._id); }
    };
}

module.exports = createHttpMonitor;