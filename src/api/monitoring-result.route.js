const RestFactory = require('../services/routing/mongo-collection-rest.router-factory');
const MonitoringResult = require('../models/monitoring-result.model');

module.exports = RestFactory(MonitoringResult);
