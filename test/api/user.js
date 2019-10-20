const expect = require('chai').expect
const request = require('request')

// TODO yin: These tests are not FIRST (see "test are FIRST " on google), because they are no I-independent:
//  We are using the same DB for each test. The order of test execution might change the behaviour between test runs.
describe("User API", function () {
    const url = "http://localhost:3000";

    // REST List
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

    // REST Create
    it("the endpoint returns http status 500 on POST / without data", function (done) {
        request(
            {
                url: url + '/user',
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
                url: url + '/user',
                method: 'POST',
                json: { userName: 'I am X', email: 'iam@am.x' }
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                expect(resp.statusCode).to.equal(200);
                // TODO yin: Assert on correct error response
                expect(body.userName).to.equal('I am X');
                expect(body.email).to.equal('iam@am.x');
                expect(body._id).to.be.not.null;
                done();
            })
    });

    // REST Read
    // TODO yin: This is only the happy-path, solved test independence and write negative tests.
    it("The user payload can be read after writing", function (done) {
        request(
            {
                url: url + '/user',
                method: 'POST',
                json: { userName: 'to-read', email: 'to-read@am.x' }
            },
            function (err, resp, body) {
                if (err) {
                    done(err);
                }
                const id = body._id;
                expect(resp.statusCode, 'Writing should succeed').to.equal(200);

                request(
                    {
                        url: url + '/user/' + id,
                        method: 'GET'
                    },
                    function (err, resp, body) {
                        if (err) {
                            done(err);
                        }
                        expect(resp.statusCode, 'Reading should succeed').to.equal(200);
                        // TODO yin: Why I don't get parsed response for application/json content-type?
                        expect(JSON.parse(body).userName).to.equal('to-read');
                        expect(JSON.parse(body).email).to.equal('to-read@am.x');
                        expect(JSON.parse(body)._id).to.be.equal(id);
                        done();
                    })
            })
    });

    // TODO yin: REST Update and Delete. Not really important to finishing the excerciese at this moment in time...
});
