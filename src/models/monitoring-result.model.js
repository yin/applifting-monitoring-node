const mongoose = require('mongoose');

const MonitoringResult = new mongoose.Schema({
    checked: {
        type: Date,
        default: Date.now(),
        index: true,
    },
    httpStatus: {
        type: Number,
        validate: Number.isInteger,
        required: true,
    },
    payload: {
        type: String,
    },
    monitoredEndpointId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'MonitoredEndpoints',
        required: true,
    }
});

module.exports = mongoose.model('MonitoringResults', MonitoringResult);
