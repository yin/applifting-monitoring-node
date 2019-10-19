const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        index: { unique: true },
        required: true,
    },
    email: {
        type: String,
        index: { unique: true },
        required: true,
        validate: /^[\w-\.]+@([\w-]+\.)*[\w-]+$/,
    },
    accessToken: {
        type: String,
        index: {
            unique: true,
            partialFilterExpression: { accessToken: { $exists: true } },
        },
        // TODO yin: RFC validation specs
        validate: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
    },
});

module.exports = mongoose.model('User', UserSchema);
