const expect = require('chai').expect
const request = require('request')

describe("User API", function () {
    const url = "http://localhost:3000";

    // REST List
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

    // TODO yin: REST Create and Update require a MonitoredResult altready in the DB. This is not required for this excercise.
});
