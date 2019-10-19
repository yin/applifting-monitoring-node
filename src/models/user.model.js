const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: {
            // TODO yin: RFC validation specs
            validator: (email) => /^([\w-\.]+@([\w-]+\.)+[\w-])?$/.test(email.text),
            message: (email) => `String '${email}' is not a valid email`
        },
    },
    accessToken: {
        type: String,
        validate: {
            // TODO yin: RFC validation specs
            validator: (token) =>
                /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/.test(token),
            message: (token) => `Invalid access-token: '${token}'`
        }
    },
});

module.exports = mongoose.Model('User', UserSchema);
