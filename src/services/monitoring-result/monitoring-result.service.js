function createHttpResultWriter(endpointId, crudService) {
    return function writeHttpResponse(httpStatusCode, httpPayload) {
        crudService.create({
            httpStatusCode: httpStatusCode,
            httpPayload: httpPayload,
            endpointId: endpointId,
        })
    }
}

module.exports = createHttpResultWriter;
