const RestFactory = require('../services/routing/mongo-collection-rest.router-factory');
const MonitoredEndpoint = require('../models/monitored-endpoint.model');

module.exports = RestFactory(MonitoredEndpoint);
