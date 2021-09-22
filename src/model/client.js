const mongoose = require('../database/mongo');
const bcrypt = require('bcryptjs');


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
    cpf: {
        type: String,
        unique: true,
        require: true
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

ClientSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

ClientSchema.index({ cpf: 1, email: 1 }, { unique: true});
const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;