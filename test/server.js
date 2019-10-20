const expect = require('chai').expect
const request = require('request')

describe("Server endpoints", function () {
    const url = "http://localhost:3000";

    it("the Users API route is defined in src/api folder", function () {
        require('../src/api/user.route.js');
    });

    it("the MonitoredEndpoint route is defined in src/api folder", function () {
        require('../src/api/monitored-endpoint.route');
    });

    it("the MonitoringResult route is defined in src/api folder", function () {
        require('../src/api/monitoring-result.route.js');
    });

    // Test if User API is accessible.
    it("the endpoint returns http status 200 on GET /user", function (done) {
        request(
            {
                url: url + '/user'
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                done();
            })
    });

    // Test if User API is accessible.
    it("the endpoint returns http status 200 on GET /user", function (done) {
        request(
            {
                url: url + '/user'
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                done();
            })
    });

    // Test if MonitoredEndpoint API is accessible.
    it("the endpoint returns http status 200 on GET /monitored-endpoint", function (done) {
        request(
            {
                url: url + '/monitored-endpoint'
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                done();
            })
    });

    // Test if MonitoringResult API is accessible
    it("the endpoint returns http status 200 on GET /monitoring-result", function (done) {
        request(
            {
                url: url + '/monitoring-result'
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                done();
            })
    });

});
