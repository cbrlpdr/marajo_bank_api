const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/marajo'
);
mongoose.Promise = global.Promise;

module.exports = mongoose;