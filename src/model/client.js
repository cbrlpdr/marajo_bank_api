const mongoose = require('../database/mongo');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;