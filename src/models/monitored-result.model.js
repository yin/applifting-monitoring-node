const mongoose = require('mongoose');
const MonitoredEndpoint = require('./user.model');

const MonitoringResult = new mongoose.Schema({
    checked: {
        type: Date,
        default: Date.now(),
        index: true,
    },
    httpStatus: {
        type: Integer,
        required: true,
    },
    payload: {
        type: String,
    },
    monitoredEndpointId: {
        type: MonitoredEndpoint,
        required: true,
    }
});

module.exports = mongoose.Model('MonitoredEndpoints', MonitoredEndpoint);
