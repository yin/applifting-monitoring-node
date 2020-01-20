const RestFactory = require('../services/routing/crud-service-rest.router-factory');
const MonitoringResult = require('../models/monitoring-result.model');

module.exports = RestFactory(MonitoringResult);
