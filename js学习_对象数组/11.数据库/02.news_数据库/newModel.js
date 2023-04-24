const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String
});

module.exports = mongoose.model('news', schema);
