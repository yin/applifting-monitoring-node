const mongoose = require('mongoose');
const User = require('./user.model');

const MonitoredEndpoint = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true },
    },
    url: {
        type: String,
        required: true,
        index: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    lastCheck: {
        type: Date
    },
    monitoringInterval: {
        type: Number
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.Model('MonitoredEndpoints', MonitoredEndpoint);
