const expect = require('chai').expect
const request = require('request')

describe("User API", function () {
    const url = "http://localhost:3000";

    // REST List
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

    // REST Create
    it("the endpoint returns http status 500 on POST / without data", function (done) {
        request(
            {
                url: url + '/monitored-endpoint',
                method: 'POST'
            },
            function (err, resp, body) {
                if (err) {
                    done(err)
                }
                expect(resp.statusCode).to.equal(500);
                // TODO yin: Assert on correct error response.
                //expect(body).to.equal("")
                done();
            })
    });

    it("the endpoint returns http status 200 on POST / with a valid user payload", function (done) {
        request(
            {
                url: url + '/monitored-endpoint',
                method: 'POST',
                json: { name: 'An Endpoint', url: 'https://localhost:3000/' }
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                // TODO yin: Assert on correct error response
                expect(body.name).to.equal('An Endpoint');
                expect(body.url).to.equal('https://localhost:3000/');
                expect(body._id).to.be.not.null;
                done();
            })
    });

    // REST Read
    // TODO yin: This is only the happy-path, solved test independence and write negative tests.
    it("The MonitoredEndpoint payload can be read after writing", function (done) {
        request(
            {
                url: url + '/monitored-endpoint',
                method: 'POST',
                json: { userName: 'to-read', url: 'to-read' }
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                const id = body._id;
                expect(resp.statusCode, 'Writing should succeed').to.equal(200);

                request(
                    {
                        url: url + '/monitored-endpoint/' + id,
                        method: 'GET'
                    },
                    function (err, resp, body) {
                        if (err) {
                            done(err);
                        }
                        expect(resp.statusCode, 'Reading should succeed').to.equal(200);
                        // TODO yin: Why I don't get parsed response for application/json content-type?
                        expect(JSON.parse(body).name).to.equal('to-read');
                        expect(JSON.parse(body).url).to.equal('to-read');
                        expect(JSON.parse(body)._id).to.be.equal(id);
                        done();
                    })
            })
    });

    // TODO yin: REST Update and Delete. Not really important to finishing the excerciese at this moment in time...
});
