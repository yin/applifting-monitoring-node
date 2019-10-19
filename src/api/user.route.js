const router = require('express').Router();
const User = require('../models/user.model');

// REST List
router.get('/', function (req, res) {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log('Unable to load users', error);
            res.status(500).json({ error: error, message: 'Unable to load users' });
        });
});

// REST Read
router.get('/:id', function (req, res) {
    User.findById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            console.log(`Unable to load user id=${req.params.id}`, error);
            res.status(500).json({ error: error, message: `Unable to load user id=${req.params.id}` });
        });
});

// REST Create
router.post('/', function (req, res) {
    const t = req.body;
    delete t._id;
    let user = new User(req.body);
    user.save()
        .then(newUser => {
            res.status(200).json(newUser);
        })
        .catch(error => {
            console.log('Unable to create new user', error);
            res.status(500).json({ error: error, message: 'Unable to create new user' });
        });
});

// REST Update
router.put('/:id', function (req, res) {
    let id = req.params.id;
    User.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            console.error(`Unable to update user id=${req.params.id}`, error);
            res.status(500).json({ error: error, message: `Unable to update user id=${req.params.id}` });
        });
});

// REST Delete
router.delete('/:id', function (req, res) {
    User.findByIdAndDelete({ _id: req.params.id })
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(error => {
            console.error(`Unable to delete user id=${req.params.id}`, error);
            res.status(500).json({ error: error, message: `Unable to delete user id=${req.params.id}` });
        });
});

module.exports = router;
