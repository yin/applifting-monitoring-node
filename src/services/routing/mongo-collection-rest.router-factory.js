const router = require('express').Router();

function createEndpointForModel(model) {

    // REST List
    router.get('/', function (req, res) {
        model.find()
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
        model.findById(req.params.id)
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
        const t = req.body;
        delete t._id;
        let document = new model(req.body);
        document.save()
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
        model.findByIdAndUpdate({_id: id}, req.body, {new: true})
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
        model.findByIdAndDelete({_id: req.params.id})
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

modules.exports = createEndpointForModel;
