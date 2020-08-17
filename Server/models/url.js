const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const URlshortSchema = new Schema({
    originalUrl: String,
    urlCode: String,
    shortUrl: String
})

module.exports = mongoose.model('URLShort',URlshortSchema);
