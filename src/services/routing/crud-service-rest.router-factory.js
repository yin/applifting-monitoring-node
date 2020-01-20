const router = require('express').Router();

function createRestEndpoint(crudService) {

    // REST List
    router.get('/', function (req, res) {
        crudService.list()
            .then(collection => {
                res.status(200).json(collection);
            })
            .catch(error => {
                console.log('Unable to load collection:', error);
                res.status(500).json({error: error, message: 'Unable to load collection'});
            });
    });

    // REST Read
    router.get('/:id', function (req, res) {
        let id = req.params.id;
        crudService.read(id)
            .then(document => {
                res.status(200).json(document);
            })
            .catch(error => {
                console.log(`Unable to load document id=${req.params.id}`, error);
                res.status(500).json({error: error, message: `Unable to load document id=${req.params.id}`});
            });
    });

    // REST Create
    router.post('/', function (req, res) {
        const payload = req.body;
        delete payload._id;
        crudService.create(payload)
            .then(newDocument => {
                res.status(200).json(newDocument);
            })
            .catch(error => {
                console.log('Unable to create new document', error);
                res.status(500).json({error: error, message: 'Unable to create new document'});
            });
    });

    // REST Update
    router.put('/:id', function (req, res) {
        let id = req.params.id;
        let payload = req.body;
        crudService.update(id, payload)
            .then(document => {
                res.status(200).json(document);
            })
            .catch(error => {
                console.error(`Unable to update document id=${req.params.id}`, error);
                res.status(500).json({error: error, message: `Unable to update document id=${req.params.id}`});
            });
    });

    // REST Delete
    router.delete('/:id', function (req, res) {
        let id = req.params.id;
        crudService.remove(id)
            .then(document => {
                return res.status(200).json(document);
            })
            .catch(error => {
                console.error(`Unable to delete document id=${req.params.id}`, error);
                res.status(500).json({error: error, message: `Unable to delete document id=${req.params.id}`});
            });
    });

    return router;
}

module.exports = createRestEndpoint;
