const RestFactory = require('../services/routing/crud-service-rest.router-factory');
const MonitoredEndpoint = require('../models/monitored-endpoint.model');

module.exports = RestFactory(MonitoredEndpoint);
